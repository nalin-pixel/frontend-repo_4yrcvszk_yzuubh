import { motion } from 'framer-motion'
import { Dumbbell, Users, Flame } from 'lucide-react'

const features = [
  {
    icon: Dumbbell,
    title: 'State-of-the-art Equipment',
    desc: 'Premium machines and free weights, always maintained for peak performance.',
  },
  {
    icon: Users,
    title: 'Personalized Coaching',
    desc: 'Certified trainers build plans tailored to your goals and lifestyle.',
  },
  {
    icon: Flame,
    title: 'High-Energy Classes',
    desc: 'From HIIT to yoga—sweat with a squad that pushes you further.',
  },
]

export default function Highlights() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900"
        >
          Why train with us
        </motion.h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="group rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="h-12 w-12 rounded-xl bg-cyan-50 text-cyan-600 grid place-items-center mb-4 group-hover:scale-105 transition-transform">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
