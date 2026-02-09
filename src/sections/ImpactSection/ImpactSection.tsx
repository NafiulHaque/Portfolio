import AnimatedNumber from "../../Hooks/ImpactHook";


 const ImpactSection = () => {
  const stats = [
    { label: "Machine Uptime", value: "95", suffix: "%", desc: "Maintained for CIJ/Laser" },
    { label: "Downtime Reduction", value: "30", suffix: "%", desc: "Via Preventive Maintenance" },
    { label: "Repeat Issue Drop", value: "40", suffix: "%", desc: "Achieved through RCA/CAPA" },
    { label: "Breakdowns Resolved", value: "20", suffix: "+", desc: "Avg. Monthly Resolutions" },
  ];

  return (
    <section className="py-24 bg-slate-900/20 border-y border-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-2">
                <AnimatedNumber value={stat.value} />
                <span className="text-blue-500">{stat.suffix}</span>
              </div>
              <div className="h-px w-8 bg-slate-800 group-hover:w-16 group-hover:bg-blue-500 transition-all duration-500 mb-4"></div>
              <h4 className="text-xs font-mono text-slate-300 uppercase tracking-widest mb-1">
                {stat.label}
              </h4>
              <p className="text-[10px] text-slate-500 uppercase tracking-tighter">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
  

export default ImpactSection;