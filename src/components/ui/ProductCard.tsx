import React from 'react';
import { Link } from 'react-router-dom';
import WhatsAppButton from './WhatsAppButton';

interface ProductCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  linkTo: string;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  linkTo,
  className = '',
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 ${className}`}>
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={imageAlt} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-[#0056b3] mb-2">{title}</h3>
        <p className="text-gray-700 mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-col sm:flex-row gap-2 mt-4">
          <Link 
            to={linkTo}
            className="bg-[#0056b3] text-white py-2 px-4 rounded-md hover:bg-[#003b7a] transition-colors duration-300 text-center"
          >
            Saiba mais
          </Link>
          <WhatsAppButton 
            phoneNumber="+5511989901011" 
            message={`Olá! Gostaria de saber mais sobre ${title}.`}
            variant="inline"
            size="sm"
            className="flex-1 justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
