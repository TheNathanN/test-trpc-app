import styles from "./AuthInput.module.css"
import classNames from "classnames"
import { ChangeEvent, FocusEvent, useState } from "react"
import AuthErrorMessage from "../AuthErrorMessage"
import PasswordEyeIcon from "@/components/PasswordEyeIcon"

export type AuthInputPropsType = {
  handleChange: {
    (e: ChangeEvent<any>): void
    <T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any>
      ? void
      : (e: string | ChangeEvent<any>) => void
  }
  handleBlur: {
    (e: FocusEvent<any, Element>): void
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void
  }
  value: string
  type: string
  name: string
  label: string
  error?: string
  touched?: boolean
}

export default function AuthInput({
  handleChange,
  handleBlur,
  value,
  type,
  name,
  label,
  error,
  touched,
}: AuthInputPropsType) {
  const [showPassword, setShowPassword] = useState(false)
  const passwordType = showPassword ? "text" : "password"

  return (
    <>
      <div className={classNames(styles["input-container"])}>
        <label htmlFor={name}>{label}</label>
        <input
          id={name}
          name={name}
          type={type === "password" ? passwordType : type}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          required
        />
        {type === "password" && (
          <PasswordEyeIcon
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        )}
      </div>

      <AuthErrorMessage errorMessage={error} touched={touched} />
    </>
  )
}
