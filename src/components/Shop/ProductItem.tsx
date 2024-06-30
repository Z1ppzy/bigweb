import React from 'react';
import { Button } from '../ui/button';

interface ProductItemProps {
  image: string;
  name: string;
  price: number;
  onClick: () => void;
  onAddToCart: () => void;
  onRemoveFromCart: () => void;
  isInCart: boolean;
}

const ProductItem: React.FC<ProductItemProps> = ({ image, name, price, onClick, onAddToCart, onRemoveFromCart, isInCart }) => {
  return (
    <div className="p-4 border rounded-md shadow-md">
      <img src={image} alt={name} className="w-full lg:h-96 object-cover rounded-md mb-4" onClick={onClick} />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-lg ">{price} рублей</p>
      {isInCart ? (
        <Button
          onClick={onRemoveFromCart}
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
        >
          Убрать из корзины
        </Button>
      ) : (
        <Button
          onClick={onAddToCart}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Добавить в корзину
        </Button>
      )}
    </div>
  );
};

export default ProductItem;
