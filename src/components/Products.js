import React, { Fragment, useEffect } from 'react';
import Product from './Product';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { getProductsAction } from '../actions/productActions';
const Products = () => {
    const dispatch = useDispatch();

    //Load products
    useEffect(() => {
        //Consultar la api
        const loadProducts = () => dispatch(getProductsAction());
        loadProducts();
    }, [dispatch])
    
    //Get state
    const products = useSelector(state => state.products.products);
    const error = useSelector(state => state.products.error);
    return ( 
        <Fragment>
            <h2 className="text-center my-5">Product list</h2>
            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col" className="text-center">Name</th>
                        <th scope="col" className="text-center">Price</th>
                        <th scope="col" className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length === 0 ? <tr className="mt-3"><td colspan="3">No products were found</td></tr> : (
                        products.map(product =>
                            <Product
                                key={product.id}
                                product={product}
                            />)
                    )}
                </tbody>
            </table>
            {error ?
                <div
                className="alert alert-danger mt-4 mb-0"
                role="alert">
                    Oops, something went wrong!
                </div>
                : null}
        </Fragment>
     );
}
 
export default Products;