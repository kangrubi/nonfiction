import React, { useState, useEffect } from 'react';
import '../styles/Home.scss';
import Product from '../components/Product.js';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/data/product.json')
      .then(result => result.json())
      .then(data => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="home">
      <img className="home_image" src="images/home_visual.jpeg" alt="" />
      <div className="home-container">
        <div className="home_row">
          {products.map(item => {
            return (
              <Product
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.imgUrl}
                rating={item.rating}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
