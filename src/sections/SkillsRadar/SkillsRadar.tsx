import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const data = [
  { subject: 'Industrial Maintenance', A: 95, fullMark: 100 },
  { subject: 'System Analysis (RCA)', A: 90, fullMark: 100 },
  { subject: 'Electrical Design', A: 85, fullMark: 100 },
  { subject: 'Web Development', A: 75, fullMark: 100 },
  { subject: 'Project Management', A: 80, fullMark: 100 },
];

const SkillsRadar = () => {
  return (
    <section className="py-12 px-6 bg-slate-900/20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-left">
          <h2 className="text-sm font-mono text-blue-500 uppercase tracking-[0.3em] mb-4">Expertise Balance</h2>
          <h3 className="text-3xl font-bold text-white mb-6">Technical Competence</h3>
          <p className="text-slate-400 leading-relaxed mb-6">
            My skill set bridges the gap between traditional electrical engineering and modern industrial automation. 
            By leveraging data-driven troubleshooting like RCA, I ensure peak performance for CIJ and Laser systems.
          </p>
          <ul className="space-y-2 text-sm text-slate-500">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> 95% Machine Uptime achieved</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Expert in IoT-Based Monitoring</li>
          </ul>
        </div>

        <div className="w-full md:w-[400px] h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid stroke="#1e293b" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
              <Radar
                name="Nafiul"
                dataKey="A"
                stroke="#3b82f6"
                fill="#3b82f6"
                fillOpacity={0.5}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default SkillsRadar;