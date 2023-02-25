import styles from "../AuthFormsStyles.module.css"
import classNames from "classnames"
import { Formik } from "formik"
import { SignInSchema } from "@/utils/validationSchemas/signInValidation"
import { signIn } from "next-auth/react"
import { useRouter } from "next/router"
import { useState } from "react"
import LoadingSpinner from "@/components/LoadingSpinner"
import PasswordEyeIcon from "@/components/PasswordEyeIcon"

export default function SignInForm() {
  const router = useRouter()

  const [showPassword, setShowPassword] = useState(false)
  const [signInError, setSignInError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const onSubmit = async (values: { email: string; password: string }) => {
    setLoading(true)
    setSignInError(null)
    const { email, password } = values
    const status = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    })
    setLoading(false)
    if (status?.ok) router.push("/")
    else setSignInError("Invalid email or password")
  }

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignInSchema}
        onSubmit={onSubmit}
      >
        {(props) => {
          return (
            <form
              className={classNames(styles.form)}
              onSubmit={props.handleSubmit}
            >
              <div className={classNames(styles["input-container"])}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.email}
                  required
                />
              </div>
              {props.errors.email && props.touched.email ? (
                <div className={classNames(styles.error)}>
                  {props.errors.email}
                </div>
              ) : null}

              <div className={classNames(styles["input-container"])}>
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.password}
                  required
                />
                <PasswordEyeIcon
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                />
              </div>

              {props.errors.password && props.touched.password ? (
                <div className={classNames(styles.error)}>
                  {props.errors.password}
                </div>
              ) : null}

              <button className={classNames("btn")} type="submit">
                {loading ? <LoadingSpinner /> : "Sign In"}
              </button>

              {signInError && (
                <div className={classNames(styles.error)}>{signInError}</div>
              )}
            </form>
          )
        }}
      </Formik>
    </>
  )
}
