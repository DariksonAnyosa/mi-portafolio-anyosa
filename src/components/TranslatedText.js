// src/components/TranslatedText.js
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation, getTranslatedValue } from '../utils/languageUtils';

/**
 * Componente para mostrar texto traducido
 * 
 * Uso:
 * <TranslatedText path="home.greeting" /> 
 * o
 * <TranslatedText content={{ es: 'Hola', en: 'Hello' }} />
 */
const TranslatedText = ({ path, content, ...props }) => {
  const { language } = useLanguage();
  
  if (path) {
    return <span {...props}>{getTranslation(path, language)}</span>;
  }
  
  if (content) {
    return <span {...props}>{getTranslatedValue(content, language)}</span>;
  }
  
  return null;
};

export default TranslatedText;