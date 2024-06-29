import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CartProps {
  cartItems: { id: number; name: string; price: number }[];
  onRemoveFromCart: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, onRemoveFromCart }) => {
  return (
    <div className="fixed bottom-0 right-0 m-4 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold">Корзина</h2>
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
              <span>{item.price} рублей</span>
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
    </div>
  );
};

export default Cart;
