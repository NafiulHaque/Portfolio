

const Experience = () => {
  return (
     <section id="experience" className="py-12 px-6 bg-slate-900/20 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
            Professional Experience <span className="h-px flex-1 bg-slate-800"></span>
          </h2>
          <div className="border-l-2 border-slate-800 pl-8 relative">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
            <div className="mb-2 text-blue-500 font-mono text-sm uppercase">2024 — Present</div>
            <h3 className="text-2xl font-bold text-white">Service Engineer</h3>
            <p className="text-slate-400 mb-6 font-medium">ICOM Solutions Ltd — Chittagong</p>
            <ul className="space-y-4 text-slate-400 max-w-2xl">
              <li className="flex gap-3 items-start italic border-l-2 border-slate-800 pl-4 py-1">
                "Skilled in preventive and breakdown maintenance, RCA, and CAPA implementation."
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500">•</span>
                <span>Diagnosed and repaired electrical/mechanical faults with 98% success rate.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500">•</span>
                <span>Installed and calibrated 20+ machines for smooth production integration.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500">•</span>
                <span>Trained 15+ operators on machine use and troubleshooting.</span>
              </li>
            </ul>
          </div>
          <section id="about" className="py-24 px-6 border-b border-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-mono text-blue-500 uppercase tracking-[0.3em] mb-8">
            Professional Profile
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <p className="text-xl text-slate-300 leading-relaxed mb-6">
                I bridge the gap between <span className="text-white font-medium">complex electromechanical systems</span> and operational efficiency. With a background in EEE, I approach every breakdown as a puzzle to be solved permanently through Root Cause Analysis.
              </p>
              <p className="text-slate-400 leading-relaxed">
                My experience at <span className="text-blue-400">ICOM Solutions Ltd</span> has taught me that 95% uptime isn't just a goal—it's a requirement for modern manufacturing. I take pride in training teams and implementing CAPA frameworks that don't just fix problems, but prevent them.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-slate-900/50 border-l-2 border-blue-600">
                <h4 className="text-white text-xs font-bold uppercase">Core Philosophy</h4>
                <p className="text-slate-500 text-sm mt-1 italic">"Precision in maintenance, reliability in production."</p>
              </div>
              <div className="p-4 bg-slate-900/50 border-l-2 border-slate-700">
                <h4 className="text-white text-xs font-bold uppercase">Location</h4>
                <p className="text-slate-500 text-sm mt-1">Nasirabad, Chittagong</p>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
      </section>
    );
}

export default Experience;
