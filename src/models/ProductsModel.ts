export type Product = {
    title: string,
    gtin: string,
    gender: string,
    sale_price: string,
    price: string,
    image_link: string,
    additional_image_link?: string
}

export type ProductItem = {
    title: string,
    gtin: string,
    gender: string,
    sale_price: string,
    price: string,
    image_link: string,
    additional_image_link?: string[]
}

