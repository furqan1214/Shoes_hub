import { FC } from 'react';
import Image from 'next/image';

interface ProductGridProps {
  title: string;
  products: Array<{
    id: number;
    name: string;
    price: number;
    imageUrl: string;
  }>;
}

const ProductGrid: FC<ProductGridProps> = ({ title, products }) => {
  return (
    <div className="py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center sm:text-left animate-slide-up opacity-0">{title}</h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="group bg-white rounded-lg shadow-sm overflow-hidden animate-slide-up opacity-0 hover:shadow-md transition-shadow duration-300"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <div className="relative h-36 sm:h-48 overflow-hidden">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700" />
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base group-hover:text-red-500 transition-colors duration-300">{product.name}</h3>
                <p className="text-gray-600 mb-2 text-sm sm:text-base">${product.price.toFixed(2)}</p>
                <a 
                  href={`/order?name=${encodeURIComponent(product.name)}&price=${product.price}&image=${encodeURIComponent(product.imageUrl)}`}
                  className="block w-full"
                >
                  <button className="w-full bg-black text-white py-2 rounded hover:bg-red-500 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base">
                    Order now
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
