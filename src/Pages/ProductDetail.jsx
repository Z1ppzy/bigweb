import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ products }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = products.find((p) => p.id.toString() === productId);
    setProduct(selectedProduct || null);
  }, [productId, products]);

  if (!product) {
    return <div>Товар не найден</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <img src={product.imageSrc} alt={product.imageAlt} />
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
