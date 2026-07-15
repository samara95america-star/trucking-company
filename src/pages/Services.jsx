import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import {
  Truck,
  Thermometer,
  Grid,
  ShieldCheck,
  Zap,
  Globe,
  Home as HomeIcon,
  Layers,
  Settings,
  ArrowRight
} from 'lucide-react';

export default function Services() {
  useSEO(
    'Our Logistics & Transportation Services',
    'Explore Titan Freight Logistics core services. We provide FTL, LTL, Refrigerated transport, Flatbed hauling, dedicated fleet, expedited lanes, warehousing, and distribution.'
  );

  const servicesList = [
    {
      title: "Full Truckload (FTL)",
      description: "Dedicated trailers for high-volume, premium cargo with single-point loading, optimized routing, and prioritized express delivery protocols.",
      features: ["Exclusive use of 53' trailers", "Direct point-to-point transit", "No mid-route transfers", "Tailored shipping schedules"],
      icon: Truck
    },
    {
      title: "Less Than Truckload (LTL)",
      description: "Cost-effective solutions for smaller shipments. Consolidate your freight, optimize trailer space, and only pay for the volume you use.",
      features: ["Regional and national networks", "Frequent departures", "Liftgate services", "Competitive lane pricing"],
      icon: Grid
    },
    {
      title: "Refrigerated Freight",
      description: "Precision-monitored, state-of-the-art cold-chain climate trailers delivering fresh food, pharmaceuticals, and temperature-sensitive freight safely.",
      features: ["Multi-temperature zones", "Continuous electronic logging", "Pre-cooled trailers", "Hazmat reefer certified"],
      icon: Thermometer
    },
    {
      title: "Flatbed Transportation",
      description: "Secure flatbed hauling for oversized, heavy, industrial, or irregularly shaped cargo, utilizing high-quality straps, chains, and weather tarps.",
      features: ["Standard flatbed, step deck, RGN", "Heavy-haul permitting support", "Rigid cargo tie-downs", "Specialized flatbed operators"],
      icon: Layers
    },
    {
      title: "Dedicated Fleet",
      description: "Get a dedicated driver, tractor, and trailer allocated specifically to your business for maximum scheduling flexibility and brand integration.",
      features: ["Assured capacity guarantee", "Custom driver styling options", "Seamless logistics planning", "Saves in-house fleet overhead"],
      icon: Truck
    },
    {
      title: "Expedited Shipping",
      description: "Urgent shipment dispatch running critical time-sensitive routes across 50 states. Backed by dual-driver teams and direct transit lines.",
      features: ["Two drivers per cab (sleeper teams)", "Minimal downtime", "Constant tracking pings", "On-road live support"],
      icon: Zap
    },
    {
      title: "Cross Border Shipping",
      description: "Hassle-free customs clearance, door-to-door transit, and premium dry van shipping between United States, Canada, and Mexico.",
      features: ["C-TPAT compliant operations", "Bilingual customer service", "Customs broker partnerships", "Unified transborder tracking"],
      icon: Globe
    },
    {
      title: "Warehousing",
      description: "Secure, climate-controlled, state-of-the-art warehouses situated near critical transit corridors for short-term and long-term storage.",
      features: ["24/7 video surveillance", "Inventory tracking software", "Cross-docking operations", "FDA registered facilities"],
      icon: HomeIcon
    },
    {
      title: "Distribution",
      description: "End-to-end regional logistics solutions helping businesses move goods efficiently from storage centers directly to retail locations.",
      features: ["Last-mile delivery support", "Store door delivery routing", "Real-time dispatch feedback", "Proof of delivery updates"],
      icon: Settings
    },
    {
      title: "Supply Chain Solutions",
      description: "Consultative planning to restructure, modernize, and automate your entire national distribution network for massive efficiency.",
      features: ["Freight spend audit services", "AI route optimization", "Carrier performance scorecards", "Inventory pool analysis"],
      icon: ShieldCheck
    }
  ];

  return (
    <div className="space-y-0">

      {/* 1. Page Header */}
      <div className="bg-navy py-16 text-center text-white border-b border-navy-light relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-brandorange/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="text-brandorange uppercase tracking-wider text-xs font-black">
            Our Specialties
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">Logistics & Transportation Services</h1>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto leading-relaxed">
            Titan Freight Logistics is an asset-backed carrier offering full-spectrum supply chain, transportation, and warehousing solutions across North America.
          </p>
        </div>
      </div>

      {/* 2. Main Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, idx) => {
              const Icon = service.icon;
              const slug = service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
              return (
                <div
                  key={idx}
                  id={slug}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sm:p-8 flex flex-col justify-between h-full hover:border-gray-200 hover:shadow-xl transition-all"
                >
                  <div className="space-y-4 text-left">
                    <div className="p-3 bg-brandorange/10 text-brandorange rounded-lg inline-block">
                      <Icon size={24} />
                    </div>
                    <h2 className="text-xl font-black text-navy">{service.title}</h2>
                    <p className="text-gray-600 text-xs leading-relaxed">{service.description}</p>

                    <div className="pt-4 border-t border-gray-100">
                      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2">Service Benefits:</span>
                      <ul className="space-y-1.5 text-xs text-gray-700">
                        {service.features.map((feat, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brandorange flex-shrink-0"></span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-100">
                    <Link
                      to="/quote"
                      className="inline-flex items-center text-xs font-bold text-brandorange hover:text-brandorange-light transition-colors"
                    >
                      <span>Request a Quote for {service.title}</span>
                      <ArrowRight size={14} className="ml-1.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. Quote Callout Banner */}
      <section className="py-16 bg-navy text-white text-center border-t border-navy-light relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-white">Need a customized shipping solution?</h2>
          <p className="text-gray-300 text-sm max-w-xl mx-auto leading-relaxed">
            Whether you need a dedicated regional dry van fleet or multi-temp cold storage, Titan Freight creates optimized plans to match.
          </p>
          <div className="pt-2">
            <Link
              to="/quote"
              className="inline-flex items-center px-6 py-3 bg-brandorange hover:bg-brandorange-light text-white font-bold rounded-lg text-xs tracking-wider transition-colors"
            >
              Get Custom Rates
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
