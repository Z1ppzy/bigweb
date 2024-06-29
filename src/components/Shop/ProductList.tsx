import React, { useState } from 'react';
import ProductItem from './ProductItem';
import ProductModal from './ProductModal';
import Cart from './Cart';

interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  description: string;
}

const products: Product[] = [
  { id: 1, image: '/reward-claimed.jpg', name: 'Avenger', price: 49, description: 'Description for Avenger' },
  { id: 2, image: '/reward-claimed.jpg', name: 'Elder', price: 99, description: 'Description for Elder' },
  { id: 3, image: '/reward-claimed.jpg', name: 'Enigma', price: 249, description: 'Description for Enigma' },
  { id: 4, image: '/reward-claimed.jpg', name: 'Phantom', price: 349, description: 'Description for Phantom' },
  { id: 5, image: '/reward-claimed.jpg', name: 'Sponsor', price: 499, description: 'Description for Sponsor' },
  { id: 6, image: '/reward-claimed.jpg', name: 'Arcane', price: 549, description: 'Description for Arcane' },
  { id: 7, image: '/reward-claimed.jpg', name: 'Legend', price: 628, description: 'Description for Legend' },
  { id: 8, image: '/reward-claimed.jpg', name: 'Titan', price: 749, description: 'Description for Titan' },
];

const ProductList: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<Product[]>([]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const handleRemoveFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            onClick={() => handleProductClick(product)}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
        {selectedProduct && (
          <ProductModal
            image={selectedProduct.image}
            name={selectedProduct.name}
            description={selectedProduct.description}
            price={selectedProduct.price}
            onClose={handleCloseModal}
          />
        )}
      </div>
      <Cart cartItems={cart} onRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
};

export default ProductList;
    