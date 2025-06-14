// src/hooks/useFontLoader.js - Hook para manejar la carga de fuentes
import { useEffect, useState } from 'react';

const useFontLoader = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    // Verificar si la API Font Loading está disponible
    if ('fonts' in document) {
      // Definir las fuentes críticas
      const fontPromises = [
        document.fonts.load('400 16px Inter'),
        document.fonts.load('500 16px Inter'),
        document.fonts.load('600 16px Inter'),
        document.fonts.load('700 16px Inter'),
        document.fonts.load('400 16px IBM Plex Mono'),
        document.fonts.load('500 16px IBM Plex Mono')
      ];

      // Cargar fuentes con timeout
      Promise.allSettled(fontPromises)
        .then(() => {
          setFontsLoaded(true);
          // Agregar clase al body cuando las fuentes estén listas
          document.body.classList.add('fonts-loaded');
        })
        .catch(() => {
          // Si hay error, usar fuentes del sistema
          setFontsLoaded(true);
          document.body.classList.add('fonts-fallback');
        });

      // Timeout de seguridad (3 segundos)
      setTimeout(() => {
        if (!fontsLoaded) {
          setFontsLoaded(true);
          document.body.classList.add('fonts-timeout');
        }
      }, 3000);
    } else {
      // Si no hay soporte para Font Loading API, usar fuentes del sistema
      setFontsLoaded(true);
      document.body.classList.add('fonts-fallback');
    }
  }, [fontsLoaded]);

  return fontsLoaded;
};

export default useFontLoader;