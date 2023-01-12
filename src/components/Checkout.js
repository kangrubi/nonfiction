import React from 'react';
import '../styles/Checkout.scss';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useSelector } from 'react-redux';

function Checkout() {
  const user = useSelector(store => store.Reducer.user);
  const basket = useSelector(store => store.Reducer.basket);

  return (
    <div className="checkout">
      <div className="checkout_left">
        <div>
          <h2 className="checkout_title">{user?.email}의 장바구니입니다</h2>
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
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
