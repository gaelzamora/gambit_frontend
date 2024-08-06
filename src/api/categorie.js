import { ENV } from "@/utils";

async function getAllCategories() {
    try {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CATEGORY}`

        const response = await fetch(url)

        const result = await response.json()

        if(response.status !== 200) throw result

        return result
    } catch (error) {
        throw error
    }
}

export const categoryCtrl = {
    getAll: getAllCategories,
}