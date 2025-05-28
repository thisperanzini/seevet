/* Adicionar meta tags para SEO */
document.head.innerHTML += `
  <meta name="description" content="Seevet - Equipamentos de exames de imagens e de suporte a vida para quem ama e cuida de animais. Representante autorizado VMI Médica e Alfamed para a área veterinária.">
  <meta name="keywords" content="equipamentos veterinários, raio-x veterinário, ultrassom veterinário, monitor veterinário, eletrocardiógrafo veterinário, suporte à vida veterinário, Seevet, VMI Médica, Alfamed">
  <meta name="author" content="Seevet">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://seevet.com.br/">
  <meta property="og:title" content="Seevet Equipamentos Veterinários">
  <meta property="og:description" content="Equipamentos de exames de imagens e de suporte a vida para quem ama e cuida de animais. Representante autorizado VMI Médica e Alfamed.">
  <meta property="og:image" content="/images/seevet-og-image.jpg">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://seevet.com.br/">
  <meta property="twitter:title" content="Seevet Equipamentos Veterinários">
  <meta property="twitter:description" content="Equipamentos de exames de imagens e de suporte a vida para quem ama e cuida de animais. Representante autorizado VMI Médica e Alfamed.">
  <meta property="twitter:image" content="/images/seevet-og-image.jpg">
  
  <!-- Favicon -->
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="manifest" href="/site.webmanifest">
  
  <!-- Typeform Script -->
  <script src="//embed.typeform.com/next/embed.js"></script>
`;

/* Adicionar script para lazy loading de imagens */
const lazyLoadScript = document.createElement('script');
lazyLoadScript.innerHTML = `
  document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    
    if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove("lazy");
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });

      lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
    } else {
      // Fallback for browsers without IntersectionObserver support
      let active = false;

      const lazyLoad = function() {
        if (active === false) {
          active = true;

          setTimeout(function() {
            lazyImages.forEach(function(lazyImage) {
              if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
                lazyImage.src = lazyImage.dataset.src;
                lazyImage.classList.remove("lazy");

                lazyImages = lazyImages.filter(function(image) {
                  return image !== lazyImage;
                });

                if (lazyImages.length === 0) {
                  document.removeEventListener("scroll", lazyLoad);
                  window.removeEventListener("resize", lazyLoad);
                  window.removeEventListener("orientationchange", lazyLoad);
                }
              }
            });

            active = false;
          }, 200);
        }
      };

      document.addEventListener("scroll", lazyLoad);
      window.addEventListener("resize", lazyLoad);
      window.addEventListener("orientationchange", lazyLoad);
    }
  });
`;
document.body.appendChild(lazyLoadScript);

/* Adicionar script para melhorar a performance do site */
const performanceScript = document.createElement('script');
performanceScript.innerHTML = `
  // Preconnect para domínios externos
  const preconnectLinks = [
    'https://www.googletagmanager.com',
    'https://embed.typeform.com'
  ];
  
  preconnectLinks.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = url;
    document.head.appendChild(link);
  });
  
  // Adicionar defer a scripts não críticos
  document.addEventListener('DOMContentLoaded', () => {
    const scripts = document.querySelectorAll('script:not([async]):not([defer])');
    scripts.forEach(script => {
      if (!script.src.includes('googletagmanager') && !script.src.includes('typeform')) {
        script.defer = true;
      }
    });
  });
`;
document.body.appendChild(performanceScript);

/* Adicionar script para verificar responsividade */
const responsiveScript = document.createElement('script');
responsiveScript.innerHTML = `
  // Verificar responsividade em diferentes breakpoints
  const checkResponsiveness = () => {
    const breakpoints = {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400
    };
    
    const currentWidth = window.innerWidth;
    let currentBreakpoint = 'xs';
    
    Object.entries(breakpoints).forEach(([name, width]) => {
      if (currentWidth >= width) {
        currentBreakpoint = name;
      }
    });
    
    console.log('Current breakpoint:', currentBreakpoint, '(', currentWidth, 'px )');
    
    // Verificar elementos problemáticos em mobile
    if (currentWidth < 768) {
      const potentialIssues = document.querySelectorAll('.overflow-x-auto, [style*="width:"], table');
      if (potentialIssues.length > 0) {
        console.warn('Potential responsive issues found:', potentialIssues);
      }
    }
  };
  
  // Executar verificação no carregamento e no redimensionamento
  window.addEventListener('load', checkResponsiveness);
  window.addEventListener('resize', checkResponsiveness);
`;
document.body.appendChild(responsiveScript);

/* Adicionar script para testar links e formulários */
const testLinksScript = document.createElement('script');
testLinksScript.innerHTML = `
  // Verificar links quebrados
  document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href]:not([href^="#"]):not([href^="javascript"]):not([href^="mailto"]):not([href^="tel"]):not([href^="https://wa.me"])');
    
    links.forEach(link => {
      const url = link.getAttribute('href');
      if (url.startsWith('/') || url.includes(window.location.hostname)) {
        console.log('Internal link:', url);
      } else {
        console.log('External link:', url);
      }
    });
    
    // Verificar formulários
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      console.log('Form found:', form);
    });
    
    // Verificar elementos Typeform
    const typeformElements = document.querySelectorAll('[data-tf-live]');
    console.log('Typeform elements found:', typeformElements.length);
  });
`;
document.body.appendChild(testLinksScript);

console.log('SEO, performance e responsividade scripts adicionados com sucesso!');
