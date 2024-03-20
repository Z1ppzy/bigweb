import { useState } from 'react'; // Импортируем useState
import { Product } from './Product';
import ProductDetail from './'; // Импортируем компонент с деталями товара

import { useHistory } from 'react-router-dom';

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

export default function Shop() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null); // Состояние для отслеживания выбранного товара
  const [showModal, setShowModal] = useState(false); // Состояние для отображения модального окна
  const history = useHistory(); // Используем useHistory для изменения URL

  // Функция для открытия модального окна и установки выбранного товара
  const handleCardClick = (product: Product) => {
    setSelectedProduct(product); // Устанавливаем выбранный товар
    setShowModal(true); // Открываем модальное окно
  };

  // Функция для закрытия модального окна
  const closeModal = () => {
    setShowModal(false); // Закрываем модальное окно
    setSelectedProduct(null); // Сбрасываем выбранный товар
  };

  // Функция для перехода на страницу с выбранным товаром
  const goToProductPage = (productId: number) => {
    history.push(`/shop/${productId}`); // Изменяем URL
  };

  return (
    <>
      {/* Ваш контент магазина здесь */}
      {/* Пример использования модального окна */}
      {selectedProduct && (
        <ProductDetail product={selectedProduct} onClose={closeModal} />
      )}
    </>
  );
}
