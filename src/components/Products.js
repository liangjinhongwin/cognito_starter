import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const API_INVOKE_URL = "https://jubjhen074.execute-api.us-east-1.amazonaws.com/prod";

const Products = (props) => {
    const [products, setProducts] = useState([]);

    if (props.auth.isAuth === false) {
        props.history.push("/login");
    }

    useEffect(() => {
        fetch(API_INVOKE_URL + "/products")
            .then(response => response.json())
            .then(data => {
                setProducts(JSON.parse(data.body));
            })
    }, []);

    const renderProductsTable = (products) => {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, i) =>
                        <tr key={i}>
                            <td><Link to={{ pathname: `/product/${product.productId}`, state: product }} >{product.productId}</Link></td>
                            <td>{product.name}</td>
                            <td>${product.price}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    return (
        <div>
            <h1 className="text-center">Products</h1>
            {renderProductsTable(products)}
        </div>
    );
}

export default Products;