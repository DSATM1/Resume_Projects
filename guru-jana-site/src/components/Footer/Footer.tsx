import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone, MapPin, FileText } from 'lucide-react';

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Insights', to: '/insights' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms of Service', to: '/terms' },
];

const serviceLinks = [
  { label: 'Audit & Assurance', to: '/services/audit-assurance' },
  { label: 'Tax & Compliance', to: '/services/direct-tax' },
  { label: 'Corporate Law', to: '/services/corporate-law' },
  { label: 'Business Advisory', to: '/services/consulting' },
];

const Footer = () => (
  <footer className="border-t border-slate-200 bg-white py-16 text-slate-700">
    <div className="container grid gap-10 md:grid-cols-2 lg:grid-cols-4">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white">GJ</div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Guru & Jana</p>
            <p className="text-xs text-slate-500">Chartered Accountants</p>
          </div>
        </div>
        <p className="max-w-sm text-sm leading-6">
          Trusted advisory for audit, tax, governance and growth with a strong compliance foundation for Indian and global businesses.
        </p>
      </div>

      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-900">Quick links</p>
        <ul className="space-y-3 text-sm">
          {footerLinks.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="transition hover:text-slate-900">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-900">Services</p>
        <ul className="space-y-3 text-sm">
          {serviceLinks.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="transition hover:text-slate-900">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-4">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-900">Contact</p>
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <a href="tel:+918042202020" className="transition hover:text-slate-900">+91 80 4220 2020</a>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <a href="mailto:contact@gurujana.com" className="transition hover:text-slate-900">contact@gurujana.com</a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <p>Koramangala, Bangalore, India</p>
          </div>
        </div>
        <div className="flex items-center gap-3 pt-3">
          <a href="https://www.linkedin.com/company/guru-&-jana/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-slate-900">
            <Linkedin size={20} />
          </a>
          <a href="#" className="transition hover:text-slate-900" aria-label="Privacy Policy">
            <FileText size={20} />
          </a>
        </div>
      </div>
    </div>

    <div className="container mt-14 border-t border-slate-200 pt-8 text-sm text-slate-500">
      <p>© 2026 Guru & Jana Chartered Accountants. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
