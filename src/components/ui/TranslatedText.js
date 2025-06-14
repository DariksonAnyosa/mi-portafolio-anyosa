// src/components/ui/TranslatedText.js
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

/**
 * Componente para mostrar texto traducido
 * 
 * Uso:
 * <TranslatedText path="home.greeting" /> 
 * o
 * <TranslatedText content={{ es: 'Hola', en: 'Hello' }} />
 */
const TranslatedText = ({ path, content, fallback = '', ...props }) => {
  const { language } = useLanguage();
  
  // Si se proporciona un path, buscar en translations
  if (path) {
    const pathArray = path.split('.');
    let translation = translations;
    
    try {
      for (const key of pathArray) {
        translation = translation[key];
      }
      
      if (translation && translation[language]) {
        return <span {...props}>{translation[language]}</span>;
      }
    } catch (error) {
      console.warn(`Translation path not found: ${path}`);
    }
  }
  
  // Si se proporciona contenido directo
  if (content && typeof content === 'object') {
    const text = content[language] || content.es || content.en || fallback;
    return <span {...props}>{text}</span>;
  }
  
  // Fallback
  return <span {...props}>{fallback}</span>;
};

export default TranslatedText;