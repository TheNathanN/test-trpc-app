import styles from "../AuthFormsStyles.module.css"
import classNames from "classnames"
import { Formik } from "formik"
import { useState, useMemo } from "react"
import { SignUpSchema } from "@/utils/validationSchemas/signUpValidation"
import { trpc } from "@/utils/trpc"
import LoadingSpinner from "@/components/LoadingSpinner"
import PasswordEyeIcon from "@/components/PasswordEyeIcon"

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false)
  const signUp = trpc.user.createUser.useMutation()

  const onSubmit = async (values: {
    email: string
    username: string
    password: string
  }) => {
    signUp.mutate({
      email: values.email,
      username: values.username,
      password: values.password,
    })
  }

  const signUpMessage = useMemo(() => signUp.error?.message, [signUp?.error])

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          username: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={SignUpSchema}
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
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.username}
                  required
                />
              </div>

              {props.errors.username && props.touched.username ? (
                <div className={classNames(styles.error)}>
                  {props.errors.username}
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

              <div className={classNames(styles["input-container"])}>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.confirmPassword}
                  required
                />
                <PasswordEyeIcon
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                />
              </div>

              {props.errors.confirmPassword && props.touched.confirmPassword ? (
                <div className={classNames(styles.error)}>
                  {props.errors.confirmPassword}
                </div>
              ) : null}

              <button type="submit">
                {signUp.isLoading ? <LoadingSpinner /> : "Sign Up"}
              </button>

              {signUpMessage && (
                <div className={classNames(styles.error)}>{signUpMessage}</div>
              )}
            </form>
          )
        }}
      </Formik>
    </>
  )
}
