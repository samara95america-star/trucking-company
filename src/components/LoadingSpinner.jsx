import { Loader2 } from 'lucide-react';

export default function LoadingSpinner({ message = 'Retrieving freight parameters...' }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <Loader2 className="animate-spin text-brandorange mb-4" size={48} />
      <p className="text-sm font-semibold text-navy animate-pulse">{message}</p>
    </div>
  );
}
