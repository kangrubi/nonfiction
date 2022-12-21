import React from 'react';
import '../styles/Product.scss';
import { useStateValue } from '../StateProvider';

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  // console.log("장바구니 확인", basket);

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
              .map(_ => (
                <p>★</p>
              ))}
          </div>
        </div>
        <img src={image} alt={title} />
        <button onClick={addToBasket}>Add to cart</button>
      </div>
    </div>
  );
}

export default Product;
