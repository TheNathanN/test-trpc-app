import styles from "../AuthFormsStyles.module.css"
import classNames from "classnames"
import { Formik, useFormik } from "formik"
import { SignInSchema } from "@/utils/validationSchemas/signInValidation"

export default function SignInForm() {
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignInSchema}
        onSubmit={async (values) => {}}
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
                  type="password"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.password}
                  required
                />
              </div>
              {props.errors.password && props.touched.password ? (
                <div className={classNames(styles.error)}>
                  {props.errors.password}
                </div>
              ) : null}
              <button type="submit">Sign In</button>
            </form>
          )
        }}
      </Formik>
    </>
  )
}
