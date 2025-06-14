// src/data/experience.js - Datos de experiencia bilingües
export const experience = [
  {
    id: 1,
    position: {
      es: 'Practicante Backend',
      en: 'Backend Intern'
    },
    company: {
      es: 'Universidad Nacional de Santa',
      en: 'Universidad Nacional de Santa'
    },
    period: {
      es: 'Enero 2024 - Diciembre 2024',
      en: 'January 2024 - December 2024'
    },
    description: {
      es: 'Migré el sistema HelpDesk institucional a una nueva versión de WildFly, integrando backend Java con base de datos y asegurando la operatividad del sistema.',
      en: 'Migrated the institutional HelpDesk system to a new WildFly version, integrating Java backend with database and ensuring system operability.'
    },
    achievements: [
      {
        es: 'Migración completa del sistema HelpDesk a un nuevo entorno WildFly',
        en: 'Complete migration of HelpDesk system to new WildFly environment'
      },
      {
        es: 'Integración eficiente de backend Java con base de datos institucional',
        en: 'Efficient integration of Java backend with institutional database'
      },
      {
        es: 'Reducción de errores del sistema antiguo y mejora en estabilidad operativa',
        en: 'Reduction of legacy system errors and improvement in operational stability'
      },
      {
        es: 'Documentación técnica completa del proceso de migración',
        en: 'Complete technical documentation of the migration process'
      }
    ],
    technologies: [
      'Java',
      'WildFly',
      'PostgreSQL',
      'Git',
      'Maven',
      'JSF',
      'EJB',
      'JPA'
    ]
  }
];

export default experience;