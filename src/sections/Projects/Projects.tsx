import React from "react";
import { Zap } from "lucide-react";

const Projects = () => {
    return (
        <section id="projects" className="py-12 px-6 bg-slate-900/30">

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

                <div>
                    <h2 className="text-3xl font-bold text-white mb-8">Featured Project</h2>
                    <div className="group bg-slate-950 p-8 border border-slate-800 rounded-sm hover:border-blue-500/50 transition-all">
                        <div className="flex justify-between items-start mb-6">
                            <Zap className="text-blue-500" size={32} />
                            <span className="text-xs font-mono text-slate-500 uppercase">Final Year Project</span>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-4 italic">"IoT-Based Factory Monitoring and Protection System"</h4>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Utilized environmental sensors (smoke, fire, water level) to provide real-time remote monitoring via an online app,
                            featuring automatic protection triggers when thresholds were exceeded.
                        </p>
                        <div className="flex gap-2">
                            {['IoT', 'Sensors', 'Real-time Data', 'Automation'].map(tag => (
                                <span key={tag} className="text-[10px] bg-slate-900 px-2 py-1 border border-slate-800 rounded uppercase tracking-tighter text-slate-500">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-white mb-8">Technical Toolkit</h2>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                        <div>
                            <h5 className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-4">Hard Skills</h5>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li>Preventive Maintenance</li>
                                <li>Root Cause Analysis</li>
                                <li>PLC Programming</li>
                                <li>Electrical Testing</li>
                                <li>MS Office</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-4">Soft Skills</h5>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li>Critical Thinking</li>
                                <li>Communication</li>
                                <li>Team Collaboration</li>
                                <li>Multi-tasking</li>
                                <li>Project Management</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;