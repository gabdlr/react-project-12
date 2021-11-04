import React from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
//Redux
import { useDispatch } from 'react-redux';
import { deleteProductAction, getProductEditAction } from '../actions/productActions';

const Product = ({ product }) => {
    const { name, price, id } = product;
    const dispatch = useDispatch();
    const history = useHistory(); // ables history to redirect 

    //Confirm if wants to elimante
    const confirmDelete = id => {
        //ask user
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                //pass to action
                dispatch(deleteProductAction(id));
            }
        });
    }
    //
    const editRedirect = product => {
        dispatch(getProductEditAction(product));
        history.push(`/product/edit/${product.id}`);
    }
    return (
        <tr>
            <td className="text-center">{name}</td>
            <td className="text-center">
                <span className="font-weight-bold">$ {price}</span>
            </td>
            <td className="acciones text-right">
                <button
                    type="button"
                    onClick={ () => {editRedirect(product)}}
                    className="btn btn-primary mr-2"
                >Edit
                </button>
                <button
                    type="button"
                    onClick={() => confirmDelete(id)}
                    className="btn btn-danger">
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default Product;
