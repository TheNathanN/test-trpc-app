import * as Yup from "yup"

export const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .min(2, "Must be longer than 2 characters")
    .max(100, "Must be shorter than 100 characters")
    .required("Required"),
  password: Yup.string()
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    )
    .required("Required"),
})
