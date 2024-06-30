import React from 'react';

interface ProductItemProps {
  image: string;
  name: string;
  price: number;
  onClick: () => void;
  onAddToCart: () => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ image, name, price, onClick, onAddToCart }) => {
  return (
    <div className="p-4 border rounded-md shadow-md">
      <img src={image} alt={name} className="w-full lg:h-96 object-cover rounded-md mb-4" onClick={onClick} />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-lg text-gray-700">{price} рублей</p>
      <button
        onClick={onAddToCart}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Добавить в корзину
      </button>
    </div>
  );
};

export default ProductItem;
