// src/utils/helpers.js

/**
 * Formatea una fecha en el formato "Enero 2022 - Presente" o "Enero 2022 - Diciembre 2023"
 * @param {string} startDate - Fecha de inicio en formato "YYYY-MM"
 * @param {string} endDate - Fecha de fin en formato "YYYY-MM" o "present"
 * @returns {string} - Fecha formateada
 */
export const formatDateRange = (startDate, endDate) => {
  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const formatDate = (dateString) => {
    if (dateString === 'present') return 'Presente';
    
    const [year, month] = dateString.split('-');
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  return `${formatDate(startDate)} - ${formatDate(endDate)}`;
};

/**
 * Validar dirección de correo electrónico
 * @param {string} email - Dirección de correo a validar
 * @returns {boolean} - true si es válido, false en caso contrario
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Trunca un texto a la longitud especificada añadiendo "..." al final
 * @param {string} text - Texto a truncar
 * @param {number} length - Longitud máxima
 * @returns {string} - Texto truncado
 */
export const truncateText = (text, length) => {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
};

/**
 * Agrupa elementos por una propiedad
 * @param {Array} array - Array de objetos
 * @param {string} key - Clave por la que agrupar
 * @returns {Object} - Objeto con los elementos agrupados
 */
export const groupBy = (array, key) => {
  return array.reduce((result, item) => {
    const group = item[key];
    result[group] = result[group] || [];
    result[group].push(item);
    return result;
  }, {});
};

/**
 * Obtiene el enlace adecuado para una red social (para usar con iconos)
 * @param {string} network - Nombre de la red social
 * @param {string} username - Nombre de usuario
 * @returns {string} - URL completa para la red social
 */
export const getSocialLink = (network, username) => {
  const networks = {
    github: `https://github.com/${username}`,
    linkedin: `https://linkedin.com/in/${username}`,
    twitter: `https://twitter.com/${username}`,
    facebook: `https://facebook.com/${username}`,
    instagram: `https://instagram.com/${username}`,
    youtube: `https://youtube.com/c/${username}`,
    medium: `https://medium.com/@${username}`,
    dribbble: `https://dribbble.com/${username}`,
    behance: `https://behance.net/${username}`
  };
  
  return networks[network.toLowerCase()] || '#';
};

/**
 * Capitaliza la primera letra de cada palabra en un string
 * @param {string} str - String a capitalizar
 * @returns {string} - String con la primera letra de cada palabra capitalizada
 */
export const capitalizeWords = (str) => {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

/**
 * Calcular el tiempo de lectura de un texto
 * @param {string} text - Texto para calcular tiempo de lectura
 * @param {number} wordsPerMinute - Palabras por minuto (por defecto 200)
 * @returns {number} - Tiempo de lectura en minutos
 */
export const calculateReadingTime = (text, wordsPerMinute = 200) => {
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

/**
 * Detecta si el navegador está en modo oscuro
 * @returns {boolean} - true si está en modo oscuro, false en caso contrario
 */
export const isDarkMode = () => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
};

/**
 * Genera un ID único
 * @returns {string} - ID único
 */
export const generateUniqueId = () => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

/**
 * Desplazamiento suave a un elemento en la página
 * @param {string} elementId - ID del elemento al que desplazarse
 */
export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

/**
 * Convierte una fecha a formato relativo (hace 2 días, hace 1 mes, etc.)
 * @param {string} dateString - Fecha en formato ISO
 * @returns {string} - Fecha en formato relativo
 */
export const timeAgo = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);
  
  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return `hace ${interval} años`;
  }
  
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return `hace ${interval} meses`;
  }
  
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return `hace ${interval} días`;
  }
  
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return `hace ${interval} horas`;
  }
  
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return `hace ${interval} minutos`;
  }
  
  return `hace ${Math.floor(seconds)} segundos`;
};