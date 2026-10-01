import React from 'react';
import { Cpu, Monitor, HardDrive, Wrench, Headphones, ArrowUpRight } from 'lucide-react';

interface FeaturedCategoriesProps {
  onSelectCategory: (cat: string) => void;
  selectedCategory: string;
}

export const FeaturedCategories: React.FC<FeaturedCategoriesProps> = ({
  onSelectCategory,
  selectedCategory
}) => {
  const categories = [
    {
      id: 'gaming-pc',
      name: 'GAMING PCS',
      desc: 'Prebuilt & Custom Watercooled Rigs',
      count: '12 Models',
      icon: Cpu,
      borderColor: 'border-red-500/60',
      glowColor: 'shadow-[0_0_25px_rgba(239,68,68,0.35)]',
      accentColor: 'text-red-400',
      badgeBg: 'bg-red-950/60 text-rose-300'
    },
    {
      id: 'monitors',
      name: 'GAMING MONITORS',
      desc: 'Curved WQHD, OLED & 240Hz High-Refresh',
      count: '18 Displays',
      icon: Monitor,
      borderColor: 'border-rose-500/60',
      glowColor: 'shadow-[0_0_25px_rgba(244,63,94,0.35)]',
      accentColor: 'text-rose-400',
      badgeBg: 'bg-rose-950/60 text-rose-300'
    },
    {
      id: 'storage',
      name: 'STORAGE & MEMORY',
      desc: 'Gen4/5 NVMe SSDs & High-Speed HDDs',
      count: '34 Drives',
      icon: HardDrive,
      borderColor: 'border-cyan-500/60',
      glowColor: 'shadow-[0_0_25px_rgba(6,182,212,0.35)]',
      accentColor: 'text-cyan-400',
      badgeBg: 'bg-cyan-950/60 text-cyan-300'
    },
    {
      id: 'repairs',
      name: 'REPAIR & DIAGNOSTICS',
      desc: 'PC, Monitor, SSD & HDD Chip Repair',
      count: 'Same-Day Lab',
      icon: Wrench,
      borderColor: 'border-amber-500/60',
      glowColor: 'shadow-[0_0_25px_rgba(245,158,11,0.35)]',
      accentColor: 'text-amber-400',
      badgeBg: 'bg-amber-950/60 text-amber-300'
    },
    {
      id: 'accessories',
      name: 'ACCESSORIES',
      desc: 'Mechanical Keyboards & Studio Audio',
      count: '45 Items',
      icon: Headphones,
      borderColor: 'border-blue-500/60',
      glowColor: 'shadow-[0_0_25px_rgba(59,130,246,0.35)]',
      accentColor: 'text-blue-400',
      badgeBg: 'bg-blue-950/60 text-blue-300'
    }
  ];

  return (
    <section className="py-12 bg-[#08090d] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-wider uppercase">
              FEATURED CATEGORIES
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Select category to browse hardware inventory and specialized repair services
            </p>
          </div>
          <button
            onClick={() => onSelectCategory('all')}
            className="text-xs text-rose-400 hover:text-rose-300 font-mono flex items-center gap-1 transition-colors"
          >
            <span>View all inventory</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Categories Grid - Matching the visual glowing outline cards from reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`relative text-left p-5 rounded-2xl bg-[#0f121d] border-2 transition-all duration-300 group hover:-translate-y-1.5 focus:outline-none ${
                  cat.borderColor
                } ${cat.glowColor} ${
                  isSelected ? 'ring-2 ring-white/50 bg-[#161a29]' : ''
                }`}
              >
                {/* Neon glow hover accent */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-black/40 border border-slate-700/60 ${cat.accentColor} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${cat.badgeBg}`}>
                    {cat.count}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-sm tracking-wide text-white group-hover:text-rose-300 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                  {cat.desc}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-medium text-slate-400 group-hover:text-white transition-colors">
                  <span>Explore items</span>
                  <span className={cat.accentColor}>→</span>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
