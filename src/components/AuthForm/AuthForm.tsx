import styles from "./AuthForm.module.css"
import classNames from "classnames"
import { useState } from "react"
import SignInForm from "../SignInForm"
import SignUpForm from "../SignUpForm"

export default function AuthForm() {
  const [isSignIn, setIsSignIn] = useState(true)

  return (
    <div className={classNames(styles.container)}>
      <h1 className={classNames(styles.header)}>
        {isSignIn ? "Sign In" : "Sign Up"}
      </h1>

      <div className={classNames(styles["btn-container"])}>
        <button onClick={() => setIsSignIn(true)}>Sign In</button>
        <button onClick={() => setIsSignIn(false)}>Sign Up</button>
      </div>

      <div className={classNames(styles["form-container"])}>
        {isSignIn ? <SignInForm /> : <SignUpForm />}
      </div>
    </div>
  )
}
