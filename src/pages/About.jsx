import useSEO from '../hooks/useSEO';
import { Award, Shield, Heart, Compass } from 'lucide-react';

export default function About() {
  useSEO(
    'About Us - Our Story, Vision & Leadership',
    'Learn about Titan Freight Logistics. Read about our legacy of on-time delivery, central mission, core company values, and the expert leadership driving our fleet operations.'
  );

  const coreValues = [
    {
      title: "Unyielding Safety",
      description: "Our top priority. We protect our drivers, our clients' cargo, and the public on every single mile driven.",
      icon: Shield
    },
    {
      title: "Unmatched Reliability",
      description: "99.8% on-time performance means we keep our promises, allowing our business partners to thrive.",
      icon: Award
    },
    {
      title: "Integrity First",
      description: "Transparent rates, honest schedules, and real-time shipment visibility. No shortcuts, ever.",
      icon: Heart
    },
    {
      title: "Continuous Innovation",
      description: "Integrating high-performance AI routing and state-of-the-art telematics to lead tomorrow's supply chains.",
      icon: Compass
    }
  ];

  const leadershipTeam = [
    {
      name: "Arthur Pendelton",
      role: "CEO & Founder",
      bio: "With over 30 years of hands-on logistics and shipping experience, Arthur founded Titan in 2001 with a single rig.",
      avatar: "AP"
    },
    {
      name: "Guinevere Vance",
      role: "Chief Operating Officer",
      bio: "Guinevere coordinates our dispatch control, cross-border lanes, and supply chain routing centers.",
      avatar: "GV"
    },
    {
      name: "Lance Dubois",
      role: "VP of Safety & Fleet Compliance",
      bio: "Former DOT compliance officer dedicated to driver training, safety protocols, and ELD standards.",
      avatar: "LD"
    }
  ];

  const milestones = [
    { year: "2001", title: "Company Founded", desc: "Arthur Pendelton starts Titan with one tractor and a dry van trailer in Chicago." },
    { year: "2007", title: "Fleet Expansion", desc: "Grows fleet to 50 active trailers, establishing cross-border commercial freight service." },
    { year: "2013", title: "Reefer division launch", desc: "Introduces state-of-the-art temperature-controlled refrigerated logistics." },
    { year: "2019", title: "Nationwide Logistics", desc: "Surpasses 250 trucks. Establishes secondary regional hubs in Dallas and Atlanta." },
    { year: "2026", title: "Modern Leader", desc: "Operates 500+ intelligent rigs with next-gen GPS routing and low-emission vehicles." }
  ];

  return (
    <div className="space-y-0 text-left">

      {/* 1. Page Header */}
      <div className="bg-navy py-16 text-center text-white border-b border-navy-light relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-brandorange/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="text-brandorange uppercase tracking-wider text-xs font-black">
            Titan Freight Logistics
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">About Our Company</h1>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto leading-relaxed">
            Delivering trust, cargo security, and elite transportation solutions across North America for over 25 years.
          </p>
        </div>
      </div>

      {/* 2. Our Story / Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Story Text */}
            <div className="space-y-6 text-left">
              <span className="text-brandorange uppercase tracking-wider text-xs font-black">
                Established 2001
              </span>
              <h2 className="text-3xl font-black text-navy leading-tight">
                An Unwavering Commitment to the Road Ahead
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                What began as a single-truck operation in the heart of Illinois has grown into one of North America's premier asset-based trucking and logistics companies. At Titan, we built our business on a simple truth: our clients don't just ship freight, they ship trust.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Today, with over 500 heavy-duty vehicles, regional dispatch facilities, and cutting-edge logistics centers, we remain focused on the values of safety, transparency, and timely delivery.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="border-l-4 border-brandorange pl-4 space-y-1">
                  <span className="text-xs text-gray-400 font-bold block">Our Mission</span>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    To deliver reliable, safe, and cost-effective freight solutions through expert driving professionals, state-of-the-art trailers, and robust customer communication.
                  </p>
                </div>
                <div className="border-l-4 border-steel pl-4 space-y-1">
                  <span className="text-xs text-gray-400 font-bold block">Our Vision</span>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    To lead North America's logistics sector by implementing advanced telematics, green-fleet initiatives, and fostering long-term partner trust.
                  </p>
                </div>
              </div>
            </div>

            {/* Graphic mockup */}
            <div className="relative">
              <div className="bg-gradient-to-tr from-navy to-navy-light rounded-2xl p-8 text-white space-y-6 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]"></div>
                <h3 className="text-xl font-bold border-b border-white/10 pb-4">Why Customers Choose Us</h3>

                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-3 text-sm">
                    <span className="p-1 bg-brandorange rounded text-white flex-shrink-0">
                      <Shield size={16} />
                    </span>
                    <div>
                      <h4 className="font-bold">Comprehensive Safety Policy</h4>
                      <p className="text-xs text-gray-300 leading-relaxed">Rigorous fleet inspections and driver safety certifications exceeding DOT standard regulations.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 text-sm">
                    <span className="p-1 bg-brandorange rounded text-white flex-shrink-0">
                      <Award size={16} />
                    </span>
                    <div>
                      <h4 className="font-bold">Continuous Fleet Upgrades</h4>
                      <p className="text-xs text-gray-300 leading-relaxed">We maintain an average truck life of under 3 years to prevent on-road breakdowns.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brandorange uppercase tracking-wider text-xs font-black">
              Titan Principles
            </span>
            <h2 className="text-3xl font-black text-navy mt-2">
              Our Core Company Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                  <div className="p-3 bg-brandorange/10 text-brandorange rounded-lg inline-block mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-bold text-navy mb-2">{value.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brandorange uppercase tracking-wider text-xs font-black">
              Our Journey
            </span>
            <h2 className="text-3xl font-black text-navy mt-2">
              Historical Timeline
            </h2>
          </div>

          <div className="relative border-l border-gray-200 pl-6 space-y-12">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="relative group">
                {/* Year dot */}
                <div className="absolute -left-[35px] top-0.5 bg-brandorange text-white text-[11px] font-black px-2 py-0.5 rounded-full shadow-md">
                  {milestone.year}
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-navy text-base">{milestone.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mt-1">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Leadership Team */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brandorange uppercase tracking-wider text-xs font-black">
              Expert Management
            </span>
            <h2 className="text-3xl font-black text-navy mt-2">
              Titan Leadership Team
            </h2>
            <p className="text-gray-500 mt-3 text-xs leading-relaxed">
              Meet the industry pioneers committed to guiding our fleets, training our drivers, and optimizing your supply chain operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipTeam.map((leader, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-16 h-16 rounded-full bg-navy text-white text-lg font-black flex items-center justify-center mx-auto mb-4 shadow">
                  {leader.avatar}
                </div>
                <h3 className="font-black text-navy text-base">{leader.name}</h3>
                <span className="text-xs text-brandorange font-bold uppercase tracking-wider block mt-1">{leader.role}</span>
                <p className="text-gray-500 text-xs mt-3 leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
