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
import axiosClient from '../config/axios';
import Swal from 'sweetalert2';

//Add / Post
//Adding new products
const addProduct = () => ({
    type: ADD_PRODUCT,
    payload: true,
});
//If product is successfully saved
const addProductSuccess = (product) => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product,
});
//If there was an error
const addProductError = (state) => ({
    type: ADD_PRODUCT_ERROR,
    payload: state,
});

//Get
//Retriving product
const downloadProducts = () => ({
    type: START_DOWNLOAD_PRODUCTS,
    payload: true,
});

//Products downloaded successfully
const getProductsSuccess = products => ({
    type: DOWNLOAD_PRODUCTS_SUCCESS,
    payload: products
});
//Products failed
const getProductsError = status => ({
    type: DOWNLOAD_PRODUCTS_ERROR,
    payload: status
})

//Delete
//Selecting item to be deleted
const getProductDelete = id => ({
    type: GET_PRODUCT_DELETE,
    payload: id
});
//Deleting successfull
const deleteProductSuccess = () => ({
    type: DELETE_PRODUCT_SUCCESS
});
//Deleting failed
const deleteProductError = status => ({
    type: DELETE_PRODUCT_ERROR,
    payload: status
});

//Edit
//Get product thats going to be edited
const getProductEdit = product => ({
    type: GET_PRODUCT_EDIT,
    payload: product
});

//Take changes to the selected product
const editProduct = product => ({
    type: EDIT_PRODUCT_SUCCESS,
    payload: product
})
//Editing failed
const editProductError = status => ({
    type: EDIT_PRODUCT_ERROR,
    payload: status
})

//Create new products
export function createNewProductAction(product) {
    return async (dispatch) => {
        dispatch(addProduct());
        try {
            //db insert
            const response = await axiosClient.post('/products', product);
            //If everything goes right then
            dispatch(addProductSuccess(response.data));
            Swal.fire({
                title: 'Success!',
                text: 'Product sucessfully added',
                icon: 'success',
            });
        } catch (error) {
            console.log(error);
            //If there is an error change state
            dispatch(addProductError(true));
            //Alerta de error
            Swal.fire({
                title: 'Error!',
                text: 'Something went wrong!',
                icon: 'error',
            });
        }
    };
}

//Loading products getProductsAction
export function getProductsAction() {
    return async (dispatch) => {
        dispatch(downloadProducts());
        try {
            const response = await axiosClient.get('/products');
            dispatch(getProductsSuccess(response.data));
        } catch (error) {
            dispatch(getProductsError(true))
        }
    };
}

//Delete selected item
export function deleteProductAction(id) {
    return async (dispatch) => {
        dispatch(getProductDelete(id));
        try {
            await axiosClient.delete(`/products/${id}`);
            dispatch(deleteProductSuccess());
            Swal.fire(
                'Deleted!',
                'Your product has been deleted.',
                'success'
            );
        } catch (error) {
            console.log(error);
            dispatch(deleteProductError(true));
        }
    }
}

//Get product to edit
export function getProductEditAction (product) {
    return (dispatch) => {
        dispatch(getProductEdit(product));
    }
}

//Edits a product register through the API and in the state
export function productEditAction (product) {
    return async (dispatch) => {     
        try {
            const response = await axiosClient.put(`/products/${product.id}`, product);
            dispatch(editProduct(response.data))
        } catch (error) {
            console.log(error);
            dispatch(editProductError(true));
        }  
    }
}