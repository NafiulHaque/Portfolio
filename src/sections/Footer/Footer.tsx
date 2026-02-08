import React from "react";
import { Mail, Linkedin, Zap } from "lucide-react";

const Hero = () => {
    return (
        <footer id="contact" className="py-12 px-6 bg-slate-950 border-t border-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-slate-500 mb-10">Currently open to new opportunities and technical collaborations.</p>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <a href="mailto:nafiulhaque22@gmail.com" className="flex items-center gap-2 text-slate-300 hover:text-blue-500 transition-colors">
              <Mail size={20} /> nafiulhaque22@gmail.com
            </a>
            <a href="tel:+8801739184393" className="flex items-center gap-2 text-slate-300 hover:text-blue-500 transition-colors">
              <Zap size={20} /> +8801739-184393
            </a>
            <a href="https://linkedin.com/in/nafiulhaque22" className="flex items-center gap-2 text-slate-300 hover:text-blue-500 transition-colors">
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>
          <p className="text-[10px] text-slate-700 uppercase tracking-[0.2em]">
            © 2026 Md. Nafiul Haque • B.Sc in EEE
          </p>
        </div>
      </footer>
    );

};

export default Hero;