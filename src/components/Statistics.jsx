import { useState, useEffect } from 'react';
import { Award, Truck, MapPin, Map, ShieldCheck, Headphones } from 'lucide-react';

const statsConfig = [
  { label: 'Years Experience', value: 25, suffix: '+', icon: Award },
  { label: 'Active Trucks', value: 500, suffix: '+', icon: Truck },
  { label: 'Million Miles Driven', value: 2, suffix: 'M+', icon: MapPin },
  { label: 'States Covered', value: 50, suffix: '', icon: Map },
  { label: 'On-Time Delivery', value: 99.8, suffix: '%', icon: ShieldCheck, step: 0.1 },
  { label: 'Customer Support', value: '24/7', suffix: '', icon: Headphones, isText: true },
];

export default function Statistics() {
  const [counts, setCounts] = useState(
    statsConfig.map(stat => (stat.isText ? stat.value : 0))
  );

  useEffect(() => {
    const duration = 2000; // Animation duration in ms
    const frameRate = 1000 / 60; // 60fps
    const totalFrames = duration / frameRate;

    const timers = statsConfig.map((stat, index) => {
      if (stat.isText) return null;

      let current = 0;
      const target = Number(stat.value);
      const increment = target / totalFrames;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounts(prev => {
          const next = [...prev];
          next[index] = Number(current.toFixed(stat.step ? 1 : 0));
          return next;
        });
      }, frameRate);

      return timer;
    });

    return () => {
      timers.forEach(timer => {
        if (timer) clearInterval(timer);
      });
    };
  }, []);

  return (
    <div className="bg-navy py-16 text-white border-t border-b border-navy-light relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy-light to-navy opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-brandorange uppercase tracking-wider text-xs font-black">
            Titan Performance Numbers
          </span>
          <h2 className="text-3xl sm:text-4xl font-black mt-2 text-white">
            Logistics Metrics You Can Count On
          </h2>
          <p className="text-gray-400 mt-3 text-sm">
            Our numbers tell the story of dedication, hard work, and relentless service across America.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {statsConfig.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-navy-light/40 border border-white/5 rounded-xl p-5 text-center flex flex-col items-center justify-center transform hover:-translate-y-1 transition-all"
              >
                <div className="p-3 bg-brandorange/10 rounded-lg text-brandorange mb-4">
                  <Icon size={24} />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {counts[index]}
                  {stat.suffix}
                </div>
                <div className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-2">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
