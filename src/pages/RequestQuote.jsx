import useSEO from '../hooks/useSEO';
import QuoteForm from '../components/QuoteForm';

export default function RequestQuote() {
  useSEO(
    'Request a Freight Quote - Online Pricing',
    'Get a detailed, customized freight shipping quote from Titan Freight Logistics. Enter your cargo weight, origin, destination, and trailer configurations.'
  );

  return (
    <div className="space-y-0 text-left">

      {/* 1. Page Header */}
      <div className="bg-navy py-16 text-center text-white border-b border-navy-light relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-brandorange/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="text-brandorange uppercase tracking-wider text-xs font-black">
            Freight Rates
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">Request a Freight Quote</h1>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto leading-relaxed">
            Submit your freight parameters and cargo specifications. Our advanced routing engines and expert dispatch desks will calculate custom lanes in under 15 minutes.
          </p>
        </div>
      </div>

      {/* 2. Embedded Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteForm />
        </div>
      </section>

    </div>
  );
}
