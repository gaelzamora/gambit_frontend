import styles from "./CategoriesMenu.module.scss"
import { useState, useEffect } from "react"
import { categoryCtrl } from "@/api"
import { map } from "lodash"
import Link from "next/link"

export default function CategoriesButton() {
  const [categories, setCategories] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const response = await categoryCtrl.getAll()
        setCategories(response)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])
  
  return (
    <div className={styles.container}>
      {map(categories, (category) => (
        <Link key={category.categID} href={`/categories/${category.categPath}`}>
          {category.categName}
        </Link>
      ))}
    </div>
  )
}
