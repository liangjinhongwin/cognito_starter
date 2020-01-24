import React from 'react';
import { Link } from 'react-router-dom';
const Details = (props) => {
    if (props.auth.isAuth === false) {
        props.history.push("/login");
    }

    const renderDetails = (product) => {
        return (
            <div className="mx-auto">
                <img src={product.imageUrl} alt="" />
                <ul>
                    <li>Product ID: {product.productId}</li>
                    <li>Product Name: {product.name}</li>
                    <li>Price: ${product.price}</li>
                </ul>
            </div>
        );
    }

    return (
        <div>
            <h1 className="text-center">Details</h1>
            {renderDetails(props.location.state)}
            <p><Link to="/products">Back</Link></p>
        </div>
    );
}

export default Details;