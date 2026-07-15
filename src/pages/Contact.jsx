import useSEO from '../hooks/useSEO';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';

export default function Contact() {
  useSEO(
    'Contact Us - 24/7 Dispatch Desk & Support',
    'Get in touch with Titan Freight Logistics. View our phone number, email address, corporate physical location, and message our live dispatchers.'
  );

  return (
    <div className="space-y-0 text-left">

      {/* 1. Page Header */}
      <div className="bg-navy py-16 text-center text-white border-b border-navy-light relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-brandorange/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="text-brandorange uppercase tracking-wider text-xs font-black">
            Available 24/7
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">Contact Our Dispatch Center</h1>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto leading-relaxed">
            Have questions about trailer scheduling, billing, or active driver locations? Our supportive dispatch advisors are standing by.
          </p>
        </div>
      </div>

      {/* 2. Office Information & Form Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Left Column: Coordinates */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-brandorange uppercase tracking-wider text-xs font-black">
                  Corporate HQ
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-navy">Get In Touch</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Titan Freight maintains strategic administrative facilities and truck yards in Illinois, Texas, and Georgia to guarantee safe logistics dispatch nationwide.
                </p>
              </div>

              {/* Physical Addresses & Numbers */}
              <div className="space-y-6">

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-brandorange/10 text-brandorange rounded-lg flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-sm">Headquarters Address</h3>
                    <p className="text-xs text-gray-500 leading-relaxed mt-1">
                      500 Logistics Parkway<br />
                      Chicago, IL 60601
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-brandorange/10 text-brandorange rounded-lg flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-sm">Communication Lines</h3>
                    <p className="text-xs text-gray-500 leading-relaxed mt-1">
                      Main Phone: <span className="font-bold text-navy">(312) 555-2026</span><br />
                      Emergency Dispatch: <span className="font-bold text-navy">24/7 Helpline Support</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-brandorange/10 text-brandorange rounded-lg flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-sm">Email Correspondence</h3>
                    <p className="text-xs text-gray-500 leading-relaxed mt-1">
                      Dispatch Desk: <a href="mailto:dispatch@titanfreight.com" className="text-brandorange hover:underline font-semibold">dispatch@titanfreight.com</a><br />
                      Carrier Relations: <span className="font-semibold text-navy">billing@titanfreight.com</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-brandorange/10 text-brandorange rounded-lg flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-sm">Business Office Hours</h3>
                    <p className="text-xs text-gray-500 leading-relaxed mt-1">
                      Monday - Friday: <span className="font-semibold text-navy">7:00 AM – 7:00 PM</span><br />
                      Saturday & Sunday: <span className="text-gray-400">Yard closed (Dispatch 24/7 Active)</span>
                    </p>
                  </div>
                </div>

              </div>

              {/* Trust block */}
              <div className="bg-gray-50 border border-gray-150 rounded-xl p-6 space-y-4">
                <div className="flex items-center space-x-2 text-brandorange">
                  <ShieldCheck size={20} />
                  <span className="text-xs font-bold uppercase tracking-wider text-navy">100% Bonded & Insured Carrier</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Titan Freight carries comprehensive general liability, high-value cargo protection, and complete environmental spill insurance indices exceeding all state and national regulations.
                </p>
              </div>

            </div>

            {/* Right Column: Form & Map mockup */}
            <div className="lg:col-span-7 space-y-8">

              <ContactForm />

              {/* Google Maps placeholder */}
              <div className="bg-gray-100 rounded-xl border border-gray-200 h-64 overflow-hidden relative flex flex-col items-center justify-center text-center p-6 shadow-inner">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>

                <div className="relative z-10 space-y-3 max-w-xs">
                  <MapPin className="mx-auto text-brandorange animate-bounce" size={32} />
                  <h3 className="text-sm font-bold text-navy">Interactive Logistics Map</h3>
                  <p className="text-[11px] text-gray-400 leading-relaxed">
                    Centrally located in Chicago's logistics parkway near arterial interstate links (I-90 / I-94 / I-55).
                  </p>
                  <span className="text-[10px] bg-navy/10 text-navy px-3 py-1 rounded-full font-bold uppercase tracking-wide inline-block">
                    500 Logistics Parkway, Chicago
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
