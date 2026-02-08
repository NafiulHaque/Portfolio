
import { Award, Users, ShieldCheck, Heart } from 'lucide-react';

const LeadershipValues = () => {
  return (
    <section className="py-12 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-mono text-blue-500 uppercase tracking-[0.3em] mb-12">Beyond Engineering</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Main Award Card */}
          <div className="bg-slate-900/40 border border-blue-500/20 p-8 rounded-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Award size={80} className="text-blue-500" />
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-600/10 rounded-full">
                <Award className="text-blue-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Recognized Excellence</h3>
            </div>
            
            <h4 className="text-blue-400 font-mono text-sm uppercase mb-2">Best Team Member Award 2022</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Awarded by the <span className="text-slate-200 font-medium">"School of Engineers"</span> for exceptional 
              collaboration and contribution to technical projects. This recognition reflects my 
              commitment to collective success over individual achievement.
            </p>
          </div>

          {/* Core Values List */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex gap-4">
              <ShieldCheck className="text-slate-500 shrink-0" size={20} />
              <div>
                <h5 className="text-white text-sm font-bold uppercase tracking-wider">Integrity & Discipline</h5>
                <p className="text-slate-500 text-xs mt-1">Foundations built through a decade of Scouting (2008–2017) and the prestigious Shapla Cub Award.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Users className="text-slate-500 shrink-0" size={20} />
              <div>
                <h5 className="text-white text-sm font-bold uppercase tracking-wider">Collaborative Mindset</h5>
                <p className="text-slate-500 text-xs mt-1">Proven ability to lead and organize departmental programs and serve as a Campus Ambassador.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Heart className="text-slate-500 shrink-0" size={20} />
              <div>
                <h5 className="text-white text-sm font-bold uppercase tracking-wider">Safety & Compliance</h5>
                <p className="text-slate-500 text-xs mt-1">Strict adherence to safety standards and technical documentation protocols in every project.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipValues;