import { Link } from 'react-router-dom'
import { useParallax } from '../hooks/useParallax'

const batchSchedule = [
  { name: 'GS Foundation (Pre + Mains)', date: 'Starting Jan 15, 2025', duration: '12 Months', mode: 'Offline + Online', fee: '₹1,25,000', featured: true },
  { name: 'CSAT Masterclass', date: 'Starting Feb 1, 2025', duration: '3 Months', mode: 'Offline', fee: '₹35,000', featured: false },
  { name: 'Prelims Test Series 2025', date: 'Starting Mar 1, 2025', duration: '4 Months', mode: 'Online', fee: '₹12,000', featured: false },
  { name: 'Mains Answer Writing Program', date: 'Starting Apr 1, 2025', duration: '6 Months', mode: 'Offline + Online', fee: '₹45,000', featured: false },
]

const modules = [
  { title: 'Indian History & Culture', weeks: '8 Weeks', topics: '120+ Topics' },
  { title: 'Geography & Environment', weeks: '6 Weeks', topics: '90+ Topics' },
  { title: 'Indian Polity & Governance', weeks: '7 Weeks', topics: '110+ Topics' },
  { title: 'Economy & Development', weeks: '6 Weeks', topics: '95+ Topics' },
  { title: 'Science & Technology', weeks: '4 Weeks', topics: '60+ Topics' },
  { title: 'Ethics, Integrity & Aptitude', weeks: '5 Weeks', topics: '70+ Topics' },
]

const pillars = [
  { icon: 'temple_hindu', title: 'History & Culture', desc: 'From ancient civilizations to modern India, covering art, architecture, literature and socio-cultural movements.' },
  { icon: 'public', title: 'Geography', desc: 'Physical, human and economic geography with map-based analysis and environmental studies integration.' },
  { icon: 'gavel', title: 'Polity & Governance', desc: 'Constitutional framework, governance reforms, judiciary, and public administration in-depth.' },
  { icon: 'trending_up', title: 'Indian Economy', desc: 'Macro and micro economics, budget analysis, monetary policy, and sustainable development.' },
  { icon: 'balance', title: 'Ethics & Integrity', desc: 'Philosophical foundations, case studies, emotional intelligence, and thinkers for GS Paper IV.' },
  { icon: 'language', title: 'International Relations', desc: 'India\'s foreign policy, bilateral relations, international organizations, and geopolitics.' },
]

const optionals = [
  'Public Administration', 'Sociology', 'Geography', 'History',
  'Philosophy', 'Political Science', 'Anthropology', 'Hindi Literature',
]

export default function Courses() {
  const parallaxRef = useParallax(0.3)

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        <img ref={parallaxRef} src="/images/classroom.png" alt="Classroom at Ravindra IAS" className="absolute inset-0 w-full h-full object-cover parallax-bg scale-110" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#000666]/90 via-[#1A237E]/85 to-[#000666]/80"></div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 text-center lg:text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-fixed-dim mb-4 block" style={{ animation: 'fadeDown 0.8s ease forwards' }}>Academic Programs</span>
          <h1 className="font-headline text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ animation: 'fadeUp 0.8s ease 0.2s both' }}>
            Master the UPSC CSE<br /><span className="text-primary-fixed-dim">Curriculum</span>
          </h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto lg:mx-0 leading-relaxed" style={{ animation: 'fadeUp 0.8s ease 0.4s both' }}>
            Rigorously designed programs that cover every dimension of the Civil Services Examination.
          </p>
        </div>
      </section>

      {/* Upcoming Batch Schedule */}
      <section className="py-20 lg:py-28 bg-surface overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="mb-12 reveal-scale">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block">Admissions Open</span>
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-on-surface">Upcoming Batch Schedule</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 stagger-children reveal">
            {batchSchedule.map((batch) => (
              <div
                key={batch.name}
                className={`rounded-xl p-7 ambient-shadow hover-lift ${
                  batch.featured
                    ? 'bg-surface-container-lowest ring-2 ring-secondary/20'
                    : 'bg-surface-container-lowest'
                }`}
              >
                {batch.featured && (
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold mb-3">
                    Most Popular
                  </span>
                )}
                <h3 className="font-headline font-semibold text-xl text-on-surface mb-3">{batch.name}</h3>
                <div className="grid grid-cols-2 gap-y-3 text-sm">
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <span className="material-icons-outlined text-base text-outline">calendar_today</span>
                    {batch.date}
                  </div>
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <span className="material-icons-outlined text-base text-outline">schedule</span>
                    {batch.duration}
                  </div>
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <span className="material-icons-outlined text-base text-outline">videocam</span>
                    {batch.mode}
                  </div>
                  <div className="flex items-center gap-2 font-headline font-semibold text-primary-container text-base">
                    {batch.fee}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Module Breakdown */}
      <section className="py-20 lg:py-28 bg-surface-container-low overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="mb-12 reveal-left">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block">GS Foundation</span>
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-on-surface">Detailed Module Breakdown</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children reveal">
            {modules.map((mod, i) => (
              <div key={mod.title} className="bg-surface-container-lowest rounded-xl p-6 ambient-shadow hover-lift">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center text-white text-sm font-bold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-headline font-semibold text-on-surface">{mod.title}</h3>
                </div>
                <div className="flex gap-4 text-xs text-on-surface-variant">
                  <span className="flex items-center gap-1">
                    <span className="material-icons-outlined text-sm text-outline">schedule</span>
                    {mod.weeks}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-icons-outlined text-sm text-outline">topic</span>
                    {mod.topics}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Curriculum Pillars */}
      <section className="py-20 lg:py-28 bg-surface overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="mb-12 reveal-scale">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block">What You'll Learn</span>
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-on-surface">Core Curriculum Pillars</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children reveal">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="bg-surface-container-lowest rounded-xl p-8 ambient-shadow hover-lift group">
                <div className="w-12 h-12 rounded-lg bg-primary-fixed/40 flex items-center justify-center mb-5 transition-colors group-hover:bg-primary-fixed">
                  <span className="material-icons-outlined text-primary-container">{pillar.icon}</span>
                </div>
                <h3 className="font-headline font-semibold text-lg text-on-surface mb-2">{pillar.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional Subjects */}
      <section className="py-20 lg:py-28 bg-surface-container-low overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="mb-12 reveal-left">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block">Specializations</span>
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-on-surface">Optional Subjects</h2>
          </div>

          <div className="flex flex-wrap gap-3 stagger-children reveal">
            {optionals.map((opt) => (
              <span key={opt} className="px-5 py-2.5 bg-surface-container-lowest rounded-full text-sm font-medium text-on-surface ambient-shadow hover:bg-primary-fixed/30 hover:text-primary-container transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                {opt}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty + CTA */}
      <section className="py-20 lg:py-28 bg-surface overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-left">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block">Our Team</span>
              <h2 className="font-headline text-3xl lg:text-4xl font-bold text-on-surface mb-4">Distinguished Faculty</h2>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                Learn from former IAS officers, subject experts with decades of teaching experience, and mentors who deeply understand the UPSC examination pattern.
              </p>
              <ul className="space-y-3 text-sm text-on-surface-variant">
                <li className="flex items-start gap-2 hover:translate-x-1 transition-transform">
                  <span className="material-icons-outlined text-secondary text-base mt-0.5">check_circle</span>
                  Former bureaucrats with 20+ years of administrative experience
                </li>
                <li className="flex items-start gap-2 hover:translate-x-1 transition-transform">
                  <span className="material-icons-outlined text-secondary text-base mt-0.5">check_circle</span>
                  PhD holders from top Indian universities
                </li>
                <li className="flex items-start gap-2 hover:translate-x-1 transition-transform">
                  <span className="material-icons-outlined text-secondary text-base mt-0.5">check_circle</span>
                  Authors of leading UPSC reference textbooks
                </li>
              </ul>
            </div>

            <div className="gradient-primary rounded-2xl p-10 text-center reveal-right ambient-shadow hover-glow">
              <h3 className="font-headline text-2xl font-bold text-white mb-3">Start Your Journey Today</h3>
              <p className="text-primary-fixed/70 mb-6 text-sm">Limited seats available for the upcoming batch. Secure yours now.</p>
              <Link
                to="/faq"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-container rounded-[0.375rem] font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Enroll Now
                <span className="material-icons-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

