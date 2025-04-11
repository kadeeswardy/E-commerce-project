import React from 'react';
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';

const products = [
  {
    id: 1,
    title: 'Premium Headphones',
    price: '$99.99',
    image: '/1.jpg',
  },
  {
    id: 2,
    title: 'Smart Watch',
    price: '$149.99',
    image: '/1.jpg',
  },
  {
    id: 3,
    title: 'Gaming Console',
    price: '$299.99',
    image: '/1.jpg',
  },
  {
    id: 4,
    title: '4K Smart TV',
    price: '$499.99',
    image: '/1.jpg',
  },
  {
    id: 5,
    title: 'Wireless Mouse',
    price: '$29.99',
    image: '/1.jpg',
  },
  {
    id: 6,
    title: 'Laptop',
    price: '$799.99',
    image: '/1.jpg',
  },
];

const Products: React.FC = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-6 py-6 px-4">
      <Sidebar />
      <main className="w-full md:w-3/4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">All Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Products;