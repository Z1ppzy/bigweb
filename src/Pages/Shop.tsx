import { Fragment, useState } from 'react';
import { Transition,Dialog } from '@headlessui/react';
import { Product, ProductModal } from './Product';

const products: Product[] = [
    {
      id: 1,
      name: 'Herald',
      price: '48₽',
      imageSrc: '/public/tn.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      href: '/herald',
    },
    {
      id: 2,
      name: 'Guardian',
      price: '35₽',
      imageSrc: '/public/002.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      href: '/guardian',
    },
    {
      id: 3,
      name: 'Archong',
      price: '89₽',
      imageSrc: '/public/003.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      href: '/archong',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      price: '35₽',
      imageSrc: '/public/004.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      href: '/mechanical-pencil',
    },
  
];

export default function Shop() {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
    setOpen(false);
  };

  return (
    <>
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Магазин</h1>
        <h2 className="sr-only">Товары</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <button onClick={() => openProductModal(product)} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg product-card">
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
              </button>
            </div>
          ))}
        </div>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeProductModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <ProductModal product={selectedProduct!} onClose={closeProductModal} />
          </div>
        </Dialog>
      </Transition.Root>
    </div>
    </>
  );
}
