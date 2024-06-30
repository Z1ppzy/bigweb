import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CartModalProps {
  cartItems: { id: number; name: string; price: number; quantity: number }[];
  onRemoveFromCart: (id: number) => void;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ cartItems, onRemoveFromCart, onClose }) => {
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <button className="absolute top-2 right-2 text-gray-700" onClick={onClose}>X</button>
        <h2 className="text-2xl font-bold mb-4">Корзина</h2>
        <ul>
          {cartItems.map((item) => (
            <AnimatePresence key={item.id}>
              <motion.li
                className="flex justify-between items-center mt-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
              >
                <span>{item.name}</span>
                <span>{item.price} рублей x {item.quantity}</span>
                <button
                  onClick={() => onRemoveFromCart(item.id)}
                  className="ml-4 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700"
                >
                  Удалить
                </button>
              </motion.li>
            </AnimatePresence>
          ))}
        </ul>
        <div className="mt-4 text-right">
          <p className="text-lg font-semibold">Итого: {totalAmount} рублей</p>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
