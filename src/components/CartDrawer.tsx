import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Tag, CheckCircle2 } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  currency: 'USD' | 'BDT';
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  currency
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoMessage, setPromoMessage] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  if (!isOpen) return null;

  const subtotalUSD = cart.reduce((sum, item) => sum + item.product.priceUSD * item.quantity, 0);
  const subtotalBDT = cart.reduce((sum, item) => sum + item.product.priceBDT * item.quantity, 0);

  const discountUSD = Math.round((subtotalUSD * discountPercent) / 100);
  const discountBDT = Math.round((subtotalBDT * discountPercent) / 100);

  const finalUSD = Math.max(0, subtotalUSD - discountUSD);
  const finalBDT = Math.max(0, subtotalBDT - discountBDT);

  const formatPrice = (usd: number, bdt: number) => {
    return currency === 'BDT' ? `৳ ${bdt.toLocaleString()}` : `$${usd.toLocaleString()}`;
  };

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'JOYBANGLA10' || promoCode.trim().toUpperCase() === 'JOYBANGLA') {
      setDiscountPercent(10);
      setPromoMessage('10% Joy Bangla Special Discount Applied!');
    } else {
      setPromoMessage('Invalid coupon. Try code "JOYBANGLA10"');
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderNumber(`JB-ORD-${Math.floor(100000 + Math.random() * 900000)}`);
      setOrderConfirmed(true);
      onClearCart();
    }, 1200);
  };

  const handleResetOrder = () => {
    setOrderConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-md bg-[#0c0e17] border-l border-slate-800 h-full flex flex-col justify-between shadow-2xl">
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-heading font-extrabold text-lg text-white">
              YOUR CART
            </span>
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-red-950 text-rose-300 border border-red-500/30">
              {cart.reduce((sum, i) => sum + i.quantity, 0)} items
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        {orderConfirmed ? (
          <div className="p-6 text-center space-y-4 my-auto">
            <div className="w-16 h-16 rounded-full bg-emerald-950/60 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(16,185,129,0.4)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-bold text-xl text-white">
              ORDER CONFIRMED!
            </h3>
            <p className="text-xs text-slate-300">
              Thank you for trusting Joy Bangla Tech. Your invoice has been generated and our lab technicians are preparing your shipment.
            </p>
            <div className="p-3 rounded-xl bg-[#141724] border border-slate-800 font-mono text-xs text-rose-400 font-semibold">
              Invoice #{orderNumber}
            </div>
            <button
              onClick={handleResetOrder}
              className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-heading font-bold text-xs uppercase tracking-wider transition-all"
            >
              Continue Shopping
            </button>
          </div>
        ) : cart.length === 0 ? (
          <div className="p-6 text-center space-y-4 my-auto">
            <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto text-slate-500">
              <Tag className="w-7 h-7" />
            </div>
            <div className="text-sm font-heading font-bold text-slate-300">
              Your cart is empty
            </div>
            <p className="text-xs text-slate-500 max-w-xs mx-auto">
              Explore our gaming rigs, curved monitors, SSDs, HDDs, or build your dream PC.
            </p>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold uppercase font-heading transition-all"
            >
              Browse Hardware
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-5 space-y-4 divide-y divide-slate-800/80">
            {cart.map((item) => (
              <div key={item.id} className="pt-4 first:pt-0 flex gap-3">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 object-contain rounded-lg bg-black/60 border border-slate-800 p-1 shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-heading font-semibold text-xs text-white truncate">
                      {item.product.name}
                    </h4>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-slate-500 hover:text-rose-400 p-1 transition-colors shrink-0"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="text-[11px] font-mono text-rose-400 font-semibold mt-0.5">
                    {formatPrice(item.product.priceUSD, item.product.priceBDT)}
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center border border-slate-700 rounded-lg bg-[#08090d]">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="p-1 hover:text-white text-slate-400 transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-mono text-xs px-2 text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="p-1 hover:text-white text-slate-400 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="text-[10px] text-slate-500 font-mono">
                      Subtotal: {formatPrice(item.product.priceUSD * item.quantity, item.product.priceBDT * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Drawer Footer with Checkout */}
        {cart.length > 0 && !orderConfirmed && (
          <div className="p-5 border-t border-slate-800 bg-[#08090d] space-y-4">
            
            {/* Promo coupon input */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <input
                type="text"
                placeholder="Promo Code (JOYBANGLA10)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 bg-[#121522] border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 font-mono uppercase focus:outline-none focus:border-red-500"
              />
              <button
                type="submit"
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold font-mono"
              >
                Apply
              </button>
            </form>

            {promoMessage && (
              <div className="text-[11px] font-mono text-rose-400">
                {promoMessage}
              </div>
            )}

            {/* Price Calculations */}
            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-mono text-white">
                  {formatPrice(subtotalUSD, subtotalBDT)}
                </span>
              </div>
              {discountPercent > 0 && (
                <div className="flex justify-between text-rose-400">
                  <span>Special Discount (10%):</span>
                  <span className="font-mono">
                    -{formatPrice(discountUSD, discountBDT)}
                  </span>
                </div>
              )}
              <div className="flex justify-between text-emerald-400 text-[11px]">
                <span>Shipping & Transit Insurance:</span>
                <span className="font-mono">FREE DELIVERY</span>
              </div>
              <div className="flex justify-between font-heading font-black text-lg text-white pt-2 border-t border-slate-800">
                <span>TOTAL:</span>
                <span>{formatPrice(finalUSD, finalBDT)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-600 text-white font-heading font-bold text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(239,68,68,0.5)] border border-red-400/40 flex items-center justify-center gap-2 group disabled:opacity-50"
            >
              {isCheckingOut ? (
                <span>PROCESSING SECURE CHECKOUT...</span>
              ) : (
                <>
                  <span>CONFIRM ORDER / CASH ON DELIVERY</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Official Warranty & 7-Day Return Guarantee Included</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
