import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[95vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for cyberpunk vibe */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black"></div>
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 pt-36 pb-24 md:pt-44">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-zinc-200"
        >
          Video Editor • Motion Design • Post Production
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
        >
          Futuristic Visuals.\n          Cinematic Storytelling.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl text-lg md:text-xl text-zinc-300"
        >
          I craft standout edits for brands, creators, and artists — blending rhythm, design and sound into immersive stories.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a href="#work" className="group inline-flex items-center gap-2 rounded-md bg-white text-black px-5 py-3 font-medium shadow-lg shadow-fuchsia-500/20 ring-1 ring-white/20 hover:bg-zinc-100">
            <Play className="h-4 w-4" /> View Showreel
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-white/10 text-white px-5 py-3 font-medium ring-1 ring-white/20 hover:bg-white/20">
            Book a project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
