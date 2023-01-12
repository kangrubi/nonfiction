import React from 'react';
import '../styles/Payment.scss';
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import { useSelector } from 'react-redux';

function Payment() {
  const user = useSelector(store => store.Reducer.user);
  const basket = useSelector(store => store.Reducer.basket);

  return (
    <div className="payment">
      <div className="payment-container">
        <Link to="/checkout" className="checkout-link">
          <h2>
            장바구니로 돌아가기 ({basket?.length} 개의 상품목록이 존재합니다.)
          </h2>
        </Link>
        <div className="payment-section">
          <div className="payment-title">
            <h3>배송 받을 곳</h3>
          </div>
          <div className="payment-address">
            <p>{user?.email}님의 주소</p>
            <p>인천</p>
          </div>
        </div>
      </div>
      <div className="payment-section">
        <div className="payment-title">
          <h3>상품 목록</h3>
        </div>
        <div className="payment-items">
          {basket.map(item => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="payment-section">
        <div className="payment-title">
          <h3>결제</h3>
        </div>
        <div className="payment-details" />
      </div>
    </div>
  );
}

export default Payment;
