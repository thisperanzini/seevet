import React from 'react';
import { useParams } from 'react-router-dom';
import WhatsAppButton from '../components/ui/WhatsAppButton';

// Definição de tipos para os produtos
interface ProductSpecification {
  name: string;
  value: string;
}

interface Product {
  name: string;
  category: string;
  description: string;
  longDescription: string;
  features: string[];
  specifications: ProductSpecification[];
  applications: string[];
  images: string[];
  relatedProducts: string[];
}

// Dados simulados de produtos - em um ambiente real, estes viriam de uma API ou banco de dados
const productData: Record<string, Product> = {
  // Raio-X
  'raio-x-centauro': {
    name: 'Raio-X Digital Centauro',
    category: 'Raio-X Digital',
    description: 'Sistema completo de radiologia digital para clínicas e hospitais veterinários, com alta definição de imagem e interface intuitiva.',
    longDescription: 'A linha Centauro da VMI foi desenvolvida para exames de alta performance e definição de imagens. Sistema móvel de raios-X veterinário de alta mobilidade e versatilidade para animais de pequeno, médio e grande porte ou exames em áreas rurais de grandes animais no seu ambiente natural.',
    features: [
      'Alta definição de imagem para diagnósticos precisos',
      'Mobilidade e versatilidade para diferentes ambientes',
      'Baixa dose de radiação, garantindo segurança para o operador e o animal',
      'Interface intuitiva e fácil operação',
      'Armazenamento digital de imagens para fácil acesso e compartilhamento',
      'Suporte técnico especializado'
    ],
    specifications: [
      { name: 'Potência', value: 'Alta potência para exames de qualidade em animais de diferentes portes' },
      { name: 'Mobilidade', value: 'Sistema móvel com rodízios de alta resistência para fácil locomoção' },
      { name: 'Detector Digital', value: 'Detector de alta resolução para imagens nítidas e detalhadas' },
      { name: 'Software', value: 'Software intuitivo com ferramentas específicas para análise veterinária' },
      { name: 'Compatibilidade', value: 'Compatível com sistemas PACS e DICOM para integração com outros equipamentos' }
    ],
    applications: [
      'Diagnóstico de fraturas e lesões ósseas',
      'Avaliação de problemas respiratórios',
      'Detecção de corpos estranhos',
      'Avaliação de problemas digestivos',
      'Diagnóstico de doenças articulares'
    ],
    images: [
      '/images/raio-x-produto1.jpg',
      '/images/raio-x-produto1-2.jpg',
      '/images/raio-x-produto1-3.jpg'
    ],
    relatedProducts: ['raio-x-movel']
  },
  'raio-x-movel': {
    name: 'Raio-X Móvel Veterinário',
    category: 'Raio-X Digital',
    description: 'Equipamento portátil ideal para atendimentos em campo ou em diferentes ambientes da clínica, com alta mobilidade e qualidade de imagem.',
    longDescription: 'O Raio-X Móvel Veterinário é a solução ideal para clínicas que necessitam de mobilidade sem abrir mão da qualidade. Com design compacto e robusto, este equipamento permite realizar exames de alta qualidade em diferentes ambientes, seja dentro da clínica ou em atendimentos externos.',
    features: [
      'Design compacto e leve para fácil transporte',
      'Bateria de longa duração para uso em campo',
      'Alta qualidade de imagem para diagnósticos precisos',
      'Interface intuitiva e fácil operação',
      'Resistente a impactos e condições adversas',
      'Rápido tempo de processamento de imagem'
    ],
    specifications: [
      { name: 'Peso', value: 'Leve e compacto para fácil transporte' },
      { name: 'Bateria', value: 'Autonomia de até 4 horas em uso contínuo' },
      { name: 'Resolução', value: 'Alta resolução para diagnósticos precisos' },
      { name: 'Tempo de Processamento', value: 'Imagens disponíveis em segundos' },
      { name: 'Armazenamento', value: 'Memória interna e possibilidade de exportação via USB ou rede' }
    ],
    applications: [
      'Atendimentos em fazendas e haras',
      'Uso em diferentes ambientes da clínica',
      'Atendimento domiciliar',
      'Situações de emergência',
      'Clínicas com espaço limitado'
    ],
    images: [
      '/images/raio-x-produto2.jpg',
      '/images/raio-x-produto2-2.jpg',
      '/images/raio-x-produto2-3.jpg'
    ],
    relatedProducts: ['raio-x-centauro']
  },
  
  // Suporte à Vida
  'oximetro-sense10': {
    name: 'Oxímetro Sense 10',
    category: 'Sistemas de Suporte à Vida',
    description: 'Oxímetro de pulso avançado com tela de onda pletismográfica e tecnologia para baixa perfusão e movimentação.',
    longDescription: 'O Oxímetro Sense 10 é um equipamento essencial para monitoramento de pacientes veterinários, oferecendo medições precisas de saturação de oxigênio e frequência cardíaca. Com tecnologia avançada para baixa perfusão e movimentação, garante leituras confiáveis mesmo em condições desafiadoras.',
    features: [
      'Tela com onda pletismográfica',
      'Função de alarme audiovisual',
      'Visualização de tabelas de tendência',
      'Software de gestão de dados compatível',
      'Indicador de Perfusão',
      'Tecnologia para baixa perfusão e movimentação'
    ],
    specifications: [
      { name: 'Display', value: 'Tela LCD colorida de alta resolução' },
      { name: 'Alarmes', value: 'Configuráveis para SpO2 e frequência cardíaca' },
      { name: 'Bateria', value: 'Autonomia de até 30 horas em uso contínuo' },
      { name: 'Memória', value: 'Armazenamento de dados para revisão posterior' },
      { name: 'Peso', value: 'Leve e compacto para fácil transporte' }
    ],
    applications: [
      'Monitoramento durante procedimentos cirúrgicos',
      'Acompanhamento de pacientes em recuperação',
      'Monitoramento durante anestesia',
      'Avaliação de pacientes com problemas respiratórios',
      'Monitoramento contínuo em UTI veterinária'
    ],
    images: [
      '/images/oximetro-sense10.jpg',
      '/images/oximetro-sense10-2.jpg',
      '/images/oximetro-sense10-3.jpg'
    ],
    relatedProducts: ['monitor-vita-i120', 'monitor-vita-i80']
  },
  'monitor-vita-i120': {
    name: 'Monitor Vita i120',
    category: 'Sistemas de Suporte à Vida',
    description: 'Monitor multiparamétrico com design compacto ultra slim e capacidade de tela full touch screen para atendimentos veterinários otimizados.',
    longDescription: 'Apresentando o design compacto ultra slim e capacidade de tela de full touch screen, os monitores Vita i Series proporcionam experiência otimizada para atendimentos veterinários. Com tecnologia de ponta, o Monitor Vita i120 oferece monitoramento preciso e confiável de múltiplos parâmetros vitais.',
    features: [
      'Tela touch screen de alta resolução',
      'Monitoramento de múltiplos parâmetros vitais',
      'Alarmes configuráveis',
      'Armazenamento de dados do paciente',
      'Interface intuitiva e fácil operação',
      'Design compacto e moderno'
    ],
    specifications: [
      { name: 'Tela', value: 'Touch screen de 12 polegadas' },
      { name: 'Parâmetros', value: 'ECG, SpO2, NIBP, Respiração, Temperatura' },
      { name: 'Alarmes', value: 'Visuais e sonoros, totalmente configuráveis' },
      { name: 'Bateria', value: 'Autonomia de até 4 horas em uso contínuo' },
      { name: 'Conectividade', value: 'USB, Ethernet, Wi-Fi (opcional)' }
    ],
    applications: [
      'Monitoramento durante procedimentos cirúrgicos',
      'Acompanhamento de pacientes em recuperação',
      'Monitoramento durante anestesia',
      'UTI veterinária',
      'Monitoramento de pacientes críticos'
    ],
    images: [
      '/images/monitor-vita-i120.jpg',
      '/images/monitor-vita-i120-2.jpg',
      '/images/monitor-vita-i120-3.jpg'
    ],
    relatedProducts: ['monitor-vita-i80', 'oximetro-sense10']
  },
  'monitor-vita-i80': {
    name: 'Monitor Vita i80',
    category: 'Sistemas de Suporte à Vida',
    description: 'Monitor multiparamétrico com tecnologias de ponta, design intuitivo e funcionalidades para monitoração segura em diversos ambientes veterinários.',
    longDescription: 'O Monitor Vita i80 combina tecnologia avançada, design intuitivo e funcionalidades essenciais para uma monitoração segura em diversos ambientes veterinários. Ideal para clínicas de pequeno e médio porte que buscam qualidade e confiabilidade.',
    features: [
      'Tela colorida de alta resolução',
      'Monitoramento de parâmetros vitais essenciais',
      'Alarmes configuráveis',
      'Design compacto e portátil',
      'Interface intuitiva e fácil operação',
      'Bateria de longa duração'
    ],
    specifications: [
      { name: 'Tela', value: 'LCD colorida de 8 polegadas' },
      { name: 'Parâmetros', value: 'ECG, SpO2, NIBP, Respiração' },
      { name: 'Alarmes', value: 'Visuais e sonoros, configuráveis' },
      { name: 'Bateria', value: 'Autonomia de até 3 horas em uso contínuo' },
      { name: 'Peso', value: 'Leve e compacto para fácil transporte' }
    ],
    applications: [
      'Monitoramento durante procedimentos cirúrgicos',
      'Acompanhamento de pacientes em recuperação',
      'Monitoramento durante anestesia',
      'Clínicas veterinárias de pequeno e médio porte',
      'Atendimentos móveis'
    ],
    images: [
      '/images/monitor-vita-i80.jpg',
      '/images/monitor-vita-i80-2.jpg',
      '/images/monitor-vita-i80-3.jpg'
    ],
    relatedProducts: ['monitor-vita-i120', 'oximetro-sense10']
  },
  
  // Ultrassom
  'ultrassom-magnus-x5': {
    name: 'Ultrassom Veterinário Magnus X5',
    category: 'Ultrassom Portátil',
    description: 'Família de Ultrassom Trolley, transportável, compacto e com aplicações de performance elevada para todos ambientes veterinários.',
    longDescription: 'O Ultrassom Veterinário Magnus X5 é um equipamento de alta performance, transportável e compacto, ideal para todos os ambientes veterinários. Com tecnologia avançada e design ergonômico, oferece diagnósticos precisos e confiáveis para diversas aplicações.',
    features: [
      'Alta qualidade de imagem para diagnósticos precisos',
      'Design ergonômico e transportável',
      'Interface intuitiva e fácil operação',
      'Múltiplas sondas disponíveis para diferentes aplicações',
      'Software específico para medicina veterinária',
      'Armazenamento digital de imagens'
    ],
    specifications: [
      { name: 'Monitor', value: 'Tela LCD de alta resolução de 15 polegadas' },
      { name: 'Modos de Imagem', value: 'B, M, Color Doppler, Power Doppler, Pulse Wave Doppler' },
      { name: 'Sondas', value: 'Compatível com diversas sondas para diferentes aplicações' },
      { name: 'Armazenamento', value: 'HD interno e exportação via USB' },
      { name: 'Bateria', value: 'Opcional para uso em locais sem energia elétrica' }
    ],
    applications: [
      'Diagnóstico abdominal',
      'Cardiologia',
      'Reprodução',
      'Musculoesquelético',
      'Pequenos animais e animais de grande porte'
    ],
    images: [
      '/images/ultrassom-magnus-x5.jpg',
      '/images/ultrassom-magnus-x5-2.jpg',
      '/images/ultrassom-magnus-x5-3.jpg'
    ],
    relatedProducts: ['ultrassom-invictus', 'ultrassom-dominus']
  },
  'ultrassom-invictus': {
    name: 'Ultrassom Portátil Invictus',
    category: 'Ultrassom Portátil',
    description: 'Equipamento portátil com alta performance e confiabilidade diagnóstica, ideal para atendimentos em clínicas e em campo.',
    longDescription: 'O Ultrassom Portátil Invictus é um equipamento versátil e de alta performance, ideal para atendimentos em clínicas e em campo. Com design compacto e bateria de longa duração, oferece diagnósticos precisos e confiáveis em qualquer ambiente.',
    features: [
      'Design compacto e portátil',
      'Bateria de longa duração',
      'Alta qualidade de imagem',
      'Interface intuitiva e fácil operação',
      'Múltiplas sondas disponíveis',
      'Software específico para medicina veterinária'
    ],
    specifications: [
      { name: 'Monitor', value: 'Tela LCD de alta resolução de 12 polegadas' },
      { name: 'Modos de Imagem', value: 'B, M, Color Doppler' },
      { name: 'Sondas', value: 'Compatível com diversas sondas para diferentes aplicações' },
      { name: 'Bateria', value: 'Autonomia de até 2 horas em uso contínuo' },
      { name: 'Peso', value: 'Leve e compacto para fácil transporte' }
    ],
    applications: [
      'Atendimentos em campo',
      'Clínicas com espaço limitado',
      'Diagnóstico abdominal',
      'Reprodução',
      'Pequenos animais'
    ],
    images: [
      '/images/ultrassom-invictus.jpg',
      '/images/ultrassom-invictus-2.jpg',
      '/images/ultrassom-invictus-3.jpg'
    ],
    relatedProducts: ['ultrassom-magnus-x5', 'ultrassom-dominus']
  },
  'ultrassom-dominus': {
    name: 'Dominus Vet',
    category: 'Ultrassom Portátil',
    description: 'O Ultrassom de mão Dominus alia tecnologia e mobilidade permitindo a geração de imagens de qualidade em qualquer ambiente.',
    longDescription: 'O Ultrassom de mão Dominus alia tecnologia e mobilidade permitindo a geração de imagens de qualidade em qualquer ambiente. Com até 4 horas de uso de bateria ativa, ele possui medição clínica confiável, conexão rápida com Android e IOS e predefinições personalizadas para clínicos. São seis sondas e mais de 30 parâmetros à disposição de um diagnóstico eficiente.',
    features: [
      'Ultrassom de mão ultraportátil',
      'Até 4 horas de bateria',
      'Conexão com Android e iOS',
      'Seis sondas disponíveis',
      'Mais de 30 parâmetros configuráveis',
      'Predefinições personalizadas para clínicos'
    ],
    specifications: [
      { name: 'Tamanho', value: 'Ultracompacto, cabe na palma da mão' },
      { name: 'Bateria', value: 'Autonomia de até 4 horas em uso contínuo' },
      { name: 'Conectividade', value: 'Bluetooth para conexão com dispositivos Android e iOS' },
      { name: 'Sondas', value: 'Seis opções de sondas para diferentes aplicações' },
      { name: 'Armazenamento', value: 'Armazenamento na nuvem e no dispositivo conectado' }
    ],
    applications: [
      'Atendimentos em campo',
      'Veterinários volantes',
      'Diagnósticos rápidos',
      'Procedimentos guiados por imagem',
      'Uso em qualquer ambiente'
    ],
    images: [
      '/images/ultrassom-dominus.jpg',
      '/images/ultrassom-dominus-2.jpg',
      '/images/ultrassom-dominus-3.jpg'
    ],
    relatedProducts: ['ultrassom-invictus', 'ultrassom-magnus-x5']
  },
  
  // Eletrocardiógrafo
  'eletrocardiografo-contec': {
    name: 'Eletrocardiógrafo Portátil ECG – Contec',
    category: 'Eletrocardiógrafo',
    description: 'Equipamento de alta tecnologia, com design compacto e leve, pesando apenas 1kg, é ideal para triagem, checkups e transportes.',
    longDescription: 'O Eletrocardiógrafo Veterinário Digital Portátil da Contec é um equipamento de alta tecnologia, com design compacto e leve, pesando apenas 1kg, é ideal para triagem, checkups e transportes. Confiável e preciso para exames veterinários, oferece diagnósticos cardíacos detalhados em qualquer ambiente.',
    features: [
      'Design compacto e leve (apenas 1kg)',
      'Tela LCD colorida de alta resolução',
      'Operação simples e intuitiva',
      'Bateria recarregável de longa duração',
      'Memória interna para armazenamento de exames',
      'Software específico para medicina veterinária',
      'Conexão com computador para transferência de dados',
      'Impressão de relatórios detalhados'
    ],
    specifications: [
      { name: 'Peso', value: 'Apenas 1kg' },
      { name: 'Display', value: 'Tela LCD colorida' },
      { name: 'Bateria', value: 'Recarregável com longa duração' },
      { name: 'Memória', value: 'Armazenamento interno de exames' },
      { name: 'Conectividade', value: 'USB para transferência de dados' }
    ],
    applications: [
      'Avaliação cardíaca completa',
      'Exames pré-anestésicos',
      'Checkups de rotina',
      'Atendimento em campo',
      'Clínicas veterinárias de pequeno e médio porte'
    ],
    images: [
      '/images/eletrocardiografo-contec.jpg',
      '/images/eletrocardiografo-contec-2.jpg',
      '/images/eletrocardiografo-contec-3.jpg'
    ],
    relatedProducts: []
  }
};

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId?: string }>();
  
  // Verificar se o produto existe
  const product = productId && productData[productId] ? productData[productId] : null;
  
  if (!product) {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold text-[#0056b3] mb-4">Produto não encontrado</h1>
        <p className="text-gray-700 mb-8">O produto que você está procurando não está disponível.</p>
        <a 
          href="/" 
          className="bg-[#0056b3] text-white py-2 px-6 rounded-md hover:bg-[#003b7a] transition-colors duration-300"
        >
          Voltar para a Home
        </a>
      </div>
    );
  }
  
  return (
    <div>
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-8">
        <a href="/" className="hover:text-[#0056b3]">Home</a> &gt; <a href={`/${product.category.toLowerCase().replace(' ', '-')}`} className="hover:text-[#0056b3]">{product.category}</a> &gt; <span className="text-[#0056b3]">{product.name}</span>
      </div>
      
      {/* Product Header */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0056b3] mb-2">{product.name}</h1>
        <p className="text-xl text-gray-600">{product.description}</p>
      </div>
      
      {/* Product Content */}
      <div className="flex flex-col lg:flex-row gap-12 mb-16">
        {/* Product Images */}
        <div className="lg:w-1/2">
          <div className="bg-gray-100 rounded-lg p-4 mb-4">
            <img 
              src={product.images[0]} 
              alt={product.name} 
              className="w-full h-auto rounded-lg"
            />
          </div>
          
          {product.images.length > 1 && (
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image: string, index: number) => (
                <div key={index} className="bg-gray-100 rounded-lg p-2">
                  <img 
                    src={image} 
                    alt={`${product.name} - Imagem ${index + 1}`} 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Product Details */}
        <div className="lg:w-1/2">
          <div className="bg-gray-100 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#0056b3] mb-6">Especificações</h2>
            
            <div className="space-y-4">
              {product.specifications.map((spec: ProductSpecification, index: number) => (
                <div key={index} className="border-b border-gray-300 pb-4 last:border-0 last:pb-0">
                  <h3 className="font-semibold text-gray-800">{spec.name}</h3>
                  <p className="text-gray-700">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#0056b3] mb-4">Descrição</h2>
            <p className="text-gray-700 mb-6">{product.longDescription}</p>
            
            <h3 className="text-xl font-bold text-[#0056b3] mb-3">Características</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              {product.features.map((feature: string, index: number) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppButton 
              phoneNumber="+5511989901011" 
              message={`Olá! Gostaria de saber mais sobre ${product.name}.`}
              variant="inline"
              size="lg"
              className="flex-1 justify-center"
            />
            
            <a 
              href={`/${product.category.toLowerCase().replace(' ', '-')}`}
              className="bg-gray-200 text-gray-800 py-3 px-6 rounded-md hover:bg-gray-300 transition-colors duration-300 text-center"
            >
              Voltar para {product.category}
            </a>
          </div>
        </div>
      </div>
      
      {/* Applications */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-[#0056b3] mb-8 text-center">Aplicações na Medicina Veterinária</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.applications.map((application: string, index: number) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#0056b3]">
              <div className="flex items-start">
                <div className="bg-[#4caf50] p-3 rounded-full text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-gray-700">{application}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Related Products */}
      {product.relatedProducts.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#0056b3] mb-8 text-center">Produtos Relacionados</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.relatedProducts.map((relatedId: string) => {
              const relatedProduct = productData[relatedId] as Product;
              return (
                <div key={relatedId} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={relatedProduct.images[0]} 
                      alt={relatedProduct.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0056b3] mb-2">{relatedProduct.name}</h3>
                    <p className="text-gray-700 mb-4">{relatedProduct.description}</p>
                    <div className="flex flex-col sm:flex-row gap-3 mt-6">
                      <a 
                        href={`/produto/${relatedId}`} 
                        className="bg-[#0056b3] text-white py-2 px-4 rounded-md hover:bg-[#003b7a] transition-colors duration-300 text-center"
                      >
                        Ver detalhes
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      
      {/* Contact Form */}
      <div className="bg-[#0056b3] text-white rounded-lg shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">SOLICITE UMA COTAÇÃO</h2>
            <p className="mb-6">
              Estamos prontos para ajudar você a adquirir o {product.name} para sua clínica ou hospital veterinário. Preencha o formulário ao lado ou entre em contato diretamente:
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
              message={`Olá! Gostaria de solicitar uma cotação para o ${product.name}.`}
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
      
      {/* WhatsApp Button Fixo */}
      <WhatsAppButton 
        phoneNumber="+5511989901011" 
        variant="fixed"
        size="lg"
      />
    </div>
  );
};

export default ProductDetailPage;
