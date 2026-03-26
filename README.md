# Developer Portfolio Website

A modern, responsive portfolio website built with React and Vite. This template provides a complete foundation for showcasing your projects, skills, and experience to potential clients and employers.

## Features

- **Responsive Design**: Looks great on desktop, tablet, and mobile devices
- **Modern React Setup**: Built with React 18 and Vite for fast development and optimized builds
- **React Router**: Smooth navigation between pages with client-side routing
- **Component-Based Architecture**: Reusable, well-organized components
- **Multiple Pages**: Home, About, Projects, Contact pages
- **Project Showcase**: Display your work with project cards
- **Contact Form**: Simple contact form for potential clients to reach out
- **Professional Styling**: Modern CSS with smooth animations and transitions

## Project Structure

```
src/
├── components/        # Reusable components
│   ├── Header.jsx     # Navigation header
│   ├── Footer.jsx     # Footer component
│   └── ProjectCard.jsx # Project display card
├── pages/             # Page components
│   ├── Home.jsx       # Home/landing page
│   ├── About.jsx      # About me page
│   ├── Projects.jsx   # Projects showcase page
│   └── Contact.jsx    # Contact page
├── styles/            # CSS files for components and pages
│   ├── Header.css
│   ├── Footer.css
│   ├── ProjectCard.css
│   ├── Home.css
│   ├── About.css
│   ├── Projects.css
│   └── Contact.css
├── data/              # Static data
│   └── projectsData.js # Projects information
├── App.jsx            # Main App component
├── App.css            # Global app styles
├── main.jsx           # Entry point
└── index.css          # Global CSS

public/               # Static assets
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd jbecerra-portfolio
```

2. Install dependencies:
```bash
npm install
```

### Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/` (or another port if 5173 is in use).

### Build for Production

To create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Customization

### Update Your Information

1. **Header Logo**: Edit `src/components/Header.jsx`
2. **Social Links**: Update in `src/components/Footer.jsx`
3. **About Page**: Edit `src/pages/About.jsx` with your experience and education
4. **Projects**: Modify `src/data/projectsData.js` to add your projects
5. **Contact Info**: Update email, phone, and location in `src/pages/Contact.jsx`

### Add Projects

Edit `src/data/projectsData.js` and add new project objects:

```javascript
{
  id: 7,
  title: "Your Project Title",
  description: "Project description",
  image: "https://via.placeholder.com/400x250",
  technologies: ["React", "Node.js"],
  liveUrl: "https://yourproject.com",
  githubUrl: "https://github.com/username/project"
}
```

### Update Colors

Modify the color values in these files:
- `src/index.css` - Global CSS variables
- Individual component CSS files for component-specific colors

## Technologies Used

- **React** - JavaScript library for building user interfaces
- **Vite** - Modern build tool and dev server
- **React Router DOM** - Client-side routing
- **CSS3** - Styling with modern CSS features
- **Axios** - HTTP client (included, ready for API calls)

## Deployment

### Vercel (Recommended)

1. Push your project to GitHub
2. Connect repository to Vercel
3. Vercel will automatically detect Vite and deploy

### Netlify

1. Push your project to GitHub
2. Connect repository to Netlify
3. Configure build command: `npm run build`
4. Configure publish directory: `dist`

### Other Platforms

Build the project and upload the `dist/` folder to your hosting provider.

## Features to Add

- [ ] Dark mode toggle
- [ ] Smooth scroll animations
- [ ] Blog/articles section
- [ ] Instagram/LinkedIn feed integration
- [ ] Newsletter signup
- [ ] Search functionality
- [ ] Comments on projects
- [ ] Backend for contact form
- [ ] Analytics integration
- [ ] PDF resume download

## License

This project is open source under the MIT License - see the LICENSE file for details.

## Support

For questions or issues, please refer to the documentation or create an issue in the project repository.

---

Built with ❤️ by a developer portfolio template
