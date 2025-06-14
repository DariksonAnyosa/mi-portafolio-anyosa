// src/data/projects.js - Proyectos del portfolio
export const projects = [
  {
    id: 1,
    title: {
      es: "Milari IA",
      en: "Milari IA"
    },
    description: {
      es: "MILARI es una aplicación emocionalmente inteligente diseñada para ayudarte a retomar el control de tu día, reconectar contigo mismo y avanzar con claridad, incluso cuando todo parece desordenado. A diferencia de las típicas apps de productividad, MILARI no te obliga a planificar, sino que te entiende primero",
      en: "MILARI is an emotionally intelligent application designed to help you regain control of your day, reconnect with yourself and move forward with clarity, even when everything seems messy."
    },
    shortDescription: {
      es: "Asistente personal emocional que te guía con microacciones basadas en cómo te sientes",
      en: "Emotional personal assistant that guides you with micro-actions based on how you feel"
    },
    image: "/images/projects/milari-app.jpg",
    imageAlt: {
      es: "Interfaz de la aplicación Milari IA",
      en: "Milari IA application interface"
    },
    technologies: ["React", "LocalStorage", "DatabaseManager", "PWA", "Electron"],
    category: "fullstack",
    demoUrl: "https://milari.vercel.app/",
    githubUrl: "https://github.com/DariksonAnyosa/Milari",
    featured: true,
    colSpan: 3,
    rowSpan: 2,
    status: "in-progress",
    startDate: "2025-01-15",
    tags: {
      es: ["Bienestar digital", "Gestión emocional", "Rutinas diarias"],
      en: ["Digital wellness", "Emotional management", "Daily routines"]
    },
    features: {
      es: [
        "Selector emocional diario con emojis",
        "Microacciones automáticas según estado de ánimo",
        "Vista 'Hoy' personalizada con estadísticas diarias",
        "Calendario visual minimalista",
        "Temporizador Pomodoro integrado",
        "Asistente de voz para interacción natural"
      ],
      en: [
        "Daily emotional selector with emojis",
        "Automatic micro-actions based on mood",
        "Personalized 'Today' view with daily statistics",
        "Minimalist visual calendar",
        "Integrated Pomodoro timer",
        "Voice assistant for natural interaction"
      ]
    }
  },
  
];

// Funciones utilitarias para filtrar proyectos
export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getProjectsByCategory = (category) => {
  return projects.filter(project => project.category === category);
};

export const getProjectsByStatus = (status) => {
  return projects.filter(project => project.status === status);
};

export const getProjectById = (id) => {
  return projects.find(project => project.id === parseInt(id));
};

// Categorías disponibles
export const categories = [
  { 
    id: 'all', 
    name: { es: 'Todos', en: 'All' } 
  },
  { 
    id: 'fullstack', 
    name: { es: 'Full Stack', en: 'Full Stack' } 
  },
  { 
    id: 'frontend', 
    name: { es: 'Frontend', en: 'Frontend' } 
  },
  { 
    id: 'backend', 
    name: { es: 'Backend', en: 'Backend' } 
  },
  { 
    id: 'mobile', 
    name: { es: 'Móvil', en: 'Mobile' } 
  }
];

export default projects;