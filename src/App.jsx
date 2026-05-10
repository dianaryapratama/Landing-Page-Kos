import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Rooms from './components/Rooms';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-secondary overflow-x-hidden font-sans">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Rooms />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;