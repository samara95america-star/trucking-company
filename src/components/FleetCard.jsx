import { Link } from 'react-router-dom';
import { Truck, CheckCircle2 } from 'lucide-react';

export default function FleetCard({ name, capacity, dimensions, features, availability }) {
  const isAvailable = availability.toLowerCase().includes('available') || availability.toLowerCase().includes('immediate');

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all overflow-hidden flex flex-col h-full">

      {/* Fleet Placeholder Graphic styling */}
      <div className="h-40 bg-gray-100 border-b border-gray-100 relative flex items-center justify-center p-6">
        <div className="absolute top-3 right-3">
          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${
            isAvailable ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${isAvailable ? 'bg-green-500' : 'bg-amber-500'}`}></span>
            {availability}
          </span>
        </div>

        <Truck className="text-steel-light opacity-20 absolute -bottom-6 -left-6" size={140} />

        <div className="text-center z-10 space-y-1">
          <Truck className="mx-auto text-brandorange" size={40} />
          <h4 className="font-extrabold text-navy tracking-wide uppercase text-sm">
            {name}
          </h4>
          <span className="text-[11px] text-gray-500 font-medium">Titan Logistics Unit</span>
        </div>
      </div>

      {/* Fleet Specs */}
      <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <div>
            <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block">Trailer Capacity</span>
            <span className="text-sm font-semibold text-navy">{capacity}</span>
          </div>

          <div>
            <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block">Trailer Dimensions</span>
            <span className="text-sm font-semibold text-navy">{dimensions}</span>
          </div>

          <div>
            <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block mb-1.5">Key Features</span>
            <div className="grid grid-cols-2 gap-1.5 text-xs text-gray-600">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-1">
                  <CheckCircle2 size={12} className="text-brandorange flex-shrink-0" />
                  <span className="truncate">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Link
          to="/quote"
          className="w-full text-center py-2.5 border border-navy text-navy font-bold text-xs rounded-lg hover:bg-navy hover:text-white transition-colors block"
        >
          Dispatch This Vehicle
        </Link>
      </div>

    </div>
  );
}
