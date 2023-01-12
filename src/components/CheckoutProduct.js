import React from 'react';
import '../styles/CheckoutProduct.scss';
import { useDispatch } from 'react-redux';
import { removeFromBasket } from '../store/actions/index';

function CheckoutProduct({ id, image, title, price, rating }) {
  const dispatch = useDispatch();

  return (
    <div className="checkout-product">
      <img className="checkout-product-image" src={image} alt="" />
      <div className="checkout-product-info">
        <p className="checkout-product-title">{title}</p>
        <p className="checkout-product-pirce">
          <small>₩</small>
          <strong>{price}</strong>
          <small>원</small>
        </p>
        <div className="checkout-product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>★</p>
            ))}
        </div>
        <button onClick={() => dispatch(removeFromBasket(id))}>
          장바구니에서 제거하기
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
