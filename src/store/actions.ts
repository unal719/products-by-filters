
import { Product, ProductItem } from "../models/ProductsModel";
import { fetchProductByGtinId, fetchProductsByFilters } from "../services/product-service";
import { calculateTotalPages, mapImagesLink } from "../utils/helper";
import { SetCurrentPage, SetOnSaleFilter, SetSelectedGender, SET_CURRENT_PAGE, SET_ON_SALE_FILTER, SET_SELECTED_GENDER, UpdateProductsList, UpdateSearchValue, UpdateSelectedProduct, UpdateTotalPage, UPDATE_PRODUCTS_LIST, UPDATE_SEARCH_VALUE, UPDATE_SELECTED_PRODUCT, UPDATE_TOTAL_PAGE } from "./types";

export function updateProductsList(payload: Product[]): UpdateProductsList {
    return {
        type: UPDATE_PRODUCTS_LIST,
        payload,
    };

}


export function updateSelectedProduct(payload: ProductItem): UpdateSelectedProduct {
    return {
        type: UPDATE_SELECTED_PRODUCT,
        payload,
    };

}


export function updateTotalPage(payload: string[]): UpdateTotalPage {
    return {
        type: UPDATE_TOTAL_PAGE,
        payload,
    };

}

export function setCurrentPage(payload: number): SetCurrentPage {
    return {
        type: SET_CURRENT_PAGE,
        payload,
    };

}

export function updateSearchValue(payload: string): UpdateSearchValue {
    return {
        type: UPDATE_SEARCH_VALUE,
        payload,
    };
}

export function setSelectedGender(payload: string): SetSelectedGender {
    return {
        type: SET_SELECTED_GENDER,
        payload,
    };
}

export function setOnSaleFilter(payload: boolean): SetOnSaleFilter {
    return {
        type: SET_ON_SALE_FILTER,
        payload,
    };
}



export const loadProductsByFilters = (key: string, gender: string = "", onSale: boolean=false) => {
    return async (dispatch: any) => {

        const { data: { data } } = await fetchProductsByFilters(key, gender, onSale);
        const totalPageItems = calculateTotalPages(data.length)
        dispatch(updateTotalPage(totalPageItems))
        dispatch(setCurrentPage(1))
        dispatch(updateProductsList(data));
    };
};

export const loadSelectedProductById = (gtinId: number) => {
    return async (dispatch: any) => {
        let { data: { product } } = await fetchProductByGtinId(gtinId);
        product.additional_image_link = mapImagesLink(product.additional_image_link);
        dispatch(updateSelectedProduct(product));
    };
};