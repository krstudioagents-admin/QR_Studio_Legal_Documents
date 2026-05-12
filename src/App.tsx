import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  FileText, 
  Lock, 
  Mail,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  useLocation, 
  Link, 
  useNavigate 
} from 'react-router-dom';
import { PRIVACY_POLICY, TERMS_CONDITIONS } from './constants';

// --- Home Component ---

function Home() {
  return (
    <div className="text-center">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
        <Link
          to="/privacy"
          className="group relative p-1 rounded-2xl bg-gradient-to-br from-neon-blue/40 to-transparent hover:from-neon-blue transition-all duration-500 overflow-hidden text-left"
        >
          <div className="bg-cyber-black rounded-[15px] p-8 md:p-10 h-full group-hover:bg-cyber-black/80 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-neon-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Lock className="w-6 h-6 text-neon-blue" />
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-2 leading-tight">Privacy Policy & Data Security</h3>
            <p className="text-sm text-slate-500 leading-relaxed">How we handle your data and ensure safety protocols.</p>
            <div className="mt-8 flex items-center gap-2 text-neon-blue font-display text-sm font-bold tracking-widest uppercase">
              Open <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </Link>

        <Link
          to="/terms"
          className="group relative p-1 rounded-2xl bg-gradient-to-br from-neon-purple/40 to-transparent hover:from-neon-purple transition-all duration-500 overflow-hidden text-left"
        >
          <div className="bg-cyber-black rounded-[15px] p-8 md:p-10 h-full group-hover:bg-cyber-black/80 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-neon-purple/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <FileText className="w-6 h-6 text-neon-purple" />
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-2 leading-tight">Terms & Conditions</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Official usage rights and commercial guidelines.</p>
            <div className="mt-8 flex items-center gap-2 text-neon-purple font-display text-sm font-bold tracking-widest uppercase">
              Open <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </Link>

        <Link
          to="/delete-account"
          className="group relative p-1 rounded-2xl bg-gradient-to-br from-red-500/40 to-transparent hover:from-red-500 transition-all duration-500 overflow-hidden text-left"
        >
          <div className="bg-cyber-black rounded-[15px] p-8 md:p-10 h-full group-hover:bg-cyber-black/80 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Shield className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-2 leading-tight">Delete Account & Data</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Request deletion of your account and personal info.</p>
            <div className="mt-8 flex items-center gap-2 text-red-500 font-display text-sm font-bold tracking-widest uppercase">
              Manage <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </Link>
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
    </div>
  );
}

// --- Document View Component ---

function DocumentView({ type }: { type: 'privacy' | 'terms' }) {
  const navigate = useNavigate();
  const data = type === 'privacy' ? PRIVACY_POLICY : TERMS_CONDITIONS;
  const accentColor = type === 'privacy' ? 'neon-blue' : 'neon-purple';

  return (
    <div className="max-w-4xl mx-auto">
      <button 
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-xs font-display font-bold text-slate-500 hover:text-neon-blue transition-colors mb-12 uppercase tracking-widest"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Dashboard
      </button>

      <div className={`p-1 rounded-3xl mb-12 bg-gradient-to-br from-${accentColor}/20 to-transparent shadow-2xl`}>
        <div className="bg-cyber-gray/50 backdrop-blur-xl rounded-[23px] px-8 py-12 md:p-16 border border-white/5">
          <div className="flex items-center justify-between mb-8">
             <span className={`text-[10px] font-display font-bold tracking-[0.4em] uppercase text-${accentColor}`}>
              {type === 'privacy' ? 'Data Security Protocol' : 'Operational Terms'}
            </span>
            <span className="text-[10px] font-mono text-slate-600">Last Updated: {data.lastUpdated}</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight">
            {data.title}
          </h2>

          <div className="space-y-16">
            {data.sections.map((section, idx) => (
              <div key={idx} className="group">
                <h3 className={`font-display text-lg md:text-xl font-bold mb-6 tracking-wide flex items-center gap-4 text-${accentColor}`}>
                  <span className="opacity-40 font-mono text-sm leading-none">{idx + 1}.</span>
                  {section.title}
                  <div className={`flex-1 h-[1px] bg-${accentColor}/10 group-hover:bg-${accentColor}/30 transition-colors ml-4`} />
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
              onClick={() => navigate('/')}
              className={`px-10 py-4 rounded-full font-display font-medium text-sm transition-all duration-300 ${
                type === 'privacy' ? 'bg-neon-blue text-cyber-black glow-border-blue' : 'bg-neon-purple text-white glow-border-purple'
              }`}
            >
              Accept & Return
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Delete Account Component ---

function DeleteAccount() {
  const navigate = useNavigate();
  const deleteRequestUrl = "mailto:support@krstudioagents.com?subject=QR Studio Account Deletion Request&body=Hello KR Studio,%0D%0A%0D%0AI would like to request deletion of my QR Studio account and associated data.%0D%0A%0D%0ARegistered Email:%0D%0AUID (if available):%0D%0A%0D%0AThank you.";

  return (
    <div className="max-w-4xl mx-auto">
      <button 
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-xs font-display font-bold text-slate-500 hover:text-red-500 transition-colors mb-12 uppercase tracking-widest"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Dashboard
      </button>

      <div className="p-1 rounded-3xl mb-12 bg-gradient-to-br from-red-500/20 to-transparent shadow-2xl">
        <div className="bg-cyber-gray/50 backdrop-blur-xl rounded-[23px] px-8 py-12 md:p-16 border border-white/5">
          <div className="flex items-center justify-between mb-8">
             <span className="text-[10px] font-display font-bold tracking-[0.4em] uppercase text-red-500">
              User Autonomy & Data Rights
            </span>
            <span className="text-[10px] font-mono text-slate-600">Last Updated: May 2026</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Delete Account & Data
          </h2>

          <div className="prose prose-invert prose-slate max-w-none">
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-light mb-12">
              QR Studio users may request deletion of their account and associated data at any time. We respect your right to privacy and digital ownership.
            </p>

            <div className="space-y-12">
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-4">What will be deleted?</h3>
                <p className="text-slate-400 leading-relaxed font-light">
                  Upon processing your request, we will remove information including:
                </p>
                <ul className="mt-4 space-y-3 text-slate-400 font-light list-disc list-inside">
                  <li>Account profile information</li>
                  <li>Firebase authentication data records</li>
                  <li>Stored application preferences and themes</li>
                  <li>QR scan history and analysis data</li>
                  <li>Associated analytics records where applicable</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-sm text-slate-400 leading-relaxed font-light italic">
                  <span className="text-white font-medium block mb-2 not-italic">Important Note:</span>
                  Please be aware that some minimal records may be temporarily retained for fraud prevention, security audit requirements, or legal compliance purposes in accordance with our data retention policies.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-12 border-t border-white/5 text-center flex flex-col items-center">
            <p className="text-sm text-slate-500 mb-8 max-w-md mx-auto leading-relaxed">
              To initiate the deletion process, please click the button below to send a formal request from your registered email address.
            </p>
            <a 
              href={deleteRequestUrl}
              className="group relative px-12 py-5 rounded-full font-display font-bold text-base tracking-widest uppercase transition-all duration-300 bg-red-600 text-white hover:bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_35px_rgba(239,68,68,0.5)] flex items-center gap-3 overflow-hidden"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Request Account Deletion
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Main App Content ---

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
          <Link 
            to="/"
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/10 group-hover:scale-110 transition-transform">
              <img src="https://cdn.jsdelivr.net/gh/krstudioagents-admin/QR_Studio-ASSETS@main/icon.jpg" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-display font-bold text-lg tracking-tighter uppercase text-white">
              QR <span className="text-neon-blue text-glow-blue">Studio</span>
            </span>
          </Link>
          
          <div className="flex items-center gap-6">
             {/* Support link removed per user request */}
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-40 px-6 max-w-5xl mx-auto">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/privacy" element={<DocumentView type="privacy" />} />
              <Route path="/terms" element={<DocumentView type="terms" />} />
              <Route path="/delete-account" element={<DeleteAccount />} />
            </Routes>
          </motion.div>
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

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
