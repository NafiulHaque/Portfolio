
import { MapPin, Download } from "lucide-react";

const Hero = () => {
    return (
        <section className="pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="inline-block px-3 py-1 border border-blue-500/30 rounded-full text-blue-500 text-xs font-bold uppercase tracking-widest mb-6">
                        Service Engineer | B.Sc. in EEE
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Md. Nafiul Haque
                    </h1>
                    <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-lg">
                        Detail-oriented engineer specializing in the maintenance and troubleshooting of industrial
                        <span className="text-blue-400"> CIJ, TIJ, LCP, and Laser printers</span>.
                        Committed to improving machinery reliability and plant efficiency.
                    </p>
                    <div className="flex items-center gap-4 text-sm font-medium uppercase tracking-widest">
                        <MapPin size={20} className="text-slate-500" />
                        <span className="text-sm text-slate-500 uppercase tracking-widest">Nasirabad, Chittagong</span>
                    </div>


                    <div className="flex flex-wrap gap-4 mt-10 justify-start">
                        {/* Primary Action */}
                        <a
                            href="https://github.com/NafiulHaque/Portfolio/raw/typescript/src/assets/NafiulHaque_BScInEEE_1.5YEXP.pdf"
                            download="NafiulHaque_BScInEEE_1.5YEXP.pdf"
                            className="group relative inline-flex items-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-sm font-bold transition-all hover:bg-blue-600 hover:text-white"
                        >
                            <Download size={20} className="text-slate-950 group-hover:text-white transition-colors" />
                            DOWNLOAD RESUME
                        </a>

                        {/* Secondary Action */}
                        <a
                            href="https://www.linkedin.com/in/nafiulhaque22"
                            target="_blank"
                            className="inline-flex items-center gap-3 border border-slate-800 px-8 py-4 rounded-sm font-bold text-slate-400 hover:border-blue-500 hover:text-white transition-all"
                        >
                            LINKEDIN PROFILE
                        </a>
                    </div>


                </div>
                <div className="relative">
                    <div className="aspect-square bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                        {/* Replace with actual image path */}
                        <div className="w-full h-full flex items-center justify-center text-slate-500 uppercase tracking-widest">


                            <img
                                src="https://github.com/NafiulHaque/Portfolio/blob/typescript/src/assets/NHWoringCoverPic.png?raw=true"
                                alt="Md. Nafiul Haque"
                                className="w-full h-full object-cover object-center"
                            />


                        </div>
                    </div>
                </div>
            </div>
        </section>

    )

};

export default Hero;



