# 🌟 Portfolio de Darikson

> Portfolio personal moderno desarrollado con React - Desarrollador de experiencias digitales

![Portfolio Preview](https://via.placeholder.com/800x400/C89A00/FFFFFF?text=Darikson+Portfolio)

## ✨ Características

- 🎨 **Diseño Moderno**: UI/UX 2025 con animaciones fluidas
- 🌙 **Modo Oscuro**: Tema claro/oscuro con persistencia 
- 🌐 **Multiidioma**: Español e Inglés
- 📱 **Responsive**: Optimizado para todos los dispositivos
- ⚡ **Performance**: Optimizado para velocidad y SEO
- 🎯 **Accesible**: Cumple estándares WCAG 2.1

## 🚀 Demo

**Demo en vivo:** [portfolio-darikson.vercel.app](https://portfolio-darikson.vercel.app)

## 🛠️ Tecnologías

- **Frontend:** React 19, React Router v7
- **Styling:** Styled Components, CSS Grid/Flexbox
- **Animaciones:** Framer Motion
- **Iconos:** React Icons (Feather)
- **Formularios:** Formspree
- **Build:** Create React App
- **Deploy:** Vercel/Netlify

## 📋 Requisitos Previos

- Node.js 18+ 
- npm o yarn
- Git

## 🔧 Instalación y Desarrollo

### 1. Clonar el repositorio
```bash
git clone https://github.com/DariksonAnyosa/portfolio.git
cd portfolio
```

### 2. Instalar dependencias
```bash
npm install
# o
yarn install
```

### 3. Configurar variables de entorno
```bash
cp .env.example .env.local
```

Edita `.env.local` con tus valores:
```env
REACT_APP_FORMSPREE_ID=tu_formspree_id
REACT_APP_EMAIL=tu@email.com
```

### 4. Ejecutar en desarrollo
```bash
npm start
# o 
yarn start
```

La aplicación estará disponible en `http://localhost:3000`

## 📦 Build para Producción

```bash
# Crear build optimizado
npm run build

# Previsualizar build localmente
npm run preview

# Analizar bundle size
npm run analyze
```

## 📁 Estructura del Proyecto

```
src/
├── components/           # Componentes reutilizables
│   ├── layout/          # Layout principales (Navbar, Footer)
│   ├── ui/              # Componentes UI básicos
│   ├── cards/           # Componentes tipo tarjeta
│   └── index.js         # Barrel exports
├── pages/               # Páginas principales
├── context/             # Contextos de React
├── data/                # Datos estáticos
├── styles/              # Estilos globales
├── hooks/               # Custom hooks
└── utils/               # Utilidades
```

## 🎨 Personalización

### Colores y Tema
Los colores se definen en `src/styles/GlobalStyles.js`:
```css
:root {
  --brand: #C89A00;        /* Color principal */
  --brand-light: #F0C54E;  /* Variante clara */
  --brand-soft: rgba(200, 154, 0, 0.15); /* Transparente */
}
```

### Contenido
- **Información personal:** `src/data/personal.js`
- **Proyectos:** `src/data/projects.js`
- **Experiencia:** `src/data/experience.js`
- **Traducciones:** `src/data/translations.js`

## 🌐 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Subir carpeta 'build' a Netlify
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Agregar a package.json:
# "homepage": "https://tusername.github.io/portfolio"
# "deploy": "gh-pages -d build"
npm run deploy
```

## 📈 Optimización

- ✅ **Lazy Loading** de componentes pesados
- ✅ **Code Splitting** automático
- ✅ **Image Optimization** 
- ✅ **SEO** meta tags optimizados
- ✅ **Performance** Lighthouse 90+
- ✅ **Bundle Size** < 500KB gzipped

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras algún bug o tienes sugerencias:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 👨‍💻 Autor

**Darikson Anyosa**
- Portfolio: [portfolio-darikson.vercel.app](https://portfolio-darikson.vercel.app)
- LinkedIn: [@dariksonanyosa](https://linkedin.com/in/dariksonanyosa)
- GitHub: [@DariksonAnyosa](https://github.com/DariksonAnyosa)
- Email: dariksoma@gmail.com

## 🙏 Agradecimientos

- [React Icons](https://react-icons.github.io/react-icons/) por los iconos
- [Framer Motion](https://www.framer.com/motion/) por las animaciones
- [Styled Components](https://styled-components.com/) por el styling
- [Vercel](https://vercel.com/) por el hosting gratuito

---

⭐ **¡Dale una estrella si te gustó el proyecto!** ⭐
