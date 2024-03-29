import React from 'react';
import '../styles/Header.scss';
import { ShoppingBasket } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { auth } from '../lib/firebase';

function Header() {
  const user = useSelector(store => store.Reducer.user);
  const basket = useSelector(store => store.Reducer.basket);

  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" src="images/logo.png" alt="로고" />
      </Link>
      <div className="header-nav">
        <div className="header-option">
          <span className="header-option-line-one">
            {!user ? '게스트' : user.email}
          </span>
          <Link to={!user && '/login'} className="home-login">
            <span
              onClick={() => auth.signOut()}
              className="header-option-line-two"
            >
              {user ? '로그아웃' : '로그인'}
            </span>
          </Link>
        </div>
        <Link to="/checkout" className="header-option-basket">
          <div>
            <ShoppingBasket />
            <span className="header-option-line-twoheader-basket-count">
              {basket?.length}개
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
