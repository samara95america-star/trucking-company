import useSEO from '../hooks/useSEO';
import {
  ShoppingBag,
  Cpu,
  Wrench,
  Construction,
  Utensils,
  HeartPulse,
  Sprout,
  Smartphone,
  Flame,
  Building
} from 'lucide-react';

export default function Industries() {
  useSEO(
    'Industries Served - Custom Freight Solutions',
    'Discover the sectors Titan Freight Logistics serves. From Retail, Automotive, and Manufacturing, to Healthcare cold chains and Construction flatbeds.'
  );

  const industriesList = [
    {
      name: "Retail",
      description: "Fast-moving freight services to keep shelves stocked and consumer products distributed efficiently to regional centers.",
      icon: ShoppingBag,
      tag: "FTL & LTL Dispatch"
    },
    {
      name: "Manufacturing",
      description: "Just-in-time delivery for raw materials, assembly parts, and final manufactured products with specialized trailer configurations.",
      icon: Cpu,
      tag: "Optimized Logistics"
    },
    {
      name: "Automotive",
      description: "Critical tier-1 part shipping with dedicated expedited lanes to minimize automotive assembly-line downtime.",
      icon: Wrench,
      tag: "Expedited Express"
    },
    {
      name: "Construction",
      description: "Flatbed and specialized heavy-haul transport for steel, raw lumber, oversized pipes, and large-scale industrial building materials.",
      icon: Construction,
      tag: "Flatbed Specialized"
    },
    {
      name: "Food Distribution",
      description: "State-of-the-art cold-chain climate reefers with multi-zone temperature logs to safely transport fresh meats, produce, and frozen meals.",
      icon: Utensils,
      tag: "Refrigerated Reefers"
    },
    {
      name: "Healthcare",
      description: "Highly regulated temperature-sensitive pharma shipments adhering to strict pickup deadlines and sterile environment protocols.",
      icon: HeartPulse,
      tag: "Secure Cold Chain"
    },
    {
      name: "Agriculture",
      description: "Timely transportation of harvested grains, raw produce, soils, and heavy farming equipment during busy seasonal schedules.",
      icon: Sprout,
      tag: "Seasonal Support"
    },
    {
      name: "E-commerce",
      description: "Dynamic fulfillment routing, regional cross-docking, and high-frequency parcel consolidation to support online commerce portals.",
      icon: Smartphone,
      tag: "High-Frequency"
    },
    {
      name: "Energy",
      description: "Specialized logistics and flatbed shipping to secure wind turbines, pipe fittings, machinery parts, and power-grid systems.",
      icon: Flame,
      tag: "Heavy Logistics"
    },
    {
      name: "Government",
      description: "Highly secure, fully documented freight solutions for state and federal infrastructure development projects, in compliance with federal guidelines.",
      icon: Building,
      tag: "DOT Certified"
    }
  ];

  return (
    <div className="space-y-0">

      {/* 1. Page Header */}
      <div className="bg-navy py-16 text-center text-white border-b border-navy-light relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-brandorange/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="text-brandorange uppercase tracking-wider text-xs font-black">
            Versatile Expertise
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">Industries We Serve</h1>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto leading-relaxed">
            Every sector requires unique logistics handling. We provide specialized, sector-specific transportation to meet any shipping requirement.
          </p>
        </div>
      </div>

      {/* 2. Industries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesList.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sm:p-8 flex flex-col justify-between h-full hover:shadow-xl hover:border-gray-200 transition-all text-left"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="p-3 bg-navy/5 text-brandorange rounded-lg">
                        <Icon size={24} />
                      </div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-50 px-2 py-1 rounded">
                        {ind.tag}
                      </span>
                    </div>

                    <h2 className="text-lg font-black text-navy">{ind.name}</h2>
                    <p className="text-gray-600 text-xs leading-relaxed">{ind.description}</p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-100 text-xs text-gray-400 font-medium">
                    Fully equipped to support {ind.name.toLowerCase()} operations.
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
