// src/utils/performance.js

/**
 * Debounce function para optimizar eventos que se disparan frecuentemente
 * @param {Function} func - Función a ejecutar
 * @param {number} wait - Tiempo de espera en ms
 * @param {boolean} immediate - Ejecutar inmediatamente
 * @returns {Function} Función debounced
 */
export const debounce = (func, wait, immediate = false) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
};

/**
 * Throttle function para limitar la frecuencia de ejecución
 * @param {Function} func - Función a ejecutar
 * @param {number} limit - Límite de tiempo en ms
 * @returns {Function} Función throttled
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Lazy load de imágenes con placeholder
 * @param {string} src - URL de la imagen
 * @param {string} placeholder - URL del placeholder
 * @returns {Promise} Promise que resuelve cuando la imagen se carga
 */
export const loadImage = (src, placeholder = null) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(src);
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Preload de recursos críticos
 * @param {Array} urls - Array de URLs a precargar
 * @returns {Promise} Promise que resuelve cuando todos los recursos se cargan
 */
export const preloadResources = (urls) => {
  const promises = urls.map(url => loadImage(url));
  return Promise.allSettled(promises);
};

/**
 * Detectar si el usuario prefiere reducir las animaciones
 * @returns {boolean} True si prefiere reducir animaciones
 */
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Detectar si el dispositivo soporta hover
 * @returns {boolean} True si soporta hover
 */
export const canHover = () => {
  return window.matchMedia('(hover: hover)').matches;
};

/**
 * Detectar el tipo de conexión para optimizaciones
 * @returns {Object} Información de la conexión
 */
export const getConnectionInfo = () => {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  
  if (!connection) {
    return { effectiveType: 'unknown', saveData: false };
  }
  
  return {
    effectiveType: connection.effectiveType,
    saveData: connection.saveData || false,
    downlink: connection.downlink,
    rtt: connection.rtt
  };
};

/**
 * Optimizar animaciones basadas en las preferencias del usuario
 * @param {Object} animation - Configuración de animación
 * @returns {Object} Configuración optimizada
 */
export const optimizeAnimation = (animation) => {
  if (prefersReducedMotion()) {
    return {
      ...animation,
      duration: 0.01,
      transition: { duration: 0.01 }
    };
  }
  
  const { effectiveType, saveData } = getConnectionInfo();
  
  // Reducir animaciones en conexiones lentas
  if (saveData || effectiveType === 'slow-2g' || effectiveType === '2g') {
    return {
      ...animation,
      duration: animation.duration * 0.5,
      transition: {
        ...animation.transition,
        duration: (animation.transition?.duration || 0.3) * 0.5
      }
    };
  }
  
  return animation;
};