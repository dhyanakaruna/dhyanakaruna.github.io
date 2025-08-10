import { HelmetProvider, Helmet } from 'react-helmet-async';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Conferences from './pages/Conferences';
import Contact from './pages/Contact';

function MainPortfolio() {
  return (
    <>
      <Home />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Helmet>
          <title>Dhyana - Full Stack Web Developer</title>
          <meta name="description" content="Professional web developer specializing in custom web development solutions. Maximize your business potential with modern web applications." />
          <meta name="keywords" content="web developer, full stack, React, Node.js, JavaScript, portfolio" />
        </Helmet>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<MainPortfolio />} />
              <Route path="/services" element={<Services />} />
              <Route path="/conferences" element={<Conferences />} />
            </Routes>
          </main>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
