import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export function ProductCardInfo() {
  const { id } = useParams();

  const [productData, setProductData] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/product/${id}`)
      .then((response) => {
        setProductData(response.data.data[0]);
      })
      .catch((error) => {
        console.error('Unable to get product data:', error);
      });
  }, [id]);

  if (!productData) {
    return <h5>Loading...</h5>;
  }
  return (
    <>
      <div className="card mb-3">
        <img src={productData.img_url} className="card-img-top" alt={productData.title} />
        <div className="card-body">
          <h2 className="card-title">{productData.title}</h2>
          <p className="card-text">{productData.description}</p>
          <p className="card-text">Category: {productData.Category_type}</p>
          <p className="card-text">Price: {productData.rating}</p>
          <p className="card-text">
            <small className="text-body-secondary">Updated: {productData.updated_at}</small>
          </p>
        </div>
      </div>
    </>
  );
}
