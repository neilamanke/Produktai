import axios from 'axios';
import { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import './MovieDataList.css';

export function ProductDataList(props) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/product')
      .then((response) => {
        setProductList(response.data.data);
      })
      .catch((error) => console.error('Fetching product list failed:', error));
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4  g-4  MovieDataList-container">
      {productList.length === 0 ? (
        <p>Loading...</p>
      ) : (
        productList.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            img={product.img_url}
            price={product.price}
          />
        ))
      )}
    </div>
  );
}
