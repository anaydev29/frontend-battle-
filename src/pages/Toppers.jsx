import { Link } from 'react-router-dom'
import { useParallax } from '../hooks/useParallax'

const toppers = [
  {
    name: 'Aditya Vardhan',
    rank: 'AIR 7',
    service: 'IAS',
    year: '2023',
    optional: 'Public Administration',
    quote: 'Ravindra IAS gave me the structured approach I needed. The mentors here don\'t just teach—they transform your thinking.',
    attempts: '2nd Attempt',
    photo: '/images/topper-aditya.png',
  },
  {
    name: 'Ishita Sharma',
    rank: 'AIR 23',
    service: 'IAS',
    year: '2023',
    optional: 'Sociology',
    quote: 'The test series and answer writing practice at Ravindra IAS were the game changers in my Mains preparation.',
    attempts: '1st Attempt',
    photo: 'https://api.dicebear.com/9.x/lorelei/svg?seed=Ishita&backgroundColor=ffd5dc',
  },
  {
    name: 'Rohan Mehra',
    rank: 'AIR 45',
    service: 'IPS',
    year: '2022',
    optional: 'Geography',
    quote: 'The personalized mentorship helped me identify and fix my weaker areas. Forever grateful to the Ravindra IAS team.',
    attempts: '2nd Attempt',
    photo: 'https://api.dicebear.com/9.x/lorelei/svg?seed=Rohan&backgroundColor=d1d4f9',
  },
  {
    name: 'Sneha Gupta',
    rank: 'AIR 12',
    service: 'IAS',
    year: '2022',
    optional: 'History',
    quote: 'The faculty\'s dedication and the institute\'s academic environment made all the difference in my preparation.',
    attempts: '1st Attempt',
    photo: 'https://api.dicebear.com/9.x/lorelei/svg?seed=Sneha&backgroundColor=ffd5dc',
  },
  {
    name: 'Priya Verma',
    rank: 'AIR 34',
    service: 'IPS',
    year: '2022',
    optional: 'Public Administration',
    quote: 'The interview preparation program at Ravindra IAS gave me the confidence I needed to face the UPSC board.',
    attempts: '3rd Attempt',
    photo: 'https://api.dicebear.com/9.x/lorelei/svg?seed=Priya&backgroundColor=b6e3f4',
  },
  {
    name: 'Rahul Mehta',
    rank: 'AIR 67',
    service: 'IFS',
    year: '2023',
    optional: 'Political Science',
    quote: 'The comprehensive study material and regular doubt-clearing sessions were invaluable in my preparation journey.',
    attempts: '2nd Attempt',
    photo: 'https://api.dicebear.com/9.x/lorelei/svg?seed=Rahul&backgroundColor=d1d4f9',
  },
]

const methodology = [
  { icon: 'psychology', title: 'Conceptual Clarity', desc: 'Building deep understanding rather than rote memorization through Socratic teaching methodology.' },
  { icon: 'edit_note', title: 'Answer Writing Mastery', desc: 'Weekly evaluated answer writing with personalized feedback from experienced faculty.' },
  { icon: 'analytics', title: 'Performance Analytics', desc: 'Data-driven progress tracking with detailed analysis of strengths and improvement areas.' },
  { icon: 'groups', title: 'Peer Learning', desc: 'Curated group discussions and debates to develop multifaceted perspectives on current issues.' },
]

export default function Toppers() {
  const parallaxRef = useParallax(0.3)

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        <img ref={parallaxRef} src="/images/toppers.png" alt="Toppers celebrating" className="absolute inset-0 w-full h-full object-cover parallax-bg scale-110" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#000666]/90 via-[#1A237E]/85 to-[#000666]/80"></div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 text-center lg:text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-fixed-dim mb-4 block" style={{ animation: 'fadeDown 0.8s ease forwards' }}>Our Pride</span>
          <h1 className="font-headline text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ animation: 'fadeUp 0.8s ease 0.2s both' }}>
            Transforming Aspirants<br />into <span className="text-primary-fixed-dim">Officers.</span>
          </h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto lg:mx-0 leading-relaxed" style={{ animation: 'fadeUp 0.8s ease 0.4s both' }}>
            Meet the officers who started their journey at Ravindra IAS and went on to serve the nation.
          </p>
        </div>
      </section>

      {/* Hall of Fame */}
      <section className="py-20 lg:py-28 bg-surface overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="mb-12 reveal-scale">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block">Excellence Defined</span>
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-on-surface">
              Our Hall of <span className="text-secondary">Fame</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children reveal">
            {toppers.map((topper) => (
              <div
                key={topper.name}
                className="bg-surface-container-lowest rounded-xl p-7 ambient-shadow hover-lift group"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <img
                      src={topper.photo}
                      alt={topper.name}
                      className="w-14 h-14 rounded-full object-cover ring-2 ring-primary-fixed/30 group-hover:ring-primary-fixed transition-all duration-300"
                    />
                    <div>
                      <h3 className="font-headline font-semibold text-lg text-on-surface group-hover:text-primary-container transition-colors duration-300">{topper.name}</h3>
                      <p className="text-sm text-on-surface-variant">{topper.service} · {topper.year}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold shadow-sm">
                    {topper.rank}
                  </span>
                </div>

                <blockquote className="text-sm text-on-surface-variant leading-relaxed italic mb-4 border-l-2 border-primary-fixed-dim pl-4">
                  "{topper.quote}"
                </blockquote>

                <div className="flex items-center gap-4 text-xs text-outline">
                  <span className="flex items-center gap-1">
                    <span className="material-icons-outlined text-sm">school</span>
                    {topper.optional}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-icons-outlined text-sm">replay</span>
                    {topper.attempts}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blueprint of Success */}
      <section className="py-20 lg:py-28 bg-surface-container-low overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="mb-12 reveal-left">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block">Our Method</span>
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-on-surface">The Blueprint of Success</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children reveal">
            {methodology.map((item, i) => (
              <div key={item.title} className="bg-surface-container-lowest rounded-xl p-7 ambient-shadow hover-lift group">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center text-white text-xs font-bold transition-transform group-hover:scale-110 duration-300">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="material-icons-outlined text-primary-container">{item.icon}</span>
                </div>
                <h3 className="font-headline font-semibold text-on-surface mb-2">{item.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="gradient-primary rounded-2xl p-10 lg:p-16 text-center reveal-scale ambient-shadow hover-glow">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-fixed-dim mb-4 block">Join Us</span>
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-white mb-4">Be Our Next Success Story</h2>
            <p className="text-primary-fixed/70 max-w-lg mx-auto mb-8">
              Join the legacy of excellence. Start your preparation with the institute that has consistently produced top ranks for over five decades.
            </p>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-container rounded-[0.375rem] font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Start Your Journey
              <span className="material-icons-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

