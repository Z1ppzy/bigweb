import React, { useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

interface ProductModalProps {
  image: string;
  name: string;
  description: string;
  price: number;
  onClose: () => void;
  onAddToCart: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ image, name, description, price, onClose, onAddToCart }) => {
  const handleEscClose = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  const handleClickOutside = (event: MouseEvent) => {
    const modal = document.getElementById('product-modal');
    if (modal && !modal.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscClose);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEscClose);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleEscClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        id="product-modal"
        className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
      >
        <button className="absolute top-2 right-2 text-gray-700" onClick={onClose}>X</button>
        <img src={image} alt={name} className="w-full h-64 object-cover rounded-md mb-4" />
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-lg text-gray-700 mb-4">{price} рублей</p>
        <p>{description}</p>
        <button
          onClick={onAddToCart}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Добавить в корзину
        </button>
      </motion.div>
    </div>
  );
};

export default ProductModal;
