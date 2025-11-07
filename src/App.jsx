import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Stats from './components/Stats'
import Footer from './components/Footer'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className="min-h-screen font-inter bg-white text-gray-900">
      {/* Simple sticky nav */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">Pulse</span>{' '}
            Fitness
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#classes" className="hover:text-gray-900">Classes</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#blog" className="hover:text-gray-900">Blog</a>
            <a href="#contact" className="rounded-full bg-cyan-500 hover:bg-cyan-400 text-white px-4 py-2">Join Now</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Highlights />
        <Stats />

        {/* Classes / Services */}
        <section id="classes" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold"
            >
              Classes & Services
            </motion.h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'HIIT Burn',
                  desc: 'Maximum intensity interval training to torch calories fast.',
                  img:
                    'https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=2069&auto=format&fit=crop',
                  price: '$20 / session',
                },
                {
                  title: 'Strength Lab',
                  desc: 'Progressive lifting program focused on compound movements.',
                  img:
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
                  price: '$25 / session',
                },
                {
                  title: 'Power Yoga',
                  desc: 'Build mobility, balance, and breath control for performance.',
                  img:
                    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2070&auto=format&fit=crop',
                  price: '$18 / session',
                },
              ].map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05 * i }}
                  className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-shadow"
                >
                  <div
                    className="h-48 w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${c.img})` }}
                    aria-hidden
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">{c.title}</h3>
                      <span className="text-sm font-semibold text-cyan-600">{c.price}</span>
                    </div>
                    <p className="mt-2 text-gray-600">{c.desc}</p>
                    <div className="mt-4 flex items-center gap-3">
                      <button className="rounded-full bg-gray-900 text-white px-4 py-2 text-sm hover:bg-gray-800">Details</button>
                      <button className="rounded-full bg-cyan-500 text-white px-4 py-2 text-sm hover:bg-cyan-400">Book Now</button>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold text-center"
            >
              Memberships that fit your journey
            </motion.h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: 'Starter',
                  price: '$29/mo',
                  points: ['Gym floor access', 'Locker room', '1 class / week'],
                  highlight: false,
                },
                {
                  name: 'Athlete',
                  price: '$59/mo',
                  points: ['All classes', 'Personalized plan', 'Sauna access'],
                  highlight: true,
                },
                {
                  name: 'Elite',
                  price: '$99/mo',
                  points: ['Unlimited PT', 'Priority booking', 'Recovery lounge'],
                  highlight: false,
                },
              ].map((p) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`rounded-2xl border ${
                    p.highlight
                      ? 'border-cyan-200 bg-gradient-to-br from-white to-cyan-50 shadow-md'
                      : 'border-gray-100 bg-white shadow-sm'
                  } p-6`}
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-xl font-bold">{p.name}</h3>
                    <span className="text-2xl font-extrabold bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">{p.price}</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-gray-700">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" /> {pt}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full rounded-full bg-gray-900 text-white py-2 hover:bg-gray-800">Choose Plan</button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog preview */}
        <section id="blog" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold"
            >
              From the Blog
            </motion.h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Fueling Performance: 5 Protein Myths Busted',
                  img:
                    'https://images.unsplash.com/photo-1543352634-8730a9b4f2b3?q=80&w=2070&auto=format&fit=crop',
                },
                {
                  title: 'The Power of Consistency Over Intensity',
                  img:
                    'https://images.unsplash.com/photo-1517638851339-4aa32003c11a?q=80&w=2070&auto=format&fit=crop',
                },
                {
                  title: 'Mobility Routine for Heavy Lifters',
                  img:
                    'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=2070&auto=format&fit=crop',
                },
              ].map((b, i) => (
                <motion.a
                  href="#"
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05 * i }}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-shadow"
                >
                  <div
                    className="h-44 w-full bg-cover bg-center group-hover:scale-[1.02] transition-transform"
                    style={{ backgroundImage: `url(${b.img})` }}
                    aria-hidden
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold group-hover:text-cyan-600 transition-colors">{b.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">Read more →</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
