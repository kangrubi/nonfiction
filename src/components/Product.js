import React from 'react';
import '../styles/Product.scss';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../store/actions/index';

function Product({ id, title, image, price, rating }) {
  const dispatch = useDispatch();

  const item = {
    id,
    title,
    image,
    price,
    rating,
  };

  return (
    <div className="product">
      <div className="product-box">
        <div className="product-info">
          <p>{title}</p>
          <p className="product-price">
            <small>가격</small>
            <strong>{price}</strong>
            <small>원</small>
          </p>

          <div className="product-rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p key={i}>★</p>
              ))}
          </div>
        </div>
        <img src={image} alt={title} />
        <button onClick={() => dispatch(addToBasket(item))}>Add to cart</button>
      </div>
    </div>
  );
}

export default Product;
