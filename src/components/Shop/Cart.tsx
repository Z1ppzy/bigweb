import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

interface CartProps {
  cartItems: { id: number; name: string; price: number; quantity: number }[];
  onToggleCartModal: () => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, onToggleCartModal }) => {
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="fixed bottom-0 right-0 m-4 p-4 bg-white shadow-lg rounded-lg cursor-pointer" onClick={onToggleCartModal}>
      <h2 className="text-xl font-semibold flex items-center">
        <FaShoppingCart />
        {totalItems > 0 && (
          <span className="ml-2 bg-red-500 text-white rounded-full px-2 text-sm">{totalItems}</span>
        )}
      </h2>
    </div>
  );
};

export default Cart;
