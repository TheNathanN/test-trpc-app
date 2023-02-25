import AuthForm from "@/layouts/AuthForm"
import BaseLayout from "@/layouts/BaseLayout"

export default function SignIn() {
  return (
    <BaseLayout title="Auth | TRPC Test App">
      <AuthForm />
    </BaseLayout>
  )
}
