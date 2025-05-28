import React from 'react';
import HeroSection from '../components/ui/HeroSection';
import WhatsAppButton from '../components/ui/WhatsAppButton';

const RaioXPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="RAIOS-X DIGITAL VETERINÁRIO"
        subtitle="TECNOLOGIA DE PONTA PARA DIAGNÓSTICOS PRECISOS"
        description="Alta potência, versatilidade e qualidade na realização de exames de radiologia veterinária para animais de pequeno, médio e grande porte."
        imageSrc="/images/raio-x-hero.jpg" // Placeholder - será substituído pela imagem real
        imageAlt="Equipamento de Raio-X Digital Veterinário"
      />

      {/* Conteúdo Principal */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-[#0056b3] mb-6">A MELHOR TECNOLOGIA EM RAIOS-X PARA MEDICINA VETERINÁRIA</h2>
              
              <p className="mb-4 text-gray-700">
                A linha Centauro da VMI foi desenvolvida para exames de alta performance e definição de imagens. Sistema móvel de raios-X veterinário de alta mobilidade e versatilidade para animais de pequeno, médio e grande porte ou exames em áreas rurais de grandes animais no seu ambiente natural.
              </p>
              
              <p className="mb-4 text-gray-700">
                Com tecnologia avançada e design pensado especificamente para o uso veterinário, nossos equipamentos de raio-x digital oferecem:
              </p>
              
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Alta definição de imagem para diagnósticos precisos</li>
                <li>Mobilidade e versatilidade para diferentes ambientes</li>
                <li>Baixa dose de radiação, garantindo segurança para o operador e o animal</li>
                <li>Interface intuitiva e fácil operação</li>
                <li>Armazenamento digital de imagens para fácil acesso e compartilhamento</li>
                <li>Suporte técnico especializado</li>
              </ul>
              
              <div className="mt-8">
                <WhatsAppButton 
                  phoneNumber="+5511989901011" 
                  message="Olá! Gostaria de saber mais sobre os equipamentos de Raio-X Digital Veterinário."
                  variant="inline"
                  size="lg"
                />
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-gray-100 rounded-lg p-8 h-full">
                <h3 className="text-xl font-bold text-[#0056b3] mb-4">ESPECIFICAÇÕES TÉCNICAS</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800">Potência</h4>
                    <p className="text-gray-700">Alta potência para exames de qualidade em animais de diferentes portes</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800">Mobilidade</h4>
                    <p className="text-gray-700">Sistema móvel com rodízios de alta resistência para fácil locomoção</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800">Detector Digital</h4>
                    <p className="text-gray-700">Detector de alta resolução para imagens nítidas e detalhadas</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800">Software</h4>
                    <p className="text-gray-700">Software intuitivo com ferramentas específicas para análise veterinária</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800">Compatibilidade</h4>
                    <p className="text-gray-700">Compatível com sistemas PACS e DICOM para integração com outros equipamentos</p>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <img 
                    src="/images/raio-x-specs.jpg" // Placeholder - será substituído pela imagem real
                    alt="Especificações do Raio-X Digital Veterinário" 
                    className="mx-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Produtos */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0056b3]">NOSSOS EQUIPAMENTOS DE RAIO-X</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Produto 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/images/raio-x-produto1.jpg" // Placeholder - será substituído pela imagem real
                  alt="Raio-X Digital Centauro" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0056b3] mb-2">Raio-X Digital Centauro</h3>
                <p className="text-gray-700 mb-4">
                  Sistema completo de radiologia digital para clínicas e hospitais veterinários, com alta definição de imagem e interface intuitiva.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <a 
                    href="/produto/raio-x-centauro" 
                    className="bg-[#0056b3] text-white py-2 px-4 rounded-md hover:bg-[#003b7a] transition-colors duration-300 text-center"
                  >
                    Ver detalhes
                  </a>
                  <WhatsAppButton 
                    phoneNumber="+5511989901011" 
                    message="Olá! Gostaria de saber mais sobre o Raio-X Digital Centauro."
                    variant="inline"
                    size="sm"
                    className="flex-1 justify-center"
                  />
                </div>
              </div>
            </div>
            
            {/* Produto 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/images/raio-x-produto2.jpg" // Placeholder - será substituído pela imagem real
                  alt="Raio-X Móvel Veterinário" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0056b3] mb-2">Raio-X Móvel Veterinário</h3>
                <p className="text-gray-700 mb-4">
                  Equipamento portátil ideal para atendimentos em campo ou em diferentes ambientes da clínica, com alta mobilidade e qualidade de imagem.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <a 
                    href="/produto/raio-x-movel" 
                    className="bg-[#0056b3] text-white py-2 px-4 rounded-md hover:bg-[#003b7a] transition-colors duration-300 text-center"
                  >
                    Ver detalhes
                  </a>
                  <WhatsAppButton 
                    phoneNumber="+5511989901011" 
                    message="Olá! Gostaria de saber mais sobre o Raio-X Móvel Veterinário."
                    variant="inline"
                    size="sm"
                    className="flex-1 justify-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-[#0056b3] text-white rounded-lg shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">SOLICITE UMA COTAÇÃO</h2>
                <p className="mb-6">
                  Estamos prontos para ajudar você a encontrar o equipamento de Raio-X ideal para sua clínica ou hospital veterinário. Preencha o formulário ao lado ou entre em contato diretamente:
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <span className="text-[#4caf50] mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </span>
                    <p>(11) 98990-1011</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#4caf50] mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </span>
                    <p>thiago@seevet.com.br</p>
                  </div>
                </div>
                
                <WhatsAppButton 
                  phoneNumber="+5511989901011" 
                  message="Olá! Gostaria de solicitar uma cotação para equipamentos de Raio-X Digital Veterinário."
                  variant="inline"
                  size="lg"
                  className="w-full justify-center"
                />
              </div>
              
              <div className="md:w-1/2 bg-white p-8 md:p-12">
                {/* Typeform embedado */}
                <div data-tf-live="01JV7M7VC1PKDY3S4AM5SDG1RF"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* WhatsApp Button Fixo */}
      <WhatsAppButton 
        phoneNumber="+5511989901011" 
        variant="fixed"
        size="lg"
      />
    </div>
  );
};

export default RaioXPage;
