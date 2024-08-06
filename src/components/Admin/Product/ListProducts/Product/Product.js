import { useState, useEffect } from "react"
import { Icon, Image, Table } from "semantic-ui-react"
import styles from "./Product.module.scss"
import { fn } from "@/utils"

const NOT_FOUND_IMAGE = "/public/images/not-found.png"

export function Product(props) {
    const {product} = props
    const [image, setImage] = useState(NOT_FOUND_IMAGE)

    useEffect(() => {
        const imageUrl = fn.getUrlImage(product.prodID)
        fn.checkIfImageExists(imageUrl, (exists) => {
            if(exists) setImage(imageUrl)
        })
    }, [product])

    return (
        <>
            <Table.Cell>
                {product.prodID}
            </Table.Cell>
            <Table.Cell>
                <Image className={styles.image} src={image} alt={product.prodTitle} />
            </Table.Cell>
            <Table.Cell>
                {product.prodTitle}
            </Table.Cell>
            <Table.Cell>
                {product.prodPrice}$
            </Table.Cell>
            <Table.Cell>
                {product.prodStock}
            </Table.Cell>
            <Table.Cell className={styles.actions}> 
                <Icon name="pencil" link />
                <Icon name="image" link />
                <Icon name="trash" link />
            </Table.Cell>
        </>
    )
}
