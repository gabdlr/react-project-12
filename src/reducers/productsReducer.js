/* eslint-disable import/no-anonymous-default-export */
import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    START_DOWNLOAD_PRODUCTS,
    DOWNLOAD_PRODUCTS_SUCCESS,
    DOWNLOAD_PRODUCTS_ERROR,
    GET_PRODUCT_DELETE,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_ERROR,
    GET_PRODUCT_EDIT,
    EDIT_PRODUCT_SUCCESS,
    EDIT_PRODUCT_ERROR
} from '../types/';

//Each reducer has its own state
const initialState = {
    products: [],
    loading: false,
    error: null,
    productDelete: null,
    productEdit: null
}

export default function (state = initialState, action) {      
    switch (action.type) {
        case START_DOWNLOAD_PRODUCTS:
        case ADD_PRODUCT:
            return {
                ...state,
                loading: action.payload
            }
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                products: [...state.products, action.payload],
                loading: false
            }
        case DOWNLOAD_PRODUCTS_ERROR:
        case ADD_PRODUCT_ERROR:
        case DELETE_PRODUCT_ERROR:
        case EDIT_PRODUCT_ERROR:    
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case DOWNLOAD_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading: false,
                error: false  
            }
        case GET_PRODUCT_DELETE:
            return {
                ...state,
                productDelete: action.payload 
            }
        case DELETE_PRODUCT_SUCCESS:
            //I dont like this logic (getting product delete from state instead of passing id throught payload)
            //but i know it will work anyways and other way loading the id on the state makes totally no sense
            return {
                ...state,
                products: state.products.filter(product => product.id !== state.productDelete),
                productDelete: null
            }
        case GET_PRODUCT_EDIT:
            return {
                ...state,
                productEdit: action.payload
            }
        case EDIT_PRODUCT_SUCCESS:
            return {
                ...state,
                productEdit: null,
                products: state.products.map(product => product.id === action.payload.id ? action.payload : product)
            }
        default:
            return state;
        
    }
}