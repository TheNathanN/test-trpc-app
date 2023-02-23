import "@/styles/globals.css"
import type { AppType } from "next/app"
import { trpc } from "../utils/trpc"
import { SessionProvider } from "next-auth/react"
import { Session } from "next-auth"

const MyApp: AppType<{
  session: Session
}> = ({ Component, pageProps }) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default trpc.withTRPC(MyApp)
