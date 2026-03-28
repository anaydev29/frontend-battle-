import { useState, useEffect, useRef, useCallback } from 'react'

const topperSlides = [
  [
    { name: 'Aditya Vardhan', rank: 'AIR 7', service: 'IAS', year: '2023', photo: '/images/topper-aditya.png' },
    { name: 'Ishita Sharma', rank: 'AIR 23', service: 'IAS', year: '2023', photo: 'https://api.dicebear.com/9.x/lorelei/svg?seed=Ishita&backgroundColor=ffd5dc' },
    { name: 'Rohan Mehra', rank: 'AIR 45', service: 'IPS', year: '2022', photo: 'https://api.dicebear.com/9.x/lorelei/svg?seed=Rohan&backgroundColor=d1d4f9' },
    { name: 'Sneha Gupta', rank: 'AIR 12', service: 'IAS', year: '2022', photo: 'https://api.dicebear.com/9.x/lorelei/svg?seed=Sneha&backgroundColor=ffd5dc' },
  ],
  [
    { name: 'Priya Verma', rank: 'AIR 34', service: 'IPS', year: '2022', photo: 'https://api.dicebear.com/9.x/lorelei/svg?seed=Priya&backgroundColor=b6e3f4' },
    { name: 'Rahul Mehta', rank: 'AIR 67', service: 'IFS', year: '2023', photo: 'https://api.dicebear.com/9.x/lorelei/svg?seed=Rahul&backgroundColor=d1d4f9' },
    { name: 'Ankit Sharma', rank: 'AIR 23', service: 'IAS', year: '2023', photo: '/images/topper-aditya.png' },
    { name: 'Meera Joshi', rank: 'AIR 91', service: 'IRS', year: '2023', photo: 'https://api.dicebear.com/9.x/lorelei/svg?seed=Meera&backgroundColor=c0aede' },
  ],
]

export default function TopperSlider() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const timerRef = useRef(null)

  const goToSlide = useCallback((index) => {
    if (index === current || isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrent(index)
      setIsAnimating(false)
    }, 400)
  }, [current, isAnimating])

  const next = useCallback(() => {
    goToSlide((current + 1) % topperSlides.length)
  }, [current, goToSlide])

  const prev = useCallback(() => {
    goToSlide((current - 1 + topperSlides.length) % topperSlides.length)
  }, [current, goToSlide])

  useEffect(() => {
    timerRef.current = setInterval(next, 4000)
    return () => clearInterval(timerRef.current)
  }, [next])

  const resetTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(next, 4000)
  }

  return (
    <div className="relative">
      {/* Cards Grid */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 transition-all duration-400 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        {topperSlides[current].map((topper) => (
          <div
            key={topper.name + topper.rank}
            className="bg-surface-container-lowest rounded-xl p-6 ambient-shadow ghost-border hover-lift group"
          >
            <img
              src={topper.photo}
              alt={topper.name}
              className="w-16 h-16 rounded-full object-cover mb-4 ring-2 ring-primary-fixed/30 group-hover:ring-secondary/40 transition-all duration-300"
            />
            <h3 className="font-headline font-semibold text-lg text-on-surface">{topper.name}</h3>
            <p className="text-sm text-on-surface-variant">{topper.service} · {topper.year}</p>
            <span className="inline-block mt-3 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold">
              {topper.rank}
            </span>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={() => { prev(); resetTimer() }}
          className="w-10 h-10 rounded-full bg-surface-container-lowest ambient-shadow flex items-center justify-center text-on-surface-variant hover:text-primary-container hover:bg-primary-fixed/20 transition-all duration-200"
          aria-label="Previous"
        >
          <span className="material-icons-outlined text-lg">chevron_left</span>
        </button>

        <div className="flex items-center gap-2">
          {topperSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => { goToSlide(i); resetTimer() }}
              className={`carousel-dot ${i === current ? 'active' : ''}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => { next(); resetTimer() }}
          className="w-10 h-10 rounded-full bg-surface-container-lowest ambient-shadow flex items-center justify-center text-on-surface-variant hover:text-primary-container hover:bg-primary-fixed/20 transition-all duration-200"
          aria-label="Next"
        >
          <span className="material-icons-outlined text-lg">chevron_right</span>
        </button>
      </div>
    </div>
  )
}
