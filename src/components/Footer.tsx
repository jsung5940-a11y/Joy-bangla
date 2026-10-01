import React from 'react';
import { Cpu, Monitor, HardDrive, Wrench, Shield, Phone, MapPin, Mail } from 'lucide-react';

interface FooterProps {
  onSelectCategory: (cat: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  return (
    <footer className="bg-[#050609] border-t border-slate-800 text-slate-400 text-xs">
      {/* Top Trust Pillars Strip */}
      <div className="border-b border-slate-800/80 bg-[#08090f] py-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-950/60 border border-red-500/30 flex items-center justify-center text-rose-400 shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="font-heading font-bold text-white text-xs">100% GENUINE HARDWARE</div>
              <div className="text-[11px] text-slate-400">Direct authorized warranty partner</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <div className="font-heading font-bold text-white text-xs">CHIP-LEVEL REPAIR LAB</div>
              <div className="text-[11px] text-slate-400">Class 100 clean-room & micro-soldering</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <HardDrive className="w-5 h-5" />
            </div>
            <div>
              <div className="font-heading font-bold text-white text-xs">NAND & HDD DATA RESCUE</div>
              <div className="text-[11px] text-slate-400">PC-3000 Flash & head swap recovery</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-950/60 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="font-heading font-bold text-white text-xs">90-DAY REPAIR GUARANTEE</div>
              <div className="text-[11px] text-slate-400">No fix, no diagnostic fee policy</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Navigation & Details */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-red-600 to-rose-900 flex items-center justify-center p-0.5 border border-red-500/40">
                <span className="font-heading font-black text-white text-sm">JB</span>
              </div>
              <div>
                <span className="font-heading font-extrabold text-base tracking-wider text-white">
                  JOY BANGLA
                </span>
                <span className="block text-[10px] tracking-widest text-rose-400 uppercase font-mono">
                  Electronics Store & Repair Lab
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
              Premier destination for high-end custom gaming rigs, ultrawide curved monitors, high-speed NVMe SSDs, performance HDDs, and authorized micro-soldering electronic diagnostics.
            </p>

            <div className="space-y-1.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                <span>Level 4, Computer City Center (Multiplan), Elephant Road, Dhaka</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Hotline: +880 1799-JOY-TECH (10:00 AM – 9:00 PM)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>support@joybangla-electronics.com</span>
              </div>
            </div>
          </div>

          {/* Hardware Sales */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-wider">
              Hardware Sales
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onSelectCategory('gaming-pc')}
                  className="hover:text-rose-400 transition-colors"
                >
                  Custom Gaming Rigs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('monitors')}
                  className="hover:text-rose-400 transition-colors"
                >
                  Curved & OLED Monitors
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('storage')}
                  className="hover:text-rose-400 transition-colors"
                >
                  PCIe Gen4/Gen5 M.2 SSDs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('storage')}
                  className="hover:text-rose-400 transition-colors"
                >
                  High-Capacity Enterprise HDDs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('builder')}
                  className="hover:text-rose-400 transition-colors"
                >
                  Interactive PC Builder
                </button>
              </li>
            </ul>
          </div>

          {/* Repair Services */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-wider">
              Repair Lab
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onSelectCategory('repairs')}
                  className="hover:text-rose-400 transition-colors"
                >
                  PC Motherboard & GPU Soldering
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('repairs')}
                  className="hover:text-rose-400 transition-colors"
                >
                  Monitor Panel Line & Backlight Fix
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('repairs')}
                  className="hover:text-rose-400 transition-colors"
                >
                  SSD Firmware & NAND Flash Recovery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('repairs')}
                  className="hover:text-rose-400 transition-colors"
                >
                  HDD Clean-Room Head Replacement
                </button>
              </li>
            </ul>
          </div>

          {/* Operating Hours & Lab Standard */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-wider">
              Lab Operating Hours
            </h4>
            <div className="space-y-1.5 text-xs text-slate-400">
              <div className="flex justify-between">
                <span>Saturday – Thursday:</span>
                <span className="text-white font-mono">10:00 AM – 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday (Lab only):</span>
                <span className="text-white font-mono">2:30 PM – 9:00 PM</span>
              </div>
              <div className="pt-2 text-[11px] text-slate-500">
                Nationwide express secure pickup and door-to-door insured return available across all 64 districts.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 Joy Bangla Electronics & Repairs. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Certified ISO-5 Clean Room Facility</span>
            <span>·</span>
            <span className="text-slate-400">ESD Safe Micro-Soldering</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
