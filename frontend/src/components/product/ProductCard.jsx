import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import "./productCard.scss";

const Product = ({ product }) => {
  const options = {
    edit: false,
    color: "rgba(20, 20, 20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 10 : 10,
    value: product.ratings,
    isHalf: true,
  };

  return (
    product && (
      <Link className="productCard" to={`/product/${product._id}`}>
        {/* {product && <h6>{product._id}</h6>} */}
        <img src={product.images[0].url} alt={product.name} />
        <p>{product.name}</p>
        <div>
          <ReactStars {...options} />
          <span className="productCardSpan">
            {" "}
            ({product.numOfReviews} Reviews)
          </span>
        </div>
        <span>{`$${product.price}`}</span>
      </Link>
    )
  );
};

export default Product;
