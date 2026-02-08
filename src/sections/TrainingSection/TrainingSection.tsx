import React from 'react';
import { Code, Zap, Truck, Award, Calendar, MapPin } from 'lucide-react';

const TrainingSection = () => {
  const trainings = [
    {
      title: "Web Design & Development",
      provider: "Learning & Earning Development Project",
      duration: "6 Months",
      location: "Bogra",
      icon: <Code className="text-blue-500" size={20} />,
    },
    {
      title: "Motor Driving",
      provider: "BUREAU OF MANPOWER, EMPLOYMENT",
      duration: "2 Months",
      location: "Bogra",
      icon: <Truck className="text-blue-500" size={20} />,
    },
    {
      title: "Power & Energy Sector in Bangladesh",
      provider: "IEEE Robotics & Automation Society (RU) / ICRPSET-2022",
      duration: "Dec 2022",
      location: "Rajshahi",
      icon: <Zap className="text-blue-500" size={20} />,
    }
  ];

  return (
    <section id="training" className="py-12 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-sm font-mono text-blue-500 uppercase tracking-[0.3em] mb-4">Specialized Training</h2>
            <p className="text-4xl font-bold text-white tracking-tight">Professional Certifications</p>
          </div>
          <p className="text-slate-500 text-sm max-w-xs leading-relaxed italic border-l border-slate-800 pl-4">
            Continuous learning through government-led initiatives and global engineering societies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainings.map((item, index) => (
            <div key={index} className="group p-8 bg-slate-900/30 border border-slate-900 hover:border-blue-500/30 transition-all rounded-sm">
              <div className="mb-6 inline-flex p-3 bg-slate-950 rounded-lg border border-slate-800 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 leading-snug">{item.title}</h3>
              <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">{item.provider}</p>
              
              <div className="space-y-2 mt-6 pt-6 border-t border-slate-800/50">
                <div className="flex items-center gap-2 text-slate-500 text-xs">
                  <Calendar size={14} /> {item.duration}
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-xs">
                  <MapPin size={14} /> {item.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;