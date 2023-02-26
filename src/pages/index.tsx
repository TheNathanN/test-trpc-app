import BaseLayout from "@/layouts/BaseLayout"
import { useSession } from "next-auth/react"
import { trpc } from "@/utils/trpc.utils"
import HomeLayout from "@/layouts/HomeLayout"
import LoadingSpinner from "@/components/LoadingSpinner"

export default function IndexPage() {
  const { status, data } = useSession()

  const notSignedIn =
    status !== "loading" && !data && typeof window !== "undefined"

  if (notSignedIn) window.location.href = "/auth"

  const user = data?.user
  const userData = trpc.user.getUser.useQuery({ email: user?.email ?? "" })

  return (
    <BaseLayout>
      {!userData.data ? (
        <LoadingSpinner color="white" width="10%" />
      ) : (
        <HomeLayout userData={userData.data} />
      )}
    </BaseLayout>
  )
}
