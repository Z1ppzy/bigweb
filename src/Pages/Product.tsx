import { Fragment } from 'react';
export interface Product {
  id: number;
  name: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

export function ProductModal({ product, onClose }: { product: Product | null; onClose: () => void }) {
  const closeProductModal = () => {
    onClose();
  };

  if (!product) {
   
    return null; 
 
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-xl font-bold mb-4">{product.name}</h2>
        <img src={product.imageSrc} alt={product.imageAlt} className="w-full mb-4" />
        <p className="mt-4 text-lg font-medium">{product.price}</p>
        <button onClick={closeProductModal} className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-lg">Close</button>
      </div>
    </div>
  );
}
