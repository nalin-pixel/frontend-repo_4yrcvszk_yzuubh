import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 py-28 sm:py-36">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-cyan-300 tracking-wide uppercase font-semibold"
        >
          Welcome to Pulse Fitness
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold leading-tight text-white max-w-3xl"
        >
          Elevate your body. Empower your mind.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl"
        >
          Modern equipment, elite coaches, and a community that keeps you
          motivated. Start your transformation today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#classes"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-semibold px-6 py-3 transition-colors"
          >
            Join Now <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 backdrop-blur transition-colors"
          >
            Book a Free Trial
          </a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute -bottom-16 left-1/2 -translate-x-1/2 h-32 w-[120%] rounded-[50%] bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
