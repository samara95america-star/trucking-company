import { Inbox } from 'lucide-react';

export default function EmptyState({ message = "No records matching that ID were found.", subtitle = "Please cross-verify your tracking/quote reference number." }) {
  return (
    <div className="bg-gray-50 border border-dashed border-gray-300 rounded-xl p-8 sm:p-12 text-center max-w-md mx-auto">
      <div className="p-4 bg-gray-200/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-gray-500">
        <Inbox size={28} />
      </div>
      <h4 className="text-base font-bold text-navy mb-1">{message}</h4>
      <p className="text-xs text-gray-400 leading-relaxed">{subtitle}</p>
    </div>
  );
}
