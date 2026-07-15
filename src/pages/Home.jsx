import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import FAQAccordion from '../components/FAQAccordion';
import useSEO from '../hooks/useSEO';
import { Truck, ShieldCheck, Zap, Globe, Briefcase } from 'lucide-react';

export default function Home() {
  useSEO(
    'Reliable Freight & Logistics Services Across North America',
    'Titan Freight Logistics provides dependable dry van, refrigerated freight, flatbed hauling, and premium dedicated logistics solutions across North America. Get a freight quote today!'
  );

  const featuredServices = [
    {
      title: "Full Truckload (FTL)",
      description: "Dedicated trailers for high-volume, premium cargo with single-point loading, optimized routing, and prioritized express delivery protocols.",
      icon: Truck
    },
    {
      title: "Refrigerated Freight",
      description: "Precision-monitored, state-of-the-art cold-chain climate trailers delivering fresh food, pharmaceuticals, and temperature-sensitive freight safely.",
      icon: ShieldCheck
    },
    {
      title: "Expedited Shipping",
      description: "Urgent shipment dispatch running critical time-sensitive routes across 50 states. Backed by dual-driver teams and direct transit lines.",
      icon: Zap
    },
    {
      title: "Cross Border Shipping",
      description: "Hassle-free customs clearance, door-to-door transit, and premium dry van shipping between United States, Canada, and Mexico.",
      icon: Globe
    }
  ];

  const coreStrengths = [
    {
      title: "Guaranteed On-Time Delivery",
      description: "With a 99.8% on-time performance index, our specialized routing engines plan for contingencies, weather, and traffic before dispatch.",
      icon: ShieldCheck
    },
    {
      title: "Class-A Driver Training",
      description: "Our professional drivers undergo rigorous ongoing hazard training, safety certification courses, and strict DOT compliance tests.",
      icon: Briefcase
    },
    {
      title: "Elite Fleet & Equipment",
      description: "Every single dry van, flatbed, box truck, and semi-tractor is maintained well ahead of schedule and equipped with live satellite telematics.",
      icon: Truck
    }
  ];

  const homeTestimonials = [
    {
      name: "Marcus Vance",
      company: "Supply Chain Director, Apex Industries",
      rating: 5,
      review: "Titan Freight Logistics has been our exclusive carrier for over three years. Their FTL and expedited shipping are flawlessly executed, and their on-time rate is the highest we've ever seen."
    },
    {
      name: "Sarah Jenkins",
      company: "Logistics Specialist, FreshFoods Co.",
      rating: 5,
      review: "Our fresh food distribution relies on strict temperature controls. Titan's refrigerated reefers are perfectly monitored and their 24/7 dispatcher updates give us absolute peace of mind."
    },
    {
      name: "Carlos Ramirez",
      company: "Operations Manager, Global Auto Parts",
      rating: 5,
      review: "We had an urgent cross-border shipment that needed to move immediately. Titan arranged customs clearance and dispatched a team of drivers in under an hour. Outstanding service!"
    }
  ];

  const homeFAQs = [
    {
      question: "How do I request a freight quote?",
      answer: "You can request a quick quote using our online Request a Quote page, or contact our central dispatch line directly at (312) 555-2026. Our logistics experts will prepare a custom rate sheet within 15 minutes."
    },
    {
      question: "Which states and regions do you serve?",
      answer: "Titan Freight Logistics covers all 50 US states, as well as cross-border lanes into major commercial zones in Canada and Mexico."
    },
    {
      question: "How can I track my active shipment?",
      answer: "Use our dedicated Track Shipment tool. Enter your active tracking code to access live location details, assigned driver, ETA, and progress timeline logs."
    },
    {
      question: "Do you offer refrigerated or cold-chain transportation?",
      answer: "Yes, we specialize in refrigerated and temperature-sensitive shipping. Our modern reefers maintain continuous multi-zone temperature logs from loading dock to delivery."
    }
  ];

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Stats Section */}
      <Statistics />

      {/* 3. Core Strengths / Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brandorange uppercase tracking-wider text-xs font-black">
              The Titan Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-navy mt-2">
              Why Premium Brands Choose Titan
            </h2>
            <p className="text-gray-500 mt-4 text-sm leading-relaxed">
              We go beyond standard freight delivery. Our advanced technologies, modern fleet, and professional drivers set a new benchmark for North American logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreStrengths.map((strength) => {
              const Icon = strength.icon;
              return (
                <div key={strength.title} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="p-3 bg-brandorange/10 rounded-lg text-brandorange inline-block mb-4">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-3">{strength.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{strength.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Featured Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="max-w-xl text-left">
              <span className="text-brandorange uppercase tracking-wider text-xs font-black">
                Comprehensive Freight Solutions
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-navy mt-2">
                Logistics Made Simple
              </h2>
            </div>
            <div className="mt-4 md:mt-0">
              <Link
                to="/services"
                className="text-brandorange hover:text-brandorange-light font-bold text-sm inline-flex items-center"
              >
                View All Services
                <span className="ml-1.5">&rarr;</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, idx) => (
              <ServiceCard
                key={idx}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Driver Recruitment Callout */}
      <section className="py-16 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="text-brandorange uppercase tracking-wider text-xs font-black">
            Now Recruiting Drivers & Owner Operators
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Drive with the Titan Logistics Team
          </h2>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto leading-relaxed">
            We provide our drivers with brand-new premium equipment, outstanding weekly pay, full health benefits, paid time off, and flexible home time schedules.
          </p>
          <div className="pt-4">
            <Link
              to="/careers"
              className="inline-flex items-center px-6 py-3 bg-brandorange text-white font-bold rounded-lg hover:bg-brandorange-light transition-colors text-sm"
            >
              Apply to Drive
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-brandorange uppercase tracking-wider text-xs font-black">
              Client Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-navy mt-2">
              What Our Partners Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeTestimonials.map((t, idx) => (
              <TestimonialCard
                key={idx}
                name={t.name}
                company={t.company}
                rating={t.rating}
                review={t.review}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brandorange uppercase tracking-wider text-xs font-black">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-navy mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {homeFAQs.map((faq, idx) => (
              <FAQAccordion
                key={idx}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>

          <div className="text-center mt-12 bg-gray-50 border border-gray-100 p-6 rounded-xl">
            <h4 className="text-sm font-bold text-navy mb-1">Need customized project dispatch answers?</h4>
            <p className="text-xs text-gray-500 mb-3">Our live trucking advisors are online and ready to guide you.</p>
            <Link to="/contact" className="text-brandorange hover:text-brandorange-light font-bold text-xs inline-flex items-center">
              Get in Touch <span className="ml-1">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
