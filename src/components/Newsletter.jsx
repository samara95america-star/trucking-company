import { useState } from 'react';
import { mockNewsletterService } from '../services/mockApi';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: null, message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const res = await mockNewsletterService.subscribe(email);
      if (res.success) {
        setStatus({ type: 'success', message: res.message });
        setEmail('');
      }
    } catch (err) {
      setStatus({ type: 'error', message: err.message || 'Something went wrong.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-navy-light p-6 rounded-xl border border-white/10 shadow-lg">
      <h3 className="text-lg font-bold text-white mb-2">Subscribe to Titan Insights</h3>
      <p className="text-gray-400 text-sm mb-4">
        Get the latest industry updates, rate forecasts, and freight optimization guides.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label htmlFor="newsletter-email" className="sr-only">Email Address</label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 bg-navy-dark text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-brandorange text-sm placeholder-gray-500"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-brandorange text-white hover:bg-brandorange-light font-semibold text-sm py-2 px-4 rounded-md transition-colors disabled:opacity-50"
        >
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      {status.message && (
        <p
          className={`mt-3 text-xs font-medium ${
            status.type === 'success' ? 'text-green-400' : 'text-red-400'
          }`}
        >
          {status.message}
        </p>
      )}
    </div>
  );
}
