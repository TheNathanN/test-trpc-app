import { router, procedure } from "../trpc"
import { z } from "zod"
import { PrismaClient } from "@prisma/client"
import { randomUUID } from "crypto"
import bcrypt from "bcrypt"

const prisma = new PrismaClient()

export const userRouter = router({
  createUser: procedure
    .input(
      z.object({
        email: z.string(),
        username: z.string(),
        password: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const { email, username, password } = input
      const emailFound = await prisma.user.findUnique({
        where: {
          email,
        },
      })
      if (emailFound) throw new Error("Email already exists")
      const usernameFound = await prisma.user.findUnique({
        where: {
          username,
        },
      })
      if (usernameFound) throw new Error("Username already exists")
      const hashedPassword = await bcrypt.hash(password, 10)
      const user = await prisma.user.create({
        data: {
          id: randomUUID(),
          email,
          username,
          password: hashedPassword,
        },
      })
      return user
    }),
  getUser: procedure
    .input(
      z.object({
        email: z.string(),
      })
    )
    .query(async ({ input }) => {
      const { email } = input
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
        select: {
          id: true,
          email: true,
          username: true,
          image: true,
        },
      })
      return user
    }),
})
