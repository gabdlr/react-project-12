import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productEditAction } from '../actions/productActions';
import { useHistory } from 'react-router-dom';

const EditProduct = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    //State
    const [product, setProduct] = useState({
        name: '',
        price: ''
    });

    //Product to edit
    const productEdit = useSelector(state => state.products.productEdit);
    if (productEdit === null) {
        history.push('/');
    }
    
    //Extract values (from local state that has a copy of productEdit thanks to the useEffect)
    const { name, price } = product;

    //Fill state
    useEffect(() => {
         setProduct(productEdit);
    }, [productEdit]);
    
    //This is precious
    const alertUser = (e) => {
        e.preventDefault();
        e.returnValue = "";
    };
    useEffect(() => {
        window.addEventListener("beforeunload", alertUser);
        return () => {
          window.removeEventListener("beforeunload", alertUser);
        };
      }, []);

    
    //Reads inputs and pass it to values
    const productHandler = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
       })
    }

    const submitEditProduct = e => {
        e.preventDefault();
        dispatch(productEditAction(product));
        history.push('/');
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center-mb-4 font-weight-bold">
                            Edit product
                        </h2>
                        <form
                            onSubmit={submitEditProduct}
                        >
                            <div className="form-group">
                                <label htmlFor="name">Product name</label>
                                <input
                                    onChange={ e => productHandler(e)}
                                    value={name}
                                    name="name"
                                    type="text"
                                    className="form-control"
                                    placeholder="Product's name"
                                />
                                <label htmlFor="price">Price</label>
                                <input
                                    onChange={ e => productHandler(e)}
                                    value={price}
                                    name="price"
                                    type="number"
                                    className="form-control"
                                    placeholder="Product's price"
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary text-
                                        uppercase font-weight-bold 
                                        d-block w-100"
                            >
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;
