import { RegisterForm } from "@/components/Auth/RegisterForm"
import { JoinLayout } from "@/layouts/JoinLayout"

export default function register() {
  return (
    <JoinLayout>
      <RegisterForm />
    </JoinLayout>
  )
}
