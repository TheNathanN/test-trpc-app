import { CurrentUserType } from "@/types/currentUser.types"
import { create } from "zustand"

interface CurrentUserStore {
  currentUser: CurrentUserType
  setCurrentUser: (currentUser: CurrentUserType) => void
}

export const useCurrentUserStore = create<CurrentUserStore>((set) => ({
  currentUser: {
    id: "",
    email: "",
    username: "",
    image: "",
  },
  setCurrentUser: (currentUser: CurrentUserType) =>
    set(() => ({ currentUser })),
}))
