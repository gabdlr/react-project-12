import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR
} from '../types/';

const addProduct = () => ({
    type: ADD_PRODUCT,
    payload: true
})

//If product is successfully saved
const addProductSuccess = product => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
});

//If there was an error
const addProductError = state => ({
    type: ADD_PRODUCT_ERROR,
    payload: state
})

//Create new products
export function createNewProductAction(product) {
    return (dispatch) => {
        dispatch(addProduct());
        try {
            dispatch( addProductSuccess(product))
        } catch (error) {
            dispatch( addProductError(true) )
        }
    }
}