import { CheckCircle2, Circle } from 'lucide-react';

export default function Timeline({ steps }) {
  return (
    <div className="relative border-l-2 border-gray-200 ml-3 pl-6 space-y-8 py-2">
      {steps.map((step, idx) => {
        const Icon = step.completed ? CheckCircle2 : Circle;
        return (
          <div key={idx} className="relative group">
            {/* Left bullet marker */}
            <span className={`absolute -left-[33px] top-0 p-1 rounded-full ${
              step.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
            }`}>
              <Icon size={18} className={step.completed ? 'fill-green-100' : ''} />
            </span>

            {/* Time / Description */}
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h4 className={`text-sm font-bold ${
                  step.completed ? 'text-navy' : 'text-gray-400'
                }`}>
                  {step.status}
                </h4>
                {step.timestamp && (
                  <span className="text-[10px] text-brandorange font-semibold bg-brandorange/5 px-2 py-0.5 rounded">
                    {step.timestamp}
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
