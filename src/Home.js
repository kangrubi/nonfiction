import React from 'react';
import './Home.css'
import Product from './Product.js';

function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <img className="home_image" src="images/home_visual.jpeg" alt="" />

                <div className="home_row">
                    <Product id="2323" title="제품1" price={3000} image="images/prod1.png" rating={5} />
                    <Product id="2328" title="제품2" price={2000} image="images/prod2.png" rating={3} />
                </div>
                <div className="home_row">
                    <Product id="2321" title="제품3" price={5000} image="images/prod3.png" rating={1} />
                    <Product id="2322" title="제품4" price={6000} image="images/prod4.png" rating={2} />
                    <Product id="2324" title="제품5" price={7000} image="images/prod5.png" rating={4} />
                </div>
                <div className="home_row">
                    <Product id="2324" title="제품5" price={7000} image="images/prod6.png" rating={4} />
                    <Product id="2324" title="제품5" price={7000} image="images/prod1.png" rating={4} />
                </div>
            </div>
        </div>
    );
}

export default Home;