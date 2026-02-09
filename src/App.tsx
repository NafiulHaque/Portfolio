import { Award } from 'lucide-react';
import './App.css'
import TrainingSection from './sections/TrainingSection/TrainingSection';
import SkillsRadar from './sections/SkillsRadar/SkillsRadar';
import LeadershipValues from './sections/LeadershipValues/LeadershipValues';
import Projects from './sections/Projects/Projects';
import Experience from './sections/Experience/Experience';
import Hero from './sections/Hero/Hero';
import Footer from './sections/Footer/Footer';
import WorkShowcase from './sections/WorkShowcase/WorkShowcase';
import ImpactSection from './sections/ImpactSection/ImpactSection';

function App() {

  return (
    <div className="bg-slate-950 text-slate-200 min-h-screen font-sans selection:bg-blue-500/30">
      {/* --- NAVIGATION --- */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900 shadow-lg">
        <div className="max-w-6xl mx-auto h-16 sm:px-4 lg:px-8 flex items-center justify-between ">
          <span className="text-xl font-bold tracking-tighter text-white">NH.</span>
          <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
            <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
            <a href="#experience" className="hover:text-blue-500 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors text-blue-500">Hire Me</a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <Hero />




      {/* --- IMPACT METRICS --- */}

      <ImpactSection />


      {/* --- WORK EXPERIENCE --- */}
      <Experience />

      {/* --- WORK SHOWCASE --- */}
      <WorkShowcase />

      {/* --- IOT PROJECT & SKILLS --- */}
      <Projects />

      {/* ---TrainingSection--- */}

      <TrainingSection />

      {/* --- SkillsRadar --- */}


      <SkillsRadar />


      {/* --- LeadershipValues --- */}

      <LeadershipValues />


      {/* --- RECOGNITION --- */}
      <section className="py-12 px-6 border-t border-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Recognition</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-900/20 border border-slate-800 rounded-lg text-center">
              <Award className="mx-auto mb-4 text-yellow-500" />
              <h4 className="text-white font-bold text-sm">Best Team Member Award 2022</h4>
              <p className="text-xs text-slate-500 mt-2 italic">School of Engineers</p>
            </div>
            <div className="p-6 bg-slate-900/20 border border-slate-800 rounded-lg text-center">
              <Award className="mx-auto mb-4 text-blue-400" />
              <h4 className="text-white font-bold text-sm">10th Place PUB Science Fair-2019</h4>
              <p className="text-xs text-slate-500 mt-2 italic">Pundra University Science Club</p>
            </div>
            <div className="p-6 bg-slate-900/20 border border-slate-800 rounded-lg text-center">
              <Award className="mx-auto mb-4 text-green-500" />
              <h4 className="text-white font-bold text-sm">Shapla Cub Award 2009</h4>
              <p className="text-xs text-slate-500 mt-2 italic">Bangladesh Scouts</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER / CONTACT --- */}
      <Footer />
    </div>

  )
}

export default App
