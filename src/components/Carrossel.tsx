import React, { useState, useEffect } from 'react';
import { Route, Routes} from 'react-router-dom';
import ProductList from './ProductList';
import axios from 'axios';

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

const Carrossel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json')
      .then(response => {
        setProducts(response.data.products);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const nextItem = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % products.length);
  };

  const previousItem = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='produtos'>
      <div className='esquerda' onClick={previousItem}>
        <svg width="20" height="34" viewBox="0 0 20 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 3.03939L16.9666 0L0 17L16.9666 34L20 30.9606L6.06684 17L20 3.03939Z" fill="#3F3F40" />
        </svg>
      </div>
      <div>
        <Routes>
          <Route
            path="/"
            element={<ProductList products={products} currentIndex={currentIndex} />}
          />
        </Routes>
      </div>
      <div className='direita' onClick={nextItem}>
        <svg width="20" height="34" viewBox="0 0 20 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30.9606L3.03342 34L20 17L3.03342 0L0 3.03939L13.9332 17L0 30.9606Z" fill="#3F3F40" />
        </svg>
      </div>
    </div>
  );
};

export default Carrossel;
