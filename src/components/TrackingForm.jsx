import { useState } from 'react';
import { Search } from 'lucide-react';

export default function TrackingForm({ onTrack }) {
  const [trackingNum, setTrackingNum] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!trackingNum.trim()) return;
    onTrack(trackingNum);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-grow">
          <label htmlFor="tracking-input" className="sr-only">Tracking Number</label>
          <input
            id="tracking-input"
            type="text"
            required
            placeholder="Enter Tracking Number (e.g., TT-5001)"
            value={trackingNum}
            onChange={(e) => setTrackingNum(e.target.value)}
            className="w-full pl-4 pr-10 py-3 text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brandorange text-navy font-semibold uppercase placeholder-gray-400 shadow-inner"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-navy text-white hover:bg-navy-light font-bold text-sm rounded-lg transition-colors flex items-center justify-center space-x-2"
        >
          <Search size={16} />
          <span>Track Shipment</span>
        </button>
      </div>
      <p className="text-[10px] text-gray-400 mt-2 text-center sm:text-left">
        Try entering codes like <span className="text-brandorange font-semibold">TITAN-99</span>, <span className="text-brandorange font-semibold">FTL-4820</span> or any custom text combination.
      </p>
    </form>
  );
}
