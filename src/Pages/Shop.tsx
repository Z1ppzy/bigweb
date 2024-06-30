import ProductList from '@/components/Shop/ProductList';

export default function Shop() {
  return (
    <div className='container mx-auto'>
      <h1 className='text-4xl font-bold text-center my-8'>Наши товары</h1>
      <ProductList />
    </div>
  );
}
