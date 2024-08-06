import { useAuth } from "@/hooks"
import {BasicLayout} from "@/layouts/BasicLayout/BasicLayout"

export default function HomePage() {

  const {user} = useAuth()

  console.log(user)

  return (
    <BasicLayout>
      <h2>Estas en la home page</h2>
    </BasicLayout>
  )
}