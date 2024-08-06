import { Container } from "semantic-ui-react"
import styles from "./BasicLayout.module.scss"
import { Layout } from "@/components/Layout"
import { useAuth } from "@/hooks"
import { Search } from "@/components/Shared/Search"

export function BasicLayout(props) {
    const {isAdmin} = useAuth()
    const {children} = props

    return (
        <>
            <div className={styles.menu}>
                <Container className={styles.header}>
                    <div className={styles.left}>
                        <Layout.Logo />
                        <Search className={styles.search} />
                    </div>

                    <div>
                        {isAdmin && <Layout.AdminButton />}
                        <Layout.Account />
                        <Layout.Basket />
                    </div>
                </Container>
            </div>

            <div className={styles.border}>
                <Container>
                    <Layout.CategoriesButton />
                </Container>
            </div>

            {children}
        </>
      )
}
