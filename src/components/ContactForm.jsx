import { useState } from 'react';
import { mockContactService } from '../services/mockApi';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await mockContactService.sendMessage(formData);
      if (res.success) {
        setSuccess(res.message);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }
    } catch (err) {
      alert("Error sending message: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100">
      <h3 className="text-lg font-bold text-navy mb-1">Send Us a Message</h3>
      <p className="text-xs text-gray-500 mb-6">Our average dispatch desk response time is under 15 minutes.</p>

      {success ? (
        <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center space-y-3 animate-fade-in">
          <CheckCircle2 className="mx-auto text-green-500" size={40} />
          <h4 className="font-bold text-sm">Message Transmitted!</h4>
          <p className="text-xs text-green-700 leading-relaxed">{success}</p>
          <button
            onClick={() => setSuccess(null)}
            className="text-xs text-brandorange hover:underline font-semibold"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="contact-name" className="block text-xs font-semibold text-gray-500 mb-1">Full Name *</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Sarah Jenkins"
              className="w-full text-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandorange"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-email" className="block text-xs font-semibold text-gray-500 mb-1">Email *</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. sarah@company.com"
                className="w-full text-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandorange"
              />
            </div>
            <div>
              <label htmlFor="contact-phone" className="block text-xs font-semibold text-gray-500 mb-1">Phone Number</label>
              <input
                id="contact-phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. (312) 555-0112"
                className="w-full text-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandorange"
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-subject" className="block text-xs font-semibold text-gray-500 mb-1">Subject *</label>
            <input
              id="contact-subject"
              type="text"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g. Quote discrepancy, high priority dispatch"
              className="w-full text-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandorange"
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-xs font-semibold text-gray-500 mb-1">Message *</label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your freight, routing, or general logistical inquiry..."
              className="w-full text-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandorange"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-brandorange text-white hover:bg-brandorange-light font-bold text-sm rounded-md transition-colors disabled:opacity-50 inline-flex items-center justify-center space-x-2"
          >
            <Send size={16} />
            <span>{loading ? 'Transmitting...' : 'Send Message'}</span>
          </button>
        </form>
      )}
    </div>
  );
}
