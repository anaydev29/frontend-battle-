import { Link } from 'react-router-dom'
import { useParallax } from '../hooks/useParallax'

const dnaArticles = [
  { date: 'Oct 12, 2024', title: 'Digital Rupee: Impact on Monetary Policy', desc: 'Breaking down the RBI\'s latest circular on CBDC pilot extension and its macro implications for banking sector liquidity.' },
  { date: 'Oct 11, 2024', title: 'COP28 Outcomes & India\'s Green Energy Path', desc: 'A detailed analysis of the tripling of renewable capacity target and India\'s stance on the global stocktake.' },
  { date: 'Oct 10, 2024', title: 'Supreme Court on EVM Verification', desc: 'Analyzing the constitutional implications of the SC\'s ruling on VVPAT cross-verification demands.' },
  { date: 'Oct 9, 2024', title: 'UN Security Council Reform Debate', desc: 'India\'s persistent push for permanent membership and the G4 nations\' joint proposal for UNSC expansion.' },
]

const mainsArticles = [
  { paper: 'GS Paper II - Governance', title: 'Reforming Civil Services for New India', desc: 'Exploring the Mission Karmayogi and the shift from rule-based to role-based training for administrators.' },
  { paper: 'GS Paper III - Economy', title: 'Agri-tech Revolution & Small Farmers', desc: 'How drone technology and IoT are bridging the productivity gap in rural belts across India.' },
  { paper: 'GS Paper I - Society', title: 'Urbanization & Its Socio-Economic Impact', desc: 'Census data analysis of migration patterns and the growing urban-rural divide in public services.' },
  { paper: 'GS Paper IV - Ethics', title: 'AI Ethics in Public Administration', desc: 'Navigating the moral complexities of algorithmic decision-making in welfare distribution systems.' },
]

const prelimsQuickBits = [
  { category: 'Art & Culture', title: 'Temples of the Chalukya Dynasty', desc: 'Quick facts about Vesara architecture and major UNESCO sites in Karnataka.' },
  { category: 'Environment', title: 'New Ramsar Sites in India: 2024 List', desc: 'Updated list for Prelims 2025 including the latest additions from Odisha and TN.' },
  { category: 'Science & Tech', title: 'Chandrayaan-3 Mission Findings', desc: 'Key scientific discoveries from the lunar south pole landing and their significance.' },
  { category: 'Economy', title: 'RBI\'s Monetary Policy Tools', desc: 'Quick revision: Repo rate, CRR, SLR, OMO, and their current values for MCQs.' },
]

const downloads = [
  { title: 'UPSC Prelims 2025 Syllabus', type: 'PDF', size: '2.1 MB', icon: 'picture_as_pdf' },
  { title: 'Monthly Current Affairs - Oct 2024', type: 'PDF', size: '4.5 MB', icon: 'picture_as_pdf' },
  { title: 'Ethics Case Studies Compilation', type: 'PDF', size: '3.2 MB', icon: 'picture_as_pdf' },
  { title: 'Map-based Questions Practice Set', type: 'PDF', size: '1.8 MB', icon: 'picture_as_pdf' },
]

export default function Resources() {
  const parallaxRef = useParallax(0.3)

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        <img ref={parallaxRef} src="/images/hero-bg.png" alt="Students studying" className="absolute inset-0 w-full h-full object-cover parallax-bg scale-110" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#000666]/90 via-[#1A237E]/85 to-[#000666]/80"></div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 text-center lg:text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-fixed-dim mb-4 block" style={{ animation: 'fadeDown 0.8s ease forwards' }}>Knowledge Base</span>
          <h1 className="font-headline text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ animation: 'fadeUp 0.8s ease 0.2s both' }}>
            Study Resources <span className="text-primary-fixed-dim">Hub</span>
          </h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto lg:mx-0 leading-relaxed" style={{ animation: 'fadeUp 0.8s ease 0.4s both' }}>
            Your one-stop destination for curated UPSC preparation content—daily news analysis, mains-focused articles, and prelims practice material.
          </p>
        </div>
      </section>

      {/* DNA Section */}
      <section className="py-20 lg:py-28 bg-surface overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8 reveal-left">
            <span className="material-icons-outlined text-secondary text-3xl">newspaper</span>
            <div>
              <h2 className="font-headline text-2xl lg:text-3xl font-bold text-on-surface">DNA (Daily News Analysis)</h2>
              <p className="text-sm text-on-surface-variant">In-depth analysis of current affairs for UPSC preparation</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 stagger-children reveal">
            {dnaArticles.map((article) => (
              <div key={article.title} className="bg-surface-container-lowest rounded-xl p-6 ambient-shadow hover-lift cursor-pointer group">
                <span className="text-xs text-outline">{article.date}</span>
                <h3 className="font-headline font-semibold text-lg text-on-surface mt-2 mb-2 group-hover:text-primary-container transition-colors duration-300">{article.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{article.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs text-primary-container font-semibold mt-3 group-hover:gap-2 transition-all duration-300">
                  Read Full Analysis <span className="material-icons-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mains Focus */}
      <section className="py-20 lg:py-28 bg-surface-container-low overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8 reveal-scale">
            <span className="material-icons-outlined text-primary-container text-3xl">description</span>
            <div>
              <h2 className="font-headline text-2xl lg:text-3xl font-bold text-on-surface">Mains Focus Articles</h2>
              <p className="text-sm text-on-surface-variant">Paper-wise analytical pieces for Mains examination</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 stagger-children reveal">
            {mainsArticles.map((article) => (
              <div key={article.title} className="bg-surface-container-lowest rounded-xl p-6 ambient-shadow hover-lift cursor-pointer group">
                <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold mb-3">{article.paper}</span>
                <h3 className="font-headline font-semibold text-lg text-on-surface mb-2 group-hover:text-primary-container transition-colors duration-300">{article.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{article.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs text-primary-container font-semibold mt-3 group-hover:gap-2 transition-all duration-300">
                  Read Article <span className="material-icons-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prelims Quick Bits */}
      <section className="py-20 lg:py-28 bg-surface overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8 reveal-left">
            <span className="material-icons-outlined text-tertiary-container text-3xl">quiz</span>
            <div>
              <h2 className="font-headline text-2xl lg:text-3xl font-bold text-on-surface">Prelims Quick Bits</h2>
              <p className="text-sm text-on-surface-variant">Bite-sized revision notes for objective preparation</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children reveal">
            {prelimsQuickBits.map((item) => (
              <div key={item.title} className="bg-surface-container-lowest rounded-xl p-6 ambient-shadow hover-lift cursor-pointer group">
                <span className="text-xs text-outline font-semibold uppercase tracking-wider">{item.category}</span>
                <h3 className="font-headline font-semibold text-on-surface mt-2 mb-2 group-hover:text-primary-container transition-colors duration-300">{item.title}</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-20 lg:py-28 bg-surface-container-low overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="mb-8 reveal-scale">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block">Free Materials</span>
            <h2 className="font-headline text-2xl lg:text-3xl font-bold text-on-surface">Downloadable Resources</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children reveal">
            {downloads.map((item) => (
              <div key={item.title} className="bg-surface-container-lowest rounded-xl p-6 ambient-shadow hover-lift cursor-pointer group">
                <div className="w-12 h-12 rounded-lg bg-error/10 flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300">
                  <span className="material-icons-outlined text-error">{item.icon}</span>
                </div>
                <h3 className="font-headline font-semibold text-sm text-on-surface mb-2 group-hover:text-primary-container transition-colors duration-300">{item.title}</h3>
                <div className="flex items-center gap-2 text-xs text-outline">
                  <span>{item.type}</span> · <span>{item.size}</span>
                </div>
                <button className="mt-3 flex items-center gap-1 text-xs text-primary-container font-semibold group-hover:gap-2 transition-all duration-300">
                  <span className="material-icons-outlined text-sm">download</span>
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

