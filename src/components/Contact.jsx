import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#07060A] text-white py-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Lets create something unforgettable
        </motion.h3>
        <p className="mt-3 text-zinc-300">Tell me about your project — timeline, style, goals — and Ill get back within 24 hours.</p>

        <form
          action={`mailto:your@email.com`}
          method="post"
          encType="text/plain"
          className="mt-8 grid grid-cols-1 gap-4 text-left"
        >
          <input type="text" name="name" placeholder="Your name" className="w-full rounded-md bg-white/5 px-4 py-3 ring-1 ring-white/10 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
          <input type="email" name="email" placeholder="Your email" className="w-full rounded-md bg-white/5 px-4 py-3 ring-1 ring-white/10 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
          <textarea name="message" placeholder="Tell me about your project" rows="5" className="w-full rounded-md bg-white/5 px-4 py-3 ring-1 ring-white/10 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
          <button type="submit" className="inline-flex justify-center rounded-md bg-white text-black px-5 py-3 font-medium ring-1 ring-white/20 hover:bg-zinc-100">Send inquiry</button>
        </form>
      </div>
    </section>
  );
}
