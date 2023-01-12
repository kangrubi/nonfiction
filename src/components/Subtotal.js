import React from 'react';
import CurrencyFormat from 'react-currency-format';
import '../styles/Subtotal.scss';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../store/actions/index';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
  // const [{ basket }, dispatch] = useStateValue();

  const basket = useSelector(store => store.Reducer.basket);

  const navigate = useNavigate();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={value => (
          <p>
            총액 ( {basket.length} items) : <strong>{value}원</strong>
          </p>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType="text"
        thousandSeparator={true}
        prefix="₩"
      />
      <button onClick={e => navigate('/payment')}>결제하기</button>
    </div>
  );
}

export default Subtotal;
