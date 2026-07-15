import { Link } from 'react-router-dom';
import { ArrowRight, Search, ClipboardList } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-navy overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brandorange rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-steel rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Headline Content */}
          <div className="lg:col-span-7 space-y-6 text-left animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-navy-light border border-white/10 px-3 py-1.5 rounded-full">
              <span className="w-2.5 h-2.5 rounded-full bg-brandorange animate-pulse"></span>
              <span className="text-xs font-semibold text-white tracking-wide uppercase">
                Active Fleet Operations 24/7/365
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Reliable Freight.<br />
              <span className="text-brandorange">Delivered On Time.</span>
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              Titan Freight Logistics provides safe, dependable transportation and logistics solutions across North America. We specialize in dry van, refrigerated freight, flatbed hauling, expedited shipping, and dedicated logistics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/quote"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-brandorange text-white font-bold rounded-lg hover:bg-brandorange-light transition-all shadow-lg shadow-brandorange/20 hover:shadow-brandorange/35 transform hover:-translate-y-0.5"
              >
                <ClipboardList className="mr-2" size={20} />
                Request a Quote
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link
                to="/track"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-white/10 border border-white/20 text-white font-bold rounded-lg hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                <Search className="mr-2" size={20} />
                Track Shipment
              </Link>
            </div>
          </div>

          {/* Large Visual Visual (Placeholder Truck graphic/mock) */}
          <div className="lg:col-span-5 relative w-full h-80 sm:h-96 lg:h-full flex items-center justify-center animate-fade-in">
            {/* SVG Illustration resembling a premium futuristic Freight Truck */}
            <div className="relative w-full h-full max-w-lg min-h-[350px] bg-gradient-to-tr from-navy-light to-navy border border-white/10 rounded-2xl shadow-2xl p-6 overflow-hidden flex flex-col justify-between">

              {/* Header inside the mockup card */}
              <div className="flex justify-between items-center">
                <span className="text-xs text-brandorange font-black uppercase tracking-widest">
                  Titan Logistics Console
                </span>
                <span className="text-[10px] bg-green-500/10 text-green-400 px-2.5 py-1 rounded-full font-bold">
                  ● Systems Nominal
                </span>
              </div>

              {/* Truck graphics rendering using styling elements */}
              <div className="my-8 relative flex justify-center items-center h-48 bg-navy-dark/50 border border-white/5 rounded-xl">
                <div className="absolute inset-0 bg-radial-gradient from-brandorange/10 to-transparent"></div>
                <div className="text-center space-y-3 z-10">
                  <div className="text-white font-black text-2xl tracking-wider">
                    NORTH AMERICAN FLEET
                  </div>
                  <div className="text-gray-400 text-xs px-6">
                    Our smart-dispatched modern dry vans, refrigerated trucks, and flatbeds are equipped with electronic logs (ELD) and active satellite tracking.
                  </div>
                  <div className="inline-flex items-center space-x-1.5 text-xs text-brandorange font-bold">
                    <span>Active Route Count: 4,812</span>
                  </div>
                </div>
              </div>

              {/* Console logs */}
              <div className="border-t border-white/5 pt-4 flex justify-between items-center text-[11px] text-gray-400">
                <span>Fleet Speed Avg: 62mph</span>
                <span className="text-brandorange font-semibold">Ready to Load</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
