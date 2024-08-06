import { useAuth } from "@/hooks"
import { BasicLayout } from "@/layouts"
import { Container, Tab } from "semantic-ui-react"
import { useRouter } from "next/router"
import { Search } from "@/components/Shared/Search"
import styles from "./admin.module.scss"
import { Product } from "@/components/Admin/Product"

export default function AdminPage() {
  const {isAdmin} = useAuth()
  const router = useRouter()

  if(!isAdmin) {
    router.push("/")
    return null
  }

  const panes = [
    {
      menuItem: "Productos",
      render: () => (
        <Tab.Pane>
            <div className={styles.actions}>
                <Search queryName="searchAdmin" />
                <span>Add product</span>
            </div>

            <Product.ListProducts />
        </Tab.Pane>
      )
    },
    {
        menuItem: "Categorias",
        render: () => (
          <Tab.Pane>
              <div className={styles.actions}>
                  <div />
                  <span>Add product</span>
              </div>
            <h2>Categorias</h2>
          </Tab.Pane>
        )
    },
    {
        menuItem: "Usuarios",
        render: () => (
          <Tab.Pane>
            <h2>Usuarios</h2>
          </Tab.Pane>
        )
    }
  ]

  return (
    <BasicLayout>
      <Container className={styles.tabs}>
        <Tab panes={panes} />
      </Container>
    </BasicLayout>
  )
}