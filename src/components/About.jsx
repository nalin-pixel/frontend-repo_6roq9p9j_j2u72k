import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Editing that feels like a world of its own</h2>
          <p className="text-zinc-300">
            Over the past few years Ive built a reel focused on punchy ad spots, high-energy social content, and cinematic trailers. Im fluent across Premiere Pro, After Effects, DaVinci Resolve, and the whole Adobe stack.
          </p>
          <p className="text-zinc-300">
            My process blends precise rhythm, tasteful effects, and sound design to create edits that hold attention and drive action.
          </p>

          <ul className="grid grid-cols-2 gap-3 text-sm text-zinc-300">
            <li className="rounded-md bg-white/5 ring-1 ring-white/10 px-3 py-2">Premiere Pro</li>
            <li className="rounded-md bg-white/5 ring-1 ring-white/10 px-3 py-2">After Effects</li>
            <li className="rounded-md bg-white/5 ring-1 ring-white/10 px-3 py-2">DaVinci Resolve</li>
            <li className="rounded-md bg-white/5 ring-1 ring-white/10 px-3 py-2">Sound Design</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl bg-gradient-to-tr from-fuchsia-600/20 via-violet-600/10 to-cyan-400/20 p-1"
        >
          <div className="rounded-2xl bg-[#0B0A0E] p-6 ring-1 ring-white/10">
            <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-fuchsia-600/20 via-violet-700/10 to-cyan-400/20 ring-1 ring-white/10 grid place-items-center text-zinc-300">
              <span className="text-sm">Drop a headshot here later</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
