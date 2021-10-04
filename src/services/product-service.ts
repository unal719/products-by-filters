import axios from "axios";

export const fetchProductsByFilters = (key: string, gender: string = "", onSale: boolean = false) => {
    return axios.get(`/api/products?title=${key}&gender=${gender}&onSale=${onSale}`)
}

export const fetchProductByGtinId = (gtinId: number) => {
    return axios.get(`/api/product/${gtinId}`)
}