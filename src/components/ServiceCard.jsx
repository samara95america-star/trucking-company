import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ title, description, icon: Icon }) {
  // Simple deterministic background illustration instead of heavy files
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden group">

      {/* Dynamic Placeholder graphic to resemble high-quality logistics service */}
      <div className="h-44 bg-gradient-to-r from-navy to-navy-light relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>

        {/* Subtle decorative grid */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

        {/* Centered Large Icon */}
        <div className="relative z-10 p-4 bg-brandorange/20 border border-brandorange/30 rounded-xl text-brandorange transform group-hover:scale-110 transition-transform">
          <Icon size={36} className="text-brandorange" />
        </div>

        <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center z-10">
          <span className="text-[11px] font-bold text-gray-300 uppercase tracking-widest bg-navy/80 px-2.5 py-1 rounded">
            Titan Cargo Services
          </span>
        </div>
      </div>

      {/* Text Area */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-navy group-hover:text-brandorange transition-colors mb-2">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {description}
          </p>
        </div>

        <Link
          to={`/services#${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
          className="inline-flex items-center text-sm font-bold text-brandorange hover:text-brandorange-light transition-colors mt-auto group/btn"
        >
          Learn More
          <ArrowRight size={16} className="ml-1.5 transform group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>

    </div>
  );
}
