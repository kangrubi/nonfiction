import React from 'react';
import './Home.css'
import Product from './Product.js';

function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <img className="home_image" src="images/home_visual.jpg" alt="" />

                <div className="home_row">
                    <Product id="2323" title="제품1입니다" price={3000} image="images/prod.jpg" rating={5} />
                </div>
                <div className="home_row">
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
                <div className="home_row">
                    <Product/>
                </div>
            </div>
        </div>
    );
}

export default Home;