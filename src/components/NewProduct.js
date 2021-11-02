import React, { useState } from 'react';
//Neded to use our action functions
import { useDispatch, useSelector } from 'react-redux';
//Redux's actions
import { createNewProductAction } from '../actions/productActions';

const NewProduct = () => {

    //Component state
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    //using useDispatch create us a new function
    const dispatch = useDispatch();

    //useDispatch allow us to use our actions functions
    //Calls the action from productActions
    const addNewProduct = product => dispatch(createNewProductAction(product));

    //When users submit
    const submitNewProduct = e => {

        e.preventDefault();
        //Validate form
        if (name.trim() === "" || price <= 0)
            return;
        //If no errors

        //Create new product
        addNewProduct({
            name,
            price
        });
    }
    
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center-mb-4 font-weight-bold">
                            Add a new product
                        </h2>
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
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NewProduct;