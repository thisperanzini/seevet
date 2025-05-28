import React from 'react';
import WhatsAppButton from '../ui/WhatsAppButton';

const Header: React.FC = () => {
  return (
    <header className="bg-[#0056b3] text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0">
            {/* Placeholder for Logo - to be replaced with actual image/SVG */}
            SEEVET Equipamentos Veterinários
          </div>
          
          <div className="flex items-center space-x-4">
            <WhatsAppButton 
              phoneNumber="+5511989901011" 
              variant="inline"
              size="sm"
              className="hidden md:flex"
            />
            
            <nav className="hidden md:block">
              <ul className="flex space-x-4">
                <li><a href="/" className="hover:text-gray-300 transition-colors">Home</a></li>
                <li><a href="/raio-x" className="hover:text-gray-300 transition-colors">Raio-X Digital</a></li>
                <li><a href="/suporte-vida" className="hover:text-gray-300 transition-colors">Suporte à Vida</a></li>
                <li><a href="/ultrassom" className="hover:text-gray-300 transition-colors">Ultrassom</a></li>
                <li><a href="/eletrocardiografo" className="hover:text-gray-300 transition-colors">Eletrocardiógrafo</a></li>
                <li><a href="/contato" className="hover:text-gray-300 transition-colors">Contato</a></li>
              </ul>
            </nav>
            
            {/* Mobile menu button */}
            <button className="md:hidden text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile navigation - hidden by default */}
        <div className="md:hidden hidden">
          <ul className="pt-4 pb-3 space-y-2">
            <li><a href="/" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Home</a></li>
            <li><a href="/raio-x" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Raio-X Digital</a></li>
            <li><a href="/suporte-vida" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Suporte à Vida</a></li>
            <li><a href="/ultrassom" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Ultrassom</a></li>
            <li><a href="/eletrocardiografo" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Eletrocardiógrafo</a></li>
            <li><a href="/contato" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Contato</a></li>
            <li className="pt-2">
              <WhatsAppButton 
                phoneNumber="+5511989901011" 
                variant="inline"
                size="sm"
                className="w-full justify-center"
              />
            </li>
          </ul>
        </div>
      </div>
      
      {/* Fixed WhatsApp button for mobile */}
      <div className="md:hidden">
        <WhatsAppButton 
          phoneNumber="+5511989901011" 
          variant="fixed"
          size="lg"
        />
      </div>
    </header>
  );
};

export default Header;
