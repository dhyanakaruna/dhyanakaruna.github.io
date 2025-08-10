# Dhyana - Personal Portfolio Website

A modern, responsive personal portfolio website built with React, showcasing web development skills, projects, and services.

## 🚀 Features

- **Fully Responsive Design** - Optimized for all devices and screen sizes
- **Modern UI/UX** - Clean, professional design with smooth animations
- **React Router v6** - Client-side routing for seamless navigation
- **Framer Motion** - Smooth animations and transitions
- **Tailwind CSS** - Utility-first styling for rapid development
- **SEO Optimized** - Meta tags, structured data, and performance optimized
- **Contact Form** - Functional contact form with validation
- **Portfolio Showcase** - Project gallery with detailed descriptions
- **Skills Section** - Interactive skills display with progress bars
- **Services Page** - Detailed service offerings and pricing

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **SEO**: React Helmet Async
- **Build Tool**: Vite
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── components/
│   └── Navbar.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Portfolio.jsx
│   ├── Services.jsx
│   └── Contact.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my_portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website.

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🚀 Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages:

1. **Push to main branch** - The GitHub Actions workflow will automatically build and deploy the site
2. **Manual deployment** - Run `npm run build` and push the `dist/` folder to the `gh-pages` branch

The site will be available at: `https://dhyanakaruna.github.io`

### Local Testing

To test the production build locally:

```bash
npm run build
npm run preview
```

## 📱 Pages

### Home Page
- Hero section with call-to-action
- Services overview
- Education timeline
- Skills showcase
- About section

### About Page
- Personal introduction
- Statistics and achievements
- Technical skills with progress bars
- Professional timeline
- Core values

### Skills Page
- Detailed technical skills
- Skill categories with proficiency levels
- Tools and technologies
- Experience summary
- Continuous learning section

### Portfolio Page
- Web projects showcase
- Mobile applications
- Project details and links
- Call-to-action section

### Services Page
- Service offerings with pricing
- Development process
- Why choose me section
- Call-to-action

### Contact Page
- Contact form with validation
- Contact information
- FAQ section
- Social media links

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#faf5ff',
    100: '#f3e8ff',
    // ... more shades
  }
}
```

### Content
Update the content in each page component to match your personal information:
- Personal details
- Skills and experience
- Project descriptions
- Contact information

### Styling
Modify the CSS classes in `src/index.css` to customize:
- Button styles
- Card designs
- Animations
- Typography

## 📊 Performance

The website is optimized for performance with:
- Lazy loading of components
- Optimized images
- Minified CSS and JavaScript
- Efficient animations
- SEO best practices

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

The project follows modern React best practices:
- Functional components with hooks
- Proper component structure
- Consistent naming conventions
- Clean and readable code

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For questions or support, please contact:
- Email: dhyanakarunanidhi@gmail.com
- Website: https://dhyanakaruna.github.io

---

Built with ❤️ using React and Tailwind CSS
