import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function useCounter(target, duration = 1200) {
  const [value, setValue] = useState(0)
  const start = useRef(null)

  useEffect(() => {
    let raf
    function step(ts) {
      if (!start.current) start.current = ts
      const p = Math.min((ts - start.current) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.floor(eased * target))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [target, duration])
  return value
}

const stats = [
  { label: 'Active Members', value: 1200 },
  { label: 'Calories Burned Today', value: 845000 },
  { label: 'Classes This Month', value: 180 },
]

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section className="py-20 bg-gradient-to-b from-cyan-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 text-center"
        >
          Vital stats that keep us moving
        </motion.h2>
        <div ref={ref} className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6">
          {stats.map((s, i) => {
            const value = inView ? useCounter(s.value, 1200 + i * 200) : 0
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 text-center"
              >
                <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                  {value.toLocaleString()}
                </div>
                <div className="mt-2 text-gray-600">{s.label}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
