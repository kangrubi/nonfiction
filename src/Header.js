import React from 'react';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasket } from '@mui/icons-material';

function Header() {
    return (
        <div className="header">
            <img className="header_logo" src="images/logo.png" alt="" />
            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon"></SearchIcon>
            </div>

            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineOne">안녕하세요!</span>
                    <span className="header_optionLineTwo">로그인하기</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">돌아가기</span>
                    <span className="header_optionLineTwo">주문내역</span>
                </div>
                <div className="header_optionBasket">
                    <ShoppingBasket/>
                    <span className="header_optionLineTwoheader_basketCount">
                        0
                    </span>
                </div>
            </div>
        </div>

    
    );
}

export default Header;