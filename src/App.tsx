import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  FileText, 
  Lock, 
  Mail,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';
import { PRIVACY_POLICY, TERMS_CONDITIONS } from './constants';

// --- Components ---

type Page = 'home' | 'privacy' | 'terms';

export default function App() {
  const [page, setPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="min-h-screen bg-cyber-black text-slate-300 font-sans md:px-0">
      {/* Dynamic Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <nav className="fixed top-0 w-full z-50 bg-glass border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button 
            onClick={() => setPage('home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/10 group-hover:scale-110 transition-transform">
              <img src="https://cdn.jsdelivr.net/gh/krstudioagents-admin/QR_Studio-ASSETS@main/icon.jpg" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-display font-bold text-lg tracking-tighter uppercase text-white">
              QR <span className="text-neon-blue text-glow-blue">Studio</span>
            </span>
          </button>
          
          <div className="flex items-center gap-6">
             {/* Support link removed per user request */}
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-40 px-6 max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          {page === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center"
            >
              <div className="mb-12 inline-block">
                 <motion.div 
                    initial={{ rotate: -10, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-8 bg-black/40 rounded-3xl glow-border-blue flex items-center justify-center overflow-hidden"
                  >
                    <img src="https://cdn.jsdelivr.net/gh/krstudioagents-admin/QR_Studio-ASSETS@main/icon.jpg" alt="QR Studio" className="w-full h-full object-cover" />
                  </motion.div>
                <h1 className="font-display text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4">
                  QR <span className="text-neon-blue text-glow-blue underline decoration-neon-blue/10">STUDIO</span>
                </h1>
                <p className="text-neon-purple font-display font-bold text-xs md:text-sm tracking-[0.4em] uppercase text-glow-purple">
                  Official Legal & Privacy Center
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-20">
                <button
                  onClick={() => setPage('privacy')}
                  className="group relative p-1 rounded-2xl bg-gradient-to-br from-neon-blue/40 to-transparent hover:from-neon-blue transition-all duration-500 overflow-hidden"
                >
                  <div className="bg-cyber-black rounded-[15px] p-8 md:p-10 text-left h-full group-hover:bg-cyber-black/80 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-neon-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Lock className="w-6 h-6 text-neon-blue" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2">Privacy Policy & Data Security</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">How we handle your data and ensure safety protocols.</p>
                    <div className="mt-8 flex items-center gap-2 text-neon-blue font-display text-sm font-bold tracking-widest uppercase">
                      Open Document <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setPage('terms')}
                  className="group relative p-1 rounded-2xl bg-gradient-to-br from-neon-purple/40 to-transparent hover:from-neon-purple transition-all duration-500 overflow-hidden"
                >
                  <div className="bg-cyber-black rounded-[15px] p-8 md:p-10 text-left h-full group-hover:bg-cyber-black/80 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-neon-purple/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <FileText className="w-6 h-6 text-neon-purple" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2">Terms & Conditions</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">Official usage rights and commercial guidelines.</p>
                    <div className="mt-8 flex items-center gap-2 text-neon-purple font-display text-sm font-bold tracking-widest uppercase">
                      Open Document <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </button>
              </div>

              <div className="flex flex-col items-center gap-6 mt-10">
                <div className="flex flex-col items-center gap-2">
                  <p className="text-sm text-slate-500 font-light">
                    For support or policy-related concerns: 
                    <a href="mailto:Support@krstudioagents.com" className="text-white hover:text-neon-blue transition-colors ml-1 font-medium border-b border-white/5">Support@krstudioagents.com</a>
                  </p>
                  <p className="text-sm text-slate-500 font-light">
                    For permissions, commercial licensing inquiries: 
                    <a href="mailto:contact@krstudioagents.com" className="text-white hover:text-neon-purple transition-colors ml-1 font-medium border-b border-white/5">contact@krstudioagents.com</a>
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {(page === 'privacy' || page === 'terms') && (
            <motion.div
              key="document"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto"
            >
              <button 
                onClick={() => setPage('home')}
                className="flex items-center gap-2 text-xs font-display font-bold text-slate-500 hover:text-neon-blue transition-colors mb-12 uppercase tracking-widest"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Dashboard
              </button>

              <div className={`p-1 rounded-3xl mb-12 bg-gradient-to-br ${page === 'privacy' ? 'from-neon-blue/20' : 'from-neon-purple/20'} to-transparent shadow-2xl`}>
                <div className="bg-cyber-gray/50 backdrop-blur-xl rounded-[23px] px-8 py-12 md:p-16 border border-white/5">
                  <div className="flex items-center justify-between mb-8">
                     <span className={`text-[10px] font-display font-bold tracking-[0.4em] uppercase ${page === 'privacy' ? 'text-neon-blue' : 'text-neon-purple'}`}>
                      {page === 'privacy' ? 'Data Security Protocol' : 'Operational Terms'}
                    </span>
                    <span className="text-[10px] font-mono text-slate-600">Last Updated: {page === 'privacy' ? PRIVACY_POLICY.lastUpdated : TERMS_CONDITIONS.lastUpdated}</span>
                  </div>
                  
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight">
                    {page === 'privacy' ? PRIVACY_POLICY.title : TERMS_CONDITIONS.title}
                  </h2>

                  <div className="space-y-16">
                    {(page === 'privacy' ? PRIVACY_POLICY.sections : TERMS_CONDITIONS.sections).map((section, idx) => (
                      <div key={idx} className="group">
                        <h3 className={`font-display text-lg md:text-xl font-bold mb-6 tracking-wide flex items-center gap-4 ${page === 'privacy' ? 'text-neon-blue' : 'text-neon-purple'}`}>
                          <span className="opacity-40 font-mono text-sm leading-none">{idx + 1}.</span>
                          {section.title}
                          <div className={`flex-1 h-[1px] ${page === 'privacy' ? 'bg-neon-blue/10 group-hover:bg-neon-blue/30' : 'bg-neon-purple/10 group-hover:bg-neon-purple/30'} transition-colors ml-4`} />
                        </h3>
                        <div className="prose prose-invert prose-slate max-w-none">
                          <p className="text-slate-400 text-base md:text-lg leading-relaxed whitespace-pre-line font-light">
                            {section.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-24 pt-12 border-t border-white/5 text-center">
                    <p className="text-sm text-slate-500 mb-8 italic">Thank you for your trust in our secure QR infrastructure.</p>
                    <button 
                      onClick={() => setPage('home')}
                      className={`px-10 py-4 rounded-full font-display font-medium text-sm transition-all duration-300 ${
                        page === 'privacy' ? 'bg-neon-blue text-cyber-black glow-border-blue' : 'bg-neon-purple text-white glow-border-purple'
                      }`}
                    >
                      Accept & Return
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="relative border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="https://cdn.jsdelivr.net/gh/krstudioagents-admin/QR_Studio-ASSETS@main/icon.jpg" alt="Logo" className="w-8 h-8 rounded-lg grayscale brightness-75 opacity-50" />
            <span className="font-display font-bold text-sm tracking-tighter uppercase text-white/40">
              QR Studio
            </span>
          </div>
          <p className="text-[10px] font-display font-bold text-slate-600 tracking-[0.5em] uppercase">
            QR Studio by KR Studio
          </p>
        </div>
      </footer>
    </div>
  );
}
