import React from 'react';
import { HERO_IMAGE } from '../data/products';
import { ArrowRight, Wrench, ShieldCheck, Zap } from 'lucide-react';

interface HeroProps {
  onShopNow: () => void;
  onBuildPC: () => void;
  onBookRepair: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopNow, onBuildPC, onBookRepair }) => {
  return (
    <section className="relative overflow-hidden bg-[#08090d] border-b border-red-500/10 py-12 md:py-16 lg:py-20">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-red-600/15 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-600/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Value Proposition, Action CTAs */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            {/* Live Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-rose-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>JOY BANGLA TECH REVOLUTION</span>
            </div>

            {/* Main Punchy Title */}
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-none">
              UNLEASH <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-red-600">
                THE BEAST
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              EXPERIENCE GAMING REDEFINED | SALES, CUSTOM RIGS & CERTIFIED CHIP-LEVEL REPAIRS FOR PC, MONITORS, SSDs & HDDs.
            </p>

            <div className="text-sm font-semibold tracking-wider text-rose-400 font-mono">
              UP TO <span className="text-white font-black text-lg underline decoration-red-500 decoration-2">30% OFF</span> SELECT RIGS & STORAGE
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onShopNow}
                className="px-7 py-3 rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white font-heading font-bold text-sm tracking-wider uppercase hover:from-red-500 hover:to-rose-600 transition-all transform hover:-translate-y-0.5 shadow-[0_0_25px_rgba(239,68,68,0.5)] border border-red-400/40 flex items-center gap-2 group"
              >
                <span>SHOP NOW</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onBuildPC}
                className="px-6 py-3 rounded-full bg-[#121520] hover:bg-[#1b2030] text-slate-200 hover:text-white font-heading font-semibold text-sm tracking-wider uppercase border border-slate-700 hover:border-slate-500 transition-all flex items-center gap-2"
              >
                <span>BUILD YOUR PC</span>
                <span className="text-rose-500">›</span>
              </button>

              <button
                onClick={onBookRepair}
                className="px-5 py-3 rounded-full bg-red-950/30 hover:bg-red-900/40 text-amber-300 font-medium text-xs tracking-wider border border-amber-500/30 hover:border-amber-400 transition-all flex items-center gap-1.5"
              >
                <Wrench className="w-3.5 h-3.5 text-amber-400" />
                <span>BOOK REPAIR</span>
              </button>
            </div>

            {/* Quick Proof Badges */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-slate-800/80 text-left">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>3-Yr Warranty</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>24h Express Fix</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Wrench className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Lab Certified</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Showcase Image (Curved Monitor + RGB Gaming Tower) */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-2xl overflow-hidden border border-red-500/30 bg-[#0d0f19] shadow-[0_0_50px_rgba(239,68,68,0.2)] group">
              {/* Subtle top neon line */}
              <div className="h-1 bg-gradient-to-r from-red-600 via-rose-500 to-cyan-500" />
              
              <img
                src={HERO_IMAGE}
                alt="Joy Bangla Ultrawide Curved Gaming Monitor and Custom RGB Liquid-Cooled PC Rig"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover max-h-[460px] group-hover:scale-[1.02] transition-transform duration-700"
              />

              {/* Bottom Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-transparent opacity-60 pointer-events-none" />

              {/* Live Interactive Spec Callouts */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-200 bg-[#0c0e18]/80 backdrop-blur-md p-3 rounded-xl border border-slate-700/60">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                  <span className="font-heading text-white">34" 165Hz Curved Monitor</span>
                </div>
                <div className="hidden sm:flex items-center gap-4 text-slate-400 text-[11px] font-mono">
                  <span>RTX 4070 SUPER</span>
                  <span>·</span>
                  <span>GEN4 NVMe 7450 MB/s</span>
                  <span>·</span>
                  <span className="text-emerald-400">CHIP REPAIRS INCLUDED</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
