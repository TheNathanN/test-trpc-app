import "@/styles/globals.css"
import type { AppType } from "next/app"
import { trpc } from "../utils/trpc.utils"
import { SessionProvider } from "next-auth/react"
import { Session } from "next-auth"
import { Oswald } from "@next/font/google"

const oswald = Oswald({ subsets: ["latin"] })

const MyApp: AppType<{
  session: Session
}> = ({ Component, pageProps }) => {
  return (
    <SessionProvider session={pageProps.session}>
      <main className={oswald.className}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  )
}

export default trpc.withTRPC(MyApp)
