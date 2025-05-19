// src/context/LanguageContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

// Crear el contexto
const LanguageContext = createContext();

// Proveedor del idioma
export const LanguageProvider = ({ children }) => {
  // Estado para guardar el idioma actual (es = español, en = inglés)
  const [language, setLanguage] = useState('es');

  // Efecto para cargar el idioma guardado
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Función para cambiar el idioma
  const toggleLanguage = () => {
    const newLanguage = language === 'es' ? 'en' : 'es';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  // Valor que se pasa a los componentes que consumen este contexto
  const contextValue = {
    language,
    toggleLanguage,
    isSpanish: language === 'es',
    isEnglish: language === 'en'
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personalizado para usar el idioma
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe usarse dentro de un LanguageProvider');
  }
  return context;
};

export default LanguageContext;