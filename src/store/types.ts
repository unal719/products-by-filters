import { Product, ProductItem } from "../models/ProductsModel";

export const UPDATE_PRODUCTS_LIST = "UPDATE_PRODUCTS_LIST";
export const UPDATE_SELECTED_PRODUCT = "UPDATE_SELECTED_PRODUCT";
export const UPDATE_TOTAL_PAGE = "UPDATE_TOTAL_PAGE";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const UPDATE_SEARCH_VALUE = "UPDATE_SEARCH_VALUE";
export const SET_SELECTED_GENDER = "SET_SELECTED_GENDER";
export const SET_ON_SALE_FILTER = "SET_ON_SALE_FILTER";

export const productItemInitialState: ProductItem = {
    gtin: "",
    title: "",
    sale_price: "",
    gender: "",
    price: "",
    image_link: "",
    additional_image_link: []
}

export type ProductsState = {
    productItems: Product[];
    selectedProductItem?: ProductItem,
    currentPage: number,
    totalPage: string[],
    searchValue: string;
    selectedGender: string,
    onSale: boolean;
};

export type UpdateSelectedProduct = {
    type: typeof UPDATE_SELECTED_PRODUCT;
    payload: ProductItem;
}

export type UpdateProductsList = {
    type: typeof UPDATE_PRODUCTS_LIST;
    payload: Product[];
};

export type UpdateTotalPage = {
    type: typeof UPDATE_TOTAL_PAGE;
    payload: string[];
}

export type SetCurrentPage = {
    type: typeof SET_CURRENT_PAGE;
    payload: number;
}


export type UpdateSearchValue = {
    type: typeof UPDATE_SEARCH_VALUE;
    payload: string;
}


export type SetSelectedGender = {
    type: typeof SET_SELECTED_GENDER;
    payload: string;
}

export type SetOnSaleFilter = {
    type: typeof SET_ON_SALE_FILTER;
    payload: boolean;
}


export type ProductsActions =
    | UpdateProductsList
    | UpdateSelectedProduct
    | UpdateTotalPage
    | SetCurrentPage
    | UpdateSearchValue
    | SetSelectedGender
    | SetOnSaleFilter;