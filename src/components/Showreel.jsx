import { motion } from 'framer-motion';

const videos = [
  {
    title: 'Cyberwave Ad — 30s',
    thumb: 'https://images.unsplash.com/photo-1605649487212-47bdab064df3?q=80&w=1600&auto=format&fit=crop',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    title: 'Neon City Montage',
    thumb: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1600&auto=format&fit=crop',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    title: 'Launch Trailer',
    thumb: 'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=1600&auto=format&fit=crop',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  }
];

export default function Showreel() {
  return (
    <section id="work" className="relative bg-[#07060A] text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Selected Work</h2>
            <p className="text-zinc-400 mt-2">A mix of ads, trailers, and social edits.</p>
          </div>
          <a href="#contact" className="hidden md:inline-block rounded-md bg-white text-black px-4 py-2 font-medium ring-1 ring-white/20 hover:bg-zinc-100">Hire me</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <motion.a
              key={v.title}
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-xl ring-1 ring-white/10 bg-white/5"
            >
              <img src={v.thumb} alt={v.title} className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="font-semibold">{v.title}</h3>
                <p className="text-xs text-zinc-300">Watch on YouTube</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
