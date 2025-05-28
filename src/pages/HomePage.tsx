import React from 'react';
import HeroSection from '../components/ui/HeroSection';
import ProductCard from '../components/ui/ProductCard';
import WhatsAppButton from '../components/ui/WhatsAppButton';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="EQUIPAMENTOS DE EXAMES DE IMAGENS E DE SUPORTE A VIDA PARA QUEM AMA E CUIDA DE ANIMAIS. DE VERDADE."
        description="O Brasil é o 3o. país do mundo com a maior população pet. Nós adoramos animais! E é por isso que é tão importante que clínicas, hospitais e petcenters estejam sempre bem estruturados, com equipamentos de alta tecnologia e que garantam máxima saúde deles. SeeVet, representante autorizado VMI Médica e Alfamed para a área veterinária, fornece as mais modernas soluções em raios-X, ultrassons e equipamentos de suporte a vida do mercado."
        imageSrc="/images/hero-image.jpg" // Placeholder - será substituído pela imagem real
        imageAlt="Equipamentos veterinários de alta tecnologia"
      />

      {/* Destaque */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0056b3]">MUITA INOVAÇÃO, DESIGN E QUALIDADE NO MERCADO VETERINÁRIO</h2>
          
          <div id="produtos" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Raios-X Digital */}
            <ProductCard
              title="RAIOS-X DIGITAL"
              description="Alta potência, versatilidade e qualidade na realização de exames de radiologia veterinária"
              imageSrc="/images/raio-x.jpg" // Placeholder - será substituído pela imagem real
              imageAlt="Raio-X Digital Veterinário"
              linkTo="/raio-x"
            />
            
            {/* Sistemas de Suporte à Vida */}
            <ProductCard
              title="SISTEMAS DE SUPORTE À VIDA"
              description="Monitores e oxímetros de alta tecnologia para garantir a segurança dos procedimentos veterinários"
              imageSrc="/images/suporte-vida.jpg" // Placeholder - será substituído pela imagem real
              imageAlt="Sistemas de Suporte à Vida Veterinário"
              linkTo="/suporte-vida"
            />
            
            {/* Ultrassom Portátil */}
            <ProductCard
              title="ULTRASSOM PORTÁTIL"
              description="Excelente relação custo X benefício, alta performance e confiabilidade diagnóstica"
              imageSrc="/images/ultrassom.jpg" // Placeholder - será substituído pela imagem real
              imageAlt="Ultrassom Portátil Veterinário"
              linkTo="/ultrassom"
            />
            
            {/* Eletrocardiógrafo */}
            <ProductCard
              title="ELETROCARDIÓGRAFO"
              description="Equipamento de alta tecnologia, com design compacto e leve para exames veterinários confiáveis e precisos"
              imageSrc="/images/eletrocardiografo.jpg" // Placeholder - será substituído pela imagem real
              imageAlt="Eletrocardiógrafo Veterinário"
              linkTo="/eletrocardiografo"
            />
          </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-[#0056b3] text-white rounded-lg shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">FALE COM A GENTE</h2>
                <p className="mb-6">Estamos prontos para atender suas necessidades em equipamentos veterinários. Preencha o formulário ao lado ou entre em contato diretamente:</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <span className="text-[#4caf50] mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <p>Rua Pensilvânia, 391 Brooklin – São Paulo – SP</p>
                  </div>
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

export default HomePage;
