import { useState, useEffect, useRef, useCallback } from 'react'

const testimonials = [
  {
    quote: 'Ravindra IAS completely transformed my approach to UPSC preparation. The structured curriculum and personal mentorship were exactly what I needed.',
    name: 'Aditya Vardhan',
    service: 'IAS · AIR 7',
    year: '2023',
  },
  {
    quote: 'The test series here is unmatched. Every mock felt like the real exam. The detailed evaluation helped me improve my answer writing dramatically.',
    name: 'Ishita Sharma',
    service: 'IAS · AIR 23',
    year: '2023',
  },
  {
    quote: 'What sets Ravindra IAS apart is the faculty. They don\'t just teach, they mentor you through every phase—Prelims, Mains, and Interview.',
    name: 'Sneha Gupta',
    service: 'IAS · AIR 12',
    year: '2022',
  },
  {
    quote: 'The personalized study plan and weekly assessments kept me on track. I couldn\'t have cracked the exam without this institute.',
    name: 'Rohan Mehra',
    service: 'IPS · AIR 45',
    year: '2022',
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const timeoutRef = useRef(null)

  const goToNext = useCallback(() => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
      setIsAnimating(false)
    }, 300)
  }, [])

  useEffect(() => {
    timeoutRef.current = setInterval(goToNext, 5000)
    return () => clearInterval(timeoutRef.current)
  }, [goToNext])

  const goTo = (index) => {
    if (index === current) return
    clearInterval(timeoutRef.current)
    setIsAnimating(true)
    setTimeout(() => {
      setCurrent(index)
      setIsAnimating(false)
      timeoutRef.current = setInterval(goToNext, 5000)
    }, 300)
  }

  const t = testimonials[current]

  return (
    <div className="relative">
      <div className="bg-surface-container-lowest rounded-2xl p-8 lg:p-12 ambient-shadow min-h-[220px] flex flex-col justify-between">
        {/* Quote Icon */}
        <div className="mb-6">
          <svg width="40" height="32" viewBox="0 0 40 32" fill="none" className="text-primary-fixed-dim opacity-50">
            <path d="M0 32V18.4C0 14.9333 0.666667 11.7333 2 8.8C3.46667 5.86667 5.86667 3.2 9.2 0.8L14 4.4C11.8667 6.13333 10.1333 8 8.8 10C7.6 12 6.93333 14.1333 6.8 16.4H14V32H0ZM22 32V18.4C22 14.9333 22.6667 11.7333 24 8.8C25.4667 5.86667 27.8667 3.2 31.2 0.8L36 4.4C33.8667 6.13333 32.1333 8 30.8 10C29.6 12 28.9333 14.1333 28.8 16.4H36V32H22Z" fill="currentColor"/>
          </svg>
        </div>

        {/* Quote Text */}
        <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          <p className="font-headline text-lg lg:text-xl text-on-surface leading-relaxed italic mb-6">
            "{t.quote}"
          </p>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-headline font-semibold text-on-surface">{t.name}</p>
              <p className="text-sm text-on-surface-variant">{t.service} · {t.year}</p>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`carousel-dot ${i === current ? 'active' : ''}`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
