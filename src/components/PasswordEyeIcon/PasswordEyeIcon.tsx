import styles from "./PasswordEyeIcon.module.css"
import classNames from "classnames"
import { Dispatch, SetStateAction } from "react"

export type PasswordEyeIconPropsType = {
  showPassword: boolean
  setShowPassword: Dispatch<SetStateAction<boolean>>
}

export default function PasswordEyeIcon({
  showPassword,
  setShowPassword,
}: PasswordEyeIconPropsType) {
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev)
  }
  return (
    <div className={classNames(styles.icon)} onClick={toggleShowPassword}>
      {showPassword ? (
        <i className="fa-solid fa-eye-slash"></i>
      ) : (
        <i className="fa-solid fa-eye"></i>
      )}
    </div>
  )
}
