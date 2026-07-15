import { useState } from 'react';
import { mockQuoteService } from '../services/mockApi';
import { Calculator, CheckCircle2, RefreshCw } from 'lucide-react';

export default function QuoteForm() {
  const initialForm = {
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    pickupCity: '',
    pickupState: '',
    deliveryCity: '',
    deliveryState: '',
    shipmentType: 'Dry Van',
    weight: '',
    dimensions: '',
    freightClass: '50',
    pickupDate: '',
    deliveryDeadline: '',
    additionalNotes: ''
  };

  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const res = await mockQuoteService.requestQuote(formData);
      if (res.success) {
        setResult({
          quoteId: res.quoteId,
          message: res.message,
          data: res.submittedData
        });
        setFormData(initialForm);
      }
    } catch (err) {
      alert("Error calculating quote: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6 sm:p-10 max-w-4xl mx-auto">
      <div className="flex items-center space-x-3 mb-8">
        <div className="p-3 bg-brandorange/10 text-brandorange rounded-lg">
          <Calculator size={24} />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-navy">Instant Quote Estimator</h2>
          <p className="text-xs text-gray-500">Provide freight configuration for accurate dispatch scheduling.</p>
        </div>
      </div>

      {result ? (
        <div className="space-y-6 animate-fade-in">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center space-y-4">
            <CheckCircle2 className="mx-auto text-green-500" size={56} />
            <div>
              <h3 className="text-lg font-bold text-green-900">Request Dispatched Successfully!</h3>
              <p className="text-xs text-green-700 font-semibold mt-1">Reference ID: {result.quoteId}</p>
            </div>
            <p className="text-sm text-green-800 leading-relaxed max-w-lg mx-auto">
              {result.message}
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-4 pb-2 border-b border-gray-200">
              Submitted Shipment Manifest
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6 text-xs">
              <div>
                <span className="text-gray-400 block font-medium">Company Name</span>
                <span className="font-semibold text-navy">{result.data.companyName || 'N/A'}</span>
              </div>
              <div>
                <span className="text-gray-400 block font-medium">Contact Name</span>
                <span className="font-semibold text-navy">{result.data.contactName}</span>
              </div>
              <div>
                <span className="text-gray-400 block font-medium">Contact Email</span>
                <span className="font-semibold text-navy">{result.data.email}</span>
              </div>
              <div>
                <span className="text-gray-400 block font-medium">Pickup Region</span>
                <span className="font-semibold text-navy">{result.data.pickupCity}, {result.data.pickupState}</span>
              </div>
              <div>
                <span className="text-gray-400 block font-medium">Delivery Region</span>
                <span className="font-semibold text-navy">{result.data.deliveryCity}, {result.data.deliveryState}</span>
              </div>
              <div>
                <span className="text-gray-400 block font-medium">Trailer Requested</span>
                <span className="font-semibold text-navy">{result.data.shipmentType}</span>
              </div>
              <div>
                <span className="text-gray-400 block font-medium">Cargo Weight</span>
                <span className="font-semibold text-navy">{result.data.weight} lbs</span>
              </div>
              <div>
                <span className="text-gray-400 block font-medium">Class / Dimensions</span>
                <span className="font-semibold text-navy">Class {result.data.freightClass} ({result.data.dimensions || 'N/A'})</span>
              </div>
              <div>
                <span className="text-gray-400 block font-medium">Pickup Date</span>
                <span className="font-semibold text-navy">{result.data.pickupDate}</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setResult(null)}
            className="flex items-center justify-center space-x-2 text-xs font-bold text-brandorange hover:text-brandorange-light mx-auto"
          >
            <RefreshCw size={14} />
            <span>Create Another Request</span>
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column: Contact info */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-brandorange uppercase tracking-wider border-b border-gray-100 pb-2">
                1. Contact Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="companyName" className="block text-xs font-semibold text-gray-500 mb-1.5">Company Name</label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Enter company"
                    className="w-full text-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandorange"
                  />
                </div>
                <div>
                  <label htmlFor="contactName" className="block text-xs font-semibold text-gray-500 mb-1.5">Contact Name *</label>
                  <input
                    id="contactName"
                    name="contactName"
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={handleChange}
                    placeholder="First & last name"
                    className="w-full text-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandorange"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-gray-500 mb-1.5">Email Address *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. name@company.com"
                    className="w-full text-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandorange"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-gray-500 mb-1.5">Phone Number *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. (312) 555-0199"
                    className="w-full text-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandorange"
                  />
                </div>
              </div>

              <h3 className="text-xs font-bold text-brandorange uppercase tracking-wider border-b border-gray-100 pb-2 pt-4">
                2. Origin & Destination
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="pickupCity" className="block text-xs font-semibold text-gray-500 mb-1.5">Pickup City *</label>
                  <input
                    id="pickupCity"
                    name="pickupCity"
                    type="text"
                    required
                    value={formData.pickupCity}
                    onChange={handleChange}
                    placeholder="e.g. Chicago"
                    className="w-full text-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandorange"
                  />
                </div>
                <div>
                  <label htmlFor="pickupState" className="block text-xs font-semibold text-gray-500 mb-1.5">Pickup State *</label>
                  <input
                    id="pickupState"
                    name="pickupState"
                    type="text"
                    required
                    maxLength="2"
                    value={formData.pickupState}
                    onChange={handleChange}
                    placeholder="e.g. IL"
                    className="w-full text-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandorange uppercase"
                  />
                </div>
                <div>
                  <label htmlFor="deliveryCity" className="block text-xs font-semibold text-gray-500 mb-1.5">Delivery City *</label>
                  <input
                    id="deliveryCity"
                    name="deliveryCity"
                    type="text"
                    required
                    value={formData.deliveryCity}
                    onChange={handleChange}
                    placeholder="e.g. Dallas"
                    className="w-full text-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandorange"
                  />
                </div>
                <div>
                  <label htmlFor="deliveryState" className="block text-xs font-semibold text-gray-500 mb-1.5">Delivery State *</label>
                  <input
                    id="deliveryState"
                    name="deliveryState"
                    type="text"
                    required
                    maxLength="2"
                    value={formData.deliveryState}
                    onChange={handleChange}
                    placeholder="e.g. TX"
                    className="w-full text-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandorange uppercase"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Cargo and Date details */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-brandorange uppercase tracking-wider border-b border-gray-100 pb-2">
                3. Shipment Manifest Specs
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="shipmentType" className="block text-xs font-semibold text-gray-500 mb-1.5">Trailer Config *</label>
                  <select
                    id="shipmentType"
                    name="shipmentType"
                    value={formData.shipmentType}
                    onChange={handleChange}
                    className="w-full text-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandorange bg-white"
                  >
                    <option value="Dry Van">Dry Van Freight</option>
                    <option value="Refrigerated">Refrigerated (Reefer)</option>
                    <option value="Flatbed">Flatbed Hauling</option>
                    <option value="LTL">Less Than Truckload (LTL)</option>
                    <option value="FTL">Full Truckload (FTL)</option>
                    <option value="Expedited">Expedited Trailer</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="weight" className="block text-xs font-semibold text-gray-500 mb-1.5">Weight (lbs) *</label>
                  <input
                    id="weight"
                    name="weight"
                    type="number"
                    required
                    value={formData.weight}
                    onChange={handleChange}
                    placeholder="e.g. 24000"
                    className="w-full text-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandorange"
                  />
                </div>
                <div>
                  <label htmlFor="dimensions" className="block text-xs font-semibold text-gray-500 mb-1.5">Dimensions (LxWxH)</label>
                  <input
                    id="dimensions"
                    name="dimensions"
                    type="text"
                    value={formData.dimensions}
                    onChange={handleChange}
                    placeholder="e.g. 48x8x8 ft"
                    className="w-full text-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandorange"
                  />
                </div>
                <div>
                  <label htmlFor="freightClass" className="block text-xs font-semibold text-gray-500 mb-1.5">Freight Class</label>
                  <select
                    id="freightClass"
                    name="freightClass"
                    value={formData.freightClass}
                    onChange={handleChange}
                    className="w-full text-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandorange bg-white"
                  >
                    <option value="50">Class 50 (Heavy/Dense)</option>
                    <option value="70">Class 70</option>
                    <option value="100">Class 100 (Default)</option>
                    <option value="150">Class 150</option>
                    <option value="250">Class 250 (Light/Fragile)</option>
                  </select>
                </div>
              </div>

              <h3 className="text-xs font-bold text-brandorange uppercase tracking-wider border-b border-gray-100 pb-2 pt-4">
                4. Schedule Parameters
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="pickupDate" className="block text-xs font-semibold text-gray-500 mb-1.5">Pickup Date *</label>
                  <input
                    id="pickupDate"
                    name="pickupDate"
                    type="date"
                    required
                    value={formData.pickupDate}
                    onChange={handleChange}
                    className="w-full text-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandorange"
                  />
                </div>
                <div>
                  <label htmlFor="deliveryDeadline" className="block text-xs font-semibold text-gray-500 mb-1.5">Delivery Deadline *</label>
                  <input
                    id="deliveryDeadline"
                    name="deliveryDeadline"
                    type="date"
                    required
                    value={formData.deliveryDeadline}
                    onChange={handleChange}
                    className="w-full text-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandorange"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <label htmlFor="additionalNotes" className="block text-xs font-semibold text-gray-500 mb-1.5">Additional Logistics Notes / Instructions</label>
            <textarea
              id="additionalNotes"
              name="additionalNotes"
              rows="3"
              value={formData.additionalNotes}
              onChange={handleChange}
              placeholder="e.g. Liftgate required, hazardous cargo, cold-chain temperature control parameters, etc."
              className="w-full text-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandorange"
            ></textarea>
          </div>

          <div className="pt-4 border-t border-gray-100 flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 bg-brandorange text-white hover:bg-brandorange-light rounded-lg font-bold text-sm transition-all shadow-md shadow-brandorange/10 hover:shadow-brandorange/30 disabled:opacity-50 inline-flex items-center space-x-2"
            >
              <span>{loading ? 'Dispersing...' : 'Request Quote'}</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
