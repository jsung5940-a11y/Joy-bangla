import React, { useState } from 'react';
import { PC_BUILDER_PARTS } from '../data/products';
import { PCPartItem, Product } from '../types';
import { Cpu, Check, ShoppingCart, Zap, Shield, Sparkles, RefreshCw } from 'lucide-react';

interface PCBuilderProps {
  currency: 'USD' | 'BDT';
  onAddCustomRigToCart: (rigProduct: Product) => void;
}

export const PCBuilder: React.FC<PCBuilderProps> = ({ currency, onAddCustomRigToCart }) => {
  // Pre-selected default config for an awesome high-performance gaming PC
  const [selectedParts, setSelectedParts] = useState<{ [category: string]: PCPartItem }>({
    cpu: PC_BUILDER_PARTS.find((p) => p.id === 'part-cpu-1')!,
    motherboard: PC_BUILDER_PARTS.find((p) => p.id === 'part-mb-1')!,
    gpu: PC_BUILDER_PARTS.find((p) => p.id === 'part-gpu-1')!,
    ram: PC_BUILDER_PARTS.find((p) => p.id === 'part-ram-1')!,
    ssd: PC_BUILDER_PARTS.find((p) => p.id === 'part-ssd-1')!,
    hdd: PC_BUILDER_PARTS.find((p) => p.id === 'part-hdd-1')!,
    psu: PC_BUILDER_PARTS.find((p) => p.id === 'part-psu-1')!,
    case: PC_BUILDER_PARTS.find((p) => p.id === 'part-case-1')!,
    monitor: PC_BUILDER_PARTS.find((p) => p.id === 'part-mon-1')!
  });

  const categories = [
    { key: 'cpu', label: '1. Processor (CPU)' },
    { key: 'motherboard', label: '2. Motherboard' },
    { key: 'gpu', label: '3. Graphics Card (GPU)' },
    { key: 'ram', label: '4. Memory (RAM)' },
    { key: 'ssd', label: '5. Fast NVMe SSD' },
    { key: 'hdd', label: '6. Secondary HDD Storage' },
    { key: 'psu', label: '7. Power Supply (PSU)' },
    { key: 'case', label: '8. Chassis & Case' },
    { key: 'monitor', label: '9. Gaming Monitor' }
  ];

  const totalUSD = Object.values(selectedParts).reduce((sum, part) => sum + part.priceUSD, 0);
  const totalBDT = Object.values(selectedParts).reduce((sum, part) => sum + part.priceBDT, 0);
  const totalWattage = Object.values(selectedParts).reduce((sum, part) => sum + part.wattage, 0);

  const formatPrice = (usd: number, bdt: number) => {
    return currency === 'BDT' ? `৳ ${bdt.toLocaleString()}` : `$${usd.toLocaleString()}`;
  };

  const handleSelectPart = (category: string, part: PCPartItem) => {
    setSelectedParts((prev) => ({
      ...prev,
      [category]: part
    }));
  };

  const handleResetToDefault = () => {
    setSelectedParts({
      cpu: PC_BUILDER_PARTS.find((p) => p.id === 'part-cpu-1')!,
      motherboard: PC_BUILDER_PARTS.find((p) => p.id === 'part-mb-1')!,
      gpu: PC_BUILDER_PARTS.find((p) => p.id === 'part-gpu-1')!,
      ram: PC_BUILDER_PARTS.find((p) => p.id === 'part-ram-1')!,
      ssd: PC_BUILDER_PARTS.find((p) => p.id === 'part-ssd-1')!,
      hdd: PC_BUILDER_PARTS.find((p) => p.id === 'part-hdd-1')!,
      psu: PC_BUILDER_PARTS.find((p) => p.id === 'part-psu-1')!,
      case: PC_BUILDER_PARTS.find((p) => p.id === 'part-case-1')!,
      monitor: PC_BUILDER_PARTS.find((p) => p.id === 'part-mon-1')!
    });
  };

  const handleAddBuildToCart = () => {
    const summary = `${selectedParts.cpu?.name} · ${selectedParts.gpu?.name} · ${selectedParts.ram?.name} · ${selectedParts.ssd?.name} + ${selectedParts.hdd?.name}`;
    
    const customRig: Product = {
      id: `custom-rig-${Date.now()}`,
      name: `Custom Joy Bangla Rig (${selectedParts.gpu?.name.split(' ')[2] || 'Custom'} Edition)`,
      brand: 'Joy Bangla Custom Lab',
      category: 'gaming-pc',
      priceUSD: totalUSD,
      priceBDT: totalBDT,
      image: '/src/assets/images/product_gaming_pc_1790839930150.jpg',
      badge: 'CUSTOM BUILD',
      specs: summary,
      rating: 5.0,
      reviewsCount: 1,
      inStock: true,
      warranty: '3 Years Hardware Warranty + Free 24h Burn-in Stress Test',
      description: `Tailored build featuring ${selectedParts.cpu?.name}, ${selectedParts.gpu?.name}, ${selectedParts.ssd?.name}, ${selectedParts.hdd?.name}, housed in ${selectedParts.case?.name} with ${selectedParts.monitor?.name}.`
    };

    onAddCustomRigToCart(customRig);
  };

  return (
    <section id="pc-builder" className="py-16 bg-[#08090d] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-rose-300 text-xs font-mono mb-2">
              <Sparkles className="w-3.5 h-3.5 text-rose-400" />
              <span>CUSTOM RIG ARCHITECT</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-wider uppercase">
              JOY BANGLA PC BUILDER
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Select parts with automated wattage calculations and compatibility verification
            </p>
          </div>

          <button
            onClick={handleResetToDefault}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900/50 text-slate-300 text-xs hover:border-slate-500 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Recommended Preset</span>
          </button>
        </div>

        {/* Builder Studio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Component Pickers */}
          <div className="lg:col-span-8 space-y-6">
            {categories.map((cat) => {
              const availableOptions = PC_BUILDER_PARTS.filter((p) => p.category === cat.key);
              const selectedPart = selectedParts[cat.key];

              return (
                <div
                  key={cat.key}
                  className="rounded-2xl bg-[#0f121d] border border-slate-800 p-5 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-bold text-sm text-white">
                      {cat.label}
                    </span>
                    {selectedPart && (
                      <span className="font-mono text-xs text-rose-400 font-semibold">
                        {formatPrice(selectedPart.priceUSD, selectedPart.priceBDT)}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {availableOptions.map((opt) => {
                      const isChosen = selectedPart?.id === opt.id;
                      return (
                        <button
                          key={opt.id}
                          onClick={() => handleSelectPart(cat.key, opt)}
                          className={`text-left p-3 rounded-xl border transition-all flex flex-col justify-between ${
                            isChosen
                              ? 'border-red-500 bg-red-950/30 text-white shadow-[0_0_15px_rgba(239,68,68,0.2)]'
                              : 'border-slate-800 bg-[#121522] text-slate-300 hover:border-slate-700'
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
                              <span>{opt.brand}</span>
                              {isChosen && <Check className="w-3.5 h-3.5 text-red-400" />}
                            </div>
                            <div className="font-heading font-semibold text-xs text-white line-clamp-1">
                              {opt.name}
                            </div>
                            <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-2">
                              {opt.spec}
                            </div>
                          </div>

                          <div className="mt-2 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                            <span className="font-mono text-rose-400 font-semibold">
                              {formatPrice(opt.priceUSD, opt.priceBDT)}
                            </span>
                            {opt.wattage > 0 && (
                              <span className="font-mono text-slate-500 text-[10px]">
                                {opt.wattage}W
                              </span>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Build Summary & Live Diagnostic Box */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="rounded-2xl bg-[#0f121d] border border-red-500/30 p-6 shadow-[0_0_30px_rgba(239,68,68,0.15)] space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-red-500" />
                  <h3 className="font-heading font-bold text-lg text-white">
                    BUILD SUMMARY
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                  <Shield className="w-3.5 h-3.5" />
                  <span>100% Compatible</span>
                </div>
              </div>

              {/* Power / Wattage gauge */}
              <div className="p-4 rounded-xl bg-[#08090d] border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    Estimated TDP Power Draw:
                  </span>
                  <span className="font-mono font-bold text-white">{totalWattage} W</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-red-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, (totalWattage / 850) * 100)}%` }}
                  />
                </div>
                <div className="text-[10px] text-slate-500 flex justify-between font-mono">
                  <span>Load: {totalWattage}W</span>
                  <span className="text-emerald-400">Recommended PSU: 850W Gold</span>
                </div>
              </div>

              {/* Itemized Parts List Preview */}
              <div className="space-y-2 max-h-56 overflow-y-auto pr-1 text-xs divide-y divide-slate-800/60">
                {Object.entries(selectedParts).map(([key, part]) => (
                  <div key={key} className="pt-1.5 flex justify-between text-slate-300">
                    <span className="truncate pr-2 text-slate-400">
                      {part.name}
                    </span>
                    <span className="font-mono text-white shrink-0">
                      {formatPrice(part.priceUSD, part.priceBDT)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Total & Action */}
              <div className="border-t border-slate-800 pt-4 space-y-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-slate-400 font-mono">TOTAL ESTIMATE:</span>
                  <div className="font-heading font-black text-2xl text-white">
                    {formatPrice(totalUSD, totalBDT)}
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 space-y-1">
                  <div>✓ Includes Joy Bangla Professional Cable Management</div>
                  <div>✓ Thermal Grizzly Kryonaut Extreme Repasting</div>
                  <div>✓ 24-Hour Furmark & MemTest Torture Validation</div>
                </div>

                <button
                  onClick={handleAddBuildToCart}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white font-heading font-bold text-xs tracking-wider uppercase hover:from-red-500 hover:to-rose-600 transition-all shadow-[0_0_20px_rgba(239,68,68,0.5)] border border-red-400/40 flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>ADD COMPLETE RIG TO CART</span>
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
