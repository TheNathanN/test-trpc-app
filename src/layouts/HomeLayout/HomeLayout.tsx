import { useCurrentUserStore } from "@/stores/currentUserStore"
import { CurrentUserType } from "@/types/currentUser.types"
import { signOut } from "next-auth/react"
import { useEffect } from "react"

export type HomeLayoutPropsType = {
  userData: CurrentUserType
}

export default function HomeLayout({ userData }: HomeLayoutPropsType) {
  const currentUser = useCurrentUserStore((state: any) => state.currentUser)
  const setCurrentUser = useCurrentUserStore(
    (state: any) => state.setCurrentUser
  )

  useEffect(() => {
    setCurrentUser(userData)
  }, [userData, setCurrentUser])

  return (
    <>
      <h1>Welcome to the App {currentUser.username}!</h1>
      <button onClick={() => signOut()}>Sign Out</button>
    </>
  )
}
