import { useState } from 'react';
import useSEO from '../hooks/useSEO';
import { mockCareerService } from '../services/mockApi';
import { ShieldCheck, Coins, Heart, Calendar, Compass, ClipboardCheck } from 'lucide-react';

export default function Careers() {
  useSEO(
    'Careers - Drive with Titan Freight Logistics',
    'Join our elite trucking family. Check out driver benefits, modern premium equipment, and apply for open CDL Class-A driver, mechanic, and dispatcher positions.'
  );

  const initialForm = {
    fullName: '',
    email: '',
    phone: '',
    position: 'CDL Class A Driver',
    experience: '1-3 Years',
    license: 'Yes',
    notes: ''
  };

  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const benefits = [
    { title: "Competitive Pay", desc: "Top-tier cents-per-mile (CPM) rates plus safety bonuses.", icon: Coins },
    { title: "Health Insurance", desc: "Premium dental, vision, and healthcare for you & family.", icon: Heart },
    { title: "Paid Time Off", desc: "Earn PTO, paid training, and holiday schedules easily.", icon: Calendar },
    { title: "Retirement Plan", desc: "401(k) company matching programs to plan your future.", icon: Compass },
    { title: "Modern Equipment", desc: "Late-model tractors with continuous preventative service.", icon: ShieldCheck },
    { title: "Paid Training", desc: "Paid orientation, hazardous materials class additions, and safety seminars.", icon: ClipboardCheck },
    { title: "Flexible Routes", desc: "Local, regional, and OTR lines to guarantee home time.", icon: ShieldCheck }
  ];

  const positions = [
    { title: "CDL Class A Driver", loc: "OTR / Regional", type: "Full-Time", pay: "$85k - $110k / year" },
    { title: "Owner Operator", loc: "National Network", type: "Contract", pay: "78% Gross Revenue" },
    { title: "Dispatcher", loc: "Chicago, IL", type: "Full-Time", pay: "$55k - $72k / year" },
    { title: "Diesel Mechanic", loc: "Chicago, IL", type: "Full-Time", pay: "$28 - $38 / hour" },
    { title: "Fleet Manager", loc: "Dallas, TX", type: "Full-Time", pay: "$65k - $80k / year" },
    { title: "Logistics Coordinator", loc: "Remote / Hybrid", type: "Full-Time", pay: "$48k - $60k / year" }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await mockCareerService.apply(formData);
      if (res.success) {
        setSuccess(res.message);
        setFormData(initialForm);
      }
    } catch (err) {
      alert("Error submitting application: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-0 text-left">

      {/* 1. Header */}
      <div className="bg-navy py-16 text-center text-white border-b border-navy-light relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-brandorange/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="text-brandorange uppercase tracking-wider text-xs font-black">
            Join the Family
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">Drive & Grow with Titan</h1>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto leading-relaxed">
            Ready to build a real career on the road? We provide elite drivers with brand-new premium equipment, outstanding weekly pay, and total respect.
          </p>
        </div>
      </div>

      {/* 2. Driver Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brandorange uppercase tracking-wider text-xs font-black">
              Why Drive With Us
            </span>
            <h2 className="text-3xl font-black text-navy mt-2 text-center">
              Unrivaled Benefits & Respect
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-3 bg-brandorange/10 text-brandorange rounded-lg inline-block mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-bold text-navy text-sm mb-2">{benefit.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Open Positions */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brandorange uppercase tracking-wider text-xs font-black">
              Career Openings
            </span>
            <h2 className="text-3xl font-black text-navy mt-2 text-center">
              Available Professional Roles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {positions.map((pos, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-150 p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-black text-navy text-base">{pos.title}</h3>
                    <span className="text-[10px] bg-brandorange/10 text-brandorange font-bold px-2 py-0.5 rounded uppercase">
                      {pos.type}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400 font-semibold block mt-1">{pos.loc}</span>
                  <span className="text-xs text-green-600 font-bold block mt-3">{pos.pay}</span>
                </div>
                <div className="pt-6 border-t border-gray-100 mt-6">
                  <button
                    onClick={() => {
                      setFormData(prev => ({ ...prev, position: pos.title }));
                      document.getElementById('app-form-target').scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-xs font-bold text-brandorange hover:text-brandorange-light"
                  >
                    Apply Now &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Employment Application Form */}
      <section id="app-form-target" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy rounded-2xl shadow-2xl p-6 sm:p-10 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <span className="text-brandorange uppercase tracking-wider text-xs font-black">
                  Start Your Journey
                </span>
                <h2 className="text-2xl font-black text-white mt-1">
                  Apply Online Today
                </h2>
                <p className="text-xs text-gray-300 mt-2">
                  Complete this preliminary screening form. A recruiter will contact you within 1 business day.
                </p>
              </div>

              {success ? (
                <div className="bg-green-100/10 border border-green-500/30 text-green-300 p-8 rounded-xl text-center space-y-4 animate-fade-in">
                  <ShieldCheck className="mx-auto text-green-400" size={56} />
                  <div>
                    <h4 className="font-bold text-lg text-white">Application Received!</h4>
                    <p className="text-xs mt-1 text-gray-300">Our logistics HR department has received your profile.</p>
                  </div>
                  <p className="text-xs leading-relaxed max-w-md mx-auto text-gray-400">
                    {success}
                  </p>
                  <button
                    onClick={() => setSuccess(null)}
                    className="text-xs text-brandorange font-semibold hover:underline"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold text-gray-300 mb-1.5">Full Name *</label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full text-sm px-4 py-2 bg-white/10 text-white rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-brandorange placeholder-gray-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="career-email" className="block text-xs font-bold text-gray-300 mb-1.5">Email Address *</label>
                      <input
                        id="career-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full text-sm px-4 py-2 bg-white/10 text-white rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-brandorange placeholder-gray-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="career-phone" className="block text-xs font-bold text-gray-300 mb-1.5">Phone Number *</label>
                      <input
                        id="career-phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 555-5555"
                        className="w-full text-sm px-4 py-2 bg-white/10 text-white rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-brandorange placeholder-gray-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="position" className="block text-xs font-bold text-gray-300 mb-1.5">Desired Position *</label>
                      <select
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        className="w-full text-sm px-4 py-2.5 bg-navy border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-brandorange text-white"
                      >
                        <option value="CDL Class A Driver">CDL Class A Driver</option>
                        <option value="Owner Operator">Owner Operator</option>
                        <option value="Dispatcher">Dispatcher</option>
                        <option value="Diesel Mechanic">Diesel Mechanic</option>
                        <option value="Fleet Manager">Fleet Manager</option>
                        <option value="Logistics Coordinator">Logistics Coordinator</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="experience" className="block text-xs font-bold text-gray-300 mb-1.5">Relevant Experience *</label>
                      <select
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full text-sm px-4 py-2.5 bg-navy border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-brandorange text-white"
                      >
                        <option value="No Experience">No Experience / Trainee</option>
                        <option value="Less than 1 Year">Less than 1 Year</option>
                        <option value="1-3 Years">1-3 Years</option>
                        <option value="3-5 Years">3-5 Years</option>
                        <option value="5+ Years">5+ Years</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="license" className="block text-xs font-bold text-gray-300 mb-1.5">Do you hold a CDL-A? *</label>
                      <select
                        id="license"
                        name="license"
                        value={formData.license}
                        onChange={handleChange}
                        className="w-full text-sm px-4 py-2.5 bg-navy border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-brandorange text-white"
                      >
                        <option value="Yes">Yes, Active Class-A License</option>
                        <option value="No">No Class-A License</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-xs font-bold text-gray-300 mb-1.5">Additional Application Notes</label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows="3"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Add endorsements (Hazmat, Tanker, Doubles), safety records, or questions you have for our recruiters..."
                      className="w-full text-sm px-4 py-2 bg-white/10 text-white rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-brandorange placeholder-gray-500"
                    ></textarea>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-8 py-3 bg-brandorange text-white hover:bg-brandorange-light rounded-md font-bold text-sm transition-colors shadow-lg disabled:opacity-50"
                    >
                      {loading ? 'Submitting File...' : 'Submit Application'}
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
