import React from 'react';
import '../styles/CheckoutProduct.scss';
import { useStateValue } from '../StateProvider';

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };

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
              <p>★</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>장바구니에서 제거하기</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
