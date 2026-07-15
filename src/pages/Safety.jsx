import useSEO from '../hooks/useSEO';
import {
  ShieldAlert,
  GraduationCap,
  Wrench,
  FileCheck,
  Ban,
  Radio,
  Clock,
  Unlock,
  Award
} from 'lucide-react';

export default function Safety() {
  useSEO(
    'Safety Commitment & DOT Compliance Standards',
    'Explore Titan Freight Logistics rigorous safety, compliance, and training programs. Learn about our DOT records, drug/alcohol screenings, and modern ELD tracking.'
  );

  const safetyDirectives = [
    {
      title: "Safety Commitment",
      desc: "Our zero-incident target guides every dispatch route. We protect our drivers, our partner cargos, and motorists with zero compromise on transit speed.",
      icon: ShieldAlert
    },
    {
      title: "Driver Training",
      desc: "All CDL Class-A operators undergo rigorous continuous on-road training, defensive driving instruction, and severe winter road navigation tests.",
      icon: GraduationCap
    },
    {
      title: "Vehicle Maintenance",
      desc: "Our proactive diesel mechanics inspect tractors and trailers weekly, carrying out preventative checkups well ahead of standard DOT requirements.",
      icon: Wrench
    },
    {
      title: "DOT Compliance",
      desc: "Titan maintains outstanding CSA safety scores across all federal categories, audited regularly by independent compliance teams.",
      icon: FileCheck
    },
    {
      title: "Drug & Alcohol Testing",
      desc: "We run mandatory random and post-accident drug and alcohol screenings to guarantee fully alert, dedicated driver personnel.",
      icon: Ban
    },
    {
      title: "Electronic Logging Devices (ELD)",
      desc: "Every semi-tractor integrates modern ELD hardware to continuously transmit speed, location, and engine performance logs directly to dispatch.",
      icon: Radio
    },
    {
      title: "Hours of Service Compliance",
      desc: "We enforce strict hours-of-service rules. No driver is pushed beyond safe legal driving durations, preventing highway fatigue.",
      icon: Clock
    },
    {
      title: "Cargo Securement",
      desc: "Our operators are fully trained in secure flatbed strap tension, multi-temp reefer lock seals, and proper hazardous cargo placement.",
      icon: Unlock
    },
    {
      title: "Safety Certifications",
      desc: "Titan Freight carries premium FMCSA carrier authorities, C-TPAT cross-border compliance credentials, and hazardous materials hauling permits.",
      icon: Award
    }
  ];

  return (
    <div className="space-y-0 text-left">

      {/* 1. Page Header */}
      <div className="bg-navy py-16 text-center text-white border-b border-navy-light relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-brandorange/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="text-brandorange uppercase tracking-wider text-xs font-black">
            Our Highest Priority
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">Safety & Compliance</h1>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto leading-relaxed">
            Safety isn't just a corporate guideline—it's the core standard that guides our fleet across every single highway mile.
          </p>
        </div>
      </div>

      {/* 2. Directives Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safetyDirectives.map((sd, idx) => {
              const Icon = sd.icon;
              return (
                <div key={idx} className="bg-gray-50 rounded-xl border border-gray-100 p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div className="space-y-4">
                    <div className="p-3 bg-brandorange/10 text-brandorange rounded-lg inline-block">
                      <Icon size={24} />
                    </div>
                    <h2 className="text-base font-extrabold text-navy uppercase tracking-wider">{sd.title}</h2>
                    <p className="text-gray-600 text-xs leading-relaxed">{sd.desc}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-gray-200/50 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                    Titan Compliance Standard
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. Safety Quote Banner */}
      <section className="py-16 bg-navy text-white text-center border-t border-navy-light relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="text-brandorange uppercase tracking-wider text-xs font-black">
            FMCSA Carrier Authority
          </span>
          <h2 className="text-xl sm:text-2xl font-black">Have questions about safety guidelines or certifications?</h2>
          <p className="text-xs text-gray-300 leading-relaxed max-w-lg mx-auto">
            Our compliance officers can provide active insurance documents, CSA reports, or safety metrics upon request.
          </p>
          <div className="pt-2">
            <a
              href="mailto:safety@titanfreight.com"
              className="inline-flex items-center text-xs font-bold text-brandorange hover:text-brandorange-light"
            >
              Contact Safety Desk (safety@titanfreight.com) &rarr;
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
