import React from 'react';
import { ShoppingCart, Search, Wrench, Cpu, Monitor, HardDrive } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  currency: 'USD' | 'BDT';
  setCurrency: (currency: 'USD' | 'BDT') => void;
  cartCount: number;
  openCart: () => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  currency,
  setCurrency,
  cartCount,
  openCart,
  searchTerm,
  setSearchTerm
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#08090d]/95 backdrop-blur-md border-b border-red-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
      {/* Top Banner Ticker */}
      <div className="bg-gradient-to-r from-red-950 via-zinc-900 to-cyan-950/80 border-b border-red-500/20 px-4 py-1.5 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="flex items-center gap-1.5 font-semibold text-rose-400">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              HOT SPECIALS:
            </span>
            <span className="hidden sm:inline">SSDs & HDDs ON SALE UP TO 30% OFF</span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-cyan-400">FREE 30-POINT DIAGNOSTIC ON ALL REPAIRS</span>
            <span className="hidden lg:inline text-slate-500">|</span>
            <span className="hidden lg:inline text-slate-400">SAME-DAY EXPRESS TURNAROUND AVAILABLE</span>
          </div>

          <div className="flex items-center gap-4 text-xs shrink-0">
            {/* Currency Switcher */}
            <div className="flex items-center bg-black/60 rounded border border-slate-700 p-0.5">
              <button
                onClick={() => setCurrency('USD')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all ${
                  currency === 'USD'
                    ? 'bg-red-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                $ USD
              </button>
              <button
                onClick={() => setCurrency('BDT')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all ${
                  currency === 'BDT'
                    ? 'bg-red-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                ৳ BDT
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Brand Zone */}
        <button
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-2.5 text-left group shrink-0 focus:outline-none"
        >
          {/* Cyber Emblem */}
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-rose-900 flex items-center justify-center p-0.5 shadow-[0_0_15px_rgba(239,68,68,0.5)] border border-red-400/30 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0d0f17] rounded-[6px] flex items-center justify-center">
              <span className="font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-cyan-400 text-lg">
                JB
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-extrabold text-xl tracking-wider text-white group-hover:text-red-400 transition-colors">
                JOY BANGLA
              </span>
            </div>
            <div className="text-[10px] tracking-widest text-slate-400 uppercase font-mono">
              ELECTRO & REPAIRS
            </div>
          </div>
        </button>

        {/* Navigation Links Zone */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          <button
            onClick={() => setActiveTab('home')}
            className={`transition-colors py-1 ${
              activeTab === 'home'
                ? 'text-red-500 font-semibold border-b-2 border-red-500'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            HOME
          </button>
          <button
            onClick={() => setActiveTab('gaming-pc')}
            className={`flex items-center gap-1.5 transition-colors py-1 ${
              activeTab === 'gaming-pc'
                ? 'text-red-500 font-semibold border-b-2 border-red-500'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Cpu className="w-3.5 h-3.5 text-red-500" />
            GAMING PC
          </button>
          <button
            onClick={() => setActiveTab('monitors')}
            className={`flex items-center gap-1.5 transition-colors py-1 ${
              activeTab === 'monitors'
                ? 'text-red-500 font-semibold border-b-2 border-red-500'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Monitor className="w-3.5 h-3.5 text-cyan-400" />
            MONITORS
          </button>
          <button
            onClick={() => setActiveTab('storage')}
            className={`flex items-center gap-1.5 transition-colors py-1 ${
              activeTab === 'storage'
                ? 'text-red-500 font-semibold border-b-2 border-red-500'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <HardDrive className="w-3.5 h-3.5 text-emerald-400" />
            SSD & HDD
          </button>
          <button
            onClick={() => setActiveTab('repairs')}
            className={`flex items-center gap-1.5 transition-colors py-1 ${
              activeTab === 'repairs'
                ? 'text-red-500 font-semibold border-b-2 border-red-500'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Wrench className="w-3.5 h-3.5 text-amber-400" />
            REPAIR LAB
          </button>
          <button
            onClick={() => setActiveTab('builder')}
            className={`transition-colors py-1 ${
              activeTab === 'builder'
                ? 'text-red-500 font-semibold border-b-2 border-red-500'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            PC BUILDER
          </button>
        </nav>

        {/* Right Search & Action Zone */}
        <div className="flex items-center gap-3">
          {/* Search bar */}
          <div className="relative hidden sm:block w-48 md:w-60">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search PC, Monitor, SSD..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#121520] border border-slate-700/80 rounded-full pl-9 pr-4 py-1.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
            />
          </div>

          {/* Book Repair CTA */}
          <button
            onClick={() => setActiveTab('repairs')}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-red-500/50 bg-red-950/40 text-rose-300 text-xs font-medium hover:bg-red-900/60 hover:border-red-400 transition-all shadow-[0_0_15px_rgba(239,68,68,0.2)]"
          >
            <Wrench className="w-3.5 h-3.5 text-red-400" />
            <span>Book Repair</span>
          </button>

          {/* Shopping Cart button */}
          <button
            onClick={openCart}
            aria-label="Shopping Cart"
            className="relative p-2.5 rounded-lg bg-[#141724] border border-slate-700 text-slate-200 hover:border-red-500 hover:text-white transition-all shadow-sm group"
          >
            <ShoppingCart className="w-5 h-5 text-slate-300 group-hover:text-red-400 transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-red-600 to-rose-600 text-white font-mono text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#08090d] shadow-[0_0_8px_rgba(239,68,68,0.8)]">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Strip */}
      <div className="lg:hidden flex items-center justify-around border-t border-slate-800 bg-[#0c0e17] px-2 py-2 text-xs">
        <button
          onClick={() => setActiveTab('home')}
          className={`px-2 py-1 rounded ${activeTab === 'home' ? 'text-red-400 font-bold bg-red-950/50' : 'text-slate-400'}`}
        >
          Home
        </button>
        <button
          onClick={() => setActiveTab('gaming-pc')}
          className={`px-2 py-1 rounded ${activeTab === 'gaming-pc' ? 'text-red-400 font-bold bg-red-950/50' : 'text-slate-400'}`}
        >
          Gaming PC
        </button>
        <button
          onClick={() => setActiveTab('monitors')}
          className={`px-2 py-1 rounded ${activeTab === 'monitors' ? 'text-cyan-400 font-bold bg-cyan-950/50' : 'text-slate-400'}`}
        >
          Monitors
        </button>
        <button
          onClick={() => setActiveTab('storage')}
          className={`px-2 py-1 rounded ${activeTab === 'storage' ? 'text-emerald-400 font-bold bg-emerald-950/50' : 'text-slate-400'}`}
        >
          SSD/HDD
        </button>
        <button
          onClick={() => setActiveTab('repairs')}
          className={`px-2 py-1 rounded ${activeTab === 'repairs' ? 'text-amber-400 font-bold bg-amber-950/50' : 'text-slate-400'}`}
        >
          Repairs
        </button>
        <button
          onClick={() => setActiveTab('builder')}
          className={`px-2 py-1 rounded ${activeTab === 'builder' ? 'text-purple-400 font-bold bg-purple-950/50' : 'text-slate-400'}`}
        >
          Builder
        </button>
      </div>
    </header>
  );
};
