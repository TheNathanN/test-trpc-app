import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaClient } from "@prisma/client"
import * as bcrypt from "bcrypt"

const prisma = new PrismaClient()

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) return null

        const { email, password } = credentials

        const user: any = await prisma.user.findUnique({
          where: {
            email,
          },
        })

        if (user) {
          const isValid = await bcrypt.compare(password, user.password)
          if (isValid) {
            return user
          } else {
            return null
          }
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }: any) {
      if (user) token.id = user.id
      return token
    },
    async session({ session, user, token }: any) {
      if (token) session.id = token.id
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth",
  },
}

export default NextAuth(authOptions)
