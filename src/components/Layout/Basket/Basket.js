import styles from "./Basket.module.scss"
import { Icon, Label } from "semantic-ui-react"
import Link from "next/link"


// TODO: Implementar carrito
const total = "0"

export function Basket() {
  return (
    <Link href="/basket" className={styles.basket}>
        <Icon name="cart" />
        {total > 0 && (
            <Label circular color="teal">
                {total}
            </Label>
        )}
        Mi cesta
    </Link>
  )
}
