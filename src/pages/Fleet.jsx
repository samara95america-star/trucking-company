import { useState } from 'react';
import useSEO from '../hooks/useSEO';
import FleetCard from '../components/FleetCard';

export default function Fleet() {
  useSEO(
    'Our Active Fleet & Equipment Specifications',
    'Explore Titan Freight Logistics high-quality commercial fleet. Review capacities, dimensions, features, and immediate availability for semi trucks, dry vans, reefers, and flatbeds.'
  );

  const [activeFilter, setActiveFilter] = useState('All');

  const fleetItems = [
    {
      name: "Semi Trucks / Tractors",
      capacity: "Up to 80,000 lbs Gross Weight",
      dimensions: "Fits Standard commercial haul specifications",
      features: ["Late-model low emission", "Satellite GPS tracking", "Sleep cab equipped", "Automated transmissions"],
      availability: "Immediate Dispatch",
      type: "Tractor"
    },
    {
      name: "Dry Van Trailers",
      capacity: "45,000 lbs Payload Capacity",
      dimensions: "53' L x 102\" W x 110\" H",
      features: ["Air-ride suspension", "Logistics posts / e-track", "Roll-up or swing doors", "Aluminum roof sheeting"],
      availability: "Immediate Dispatch",
      type: "Trailer"
    },
    {
      name: "Refrigerated Trailers (Reefer)",
      capacity: "43,500 lbs Payload Capacity",
      dimensions: "53' L x 102\" W x 110\" H",
      features: ["Multi-temp partition gates", "Continuous telematics monitoring", "Whisper-quiet reefer engines", "Corrugated airflow walls"],
      availability: "Immediate Dispatch",
      type: "Trailer"
    },
    {
      name: "Flatbeds",
      capacity: "48,000 lbs Payload Capacity",
      dimensions: "48' or 53' Length",
      features: ["Steel or aluminum deck", "Side kit compatibility", "Complete strap/chain setups", "Removable Gooseneck (RGN) options"],
      availability: "24-Hour Notice",
      type: "Trailer"
    },
    {
      name: "Box Trucks",
      capacity: "Up to 10,000 lbs Payload Capacity",
      dimensions: "26' L x 96\" W x 96\" H",
      features: ["Heavy-duty hydraulic liftgate", "E-track securement tie downs", "Perfect for final-mile routes", "Air-conditioned cab"],
      availability: "Immediate Dispatch",
      type: "Support"
    },
    {
      name: "Tanker Trailers",
      capacity: "Up to 7,000 Gallon Capacity",
      dimensions: "Standard liquid cargo specifications",
      features: ["Stainless steel tanks", "Multi-compartment designs", "Integrated pumping systems", "Strict hazardous cargo seals"],
      availability: "Contact Dispatch Desk",
      type: "Trailer"
    }
  ];

  const filters = ['All', 'Tractor', 'Trailer', 'Support'];

  const filteredFleet = activeFilter === 'All'
    ? fleetItems
    : fleetItems.filter(item => item.type === activeFilter);

  return (
    <div className="space-y-0">

      {/* 1. Page Header */}
      <div className="bg-navy py-16 text-center text-white border-b border-navy-light relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-brandorange/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="text-brandorange uppercase tracking-wider text-xs font-black">
            Asset-Backed Power
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">Our Active Fleet & Equipment</h1>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto leading-relaxed">
            Titan maintains a modern, clean, premium asset-backed fleet. With an average vehicle age of under 3 years, we ensure continuous maximum uptime and safety compliance.
          </p>
        </div>
      </div>

      {/* 2. Filter & Fleet Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filters */}
          <div className="flex justify-center space-x-2 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-xs font-bold rounded-lg border transition-all ${
                  activeFilter === filter
                    ? 'bg-brandorange border-brandorange text-white'
                    : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300'
                }`}
              >
                {filter === 'All' ? 'All Vehicles' : `${filter}s`}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFleet.map((vehicle, idx) => (
              <FleetCard
                key={idx}
                name={vehicle.name}
                capacity={vehicle.capacity}
                dimensions={vehicle.dimensions}
                features={vehicle.features}
                availability={vehicle.availability}
              />
            ))}
          </div>

          {/* Quick Notice */}
          <div className="mt-12 text-center text-xs text-gray-400 bg-gray-50 p-6 rounded-xl border border-gray-100 max-w-2xl mx-auto">
            <span className="font-bold text-navy block mb-1">Heavy Freight Notice:</span>
            All heavy-duty combinations comply strictly with FMCSA safety directives. Multi-temp reefers and oversized flatbeds can require customized routing clearance, which our dispatch desk coordinates automatically.
          </div>

        </div>
      </section>

    </div>
  );
}
