import { useState, useEffect } from "react"
import { productCtrl } from "@/api"
import { Loading, Pagination } from "@/components/Shared"
import { Table } from "semantic-ui-react"
import { map, size } from "lodash"
import { Product } from "./Product"
import { useRouter } from "next/router"

const ITEMS_PER_PAGE = 10

export function ListProducts() {
    const [products, setProducts] = useState(null)
    const [totalPages, setTotalPages] = useState(null)
    const {query} = useRouter()
    const page = Number(query.page || 1)

    useEffect(() => {
        (async () => {
            try {
                setProducts(null)
                const searchText = query.searchAdmin || ""
                const response = await productCtrl.getAll(
                    page, 
                    ITEMS_PER_PAGE, 
                    searchText
                )

                setProducts(response.data || [])
                setTotalPages(Math.ceil(response.totalItems / ITEMS_PER_PAGE))
            } catch (error) {   
                console.error(error)
            }
        })()
    }, [query.page, query.searchAdmin])

    if(!products) return <Loading text="Cargando productos" />

    return (
        <div>
            <Table striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Image</Table.HeaderCell>
                        <Table.HeaderCell>Nombre</Table.HeaderCell>
                        <Table.HeaderCell>Precio</Table.HeaderCell>
                        <Table.HeaderCell>Stock</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {size(products) === 0 && (
                        <Table.Cell colSpan="5">
                            <p>No hay resultados</p>
                        </Table.Cell>
                    )}

                    {map(products, (product) => (
                        <Table.Row key={product.prodID}>
                            <Product product={product} />
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
                
            <Pagination currentPage={page} totalPages={totalPages} />
        </div>
    )
}
