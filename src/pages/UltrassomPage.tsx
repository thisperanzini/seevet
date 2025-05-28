import React from 'react';
import HeroSection from '../components/ui/HeroSection';
import WhatsAppButton from '../components/ui/WhatsAppButton';

const UltrassomPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="ULTRASSOM PORTÁTIL VETERINÁRIO"
        subtitle="DIAGNÓSTICO PRECISO E MOBILIDADE"
        description="Excelente relação custo X benefício, alta performance e confiabilidade diagnóstica para clínicas e veterinários volantes."
        imageSrc="/images/ultrassom-hero.jpg" // Placeholder - será substituído pela imagem real
        imageAlt="Equipamento de Ultrassom Portátil Veterinário"
      />

      {/* Conteúdo Principal */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-[#0056b3] mb-6">TECNOLOGIA AVANÇADA PARA DIAGNÓSTICO POR IMAGEM</h2>
              
              <p className="mb-4 text-gray-700">
                Os ultrassons INVICTUS possuem softwares que auxiliam em exames de imagem geral. Por ser um equipamento shared service, é totalmente indicado para cuidados críticos, serviços de urgência e emergência, anestesiologia e demais usos em centro cirúrgicos, e demais usos como ambientes cirúrgicos e ambientes rurais, oferecendo mobilidade no atendimento e excelente relação custo X benefício.
              </p>
              
              <p className="mb-4 text-gray-700">
                Nossa linha de ultrassons portáteis oferece:
              </p>
              
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Alta qualidade de imagem para diagnósticos precisos</li>
                <li>Portabilidade e facilidade de transporte</li>
                <li>Interface intuitiva e fácil operação</li>
                <li>Bateria de longa duração para uso em campo</li>
                <li>Diversas sondas disponíveis para diferentes aplicações</li>
                <li>Software específico para medicina veterinária</li>
                <li>Armazenamento digital de imagens para fácil acesso e compartilhamento</li>
              </ul>
              
              <div className="mt-8">
                <WhatsAppButton 
                  phoneNumber="+5511989901011" 
                  message="Olá! Gostaria de saber mais sobre os equipamentos de Ultrassom Portátil Veterinário."
                  variant="inline"
                  size="lg"
                />
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-gray-100 rounded-lg p-8 h-full">
                <h3 className="text-xl font-bold text-[#0056b3] mb-4">APLICAÇÕES NA MEDICINA VETERINÁRIA</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-[#4caf50] p-3 rounded-full text-white mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Diagnóstico Abdominal</h4>
                      <p className="text-gray-700">Avaliação precisa de órgãos internos, identificação de alterações e patologias.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#4caf50] p-3 rounded-full text-white mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Cardiologia</h4>
                      <p className="text-gray-700">Avaliação da função cardíaca, detecção de alterações estruturais e funcionais.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#4caf50] p-3 rounded-full text-white mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Reprodução</h4>
                      <p className="text-gray-700">Diagnóstico de gestação, avaliação de órgãos reprodutivos e acompanhamento gestacional.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#4caf50] p-3 rounded-full text-white mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Musculoesquelético</h4>
                      <p className="text-gray-700">Avaliação de tendões, ligamentos, músculos e articulações.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#4caf50] p-3 rounded-full text-white mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Atendimento em Campo</h4>
                      <p className="text-gray-700">Diagnóstico imediato em fazendas, haras e locais de difícil acesso.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Produtos */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0056b3]">NOSSOS EQUIPAMENTOS DE ULTRASSOM</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Produto 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/images/ultrassom-magnus-x5.jpg" // Placeholder - será substituído pela imagem real
                  alt="Ultrassom Veterinário Magnus X5" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0056b3] mb-2">Ultrassom Veterinário Magnus X5</h3>
                <p className="text-gray-700 mb-4">
                  Família de Ultrassom Trolley, transportável, compacto e com aplicações de performance elevada para todos ambientes veterinários.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <a 
                    href="/produto/ultrassom-magnus-x5" 
                    className="bg-[#0056b3] text-white py-2 px-4 rounded-md hover:bg-[#003b7a] transition-colors duration-300 text-center"
                  >
                    Ver detalhes
                  </a>
                  <WhatsAppButton 
                    phoneNumber="+5511989901011" 
                    message="Olá! Gostaria de saber mais sobre o Ultrassom Veterinário Magnus X5."
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
                  src="/images/ultrassom-invictus.jpg" // Placeholder - será substituído pela imagem real
                  alt="Ultrassom Veterinário Portátil Invictus" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0056b3] mb-2">Ultrassom Portátil Invictus</h3>
                <p className="text-gray-700 mb-4">
                  Equipamento portátil com alta performance e confiabilidade diagnóstica, ideal para atendimentos em clínicas e em campo.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <a 
                    href="/produto/ultrassom-invictus" 
                    className="bg-[#0056b3] text-white py-2 px-4 rounded-md hover:bg-[#003b7a] transition-colors duration-300 text-center"
                  >
                    Ver detalhes
                  </a>
                  <WhatsAppButton 
                    phoneNumber="+5511989901011" 
                    message="Olá! Gostaria de saber mais sobre o Ultrassom Portátil Invictus."
                    variant="inline"
                    size="sm"
                    className="flex-1 justify-center"
                  />
                </div>
              </div>
            </div>
            
            {/* Produto 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/images/ultrassom-dominus.jpg" // Placeholder - será substituído pela imagem real
                  alt="Ultrassom de Mão Dominus Vet" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0056b3] mb-2">Dominus Vet</h3>
                <p className="text-gray-700 mb-4">
                  O Ultrassom de mão Dominus alia tecnologia e mobilidade permitindo a geração de imagens de qualidade em qualquer ambiente. Com até 4 horas de uso de bateria ativa, ele possui medição clínica confiável, conexão rápida com Android e IOS e predefinições personalizadas para clínicos.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <a 
                    href="/produto/ultrassom-dominus" 
                    className="bg-[#0056b3] text-white py-2 px-4 rounded-md hover:bg-[#003b7a] transition-colors duration-300 text-center"
                  >
                    Ver detalhes
                  </a>
                  <WhatsAppButton 
                    phoneNumber="+5511989901011" 
                    message="Olá! Gostaria de saber mais sobre o Ultrassom de Mão Dominus Vet."
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

      {/* Seção de Destaque Dominus */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#0056b3] to-[#00bcd4] text-white rounded-lg shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">DOMINUS VET - O PODER DA PRECISÃO NA PALMA DA SUA MÃO</h2>
                <p className="mb-6">
                  O Ultrassom de mão Dominus alia tecnologia e mobilidade permitindo a geração de imagens de qualidade em qualquer ambiente. Com até 4 horas de uso de bateria ativa, ele possui medição clínica confiável, conexão rápida com Android e IOS e predefinições personalizadas para clínicos. São seis sondas e mais de 30 parâmetros à disposição de um diagnóstico eficiente.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                    <span className="font-semibold">4h</span> de bateria
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                    <span className="font-semibold">6</span> sondas disponíveis
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                    <span className="font-semibold">30+</span> parâmetros
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                    Conexão com <span className="font-semibold">Android e iOS</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="/produto/ultrassom-dominus" 
                    className="bg-white text-[#0056b3] py-3 px-6 rounded-md hover:bg-gray-100 transition-colors duration-300 text-center font-medium"
                  >
                    Conheça o lançamento
                  </a>
                  <WhatsAppButton 
                    phoneNumber="+5511989901011" 
                    message="Olá! Gostaria de saber mais sobre o Ultrassom de Mão Dominus Vet."
                    variant="inline"
                    size="md"
                    className="bg-[#4caf50] hover:bg-[#087f23]"
                  />
                </div>
              </div>
              
              <div className="md:w-1/2 p-8">
                <img 
                  src="/images/ultrassom-dominus-destaque.jpg" // Placeholder - será substituído pela imagem real
                  alt="Ultrassom de Mão Dominus Vet" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-12 bg-[#0056b3] text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">SOLICITE UMA COTAÇÃO</h2>
                <p className="mb-6">
                  Estamos prontos para ajudar você a encontrar o equipamento de Ultrassom ideal para sua clínica ou atendimento móvel. Preencha o formulário ao lado ou entre em contato diretamente:
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
                  message="Olá! Gostaria de solicitar uma cotação para equipamentos de Ultrassom Veterinário."
                  variant="inline"
                  size="lg"
                  className="w-full justify-center"
                />
              </div>
              
              <div className="md:w-1/2 p-8 md:p-12">
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

export default UltrassomPage;
