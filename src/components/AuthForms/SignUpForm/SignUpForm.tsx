import { Formik } from "formik"
import { useMemo } from "react"
import { SignUpSchema } from "@/utils/validationSchemas/signUpValidation"
import { trpc } from "@/utils/trpc"
import AuthInput from "../AuthInput"
import AuthSubmitButton from "../AuthSubmitButton"

export default function SignUpForm() {
  const signUp = trpc.user.createUser.useMutation()

  const onSubmit = async (values: {
    email: string
    username: string
    password: string
    confirmPassword: string
  }) => {
    signUp.mutate({
      email: values.email,
      username: values.username,
      password: values.password,
    })
    values.email = ""
    values.password = ""
    values.username = ""
    values.confirmPassword = ""
  }

  const errorMessage = useMemo(
    () => signUp.error?.message ?? null,
    [signUp?.error]
  )

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
          const formInputsData = [
            {
              value: props.values.email,
              type: "email",
              name: "email",
              label: "Email",
              error: props.errors.email,
              touched: props.touched.email,
            },
            {
              value: props.values.username,
              type: "text",
              name: "username",
              label: "Username",
              error: props.errors.username,
              touched: props.touched.username,
            },
            {
              value: props.values.password,
              type: "password",
              name: "password",
              label: "Password",
              error: props.errors.password,
              touched: props.touched.password,
            },
            {
              value: props.values.confirmPassword,
              type: "password",
              name: "confirmPassword",
              label: "Confirm Password",
              error: props.errors.confirmPassword,
              touched: props.touched.confirmPassword,
            },
          ]

          return (
            <form onSubmit={props.handleSubmit}>
              {formInputsData.map((input) => (
                <AuthInput
                  {...input}
                  key={input.name}
                  handleChange={props.handleChange}
                  handleBlur={props.handleBlur}
                />
              ))}
              <AuthSubmitButton
                type="signUp"
                error={errorMessage}
                loading={signUp.isLoading}
                signUpSuccess={signUp.isSuccess}
              />
            </form>
          )
        }}
      </Formik>
    </>
  )
}
