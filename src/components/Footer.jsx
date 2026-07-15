import { Link } from 'react-router-dom';
import { Truck, Phone, Mail, MapPin, Facebook, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import Newsletter from './Newsletter';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white border-t border-navy-light pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-brandorange p-2 rounded-lg">
                <Truck size={20} className="text-white" />
              </div>
              <span className="text-xl font-black tracking-wider text-white">
                TITAN
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading the logistics and shipping industry across North America with unmatched reliability, safety compliance, and premium customer support.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-navy-light rounded-full text-gray-400 hover:text-white hover:bg-brandorange transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-navy-light rounded-full text-gray-400 hover:text-white hover:bg-brandorange transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-navy-light rounded-full text-gray-400 hover:text-white hover:bg-brandorange transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brandorange mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/fleet" className="hover:text-white transition-colors">Active Fleet</Link>
              </li>
              <li>
                <Link to="/safety" className="hover:text-white transition-colors">Safety Commitment</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition-colors">Join Our Team (Careers)</Link>
              </li>
            </ul>
          </div>

          {/* Logistics Office */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-brandorange mb-4">Headquarters</h3>
            <div className="flex items-start text-sm text-gray-400">
              <MapPin size={18} className="text-brandorange mr-2 mt-0.5 flex-shrink-0" />
              <span>500 Logistics Parkway<br />Chicago, IL</span>
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <Phone size={18} className="text-brandorange mr-2 flex-shrink-0" />
              <span>(312) 555-2026</span>
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <Mail size={18} className="text-brandorange mr-2 flex-shrink-0" />
              <span>dispatch@titanfreight.com</span>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <Newsletter />
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-light pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 space-y-4 sm:space-y-0">
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 mb-2 sm:mb-0">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Sitemap</span>
          </div>
          <div>
            <p className="text-center sm:text-right">
              &copy; {currentYear} Titan Freight Logistics. All Rights Reserved. Fully Responsive Trucking & Transport solutions.
            </p>
          </div>
          <button
            onClick={handleScrollTop}
            className="p-2 bg-brandorange text-white rounded-full hover:bg-brandorange-light transition-colors shadow-lg"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}
