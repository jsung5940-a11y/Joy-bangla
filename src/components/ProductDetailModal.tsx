import React from 'react';
import { Product } from '../types';
import { X, Star, ShoppingCart, ShieldCheck, Check, Truck, Zap } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (p: Product) => void;
  currency: 'USD' | 'BDT';
  isAdded: boolean;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  currency,
  isAdded
}) => {
  if (!product) return null;

  const formatPrice = (p: Product) => {
    return currency === 'BDT' ? `৳ ${p.priceBDT.toLocaleString()}` : `$${p.priceUSD.toLocaleString()}`;
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-[#0c0e18] border border-red-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(239,68,68,0.25)] relative text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Left Column: Product Showcase */}
          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-2xl bg-[#08090d] border border-slate-800 p-6 flex items-center justify-center overflow-hidden relative">
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
              />
              {product.badge && (
                <div className="absolute top-3 right-3 text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-red-600 text-white shadow-md">
                  {product.badge}
                </div>
              )}
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2.5 rounded-xl bg-[#121522] border border-slate-800">
                <Truck className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                <span className="text-[11px] text-slate-400">Same-Day Dispatch</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#121522] border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                <span className="text-[11px] text-slate-400">Official Warranty</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#121522] border border-slate-800">
                <Zap className="w-4 h-4 text-rose-400 mx-auto mb-1" />
                <span className="text-[11px] text-slate-400">Lab Tested</span>
              </div>
            </div>
          </div>

          {/* Right Column: Specs & Buy */}
          <div className="space-y-5">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-rose-400 mb-1">
                {product.brand} · {product.category.toUpperCase()}
              </div>

              <h2 className="font-heading font-extrabold text-xl text-white">
                {product.name}
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="text-xs font-mono font-bold ml-1 text-slate-200">
                    {product.rating}
                  </span>
                </div>
                <span className="text-xs text-slate-500">
                  ({product.reviewsCount} customer reviews)
                </span>
                <span className="text-xs font-mono text-emerald-400 ml-auto">
                  ● In Stock Ready to Ship
                </span>
              </div>
            </div>

            {/* Price Box */}
            <div className="p-4 rounded-xl bg-[#121522] border border-slate-800 flex items-baseline gap-3">
              <div className="font-heading font-black text-2xl text-white">
                {formatPrice(product)}
              </div>
              {formatOriginalPrice(product) && (
                <div className="text-sm text-slate-500 line-through font-mono">
                  {formatOriginalPrice(product)}
                </div>
              )}
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {product.description}
            </p>

            {/* Detailed Specs Table */}
            {product.detailedSpecs && (
              <div className="space-y-1.5 text-xs border-t border-slate-800 pt-3">
                <span className="font-heading font-bold text-slate-300 text-xs block mb-2">
                  HARDWARE SPECIFICATIONS:
                </span>
                <div className="max-h-40 overflow-y-auto space-y-1 pr-1">
                  {Object.entries(product.detailedSpecs).map(([label, val]) => (
                    <div key={label} className="flex justify-between py-1 border-b border-slate-800/60 text-[11px]">
                      <span className="text-slate-400">{label}:</span>
                      <span className="text-slate-200 font-mono text-right pl-2 truncate max-w-[200px]">
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Warranty Info */}
            <div className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{product.warranty}</span>
            </div>

            {/* Action Button */}
            <button
              onClick={() => onAddToCart(product)}
              className={`w-full py-3.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                isAdded
                  ? 'bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.5)]'
                  : 'bg-red-600 hover:bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.5)] border border-red-400/40'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>ITEM ADDED TO CART</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4" />
                  <span>ADD TO SHOPPING CART</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
