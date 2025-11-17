import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showreel from './components/Showreel';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <Hero />
      <Showreel />
      <About />
      <Contact />
      <footer className="bg-black text-zinc-400 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Your Name — Video Editor</p>
          <div className="text-xs">Built with a touch of cyberpunk.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
