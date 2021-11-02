import React from 'react';
const EditProduct = () => {
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center-mb-4 font-weight-bold">
                            Edit product
                        </h2>
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="name">Product name</label>
                                <input
                                    name="name"
                                    type="text"
                                    className="form-control"
                                    placeholder="Product's name"
                                />
                                <label htmlFor="price">Price</label>
                                <input
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
