import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Clock, Truck } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on path changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Fleet', path: '/fleet' },
    { name: 'Industries', path: '/industries' },
    { name: 'Careers', path: '/careers' },
    { name: 'Safety', path: '/safety' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-navy text-white text-xs py-2 px-4 border-b border-navy-light hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <Phone size={14} className="text-brandorange mr-2" />
              (312) 555-2026
            </span>
            <span className="flex items-center">
              <Mail size={14} className="text-brandorange mr-2" />
              dispatch@titanfreight.com
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <Clock size={14} className="text-brandorange mr-2" />
              Emergency Dispatch: 24/7 Support
            </span>
          </div>
        </div>
      </div>

      {/* Primary Sticky Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-navy shadow-lg py-3'
            : 'bg-navy/95 backdrop-blur-md py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="bg-brandorange text-navy p-2 rounded-lg font-bold flex items-center justify-center transition-transform group-hover:scale-105">
                <Truck size={24} className="text-white" />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-wider block">
                  TITAN
                </span>
                <span className="text-[10px] font-bold text-brandorange uppercase tracking-widest block -mt-1">
                  Freight Logistics
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1 xl:space-x-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-brandorange bg-white/5'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                to="/track"
                className="px-4 py-2 text-sm font-semibold text-white border border-gray-500 hover:border-white rounded-md transition-colors"
              >
                Track Shipment
              </Link>
              <Link
                to="/quote"
                className="px-4 py-2 text-sm font-semibold bg-brandorange text-white hover:bg-brandorange-light rounded-md transition-all shadow-md shadow-brandorange/20 hover:shadow-brandorange/30 transform hover:-translate-y-0.5"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Hamburguer Menu */}
            <div className="lg:hidden flex items-center space-x-2">
              <Link
                to="/track"
                className="px-3 py-1.5 text-xs font-semibold text-white border border-gray-500 rounded-md"
              >
                Track
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-navy-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brandorange"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {isOpen && (
          <div className="lg:hidden bg-navy-dark border-t border-navy-light animate-fade-in">
            <div className="px-2 pt-2 pb-4 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-brandorange bg-white/5 font-semibold'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 pb-2 border-t border-navy-light grid grid-cols-2 gap-3 px-3">
                <Link
                  to="/track"
                  className="w-full text-center py-2 text-sm font-semibold text-white border border-gray-600 rounded-md hover:border-white transition-colors"
                >
                  Track Shipment
                </Link>
                <Link
                  to="/quote"
                  className="w-full text-center py-2 text-sm font-semibold bg-brandorange text-white rounded-md hover:bg-brandorange-light transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
