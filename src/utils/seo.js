// src/utils/seo.js

/**
 * Actualizar meta tags dinámicamente
 * @param {Object} meta - Objeto con meta tags
 */
export const updateMetaTags = (meta) => {
  // Título
  if (meta.title) {
    document.title = meta.title;
    updateMetaTag('og:title', meta.title);
    updateMetaTag('twitter:title', meta.title);
  }
  
  // Descripción
  if (meta.description) {
    updateMetaTag('description', meta.description);
    updateMetaTag('og:description', meta.description);
    updateMetaTag('twitter:description', meta.description);
  }
  
  // Imagen
  if (meta.image) {
    updateMetaTag('og:image', meta.image);
    updateMetaTag('twitter:image', meta.image);
  }
  
  // URL canónica
  if (meta.url) {
    updateMetaTag('og:url', meta.url);
    updateMetaTag('twitter:url', meta.url);
    updateCanonical(meta.url);
  }
};

/**
 * Actualizar o crear un meta tag específico
 * @param {string} name - Nombre o propiedad del meta tag
 * @param {string} content - Contenido del meta tag
 */
const updateMetaTag = (name, content) => {
  let element = 
    document.querySelector(`meta[name="${name}"]`) ||
    document.querySelector(`meta[property="${name}"]`);
    
  if (!element) {
    element = document.createElement('meta');
    if (name.startsWith('og:') || name.startsWith('twitter:')) {
      element.setAttribute('property', name);
    } else {
      element.setAttribute('name', name);
    }
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
};

/**
 * Actualizar URL canónica
 * @param {string} url - URL canónica
 */
const updateCanonical = (url) => {
  let canonical = document.querySelector('link[rel="canonical"]');
  
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  
  canonical.setAttribute('href', url);
};

/**
 * Generar meta tags para una página específica
 * @param {string} page - Nombre de la página
 * @param {Object} data - Datos específicos de la página
 * @returns {Object} Meta tags generados
 */
export const generatePageMeta = (page, data = {}) => {
  const baseMeta = {
    siteName: 'Darikson Anyosa Portfolio',
    baseUrl: 'https://portfolio-darikson.vercel.app',
    defaultImage: '/og-image.jpg'
  };
  
  const pageMetas = {
    home: {
      title: 'Darikson Anyosa | Desarrollador de Experiencias Digitales',
      description: 'Portfolio profesional de Darikson Anyosa. Desarrollador especializado en crear experiencias digitales elegantes y funcionales.',
      url: baseMeta.baseUrl,
      image: baseMeta.defaultImage
    },
    projects: {
      title: 'Proyectos | Darikson Anyosa',
      description: 'Explora mi colección de proyectos elegantes y funcionales. Desarrollos web modernos con React, Node.js y tecnologías cutting-edge.',
      url: `${baseMeta.baseUrl}/proyectos`,
      image: baseMeta.defaultImage
    },
    experience: {
      title: 'Experiencia | Darikson Anyosa',
      description: 'Mi trayectoria profesional y experiencia en desarrollo web. Backend, frontend y experiencias digitales completas.',
      url: `${baseMeta.baseUrl}/experiencia`,
      image: baseMeta.defaultImage
    },
    contact: {
      title: 'Contacto | Darikson Anyosa',
      description: '¿Tienes un proyecto en mente? Contacta conmigo para crear experiencias digitales extraordinarias juntos.',
      url: `${baseMeta.baseUrl}/contacto`,
      image: baseMeta.defaultImage
    }
  };
  
  return { ...pageMetas[page], ...data };
};

/**
 * Structured Data para SEO
 * @param {string} type - Tipo de structured data
 * @param {Object} data - Datos estructurados
 */
export const addStructuredData = (type, data) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };
  
  script.textContent = JSON.stringify(structuredData);
  document.head.appendChild(script);
};