import React from 'react';
import HeroSection from '../components/ui/HeroSection';
import WhatsAppButton from '../components/ui/WhatsAppButton';

const SuporteVidaPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="SISTEMAS DE SUPORTE À VIDA VETERINÁRIO"
        subtitle="MONITORAMENTO AVANÇADO PARA PROCEDIMENTOS SEGUROS"
        description="Monitores e oxímetros de alta tecnologia para garantir a segurança dos procedimentos veterinários e o bem-estar dos animais."
        imageSrc="/images/suporte-vida-hero.jpg" // Placeholder - será substituído pela imagem real
        imageAlt="Equipamentos de Suporte à Vida Veterinário"
      />

      {/* Conteúdo Principal */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-[#0056b3] mb-6">TECNOLOGIA DE PONTA PARA MONITORAMENTO VETERINÁRIO</h2>
              
              <p className="mb-4 text-gray-700">
                Os sistemas de suporte à vida da Alfamed proporcionam monitoramento preciso e confiável dos sinais vitais durante procedimentos veterinários, garantindo maior segurança e eficiência no atendimento.
              </p>
              
              <p className="mb-4 text-gray-700">
                Com design intuitivo e funcionalidades específicas para a medicina veterinária, nossos equipamentos oferecem:
              </p>
              
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Monitoramento preciso de múltiplos parâmetros vitais</li>
                <li>Telas touch screen de alta resolução</li>
                <li>Alarmes audiovisuais configuráveis</li>
                <li>Visualização de tendências para acompanhamento da evolução do paciente</li>
                <li>Software de gestão de dados compatível</li>
                <li>Tecnologia para baixa perfusão e movimentação</li>
                <li>Design compacto e portátil para diferentes ambientes</li>
              </ul>
              
              <div className="mt-8">
                <WhatsAppButton 
                  phoneNumber="+5511989901011" 
                  message="Olá! Gostaria de saber mais sobre os Sistemas de Suporte à Vida Veterinário."
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
                      <h4 className="font-semibold text-gray-800">Procedimentos Cirúrgicos</h4>
                      <p className="text-gray-700">Monitoramento contínuo durante cirurgias, garantindo segurança e precisão.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#4caf50] p-3 rounded-full text-white mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Anestesia</h4>
                      <p className="text-gray-700">Controle preciso dos sinais vitais durante procedimentos anestésicos.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#4caf50] p-3 rounded-full text-white mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Cuidados Intensivos</h4>
                      <p className="text-gray-700">Monitoramento 24 horas para pacientes em estado crítico.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#4caf50] p-3 rounded-full text-white mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Exames de Rotina</h4>
                      <p className="text-gray-700">Avaliação rápida e precisa dos sinais vitais durante consultas.</p>
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
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0056b3]">NOSSOS EQUIPAMENTOS DE SUPORTE À VIDA</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Produto 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/images/oximetro-sense10.jpg" // Placeholder - será substituído pela imagem real
                  alt="Oxímetro Sense 10" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0056b3] mb-2">Oxímetro Sense 10</h3>
                <ul className="list-disc pl-5 mb-4 text-gray-700 text-sm">
                  <li>Tela com onda pletismográfica</li>
                  <li>Função de alarme audiovisual</li>
                  <li>Visualização de tabelas de tendência</li>
                  <li>Software de gestão de dados compatível</li>
                  <li>Indicador de Perfusão</li>
                  <li>Tecnologia para baixa perfusão e movimentação</li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <a 
                    href="/produto/oximetro-sense10" 
                    className="bg-[#0056b3] text-white py-2 px-4 rounded-md hover:bg-[#003b7a] transition-colors duration-300 text-center"
                  >
                    Ver detalhes
                  </a>
                  <WhatsAppButton 
                    phoneNumber="+5511989901011" 
                    message="Olá! Gostaria de saber mais sobre o Oxímetro Sense 10."
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
                  src="/images/monitor-vita-i120.jpg" // Placeholder - será substituído pela imagem real
                  alt="Monitor Vita i120" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0056b3] mb-2">Monitor Vita i120</h3>
                <p className="text-gray-700 mb-4">
                  Apresentando o design compacto ultra slim e capacidade de tela de full touch screen, os monitores Vita i Series proporcionam experiência otimizada para atendimentos veterinários.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <a 
                    href="/produto/monitor-vita-i120" 
                    className="bg-[#0056b3] text-white py-2 px-4 rounded-md hover:bg-[#003b7a] transition-colors duration-300 text-center"
                  >
                    Ver detalhes
                  </a>
                  <WhatsAppButton 
                    phoneNumber="+5511989901011" 
                    message="Olá! Gostaria de saber mais sobre o Monitor Vita i120."
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
                  src="/images/monitor-vita-i80.jpg" // Placeholder - será substituído pela imagem real
                  alt="Monitor Vita i80" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0056b3] mb-2">Monitor Vita i80</h3>
                <p className="text-gray-700 mb-4">
                  Todos os benefícios das tecnologias de ponta, design intuitivo e funcionalidades para uma monitoração segura em diversos ambientes veterinários.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <a 
                    href="/produto/monitor-vita-i80" 
                    className="bg-[#0056b3] text-white py-2 px-4 rounded-md hover:bg-[#003b7a] transition-colors duration-300 text-center"
                  >
                    Ver detalhes
                  </a>
                  <WhatsAppButton 
                    phoneNumber="+5511989901011" 
                    message="Olá! Gostaria de saber mais sobre o Monitor Vita i80."
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
                  Estamos prontos para ajudar você a encontrar o equipamento de Suporte à Vida ideal para sua clínica ou hospital veterinário. Preencha o formulário ao lado ou entre em contato diretamente:
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
                  message="Olá! Gostaria de solicitar uma cotação para Sistemas de Suporte à Vida Veterinário."
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

export default SuporteVidaPage;
