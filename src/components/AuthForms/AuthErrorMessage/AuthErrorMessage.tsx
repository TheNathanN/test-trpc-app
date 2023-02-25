import styles from "./AuthErrorMessage.module.css"
import classNames from "classnames"

export type AuthErrorMessagesPropsType = {
  errorMessage?: string
  touched?: boolean
}

export default function AuthErrorMessages({
  errorMessage,
  touched,
}: AuthErrorMessagesPropsType) {
  return errorMessage && touched ? (
    <div className={classNames(styles.error)}>{errorMessage}</div>
  ) : null
}
