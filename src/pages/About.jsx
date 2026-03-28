import { useParallax } from '../hooks/useParallax'

export default function About() {
  const parallaxRef = useParallax(0.3)

  const values = [
    {
      icon: 'auto_stories',
      title: 'Academic Integrity',
      desc: 'Every piece of content, every lecture, and every assessment is rooted in academic honesty and factual accuracy.',
    },
    {
      icon: 'people',
      title: 'Student-Centric Mentorship',
      desc: 'Personalized study plans, open-door faculty access, and emotional support systems define the Ravindra IAS experience.',
    },
    {
      icon: 'emoji_events',
      title: 'Result-Oriented Approach',
      desc: 'Every module, test, and discussion is strategically designed to maximize marks in the UPSC examination.',
    },
  ]

  const infrastructure = [
    { icon: 'meeting_room', title: 'Smart Classrooms', desc: '12 digitally-enabled rooms with projectors and interactive whiteboards.' },
    { icon: 'local_library', title: 'Research Library', desc: '15,000+ curated books, journals, and digital resources for aspirants.' },
    { icon: 'computer', title: 'Digital Lab', desc: 'Dedicated computer lab with online test infrastructure and UPSC simulators.' },
    { icon: 'fitness_center', title: 'Wellness Zone', desc: 'Recreation area with counseling support for mental health and well-being.' },
  ]

  return (
    <div>
      {/* Hero with Campus Photo */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        <img ref={parallaxRef} src="/images/campus.png" alt="Ravindra IAS Academy Campus" className="absolute inset-0 w-full h-full object-cover parallax-bg scale-110" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#000666]/90 via-[#1A237E]/85 to-[#000666]/80"></div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 text-center lg:text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-fixed-dim mb-4 block" style={{ animation: 'fadeDown 0.8s ease forwards' }}>Since 1974</span>
          <h1 className="font-headline text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ animation: 'fadeUp 0.8s ease 0.2s both' }}>
            Legacy of Excellence in<br /><span className="text-primary-fixed-dim">Civil Services</span>
          </h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto lg:mx-0 leading-relaxed" style={{ animation: 'fadeUp 0.8s ease 0.4s both' }}>
            Five decades of shaping India's administrative leaders from the heart of Madhya Pradesh.
          </p>
        </div>
      </section>

      {/* Our Story — with Founder Photo */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="reveal-left">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block">The Beginning</span>
              <h2 className="font-headline text-3xl lg:text-4xl font-bold text-on-surface mb-6">Our Story</h2>
              <div className="space-y-4 text-on-surface-variant leading-relaxed text-sm">
                <p>
                  Founded in 1974 by Dr. S. K. Ravindra, a visionary educator with a passion for public service, Ravindra IAS Academy began as a small coaching center in the historic city of Gwalior. What started as a single classroom with a handful of dedicated students has blossomed into Central India's most prestigious UPSC preparation institute.
                </p>
                <p>
                  Over five decades, we have maintained an unwavering commitment to academic excellence, producing over 500 civil servants who now serve the nation across IAS, IPS, and IFS cadres.
                </p>
                <p>
                  Today, Ravindra IAS stands as a beacon for aspirants who seek more than just exam preparation—they seek a transformative educational experience that prepares them for the immense responsibility of public service.
                </p>
              </div>
            </div>

            {/* Founder Photo */}
            <div className="bg-surface-container-lowest rounded-2xl p-8 ambient-shadow reveal-right">
              <div className="flex items-center gap-5 mb-6 hover-lift">
                <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 border-2 border-primary-fixed border-opacity-30">
                  <img src="/images/founder.png" alt="Dr. S. K. Ravindra - Founder" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-headline font-semibold text-xl text-on-surface">Dr. S. K. Ravindra</h3>
                  <p className="text-sm text-on-surface-variant">Founder & Chief Mentor</p>
                  <p className="text-xs text-secondary font-semibold mt-1">50+ Years in Civil Services Education</p>
                </div>
              </div>
              <blockquote className="text-sm text-on-surface-variant leading-relaxed italic border-l-2 border-secondary pl-4 mb-6">
                "Education is not merely about passing examinations. It is about cultivating the wisdom, character, and compassion that our nation's administrators need to serve 1.4 billion people."
              </blockquote>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-surface-container-low rounded-lg hover-scale">
                  <div className="font-headline text-2xl font-bold text-primary-container">50+</div>
                  <div className="text-xs text-on-surface-variant">Years Teaching</div>
                </div>
                <div className="text-center p-4 bg-surface-container-low rounded-lg hover-scale">
                  <div className="font-headline text-2xl font-bold text-secondary">500+</div>
                  <div className="text-xs text-on-surface-variant">Officers Trained</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-28 bg-surface-container-low overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 reveal-scale">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block">What Drives Us</span>
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-on-surface">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 stagger-children reveal">
            {values.map((value) => (
              <div key={value.title} className="bg-surface-container-lowest rounded-xl p-8 ambient-shadow hover-lift">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                  <span className="material-icons-outlined text-white text-2xl">{value.icon}</span>
                </div>
                <h3 className="font-headline font-semibold text-xl text-on-surface mb-3">{value.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure with Photos */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="mb-12 reveal-left">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block">Facilities</span>
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-on-surface">World-Class Infrastructure</h2>
          </div>

          {/* Infrastructure Photo Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10 reveal-scale">
            <div className="rounded-2xl overflow-hidden ambient-shadow group hover-lift">
              <img src="/images/classroom.png" alt="Smart Classrooms at Ravindra IAS" className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="rounded-2xl overflow-hidden ambient-shadow group hover-lift">
              <img src="/images/campus.png" alt="Campus Building" className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children reveal">
            {infrastructure.map((item) => (
              <div key={item.title} className="bg-surface-container-lowest rounded-xl p-6 ambient-shadow hover-lift">
                <div className="w-12 h-12 rounded-lg bg-primary-fixed/40 flex items-center justify-center mb-4 transition-colors group-hover:bg-primary-fixed">
                  <span className="material-icons-outlined text-primary-container">{item.icon}</span>
                </div>
                <h3 className="font-headline font-semibold text-on-surface mb-2">{item.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 lg:py-28 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden reveal-scale">
            <img src="/images/campus.png" alt="Campus" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#000666]/95 via-[#1A237E]/90 to-[#000666]/75"></div>
            <div className="relative z-10 p-10 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="reveal-left">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-fixed-dim mb-4 block">Visit Us</span>
                  <h2 className="font-headline text-3xl lg:text-4xl font-bold text-white mb-4">Connect with Us</h2>
                  <p className="text-white/70 mb-6">
                    Visit our center in Gwalior for a campus tour, or reach out to our admissions team for personalized guidance.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 hover:-translate-y-1 transition-transform">
                      <span className="material-icons-outlined text-primary-fixed-dim">location_on</span>
                      <p className="text-sm text-white/80">123, Civil Lines, Near City Center, Gwalior, Madhya Pradesh - 474001</p>
                    </div>
                    <div className="flex items-center gap-3 hover:-translate-y-1 transition-transform">
                      <span className="material-icons-outlined text-primary-fixed-dim">call</span>
                      <a href="tel:+919876543210" className="text-sm text-white hover:text-primary-fixed-dim transition-colors">+91 98765 43210</a>
                    </div>
                    <div className="flex items-center gap-3 hover:-translate-y-1 transition-transform">
                      <span className="material-icons-outlined text-primary-fixed-dim">mail</span>
                      <a href="mailto:info@ravindraias.com" className="text-sm text-white hover:text-primary-fixed-dim transition-colors">info@ravindraias.com</a>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 space-y-4 reveal-right border border-white/10 ambient-shadow">
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 text-sm focus:outline-none focus:border-primary-fixed-dim transition-colors hover:border-white/40" />
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 text-sm focus:outline-none focus:border-primary-fixed-dim transition-colors hover:border-white/40" />
                  <textarea placeholder="Your Message" rows={3} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 text-sm focus:outline-none focus:border-primary-fixed-dim resize-none transition-colors hover:border-white/40"></textarea>
                  <button type="button" className="w-full py-3 bg-white text-primary-container rounded-lg font-semibold text-sm hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
