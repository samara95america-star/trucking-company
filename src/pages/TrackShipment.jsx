import { useState } from 'react';
import useSEO from '../hooks/useSEO';
import TrackingForm from '../components/TrackingForm';
import Timeline from '../components/Timeline';
import LoadingSpinner from '../components/LoadingSpinner';
import EmptyState from '../components/EmptyState';
import { mockShipmentService } from '../services/mockApi';
import { Landmark, Compass, User, RefreshCw, Layers } from 'lucide-react';

export default function TrackShipment() {
  useSEO(
    'Track Your Shipment - Real-Time Cargo Updates',
    'Enter your tracking number to get instant, real-time cargo tracking updates, assigned driver details, ETAs, and detailed location progress timelines.'
  );

  const [loading, setLoading] = useState(false);
  const [cargoData, setCargoData] = useState(null);
  const [error, setError] = useState(null);

  const handleTrack = async (trackingNum) => {
    setLoading(true);
    setError(null);
    setCargoData(null);

    try {
      const data = await mockShipmentService.track(trackingNum);
      setCargoData(data);
    } catch (err) {
      setError(err.message || 'Error communicating with GPS satellite nodes.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-0 text-left">

      {/* 1. Page Header */}
      <div className="bg-navy py-16 text-center text-white border-b border-navy-light relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-brandorange/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="text-brandorange uppercase tracking-wider text-xs font-black">
            GPS Satellite Live Map
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">Track Your Shipment</h1>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto leading-relaxed">
            Get instant, real-time tracking updates, assigned driver details, transit progress milestones, and estimated delivery dates.
          </p>
        </div>
      </div>

      {/* 2. Interactive Input Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4">
          <TrackingForm onTrack={handleTrack} />
        </div>
      </section>

      {/* 3. Output Section */}
      <section className="py-16 bg-white min-h-[300px]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {loading && <LoadingSpinner message="Querying satellite telematics databases..." />}

          {error && (
            <div className="max-w-md mx-auto text-center">
              <EmptyState message="Error Tracking Cargo" subtitle={error} />
            </div>
          )}

          {!loading && !error && !cargoData && (
            <div className="text-center space-y-4 max-w-md mx-auto py-12">
              <Compass className="mx-auto text-gray-300 animate-pulse-slow" size={48} />
              <h3 className="font-bold text-navy text-sm">Awaiting Tracking Number Input</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Provide an active dispatch number (e.g., <span className="font-semibold text-brandorange">TT-5001</span> or <span className="font-semibold text-brandorange">FTL-4820</span>) in the form above to fetch realtime coordinates.
              </p>
            </div>
          )}

          {!loading && cargoData && (
            <div className="space-y-8 animate-fade-in">

              {/* Summary Header */}
              <div className="bg-navy text-white rounded-xl shadow-xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                <div className="md:col-span-2 space-y-1">
                  <span className="text-[10px] text-brandorange font-black uppercase tracking-widest block">
                    Active Freight Consignment
                  </span>
                  <h2 className="text-2xl font-black text-white">ID: {cargoData.shipmentId}</h2>
                  <p className="text-xs text-gray-400">
                    Routing: <span className="font-bold text-white">{cargoData.origin}</span> &rarr; <span className="font-bold text-white">{cargoData.destination}</span>
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs text-gray-400 block font-semibold">Estimated Delivery</span>
                  <span className="text-base font-black text-brandorange">{cargoData.estimatedDelivery}</span>
                </div>

                <div className="space-y-1">
                  <span className="text-xs text-gray-400 block font-semibold">Active Status</span>
                  <span className="inline-flex items-center px-2.5 py-1 bg-white/10 text-brandorange font-bold text-xs rounded uppercase">
                    {cargoData.currentStatus}
                  </span>
                </div>
              </div>

              {/* Grid: Map Info & Timeline */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                {/* Tech specifications column */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-150 space-y-4">
                    <h3 className="text-xs font-bold text-navy uppercase tracking-wider pb-2 border-b border-gray-200">
                      Vehicle & Personnel Details
                    </h3>

                    <div className="flex items-center space-x-3 text-xs">
                      <div className="p-2.5 bg-brandorange/15 text-brandorange rounded-lg">
                        <User size={18} />
                      </div>
                      <div>
                        <span className="text-gray-400 block font-medium">Assigned Cargo Operator</span>
                        <span className="font-bold text-navy">{cargoData.driverAssigned}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 text-xs">
                      <div className="p-2.5 bg-brandorange/15 text-brandorange rounded-lg">
                        <Landmark size={18} />
                      </div>
                      <div>
                        <span className="text-gray-400 block font-medium">Current GPS Location</span>
                        <span className="font-bold text-navy">{cargoData.currentLocation}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 text-xs">
                      <div className="p-2.5 bg-brandorange/15 text-brandorange rounded-lg">
                        <Layers size={18} />
                      </div>
                      <div>
                        <span className="text-gray-400 block font-medium">Progress Bar Indicator</span>
                        <div className="w-40 bg-gray-200 h-2.5 rounded-full mt-1.5 overflow-hidden">
                          <div className="bg-brandorange h-full rounded-full" style={{ width: `${cargoData.progress}%` }}></div>
                        </div>
                        <span className="text-[10px] text-gray-400 block mt-1 font-semibold">{cargoData.progress}% Completed</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => handleTrack(cargoData.shipmentId)}
                        className="w-full py-2.5 text-xs font-bold text-navy border border-gray-300 hover:border-navy hover:bg-gray-50 rounded-lg transition-colors flex items-center justify-center space-x-2"
                      >
                        <RefreshCw size={12} />
                        <span>Force GPS Signal Ping</span>
                      </button>
                    </div>

                  </div>

                  <div className="bg-navy text-white rounded-xl p-6 space-y-2">
                    <h4 className="text-xs font-bold text-brandorange uppercase tracking-wider">Need Dispatch Assistance?</h4>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      If your shipment is delayed or you need to update routing coordinates, please dial emergency dispatch at (312) 555-2026.
                    </p>
                  </div>
                </div>

                {/* Timeline Column */}
                <div className="lg:col-span-7 bg-white border border-gray-150 p-6 sm:p-8 rounded-xl shadow-sm">
                  <h3 className="text-xs font-black text-navy uppercase tracking-wider mb-6 pb-2 border-b border-gray-100">
                    Shipment Progress Timeline
                  </h3>
                  <Timeline steps={cargoData.timeline} />
                </div>

              </div>

            </div>
          )}

        </div>
      </section>

    </div>
  );
}
