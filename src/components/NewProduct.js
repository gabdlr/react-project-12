import React, { useState } from 'react';
//Neded to use our action functions
import { useDispatch, useSelector } from 'react-redux';
//Redux's actions
import { createNewProductAction } from '../actions/productActions';
import { showAlert, hideAlert } from '../actions/alertActions';

const NewProduct = ({history}) => {

    //Component state
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    //using useDispatch create us a new function
    const dispatch = useDispatch();

    //Accessing to the store's state
    //state route state.products.attribute
    //const loading = useSelector(state => state.products.loading);
    //const error = useSelector(state => state.products.error);
    const alert = useSelector(state => state.alerts.alert);
    //useDispatch allow us to use our actions functions
    //Calls the action from productActions
    const addNewProduct = product => dispatch(createNewProductAction(product));

    //When users submit
    const submitNewProduct = e => {

        e.preventDefault();
        //Validate form
        if (name.trim() === "" || price <= 0) {
            const alert = {
                msg: 'Both fields are required',
                classes: 'alert alert-danger text-center text-uppercase p-3'
            }
            dispatch(showAlert(alert));
            return;
        }

        //If no errors
        dispatch(hideAlert());
        //Create new product
        addNewProduct({
            name,
            price
        });

        //Home redirect (this could be improved a lot)
        history.push('/');
        
    }
    
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center-mb-4 font-weight-bold">
                            Add a new product
                        </h2>
                        {alert ? <p className={alert.classes}>{alert.msg}</p> : null}
                        <form
                            onSubmit={submitNewProduct}
                            action="">
                            <div className="form-group">
                                <label htmlFor="name">Product name</label>
                                <input 
                                    name="name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Product's name" 
                                />
                                <label htmlFor="price">Price</label>
                                <input 
                                    name="price"
                                    value={price}
                                    onChange={e => setPrice(Number(e.target.value))}
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
                            >Add</button>
                        </form>
                        {/* This whole block makes no sense since we are redirecting
                            This happens too fast 
                            {loading ?
                            <div class="alert alert-success mt-2" role="alert">
                            Loading...
                            </div>
                            : null} */}
                        {/* {error ?
                            <div
                                className="alert alert-danger mt-4 mb-0"
                                role="alert">
                                    Oops, something went wrong!
                            </div>
                            : null} */}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NewProduct;