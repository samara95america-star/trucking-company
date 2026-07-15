import { Star } from 'lucide-react';

export default function TestimonialCard({ name, company, rating, review }) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 sm:p-8 flex flex-col justify-between h-full transform hover:-translate-y-1 transition-transform">
      <div className="space-y-4">
        {/* Ratings */}
        <div className="flex space-x-1">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Star
              key={idx}
              size={16}
              className={idx < rating ? 'text-brandorange fill-brandorange' : 'text-gray-200'}
            />
          ))}
        </div>

        {/* Review body */}
        <p className="text-gray-600 text-sm italic leading-relaxed">
          &ldquo;{review}&rdquo;
        </p>
      </div>

      {/* Driver / Customer details */}
      <div className="flex items-center space-x-3 pt-6 border-t border-gray-100 mt-6">
        {/* Placeholder Avatar */}
        <div className="w-10 h-10 rounded-full bg-steel-light/10 text-navy flex items-center justify-center font-bold text-sm border border-steel-light/20">
          {name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <h4 className="text-sm font-bold text-navy">{name}</h4>
          <span className="text-xs text-gray-400 font-medium">{company}</span>
        </div>
      </div>
    </div>
  );
}
