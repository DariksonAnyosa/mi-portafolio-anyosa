// src/hooks/useLocalStorage.js - Hook para manejar localStorage de forma segura
import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  // Estado para almacenar el valor
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    
    try {
      // Obtener del localStorage por clave
      const item = window.localStorage.getItem(key);
      // Parsear JSON almacenado o si no existe devolver initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Si hay error, devolver initialValue
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Devolver una versión wrapeada de la función setter de useState
  // que persiste el nuevo valor en localStorage
  const setValue = (value) => {
    try {
      // Permitir que value sea una función para que tenga la misma API que useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      // Guardar el estado
      setStoredValue(valueToStore);
      
      // Guardar en localStorage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // Un error más avanzado en caso de que localStorage no esté disponible
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  // Sincronizar con localStorage cuando cambie en otras pestañas
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === key && e.newValue !== null) {
        try {
          setStoredValue(JSON.parse(e.newValue));
        } catch (error) {
          console.warn(`Error parsing localStorage key "${key}":`, error);
        }
      }
    };

    // Escuchar cambios en localStorage (otros tabs/ventanas)
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', handleStorageChange);
      
      return () => {
        window.removeEventListener('storage', handleStorageChange);
      };
    }
  }, [key]);

  return [storedValue, setValue];
};

export default useLocalStorage;