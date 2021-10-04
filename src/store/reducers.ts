import { productItemInitialState, ProductsActions, ProductsState, SET_CURRENT_PAGE, SET_ON_SALE_FILTER, SET_SELECTED_GENDER, UPDATE_PRODUCTS_LIST, UPDATE_SEARCH_VALUE, UPDATE_SELECTED_PRODUCT, UPDATE_TOTAL_PAGE } from "./types";



const initialState: ProductsState = {
    productItems: [],
    selectedProductItem: productItemInitialState,
    currentPage: 1,
    totalPage: [],
    searchValue: "",
    selectedGender: "",
    onSale: false
};

export const productReducer = (
    state: ProductsState | undefined = initialState,
    action: ProductsActions
): ProductsState => {
    switch (action.type) {
        case UPDATE_PRODUCTS_LIST:
            return {
                ...state,
                productItems: action.payload
            }

        case UPDATE_SELECTED_PRODUCT: {
            return {
                ...state,
                selectedProductItem: action.payload
            }
        }

        case UPDATE_TOTAL_PAGE: {
            return {
                ...state,
                totalPage: action.payload
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.payload
            }
        }

        case UPDATE_SEARCH_VALUE: {
            return {
                ...state,
                searchValue: action.payload
            }
        }

        case SET_SELECTED_GENDER: {
            return {
                ...state,
                selectedGender: action.payload
            }
        }

        case SET_ON_SALE_FILTER: {
            return {
                ...state,
                onSale: action.payload
            }
        }

        default:
            return state;
    }
};