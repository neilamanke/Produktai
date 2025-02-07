import axios from 'axios';
import { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';

export function SearchProductData(props) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      .post('http://localhost:3000/api/product/search', { data: props.search })
      .then((response) => {
        setProductList(response.data.data);
      })
      .catch((error) => console.error(error));
  }, [props.search]);

  if (productList.length === 0) {
    return <h4>No data finded</h4>;
  }

  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4  g-4">
        {productList.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            img={product.img_url}
            categoryType={product.category_type}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
}
