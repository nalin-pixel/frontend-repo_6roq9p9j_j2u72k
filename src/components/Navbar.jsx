import { Menu, Play, Film } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl/50 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.a
            href="#hero"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-white"
          >
            <div className="h-8 w-8 grid place-items-center rounded-md bg-gradient-to-tr from-fuchsia-600 via-violet-600 to-cyan-400 ring-1 ring-white/20 shadow-lg shadow-fuchsia-500/20">
              <Film className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-wide">Your Name</span>
          </motion.a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-zinc-300 hover:text-white hover:bg-white/10">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
