import React from 'react';
import WhatsAppButton from './WhatsAppButton';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  className = '',
}) => {
  return (
    <section className={`relative overflow-hidden bg-gradient-to-r from-[#0056b3] to-[#003b7a] text-white py-16 ${className}`}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            {subtitle && (
              <p className="text-[#4caf50] font-semibold mb-2">{subtitle}</p>
            )}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-lg mb-6 text-gray-200">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#produtos" 
                className="bg-[#4caf50] hover:bg-[#087f23] text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 text-center"
              >
                Conheça nossos produtos
              </a>
              <WhatsAppButton 
                phoneNumber="+5511989901011" 
                variant="inline"
                size="md"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src={imageSrc} 
              alt={imageAlt} 
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFFFFF" d="M47.1,-57.5C59.9,-47.3,68.7,-31.6,73.2,-14.2C77.7,3.2,77.8,22.2,69.2,35.8C60.6,49.4,43.2,57.5,25.9,63.2C8.6,68.9,-8.6,72.2,-24.8,68.1C-41,64,-56.2,52.7,-65.2,37.5C-74.2,22.3,-77,3.2,-72.7,-13.8C-68.4,-30.8,-57,-45.8,-43.1,-55.7C-29.2,-65.6,-12.9,-70.4,2.4,-73.3C17.8,-76.2,34.3,-67.7,47.1,-57.5Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-1/4 h-full opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFFFFF" d="M42.8,-62.2C54.9,-54.3,63.6,-40.9,69.9,-26.2C76.2,-11.5,80.1,4.6,76.9,19.5C73.7,34.4,63.3,48.2,49.9,57.9C36.4,67.6,19.9,73.2,2.4,71.3C-15.1,69.4,-33.3,60,-45.8,47.1C-58.3,34.2,-65.1,17.1,-68.9,-2.2C-72.7,-21.5,-73.5,-43,-64.1,-55.9C-54.7,-68.8,-35.1,-73.1,-17.8,-73.9C-0.5,-74.7,15.5,-72,30.7,-70.1C45.9,-68.2,30.7,-70.1,42.8,-62.2Z" transform="translate(100 100)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
