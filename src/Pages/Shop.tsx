import { Link } from 'react-router-dom';
import { useState } from 'react'; 
import { Product } from './Product';

const products: Product[] = [
  {
    id: 1,
    name: 'Herald',
    price: '48₽',
    imageSrc: '/public/tn.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    href: '/herald',
    description: "df"
  },
  {
    id: 1,
    name: 'Herald',
    price: '48₽',
    imageSrc: '/public/tn.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    href: '/herald',
    description: "df"
  },
  {
    id: 2,
    name: 'Guardian',
    price: '35₽',
    imageSrc: '/public/002.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    href: '/guardian',
    description: "df"
  },
  {
    id: 3,
    name: 'Archong',
    price: '89₽',
    imageSrc: '/public/003.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    href: '/archong',
    description: "df"
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    price: '35₽',
    imageSrc: '/public/004.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    href: '/mechanical-pencil',
    description: "df"
  },
];
//yty
export default function Shop() {
  const [, setSelectedProductId] = useState<number | null>(null); 

  const handleCardClick = (productId: number) => { 
    setSelectedProductId(productId); 
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Магазин</h1>
        <h2 className="sr-only">Товары</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <Link to={`/shop/${product.id}`} className="group relative">
                <div onClick={() => handleCardClick(product.id)} className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg product-card">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                  <div className="flex flex-col items-center mt-4">
                    <h3 className="text-sm text-gray-700">{product.name}</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
