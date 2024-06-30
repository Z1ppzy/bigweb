import React, { useState } from 'react';
import ProductItem from './ProductItem';
import ProductModal from './ProductModal';
import Cart from './Cart';
import CartModal from './CartModal';

interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  description: string;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
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
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { id: product.id, name: product.name, price: product.price, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prevCart.filter((item) => item.id !== id);
      }
    });
  };

  const handleToggleCartModal = () => {
    setIsCartModalOpen(!isCartModalOpen);
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {products.map((product) => {
          const isInCart = cart.some((item) => item.id === product.id);
          return (
            <ProductItem
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              onClick={() => handleProductClick(product)}
              onAddToCart={() => handleAddToCart(product)}
              onRemoveFromCart={() => handleRemoveFromCart(product.id)}
              isInCart={isInCart}
            />
          );
        })}
        {selectedProduct && (
          <ProductModal
            image={selectedProduct.image}
            name={selectedProduct.name}
            description={selectedProduct.description}
            price={selectedProduct.price}
            onClose={handleCloseModal}
            onAddToCart={() => handleAddToCart(selectedProduct)}
          />
        )}
      </div>
      <Cart cartItems={cart} onToggleCartModal={handleToggleCartModal} />
      {isCartModalOpen && (
        <CartModal cartItems={cart} onRemoveFromCart={handleRemoveFromCart} onClose={handleToggleCartModal} />
      )}
    </div>
  );
};

export default ProductList;
