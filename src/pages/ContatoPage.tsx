import React from 'react';
import HeroSection from '../components/ui/HeroSection';
import WhatsAppButton from '../components/ui/WhatsAppButton';

const ContatoPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="FALE COM A SEEVET"
        subtitle="ESTAMOS PRONTOS PARA ATENDER VOCÊ"
        description="Entre em contato conosco para conhecer nossa linha completa de equipamentos veterinários e solicitar uma cotação personalizada."
        imageSrc="/images/contato-hero.jpg" // Placeholder - será substituído pela imagem real
        imageAlt="Contato Seevet Equipamentos Veterinários"
      />

      {/* Conteúdo Principal */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-[#0056b3] mb-6">ENTRE EM CONTATO</h2>
              
              <p className="mb-8 text-gray-700">
                A Seevet é representante autorizada VMI Médica e Alfamed para a área veterinária, fornecendo as mais modernas soluções em raios-X, ultrassons e equipamentos de suporte a vida do mercado. Estamos prontos para atender suas necessidades e ajudar a encontrar a melhor solução para sua clínica ou hospital veterinário.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-[#0056b3] p-3 rounded-full text-white mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Endereço</h4>
                    <p className="text-gray-700">Rua Pensilvânia, 391 Brooklin – São Paulo – SP</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#0056b3] p-3 rounded-full text-white mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Telefone</h4>
                    <p className="text-gray-700">
                      <a href="tel:+5511989901011" className="hover:text-[#0056b3] transition-colors">
                        (11) 98990-1011
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#0056b3] p-3 rounded-full text-white mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">E-mail</h4>
                    <p className="text-gray-700">
                      <a href="mailto:thiago@seevet.com.br" className="hover:text-[#0056b3] transition-colors">
                        thiago@seevet.com.br
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-[#0056b3] mb-4">FALE PELO WHATSAPP</h3>
                <p className="mb-4 text-gray-700">
                  Para um atendimento mais rápido, entre em contato diretamente pelo WhatsApp:
                </p>
                <WhatsAppButton 
                  phoneNumber="+5511989901011" 
                  message="Olá! Gostaria de saber mais sobre os equipamentos veterinários da Seevet."
                  variant="inline"
                  size="lg"
                  className="w-full justify-center"
                />
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-gray-100 rounded-lg p-8 h-full">
                <h3 className="text-xl font-bold text-[#0056b3] mb-6">FORMULÁRIO DE CONTATO</h3>
                
                {/* Typeform embedado */}
                <div data-tf-live="01JV7M7VC1PKDY3S4AM5SDG1RF"></div>
                
                <div className="mt-8">
                  <h4 className="font-semibold text-gray-800 mb-2">Informações adicionais:</h4>
                  <p className="text-gray-700 mb-4">
                    Ao preencher o formulário, você receberá um retorno em até 24 horas úteis. Para atendimento imediato, utilize nosso WhatsApp ou telefone.
                  </p>
                  <p className="text-gray-700">
                    Estamos disponíveis para atendimento de segunda a sexta, das 8h às 18h.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa de Localização */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0056b3]">NOSSA LOCALIZAÇÃO</h2>
          
          <div className="rounded-lg overflow-hidden shadow-xl">
            {/* Iframe do Google Maps */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1775567404785!2d-46.68611492392006!3d-23.60472226338679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce50ab7feb4519%3A0x739f0ddb0439cf94!2sR.%20Pensilv%C3%A2nia%2C%20391%20-%20Brooklin%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004564-000!5e0!3m2!1spt-BR!2sbr!4v1653328868272!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Seevet"
            ></iframe>
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

export default ContatoPage;
