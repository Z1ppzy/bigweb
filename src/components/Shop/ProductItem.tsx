import React from 'react';
import { motion } from 'framer-motion';

interface ProductItemProps {
  image: string;
  name: string;
  price: number;
  onClick: () => void;
  onAddToCart: () => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ image, name, price, onClick, onAddToCart }) => {
  return (
    <motion.div
      className="p-4 border rounded-md shadow-md"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
    >
      <img src={image} alt={name} className="w-full h-96 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-lg text-gray-700">{price} рублей</p>
      <button
        onClick={e => {
          e.stopPropagation(); 
          onAddToCart();
        }}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Добавить в корзину
      </button>
    </motion.div>
  );
};

export default ProductItem;
