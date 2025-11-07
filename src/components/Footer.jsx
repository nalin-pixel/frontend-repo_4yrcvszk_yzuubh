import { motion } from 'framer-motion'
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-950 text-white py-14">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 grid gap-10 sm:grid-cols-3">
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-extrabold"
          >
            Pulse Fitness
          </motion.h3>
          <p className="mt-3 text-white/70">
            123 Strength Ave, Suite 200, Metropolis
          </p>
          <p className="text-white/70">Open: 5am – 11pm, Mon–Sun</p>
        </div>
        <div>
          <h4 className="font-semibold text-white/90">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-white/70">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#classes" className="hover:text-white">Classes</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="#blog" className="hover:text-white">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white/90">Stay in the loop</h4>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-3 flex gap-2"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-lg bg-white/10 px-4 py-2 outline-none placeholder-white/50"
            />
            <button className="rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-black hover:bg-cyan-300">
              Subscribe
            </button>
          </form>
          <div className="mt-4 flex items-center gap-4 text-white/70">
            <a href="#" aria-label="Facebook" className="hover:text-white"><Facebook size={18} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram size={18} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter size={18} /></a>
            <a href="mailto:hello@pulsefitness.com" aria-label="Email" className="hover:text-white"><Mail size={18} /></a>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-white/50 text-sm">© {new Date().getFullYear()} Pulse Fitness. All rights reserved.</div>
    </footer>
  )
}
