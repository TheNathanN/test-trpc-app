import styles from "./AuthSubmitButton.module.css"
import classNames from "classnames"
import LoadingSpinner from "@/components/LoadingSpinner"

export type AuthSubmitButtonPropsType = {
  loading: boolean
  error: string | null
  type: "signIn" | "signUp"
  signUpSuccess?: boolean
}

export default function AuthSubmitButton({
  loading,
  error,
  signUpSuccess,
  type,
}: AuthSubmitButtonPropsType) {
  const label = type === "signUp" ? "Sign Up" : "Sign In"
  return (
    <>
      <button className={classNames(styles.button)} type="submit">
        {loading ? <LoadingSpinner color="black" width="100%" /> : label}
      </button>

      {error && <div className={classNames(styles.error)}>{error}</div>}
      {signUpSuccess && <div>Sign up was successful you may Sign In now</div>}
    </>
  )
}
