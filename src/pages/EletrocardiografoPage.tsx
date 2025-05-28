import React from 'react';
import HeroSection from '../components/ui/HeroSection';
import WhatsAppButton from '../components/ui/WhatsAppButton';

const EletrocardiografoPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="ELETROCARDIÓGRAFO VETERINÁRIO"
        subtitle="DIAGNÓSTICO CARDÍACO PRECISO E CONFIÁVEL"
        description="Equipamento de alta tecnologia, com design compacto e leve para exames veterinários confiáveis e precisos."
        imageSrc="/images/eletrocardiografo-hero.jpg" // Placeholder - será substituído pela imagem real
        imageAlt="Eletrocardiógrafo Veterinário"
      />

      {/* Conteúdo Principal */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-[#0056b3] mb-6">DIAGNÓSTICO CARDÍACO DE ALTA PRECISÃO</h2>
              
              <p className="mb-4 text-gray-700">
                O Eletrocardiógrafo Veterinário Digital Portátil da Contec é um equipamento de alta tecnologia, com design compacto e leve, pesando apenas 1kg, é ideal para triagem, checkups e transportes. Confiável e preciso para exames veterinários.
              </p>
              
              <p className="mb-4 text-gray-700">
                Nosso eletrocardiógrafo veterinário oferece:
              </p>
              
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Design compacto e leve (apenas 1kg) para fácil transporte</li>
                <li>Tela LCD colorida de alta resolução</li>
                <li>Operação simples e intuitiva</li>
                <li>Bateria recarregável de longa duração</li>
                <li>Memória interna para armazenamento de exames</li>
                <li>Software específico para medicina veterinária</li>
                <li>Conexão com computador para transferência de dados</li>
                <li>Impressão de relatórios detalhados</li>
              </ul>
              
              <div className="mt-8">
                <WhatsAppButton 
                  phoneNumber="+5511989901011" 
                  message="Olá! Gostaria de saber mais sobre o Eletrocardiógrafo Veterinário."
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
                      <h4 className="font-semibold text-gray-800">Avaliação Cardíaca Completa</h4>
                      <p className="text-gray-700">Diagnóstico preciso de arritmias, hipertrofias e outras alterações cardíacas.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#4caf50] p-3 rounded-full text-white mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Exames Pré-Anestésicos</h4>
                      <p className="text-gray-700">Avaliação cardíaca antes de procedimentos cirúrgicos para garantir segurança.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#4caf50] p-3 rounded-full text-white mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Checkups de Rotina</h4>
                      <p className="text-gray-700">Monitoramento cardíaco preventivo, especialmente em animais idosos ou com predisposição a problemas cardíacos.</p>
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
                      <p className="text-gray-700">Diagnóstico cardíaco em fazendas, haras e locais de difícil acesso.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <img 
                    src="/images/eletrocardiografo-aplicacao.jpg" // Placeholder - será substituído pela imagem real
                    alt="Aplicação do Eletrocardiógrafo Veterinário" 
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
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0056b3]">NOSSO ELETROCARDIÓGRAFO VETERINÁRIO</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img 
                    src="/images/eletrocardiografo-contec.jpg" // Placeholder - será substituído pela imagem real
                    alt="Eletrocardiógrafo Portátil ECG – Contec" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <h3 className="text-xl font-bold text-[#0056b3] mb-2">Eletrocardiógrafo Portátil ECG – Contec</h3>
                  <p className="text-gray-700 mb-4">
                    Equipamento de alta tecnologia, com design compacto e leve, pesando apenas 1kg, é ideal para triagem, checkups e transportes. Confiável e preciso para exames veterinários.
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center">
                      <span className="w-4 h-4 bg-[#0056b3] rounded-full mr-2"></span>
                      <p className="text-gray-700">Peso: 1kg</p>
                    </div>
                    <div className="flex items-center">
                      <span className="w-4 h-4 bg-[#0056b3] rounded-full mr-2"></span>
                      <p className="text-gray-700">Tela LCD colorida</p>
                    </div>
                    <div className="flex items-center">
                      <span className="w-4 h-4 bg-[#0056b3] rounded-full mr-2"></span>
                      <p className="text-gray-700">Bateria recarregável</p>
                    </div>
                    <div className="flex items-center">
                      <span className="w-4 h-4 bg-[#0056b3] rounded-full mr-2"></span>
                      <p className="text-gray-700">Memória interna</p>
                    </div>
                    <div className="flex items-center">
                      <span className="w-4 h-4 bg-[#0056b3] rounded-full mr-2"></span>
                      <p className="text-gray-700">Software específico para veterinária</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <a 
                      href="/produto/eletrocardiografo-contec" 
                      className="bg-[#0056b3] text-white py-2 px-4 rounded-md hover:bg-[#003b7a] transition-colors duration-300 text-center"
                    >
                      Ver detalhes
                    </a>
                    <WhatsAppButton 
                      phoneNumber="+5511989901011" 
                      message="Olá! Gostaria de saber mais sobre o Eletrocardiógrafo Portátil ECG – Contec."
                      variant="inline"
                      size="sm"
                      className="flex-1 justify-center"
                    />
                  </div>
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
                  Estamos prontos para ajudar você a encontrar o Eletrocardiógrafo ideal para sua clínica ou hospital veterinário. Preencha o formulário ao lado ou entre em contato diretamente:
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
                  message="Olá! Gostaria de solicitar uma cotação para o Eletrocardiógrafo Veterinário."
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

export default EletrocardiografoPage;
