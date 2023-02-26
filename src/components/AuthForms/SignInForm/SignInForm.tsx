import { Formik } from "formik"
import { SignInSchema } from "@/utils/validationSchemas/signInValidation.utils"
import { signIn } from "next-auth/react"
import { useRouter } from "next/router"
import { useState } from "react"
import AuthInput from "../AuthInput"
import AuthSubmitButton from "../AuthSubmitButton"

export default function SignInForm() {
  const router = useRouter()

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
              value: props.values.password,
              type: "password",
              name: "password",
              label: "Password",
              error: props.errors.password,
              touched: props.touched.password,
            },
          ]

          return (
            <form onSubmit={props.handleSubmit}>
              {formInputsData.map((input) => (
                <AuthInput
                  {...input}
                  key={input.name}
                  handleBlur={props.handleBlur}
                  handleChange={props.handleChange}
                />
              ))}
              <AuthSubmitButton
                type="signIn"
                loading={loading}
                error={signInError}
              />
            </form>
          )
        }}
      </Formik>
    </>
  )
}
