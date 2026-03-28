import { Link } from 'react-router-dom'

const quickLinks = [
  { name: 'GS Courses', path: '/courses' },
  { name: 'Fee Structure', path: '/courses' },
  { name: "Toppers' Strategy", path: '/toppers' },
  { name: 'Scholarship Test', path: '/courses' },
]

const connectLinks = [
  { name: 'YouTube', icon: 'smart_display', url: '#' },
  { name: 'Telegram Channel', icon: 'share', url: '#' },
  { name: 'Instagram', icon: 'photo_camera', url: '#' },
  { name: 'Facebook Page', icon: 'group', url: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-surface-container-high">
      {/* Main Footer */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/images/logo.svg" alt="Ravindra IAS Logo" className="w-11 h-11 rounded-full" />
              <span className="font-headline font-bold text-lg text-primary-container">Ravindra IAS</span>
            </Link>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              The benchmark for UPSC preparation in Central India. Empowering aspirants since 1974.
            </p>
            <div className="flex gap-3 mt-5">
              {connectLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="w-9 h-9 rounded-full bg-surface-container-lowest flex items-center justify-center text-on-surface-variant hover:text-primary-container hover:bg-primary-fixed/30 transition-all duration-200"
                  title={link.name}
                >
                  <span className="material-icons-outlined text-lg">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-headline font-semibold text-on-surface mb-4 text-base">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-on-surface-variant hover:text-primary-container transition-colors underline-expand"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-headline font-semibold text-on-surface mb-4 text-base">Connect</h4>
            <ul className="space-y-3">
              {connectLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-sm text-on-surface-variant hover:text-primary-container transition-colors flex items-center gap-2"
                  >
                    <span className="material-icons-outlined text-base">{link.icon}</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-headline font-semibold text-on-surface mb-4 text-base">Gwalior Center</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              123, Civil Lines, Near City Center,<br />
              Gwalior, Madhya Pradesh - 474001
            </p>
            <a
              href="tel:+919876543210"
              className="mt-4 inline-flex items-center gap-2 text-sm text-primary-container font-medium hover:underline"
            >
              <span className="material-icons-outlined text-base">call</span>
              +91 98765 43210
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-outline-variant/15">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-outline">
            © 2024 Ravindra IAS Gwalior. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-outline hover:text-on-surface-variant transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-outline hover:text-on-surface-variant transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
