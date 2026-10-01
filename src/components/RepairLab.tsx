import React, { useState } from 'react';
import { REPAIR_SERVICES } from '../data/products';
import { RepairService } from '../types';
import { Wrench, Cpu, Monitor, HardDrive, Disc, CheckCircle, Clock, ShieldCheck, ArrowRight, Activity, Sparkles } from 'lucide-react';

interface RepairLabProps {
  currency: 'USD' | 'BDT';
  onBookRepair: (service: RepairService, issueTitle?: string, costUSD?: number, costBDT?: number) => void;
}

export const RepairLab: React.FC<RepairLabProps> = ({
  currency,
  onBookRepair
}) => {
  const [selectedDevice, setSelectedDevice] = useState<'pc' | 'monitor' | 'ssd' | 'hdd'>('pc');
  const [selectedIssueIndex, setSelectedIssueIndex] = useState<number>(0);
  const [isExpress, setIsExpress] = useState<boolean>(false);

  const currentService = REPAIR_SERVICES.find((s) => s.deviceType === selectedDevice)!;
  const currentIssue = currentService.commonIssues[selectedIssueIndex] || currentService.commonIssues[0];

  const expressSurchargeUSD = 25;
  const expressSurchargeBDT = 2750;

  const totalEstimatedUSD = currentService.basePriceUSD + currentIssue.extraCostUSD + (isExpress ? expressSurchargeUSD : 0);
  const totalEstimatedBDT = currentService.basePriceBDT + currentIssue.extraCostBDT + (isExpress ? expressSurchargeBDT : 0);

  const formatPrice = (usd: number, bdt: number) => {
    return currency === 'BDT' ? `৳ ${bdt.toLocaleString()}` : `$${usd.toLocaleString()}`;
  };

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case 'pc': return <Cpu className="w-5 h-5 text-red-400" />;
      case 'monitor': return <Monitor className="w-5 h-5 text-cyan-400" />;
      case 'ssd': return <HardDrive className="w-5 h-5 text-emerald-400" />;
      case 'hdd': return <Disc className="w-5 h-5 text-amber-400" />;
      default: return <Wrench className="w-5 h-5 text-rose-400" />;
    }
  };

  return (
    <section id="repair-lab" className="py-16 bg-[#08090d] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12">
        
        {/* Section Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/80 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/40 border border-amber-500/30 text-amber-300 text-xs font-mono mb-3">
              <Wrench className="w-3.5 h-3.5" />
              <span>JOY BANGLA CERTIFIED LAB</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-wider uppercase">
              ELECTRONICS REPAIR & DATA LAB
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-2xl leading-relaxed">
              Chip-level micro-soldering, curved monitor panel fixes, M.2 SSD NAND recovery, and Class-100 clean-room hard drive mechanical head transplants.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Free Diagnostics</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>90-Day Warranty</span>
            </div>
          </div>
        </div>

        {/* 4 Core Repair Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REPAIR_SERVICES.map((serv) => {
            const isSelected = selectedDevice === serv.deviceType;
            return (
              <div
                key={serv.id}
                onClick={() => {
                  setSelectedDevice(serv.deviceType);
                  setSelectedIssueIndex(0);
                }}
                className={`cursor-pointer p-5 rounded-2xl bg-[#0f121d] border-2 transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'border-red-500 bg-[#161a29] shadow-[0_0_25px_rgba(239,68,68,0.25)]'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-black/60 border border-slate-700">
                      {getDeviceIcon(serv.deviceType)}
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">
                      From {formatPrice(serv.basePriceUSD, serv.basePriceBDT)}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base text-white">
                    {serv.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed line-clamp-3">
                    {serv.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-medium">
                  <span className="text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    {serv.turnaroundTime}
                  </span>
                  <span className={`font-mono ${isSelected ? 'text-red-400' : 'text-slate-500'}`}>
                    {isSelected ? 'SELECTED ●' : 'Configure →'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Diagnostic Calculator & Booking Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#0c0e18] border border-red-500/30 rounded-3xl p-6 sm:p-8 shadow-[0_0_40px_rgba(239,68,68,0.1)]">
          
          {/* Left Column: Symptom selector */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-red-500" />
              <h3 className="font-heading font-bold text-xl text-white">
                INSTANT REPAIR ESTIMATOR & FAULT SELECTOR
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-400">
              Selected Device: <strong className="text-white uppercase">{currentService.title}</strong>. Choose your current device symptom to view estimated repair cost and turnaround time:
            </p>

            {/* Issues List */}
            <div className="space-y-3">
              {currentService.commonIssues.map((item, idx) => {
                const active = selectedIssueIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedIssueIndex(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-start justify-between gap-4 ${
                      active
                        ? 'border-red-500 bg-red-950/20 text-white'
                        : 'border-slate-800 bg-[#121522] text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="font-heading font-semibold text-sm flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${active ? 'bg-red-500' : 'bg-slate-600'}`} />
                        {item.issue}
                      </div>
                      <div className="text-xs text-slate-400 mt-1 pl-4">
                        {item.description}
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-mono text-xs font-semibold text-rose-400">
                        +{formatPrice(item.extraCostUSD, item.extraCostBDT)}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Express Priority Toggle */}
            <div className="p-4 rounded-xl bg-[#121522] border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Express Priority Queue (Emergency Turnaround)</span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Assigned directly to Senior Electronics Engineer within 1 hour.
                </div>
              </div>

              <button
                onClick={() => setIsExpress(!isExpress)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                  isExpress
                    ? 'bg-amber-500 text-black shadow-[0_0_12px_rgba(245,158,11,0.5)]'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {isExpress ? 'ENABLED (+24H)' : '+ ENABLE'}
              </button>
            </div>
          </div>

          {/* Right Column: Cost Breakdown & Booking CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-[#141828] border border-slate-700/80">
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                ESTIMATED REPAIR QUOTE
              </div>
              
              <div className="mt-4 pb-4 border-b border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Base Diagnostic & Labor:</span>
                  <span className="font-mono text-white">
                    {formatPrice(currentService.basePriceUSD, currentService.basePriceBDT)}
                  </span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Component / Micro-Soldering:</span>
                  <span className="font-mono text-white">
                    {formatPrice(currentIssue.extraCostUSD, currentIssue.extraCostBDT)}
                  </span>
                </div>
                {isExpress && (
                  <div className="flex justify-between text-amber-400">
                    <span>Express Priority Queue:</span>
                    <span className="font-mono">
                      {formatPrice(expressSurchargeUSD, expressSurchargeBDT)}
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-emerald-400">
                  <span>Initial 30-Point Diagnostic:</span>
                  <span className="font-mono">FREE ($0)</span>
                </div>
              </div>

              <div className="mt-4 flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-slate-400">Total Estimate:</span>
                  <div className="font-heading font-black text-3xl text-white">
                    {formatPrice(totalEstimatedUSD, totalEstimatedBDT)}
                  </div>
                </div>
                <div className="text-right text-xs font-mono text-cyan-400">
                  Turnaround: {isExpress ? 'Same Day (12h)' : currentService.turnaroundTime}
                </div>
              </div>

              <div className="mt-4 p-3 rounded-lg bg-black/40 border border-slate-800 text-[11px] text-slate-400 space-y-1">
                <div>✓ No Fix, No Fee Guarantee</div>
                <div>✓ 90-Day Full Warranty on Replaced Components</div>
                <div>✓ Secure ESD Anti-Static Protected Lab Bench</div>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={() =>
                  onBookRepair(
                    currentService,
                    currentIssue.issue,
                    totalEstimatedUSD,
                    totalEstimatedBDT
                  )
                }
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white font-heading font-bold text-sm tracking-wider uppercase hover:from-red-500 hover:to-rose-600 transition-all shadow-[0_0_20px_rgba(239,68,68,0.5)] border border-red-400/40 flex items-center justify-center gap-2 group"
              >
                <span>BOOK REPAIR APPOINTMENT</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
