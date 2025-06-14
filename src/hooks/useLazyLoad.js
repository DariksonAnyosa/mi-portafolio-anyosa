// src/hooks/useLazyLoad.js
import { useState, useEffect, useRef } from 'react';

/**
 * Hook para lazy loading con Intersection Observer
 * @param {Object} options - Opciones del Intersection Observer
 * @returns {Array} [ref, isVisible] - Ref para el elemento y estado de visibilidad
 */
export const useLazyLoad = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Una vez visible, dejar de observar
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
};

export default useLazyLoad;