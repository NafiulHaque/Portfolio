import { Camera, ExternalLink, Shield, Settings, Zap } from 'lucide-react';

const WorkShowcase = () => {
    const projects = [
        {
            title: "CIJ System Optimization",
            description: "Implemented RCA to identify ink viscosity issues, leading to a 40% reduction in repeat nozzle clogs.",
            image: "https://raw.githubusercontent.com/NafiulHaque/Portfolio/39cfb0a9c95fd05d9ec0761ba6548d412970be57/src/assets/work/OfficeMaintanance.jpg", // Placeholder for Industrial Electronics
            tag: "Maintenance",
            icon: <Settings size={16} />
        },
        {
            title: "Laser Marking Installation",
            description: "Precision alignment and calibration of high-speed laser systems for pharmaceutical packaging lines.",
            image: "https://raw.githubusercontent.com/NafiulHaque/Portfolio/39cfb0a9c95fd05d9ec0761ba6548d412970be57/src/assets/work/Laser.jpg", // Placeholder for Laser/Tech
            tag: "Installation",
            icon: <Zap size={16} />
        },
        {
            title: "Safety & Compliance Audit",
            description: "Conducting CAPA audits to ensure electromechanical systems meet 100% industrial safety standards.",
            image: "https://raw.githubusercontent.com/NafiulHaque/Portfolio/39cfb0a9c95fd05d9ec0761ba6548d412970be57/src/assets/work/RubyCement.jpg", // Placeholder for Engineering Lab
            tag: "Safety",
            icon: <Shield size={16} />
        }
       
    ];

    return (
        <section className="py-12  px-6 bg-slate-950 border-t border-slate-900">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-2 mb-4">
                            <Camera className="text-blue-500" size={20} />
                            <span className="text-xs font-mono text-blue-500 uppercase tracking-[0.3em]">Operational Gallery</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white tracking-tight">Justifying the Expertise</h2>
                        <p className="mt-4 text-slate-400 leading-relaxed">
                            Visual evidence of 1.5+ years managing industrial uptime. Each image represents a successful intervention in
                            <span className="text-white"> CIJ, TIJ, and Laser systems </span> troubleshooting.
                        </p>
                    </div>
                    <button className="text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-slate-800 pb-1 hover:text-blue-500 hover:border-blue-500 transition-all">
                        View All Documentation
                    </button>
                </div>

                {/* Gallery Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((item, idx) => (
                        <div key={idx} className="group relative">
                            {/* Image Container */}
                            <div className="relative aspect-[4/5] overflow-hidden bg-slate-900 rounded-sm">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0"
                                />

                                {/* Floating Tag */}
                                <div className="absolute top-4 left-4 z-20">
                                    <div className="flex items-center gap-2 px-3 py-1 bg-slate-950/80 backdrop-blur-sm border border-slate-800 text-[10px] font-bold uppercase text-blue-400 tracking-tighter">
                                        {item.icon} {item.tag}
                                    </div>
                                </div>

                                {/* Hover Details Overlay */}
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-8 translate-y-2 group-hover:translate-y-0 transition-transform">
                                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                        {item.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-blue-500 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                                        View Report <ExternalLink size={14} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkShowcase;