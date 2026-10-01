import React from 'react';
import { Product } from '../types';
import { Star, ShoppingCart, Eye, Check, ShieldCheck } from 'lucide-react';

interface HotDealsProps {
  products: Product[];
  currency: 'USD' | 'BDT';
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  addedProductId: string | null;
}

export const HotDeals: React.FC<HotDealsProps> = ({
  products,
  currency,
  onAddToCart,
  onQuickView,
  selectedCategory,
  setSelectedCategory,
  addedProductId
}) => {
  // Filter products by selectedCategory if not 'all' or 'repairs'
  const filteredProducts = products.filter((p) => {
    if (selectedCategory === 'all' || selectedCategory === 'repairs') return true;
    if (selectedCategory === 'storage') return p.category === 'ssd' || p.category === 'hdd';
    return p.category === selectedCategory;
  });

  const formatPrice = (p: Product) => {
    if (currency === 'BDT') {
      return `৳ ${p.priceBDT.toLocaleString()}`;
    }
    return `$${p.priceUSD.toLocaleString()}`;
  };

  const formatOriginalPrice = (p: Product) => {
    if (currency === 'BDT' && p.originalPriceBDT) {
      return `৳ ${p.originalPriceBDT.toLocaleString()}`;
    }
    if (p.originalPriceUSD) {
      return `$${p.originalPriceUSD.toLocaleString()}`;
    }
    return null;
  };

  return (
    <section className="py-12 bg-[#08090d] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-wider uppercase">
                HOT DEALS
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Hand-picked gaming rigs, ultrawide monitors, and high-speed storage components
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#101320] rounded-xl border border-slate-800">
            {[
              { id: 'all', label: 'All Items' },
              { id: 'gaming-pc', label: 'Gaming PCs' },
              { id: 'monitors', label: 'Monitors' },
              { id: 'storage', label: 'SSDs & HDDs' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-red-600 text-white shadow-[0_0_10px_rgba(239,68,68,0.5)]'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid - Matches the exact card layout in the uploaded screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, idx) => {
            const isAdded = addedProductId === product.id;

            return (
              <div
                key={product.id}
                className="group relative flex flex-col justify-between rounded-2xl bg-[#0f121d] border border-slate-800/90 hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(239,68,68,0.15)] overflow-hidden"
              >
                {/* Index tag & Badge in top corners */}
                <div className="absolute top-3 left-3 z-10 font-heading font-bold text-xs text-slate-400 font-mono bg-black/60 px-2 py-0.5 rounded border border-slate-800">
                  {idx + 1}.
                </div>

                {product.badge && (
                  <div className="absolute top-3 right-3 z-10 text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-red-600/90 text-white shadow-[0_0_8px_rgba(239,68,68,0.6)]">
                    {product.badge}
                  </div>
                )}

                {/* Product Image Slot */}
                <div className="relative w-full aspect-[4/3] bg-[#090b12] p-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Quick view hover button */}
                  <button
                    onClick={() => onQuickView(product)}
                    className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-black/70 border border-slate-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600 hover:border-red-400"
                    title="Quick Specs"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                </div>

                {/* Product Details */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                      {product.brand}
                    </div>

                    <h3
                      onClick={() => onQuickView(product)}
                      className="font-heading font-bold text-sm text-white line-clamp-1 group-hover:text-red-400 transition-colors cursor-pointer"
                    >
                      {product.name}
                    </h3>

                    {/* Short Specs */}
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {product.specs}
                    </p>

                    {/* Ratings */}
                    <div className="flex items-center gap-1.5 mt-2">
                      <div className="flex items-center text-amber-400">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span className="text-xs font-mono font-semibold ml-1 text-slate-200">
                          {product.rating}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500">
                        ({product.reviewsCount})
                      </span>
                      <span className="text-[11px] text-emerald-400 ml-auto flex items-center gap-0.5">
                        <ShieldCheck className="w-3 h-3" />
                        Warranty
                      </span>
                    </div>
                  </div>

                  {/* Pricing and Action row */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    <div>
                      <div className="font-heading font-extrabold text-base text-white">
                        {formatPrice(product)}
                      </div>
                      {formatOriginalPrice(product) && (
                        <div className="text-[11px] text-slate-500 line-through">
                          {formatOriginalPrice(product)}
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => onAddToCart(product)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-heading font-bold tracking-wider uppercase transition-all duration-200 flex items-center gap-1.5 ${
                        isAdded
                          ? 'bg-emerald-600 text-white shadow-[0_0_12px_rgba(16,185,129,0.5)]'
                          : 'bg-red-600 hover:bg-red-500 text-white shadow-[0_0_15px_rgba(239,68,68,0.4)] active:scale-95'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>ADDED</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-3.5 h-3.5" />
                          <span>ADD TO CART</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
