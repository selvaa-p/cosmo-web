// src\app\components\ProductCard.jsx
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <Link href={product.link} passHref>
      <div 
       data-testid="product-card" 
       data-link={product.link}
       className="cursor-pointer relative group overflow-hidden rounded-lg shadow-lg bg-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:rotate-2 h-full">
        <div className="absolute inset-0 bg-gradient-to-t from-highlight via-transparent to-highlight opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
        <div className="p-6 flex flex-col items-center text-center transition-transform duration-300 h-full">
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            className="mx-auto transition-transform duration-500 group-hover:scale-110"
          />
          <h3 className="text-2xl font-semibold text-text mt-4">{product.name}</h3>
          <p className="text-text mt-2">{product.description}</p>
        </div>
      </div>
    </Link>
  );
}