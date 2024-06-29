import React from 'react';

interface ProductModalProps {
  image: string;
  name: string;
  description: string;
  price: number;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ image, name, description, price, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <button className="absolute top-2 right-2 text-gray-700" onClick={onClose}>X</button>
        <img src={image} alt={name} className="w-full h-64 object-cover rounded-md mb-4" />
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-lg text-gray-700 mb-4">{price} рублей</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductModal;
