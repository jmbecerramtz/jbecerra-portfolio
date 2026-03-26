# Quick Start Guide - Developer Portfolio

## 🚀 Getting Started

Your React portfolio website is ready to run! Here's how to get started:

### 1. **Start Development Server**

```bash
npm run dev
```

This will start a local development server. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`).

### 2. **Customize Your Content**

Edit these files to personalize your portfolio:

- **[src/pages/Home.jsx](src/pages/Home.jsx)** - Update your hero section and skills
- **[src/pages/About.jsx](src/pages/About.jsx)** - Add your biography, experience, and education
- **[src/pages/Contact.jsx](src/pages/Contact.jsx)** - Update your contact information
- **[src/data/projectsData.js](src/data/projectsData.js)** - Add your projects
- **[src/components/Header.jsx](src/components/Header.jsx)** - Update the logo/site title
- **[src/components/Footer.jsx](src/components/Footer.jsx)** - Update social media links

### 3. **Add Your Projects**

Open `src/data/projectsData.js` and add your projects:

```javascript
{
  id: 7,
  title: "Your Project Name",
  description: "Brief description of your project",
  image: "https://via.placeholder.com/400x250?text=Your+Project",
  technologies: ["React", "Node.js", "MongoDB"],
  liveUrl: "https://yourproject.com",
  githubUrl: "https://github.com/username/project"
}
```

### 4. **Update Colors** (Optional)

Edit color variables in `src/index.css`:

```css
:root {
  --primary: #3498db;        /* Main button/link color */
  --accent: #667eea;         /* Hero gradient accent */
  --accent-light: #764ba2;   /* Hero gradient secondary */
  /* ... other colors */
}
```

### 5. **Build for Production**

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### 6. **Deploy Your Portfolio**

#### Option A: Vercel (Recommended)
- Push your code to GitHub
- Connect your repo to [Vercel](https://vercel.com)
- Deploy with one click

#### Option B: Netlify
- Push your code to GitHub
- Connect your repo to [Netlify](https://netlify.com)
- Set build command: `npm run build`
- Set publish directory: `dist`

#### Option C: Other Hosts
- Run `npm run build`
- Upload the `dist/` folder to your hosting provider

## 📁 Project Structure

```
src/
├── components/          # Reusable components
├── pages/              # Page components
├── styles/             # CSS for pages and components
├── data/               # Static data (projects, etc)
├── App.jsx             # Main app with routing
└── index.css           # Global styles
```

## 🎨 Key Pages

- **Home** (`/`) - Landing page with hero, skills showcase
- **About** (`/about`) - Your bio, experience, education
- **Projects** (`/projects`) - All your projects
- **Contact** (`/contact`) - Contact form & info

## 💡 Tips

- Use placeholder images initially: `https://via.placeholder.com/400x250?text=YourText`
- Test on mobile: Open dev tools and toggle device toolbar
- Hot reload works automatically - just save files while dev server runs
- Use `npm run preview` to test production build locally

## 📦 Dependencies

- **React 18** - UI library
- **React Router DOM** - Page routing
- **Vite** - Build tool
- **Axios** - HTTP client (pre-installed, optional to use)

## 🆘 Troubleshooting

**Port already in use?**
```bash
npm run dev -- --port 3000
```

**Build errors?**
```bash
rm -rf node_modules
npm install
npm run build
```

**Need TypeScript?**
Check the [Vite React TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts)

## 📚 Learn More

- [React Documentation](https://react.dev)
- [React Router Guide](https://reactrouter.com)
- [Vite Guide](https://vitejs.dev)
- [CSS Grid & Flexbox](https://css-tricks.com)

---

Happy coding! 🎉
