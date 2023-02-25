import BaseLayout from "@/layouts/BaseLayout"
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/router"

export default function IndexPage() {
  const { status, data } = useSession()
  const router = useRouter()

  if (status !== "loading" && !data) router.push("/auth")

  if (!data) return <div></div>

  return (
    <BaseLayout>
      <div>
        <h1>TRPC TEST APP</h1>
        <button onClick={() => signOut()}>Sign Out</button>
        <div>
          <h1>Welcome to the App!</h1>
        </div>
      </div>
    </BaseLayout>
  )
}
