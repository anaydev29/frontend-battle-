import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useParallax } from '../hooks/useParallax'
import { useTypingEffect } from '../hooks/useTypingEffect'
import TopperSlider from '../components/TopperSlider'
import TestimonialCarousel from '../components/TestimonialCarousel'

const stats = [
  { value: 500, suffix: '+', label: 'Officers Commissioned' },
  { value: 50, suffix: '+', label: 'Years of Excellence' },
  { value: 100, suffix: '+', label: 'Top AIR Ranks' },
  { value: 15, suffix: '+', label: 'Expert Faculty' },
]

const courses = [
  { icon: 'menu_book', title: 'General Studies', desc: 'Comprehensive GS coverage across all four papers with focus on conceptual clarity and analytical thinking.' },
  { icon: 'calculate', title: 'CSAT Masterclass', desc: 'Strategic approach to Paper II with emphasis on quantitative aptitude, logical reasoning, and comprehension.' },
  { icon: 'psychology', title: 'Optional Subjects', desc: 'Expert guidance for popular optionals including Public Administration, Sociology, Geography, and more.' },
  { icon: 'assignment', title: 'Test Series', desc: 'Prelims and Mains test series with detailed evaluation, individual feedback, and performance analytics.' },
  { icon: 'groups', title: 'Personalized Mentorship', desc: 'One-on-one mentoring sessions with former civil servants and subject matter experts.' },
  { icon: 'record_voice_over', title: 'Interview Program', desc: 'Mock interviews and personality development with panels of retired UPSC board members.' },
]

const whyUs = [
  { icon: 'workspace_premium', title: '50+ Years Legacy', desc: 'Proven track record since 1974 with consistent results year after year.' },
  { icon: 'school', title: 'Expert Faculty', desc: 'Learn from former civil servants, subject specialists, and academic researchers.' },
  { icon: 'trending_up', title: 'Result-Oriented', desc: 'Every module is strategically designed to maximize UPSC marks.' },
  { icon: 'support_agent', title: '24/7 Doubt Support', desc: 'Round-the-clock mentorship via WhatsApp and in-person doubt sessions.' },
]

function Counter({ target, suffix }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0
        const duration = 2000
        const step = (timestamp) => {
          if (!start) start = timestamp
          const progress = Math.min((timestamp - start) / duration, 1)
          el.textContent = Math.floor(progress * target) + suffix
          if (progress < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
        observer.disconnect()
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, suffix])
  return <span ref={ref}>0{suffix}</span>
}

export default function Home() {
  const parallaxRef = useParallax(0.3)
  const typingText = useTypingEffect(
    ['LBSNAA', 'IAS', 'IPS', 'IFS', 'Success'],
    100, 50, 2000
  )

  return (
    <div>
      {/* ============ HERO — Parallax + Typing ============ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <img
          ref={parallaxRef}
          src="/images/hero-bg.png"
          alt="Students studying at Ravindra IAS Academy"
          className="absolute inset-0 w-full h-full object-cover scale-110 parallax-bg"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#000666]/90 via-[#1A237E]/85 to-[#000666]/90"></div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 py-32 lg:py-40">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-6" style={{ animation: 'fadeDown 0.8s ease forwards' }}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-fixed-dim">Est. 1974 · Gwalior</span>
          </div>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 max-w-3xl leading-[1.1]" style={{ animation: 'fadeUp 0.8s ease 0.2s both' }}>
            Your Journey to<br />
            <span className="text-primary-fixed-dim typing-cursor">{typingText}</span> Starts Here
          </h1>
          <p className="text-lg text-white/70 max-w-xl mb-10 leading-relaxed" style={{ animation: 'fadeUp 0.8s ease 0.4s both' }}>
            Expert Mentorship & 50+ Years of Legacy. We don't just teach subjects; we craft future administrators with precision.
          </p>
          <div className="flex flex-wrap gap-4" style={{ animation: 'fadeUp 0.8s ease 0.6s both' }}>
            <Link to="/courses" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary-container rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105">
              Explore Courses <span className="material-icons-outlined text-lg">arrow_forward</span>
            </Link>
            <Link to="/about" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/25 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* ============ STATS BAR ============ */}
      <section className="relative z-10 -mt-14">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="gradient-primary rounded-2xl p-8 ambient-shadow stagger-children" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem' }}>
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-headline text-3xl lg:text-4xl font-bold text-white">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs uppercase tracking-[0.15em] text-primary-fixed/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WALL OF FAME — Topper Slider ============ */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block">Success Stories</span>
            <h2 className="font-headline text-3xl lg:text-5xl font-bold text-on-surface">
              The Wall of <span className="text-secondary">Fame</span>
            </h2>
          </div>

          {/* Topper Celebration Photo */}
          <div className="mb-12 reveal-scale">
            <div className="relative rounded-2xl overflow-hidden ambient-shadow group">
              <img src="/images/toppers.png" alt="Ravindra IAS Toppers Celebrating Success" className="w-full h-[300px] lg:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000666]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-white font-headline text-xl lg:text-2xl font-bold">Our Students, Our Pride</p>
                <p className="text-white/70 text-sm mt-1">Celebrating another year of exceptional UPSC results</p>
              </div>
            </div>
          </div>

          {/* Auto-scrolling Topper Slider */}
          <div className="reveal">
            <TopperSlider />
          </div>

          <div className="text-center mt-10 reveal">
            <Link to="/toppers" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-container underline-expand hover:gap-3 transition-all">
              View All Toppers <span className="material-icons-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ COURSES GRID — Staggered ============ */}
      <section className="py-20 lg:py-28 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-14 gap-4 reveal">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block">Our Programs</span>
              <h2 className="font-headline text-3xl lg:text-4xl font-bold text-on-surface">
                Structured for <span className="text-secondary italic">Success</span>
              </h2>
            </div>
            <p className="text-sm text-on-surface-variant max-w-md">Programs rigorously designed to give you the competitive edge at every stage of the UPSC examination.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
            {courses.map((course) => (
              <div key={course.title} className="bg-surface-container-lowest rounded-xl p-7 ambient-shadow ghost-border hover-lift group">
                <div className="w-12 h-12 rounded-lg bg-primary-fixed/40 flex items-center justify-center mb-5 group-hover:bg-primary-fixed/60 transition-colors duration-300">
                  <span className="material-icons-outlined text-primary-container">{course.icon}</span>
                </div>
                <h3 className="font-headline font-semibold text-lg text-on-surface mb-2">{course.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{course.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-10 reveal">
            <p className="text-on-surface-variant text-sm"><span className="font-headline text-2xl text-primary-container font-bold">50+</span> Years of Excellence</p>
            <Link to="/courses" className="inline-flex items-center gap-2 px-6 py-3 gradient-primary text-on-primary rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5">
              View All Courses <span className="material-icons-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ WHY RAVINDRA IAS — Directional Reveals ============ */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="reveal-left">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block">Why Choose Us</span>
              <h2 className="font-headline text-3xl lg:text-4xl font-bold text-on-surface mb-8">
                Why <span className="text-secondary italic">Ravindra IAS?</span>
              </h2>
              <div className="space-y-6">
                {whyUs.map((item) => (
                  <div key={item.title} className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="material-icons-outlined text-white">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-headline font-semibold text-on-surface mb-1">{item.title}</h3>
                      <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative reveal-right">
              <div className="rounded-2xl overflow-hidden ambient-shadow group">
                <img src="/images/campus.png" alt="Ravindra IAS Academy Campus, Gwalior" className="w-full h-[400px] lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 ambient-shadow flex items-center gap-3" style={{ animation: 'float 3s ease-in-out infinite' }}>
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                  <span className="material-icons-outlined text-white text-lg">location_on</span>
                </div>
                <div>
                  <p className="font-headline font-semibold text-sm text-on-surface">Gwalior, M.P.</p>
                  <p className="text-xs text-on-surface-variant">Civil Lines Campus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CLASSROOM + RESOURCES — Opposite Reveals ============ */}
      <section className="py-20 lg:py-28 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1 reveal-left">
              <div className="rounded-2xl overflow-hidden ambient-shadow group">
                <img src="/images/classroom.png" alt="Students attending class at Ravindra IAS Academy" className="w-full h-[350px] lg:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute -top-4 -right-4 bg-secondary rounded-xl p-4 text-white text-center" style={{ animation: 'float 3s ease-in-out 0.5s infinite' }}>
                <p className="font-headline font-bold text-2xl">15+</p>
                <p className="text-[10px] uppercase tracking-wider">Expert Faculty</p>
              </div>
            </div>

            <div className="order-1 lg:order-2 reveal-right">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block">Learning Ecosystem</span>
              <h2 className="font-headline text-3xl lg:text-4xl font-bold text-on-surface mb-6">
                A Complete <span className="text-secondary italic">Academic</span> Experience
              </h2>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                Our world-class classrooms, digital infrastructure, and comprehensive study materials create an immersive learning environment designed to bring out the best in every aspirant.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 stagger-children">
                {[
                  { icon: 'newspaper', title: 'DNA', desc: 'Daily News Analysis' },
                  { icon: 'description', title: 'Mains Focus', desc: 'Paper-wise Articles' },
                  { icon: 'quiz', title: 'Prelims Bits', desc: 'Quick Revision Notes' },
                ].map((item) => (
                  <div key={item.title} className="bg-surface-container-lowest rounded-xl p-5 ambient-shadow text-center hover-lift">
                    <span className="material-icons-outlined text-primary-container text-2xl mb-2">{item.icon}</span>
                    <h4 className="font-headline font-semibold text-sm text-on-surface">{item.title}</h4>
                    <p className="text-xs text-on-surface-variant mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>

              <Link to="/resources" className="inline-flex items-center gap-2 mt-6 px-6 py-3 gradient-primary text-on-primary rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5">
                Explore All Resources <span className="material-icons-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIAL CAROUSEL ============ */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block">Voices of Success</span>
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-on-surface">
              What Our Toppers <span className="text-secondary italic">Say</span>
            </h2>
          </div>
          <div className="reveal-scale">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* ============ COUNSELLING CTA ============ */}
      <section className="py-20 lg:py-28 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden reveal-scale">
            <img src="/images/campus.png" alt="Ravindra IAS Campus" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#000666]/95 via-[#1A237E]/90 to-[#000666]/70"></div>
            <div className="relative z-10 p-10 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-fixed-dim mb-4 block">Get Started</span>
                <h2 className="font-headline text-3xl lg:text-4xl font-bold text-white mb-4">
                  Free Counselling Session
                </h2>
                <p className="text-white/70 mb-8 leading-relaxed">
                  Not sure where to start? Book a free one-on-one session with our senior mentors to chart your personalized UPSC preparation roadmap.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/faq" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-container rounded-lg font-semibold text-sm hover:shadow-xl hover:-translate-y-0.5 transition-all">
                    <span className="material-icons-outlined text-base">edit_note</span> Enquire Now
                  </Link>
                  <a href="tel:+919876543210" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-lg font-semibold text-sm hover:bg-white/10 transition-all">
                    <span className="material-icons-outlined text-base">call</span> Book Consultation
                  </a>
                </div>
              </div>
              <div className="hidden lg:grid grid-cols-2 gap-4 stagger-children">
                {[
                  { icon: 'schedule', label: '45 Minutes', sub: 'Session Duration' },
                  { icon: 'videocam', label: 'Online / Offline', sub: 'Flexible Modes' },
                  { icon: 'person', label: 'Senior Mentor', sub: 'Expert Guidance' },
                  { icon: 'currency_rupee', label: 'Completely Free', sub: 'No Hidden Charges' },
                ].map((item) => (
                  <div key={item.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10 text-center hover:bg-white/15 transition-all duration-300">
                    <span className="material-icons-outlined text-primary-fixed-dim text-2xl mb-2">{item.icon}</span>
                    <p className="text-white font-semibold text-sm">{item.label}</p>
                    <p className="text-white/50 text-xs mt-0.5">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
