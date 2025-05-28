import React from 'react';
import WhatsAppButton from '../ui/WhatsAppButton';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#343a40] text-white p-8 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">SEEVET Equipamentos Veterinários</h3>
          <p className="text-gray-400">
            Equipamentos de exames de imagens e de suporte à vida para quem ama e cuida de animais, de verdade.
          </p>
          <div className="mt-6">
            <WhatsAppButton 
              phoneNumber="+5511989901011" 
              variant="inline"
              size="md"
              className="mt-4"
            />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Links Úteis</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-gray-300 transition-colors">Home</a></li>
            <li><a href="/raio-x" className="hover:text-gray-300 transition-colors">Raio-X Digital</a></li>
            <li><a href="/suporte-vida" className="hover:text-gray-300 transition-colors">Sistemas de Suporte à Vida</a></li>
            <li><a href="/ultrassom" className="hover:text-gray-300 transition-colors">Ultrassom Portátil</a></li>
            <li><a href="/eletrocardiografo" className="hover:text-gray-300 transition-colors">Eletrocardiógrafo</a></li>
            <li><a href="/contato" className="hover:text-gray-300 transition-colors">Contato</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contato</h3>
          <p className="text-gray-400 mb-2">
            <span className="inline-block w-6 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
            </span>
            <a href="tel:+5511989901011" className="hover:text-gray-300 transition-colors">+55 (11) 98990-1011</a>
          </p>
          <p className="text-gray-400 mb-2">
            <span className="inline-block w-6 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </span>
            <a href="mailto:thiago@seevet.com.br" className="hover:text-gray-300 transition-colors">thiago@seevet.com.br</a>
          </p>
          <p className="text-gray-400">
            <span className="inline-block w-6 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </span>
            Rua Pensilvânia, 391 Brooklin – São Paulo – SP
          </p>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8 pt-8 border-t border-gray-700">
        <p>&copy; {new Date().getFullYear()} Seevet Equipamentos Veterinários. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
