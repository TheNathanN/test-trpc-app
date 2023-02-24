import styles from "./SignUpForm.module.css"
import classNames from "classnames"
import { useFormik } from "formik"

export default function SignUpForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (values) => {},
    validate: (values) => {},
  })

  return (
    <div className={classNames(styles.container)}>
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
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
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
        <div className={classNames(styles["input-container"])}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}
