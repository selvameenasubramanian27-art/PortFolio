import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/layout/ScrollProgress';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';

function App() {
  return (
    <main className="relative bg-dark selection:bg-primary selection:text-white">
      <ScrollProgress />
      <Navbar />
      
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certificates />
      <Contact />

      
      <Footer />
    </main>
  );
}

export default App;
