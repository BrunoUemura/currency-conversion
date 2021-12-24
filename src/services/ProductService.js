import { api } from "./api"

export async function getAllProducts(currency) {
    try {
        return await api.get(`/products?currency=${currency}`).then(({ data }) => { return data })
    } catch (error) {
        console.log(error);
    }
}