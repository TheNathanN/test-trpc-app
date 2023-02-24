import styles from "../AuthFormsStyles.module.css"
import classNames from "classnames"
import { useFormik } from "formik"

export default function SignInForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {},
    validate: (values) => {},
  })

  return (
    <>
      <form className={classNames(styles.form)} onSubmit={formik.handleSubmit}>
        <div className={classNames(styles["input-container"])}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            required
          />
        </div>
        <div className={classNames(styles["input-container"])}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </>
  )
}