import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useParallax } from '../hooks/useParallax'

const faqs = [
  {
    category: 'Admissions',
    questions: [
      {
        q: 'What is the admission process for Ravindra IAS?',
        a: 'Admissions are open year-round. You can apply online through our website or visit our Gwalior center. After filling out the application form, you will receive a counseling call from our team to discuss your preparation strategy and the best-suited batch for you. No entrance exam is required for joining our foundation programs.',
      },
      {
        q: 'Is there a scholarship test available?',
        a: 'Yes, we conduct a Scholarship Aptitude Test (SAT) every quarter. Based on your performance, you can receive up to 50% fee waiver on our GS Foundation program. The test covers General Knowledge, Logical Reasoning, and English Comprehension. Results are typically declared within 48 hours.',
      },
      {
        q: 'Can I join mid-session?',
        a: 'Yes, we allow mid-session enrollments for most of our programs. We provide comprehensive recorded lectures for the sessions you\'ve missed, along with all study materials. Our mentors will also create a catch-up plan tailored to your needs.',
      },
    ],
  },
  {
    category: 'Courses & Curriculum',
    questions: [
      {
        q: 'What programs do you offer for UPSC CSE?',
        a: 'We offer a comprehensive range of programs: GS Foundation (Pre + Mains), CSAT Masterclass, Optional Subject coaching (8 subjects), Prelims Test Series, Mains Answer Writing Program, Interview Preparation, and a special Weekend Batch for working professionals.',
      },
      {
        q: 'Do you provide online classes?',
        a: 'Yes, we offer a hybrid learning model. All our classroom sessions are live-streamed and recorded. Students can attend from anywhere in India. Our online platform includes live doubt sessions, digital study materials, and an AI-powered test analytics dashboard.',
      },
      {
        q: 'What optional subjects are available?',
        a: 'We currently offer expert coaching for 8 optional subjects: Public Administration, Sociology, Geography, History, Philosophy, Political Science, Anthropology, and Hindi Literature. Each optional is taught by subject specialists with UPSC-specific expertise.',
      },
    ],
  },
  {
    category: 'Infrastructure & Support',
    questions: [
      {
        q: 'Do you provide hostel or accommodation?',
        a: 'While we don\'t have our own hostel, we have tie-ups with several trusted PG accommodations and hostels near our Gwalior center. Our admin team assists every outstation student with safe, affordable staying options within walking distance of the institute.',
      },
      {
        q: 'What kind of mentorship support is available?',
        a: 'Every enrolled student is assigned a personal mentor—typically a former civil servant or senior faculty member. You get weekly one-on-one sessions, 24/7 WhatsApp doubt support, monthly progress reviews, and a personalized study plan updated quarterly based on your performance.',
      },
      {
        q: 'Is there a refund policy?',
        a: 'Yes. If you wish to withdraw within the first 15 days of joining, we offer a full refund minus a nominal administrative charge. After 15 days, a pro-rata refund is provided based on the remaining course duration. Test series and study materials once issued are non-refundable.',
      },
    ],
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const parallaxRef = useParallax(0.3)

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  let globalIndex = 0

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        <img ref={parallaxRef} src="/images/campus.png" alt="Ravindra IAS Campus" className="absolute inset-0 w-full h-full object-cover parallax-bg scale-110" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#000666]/90 via-[#1A237E]/85 to-[#000666]/80"></div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 text-center lg:text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-fixed-dim mb-4 block" style={{ animation: 'fadeDown 0.8s ease forwards' }}>Help Center</span>
          <h1 className="font-headline text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ animation: 'fadeUp 0.8s ease 0.2s both' }}>
            Frequently Asked<br /><span className="text-primary-fixed-dim">Questions</span>
          </h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto lg:mx-0 leading-relaxed" style={{ animation: 'fadeUp 0.8s ease 0.4s both' }}>
            Everything you need to know about our programs, admissions, and facilities. Can't find your answer? Contact us directly.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
          {faqs.map((category) => (
            <div key={category.category} className="mb-12 reveal-scale">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-4 block">{category.category}</span>
              <div className="space-y-3 stagger-children reveal">
                {category.questions.map((faq) => {
                  const currentIndex = globalIndex++
                  const isOpen = openIndex === currentIndex
                  return (
                    <div
                      key={currentIndex}
                      className={`bg-surface-container-lowest rounded-xl ambient-shadow overflow-hidden transition-all duration-300 ${isOpen ? 'ring-1 ring-primary-container ring-opacity-20 hover-glow' : 'hover-lift'}`}
                    >
                      <button
                         onClick={() => toggleFaq(currentIndex)}
                        className="w-full flex items-center justify-between p-6 text-left group cursor-pointer"
                      >
                        <span className="font-headline font-semibold text-on-surface pr-4 group-hover:text-primary-container transition-colors duration-200">{faq.q}</span>
                        <span className={`material-icons-outlined text-primary-container flex-shrink-0 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'rotate-180' : ''}`}>
                          expand_more
                        </span>
                      </button>
                      <div className={`transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                        <div className="px-6 pb-6 pt-0">
                          <p className="text-sm text-on-surface-variant leading-relaxed">{faq.a}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 lg:py-28 bg-surface-container-low overflow-hidden">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
          <div className="gradient-primary rounded-2xl p-10 lg:p-14 text-center reveal-scale ambient-shadow hover-glow">
            <span className="material-icons-outlined text-primary-fixed-dim text-4xl mb-4" style={{ animation: 'float 3s ease-in-out infinite' }}>support_agent</span>
            <h2 className="font-headline text-2xl lg:text-3xl font-bold text-white mb-3">Still Have Questions?</h2>
            <p className="text-primary-fixed/70 mb-6 max-w-md mx-auto text-sm">
              Our admissions team is ready to help. Get personalized guidance on your UPSC preparation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary-container rounded-[0.375rem] font-semibold text-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <span className="material-icons-outlined text-base">call</span>
                Call Us: +91 98765 43210
              </a>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white rounded-[0.375rem] font-semibold text-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="material-icons-outlined text-base">mail</span>
                Send a Message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

