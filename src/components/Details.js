import React from 'react';
import { Link } from 'react-router-dom';
const Details = (props) => {
    if (props.auth.isAuth === false) {
        props.history.push("/login");
    }

    const renderDetails = (product) => {
        return (
            <div>
                <figure className="d-flex justify-content-center">
                    <img src={product.imageUrl} alt="" />
                </figure>
                <div className="d-flex justify-content-center">
                    <ul>
                        <li>Product ID: {product.productId}</li>
                        <li>Product Name: {product.name}</li>
                        <li>Price: ${product.price}</li>
                    </ul>
                </div>
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