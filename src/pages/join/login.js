import { LoginForm } from "@/components/Auth"
import { JoinLayout } from "@/layouts/JoinLayout"

export default function login() {
  return (
    <JoinLayout>
        <LoginForm />
    </JoinLayout>
  )
}
