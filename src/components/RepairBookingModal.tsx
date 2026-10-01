import React, { useState } from 'react';
import { RepairService } from '../types';
import { X, Wrench, CheckCircle2, ShieldCheck, Clock, Copy, Check } from 'lucide-react';

interface RepairBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: RepairService | null;
  issueTitle?: string;
  costUSD?: number;
  costBDT?: number;
  currency: 'USD' | 'BDT';
}

export const RepairBookingModal: React.FC<RepairBookingModalProps> = ({
  isOpen,
  onClose,
  service,
  issueTitle,
  costUSD,
  costBDT,
  currency
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [deviceModel, setDeviceModel] = useState('');
  const [notes, setNotes] = useState('');
  const [method, setMethod] = useState<'dropoff' | 'courier'>('dropoff');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketCreated, setTicketCreated] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen || !service) return null;

  const estimatedUSD = costUSD || service.basePriceUSD;
  const estimatedBDT = costBDT || service.basePriceBDT;

  const formatPrice = (usd: number, bdt: number) => {
    return currency === 'BDT' ? `৳ ${bdt.toLocaleString()}` : `$${usd.toLocaleString()}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      const generatedTicket = `JB-${Math.floor(1000 + Math.random() * 9000)}`;
      setTicketCreated(generatedTicket);
      setIsSubmitting(false);
    }, 900);
  };

  const handleCopyTicket = () => {
    if (ticketCreated) {
      navigator.clipboard.writeText(ticketCreated);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleFinish = () => {
    setTicketCreated(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-[#0c0e18] border border-red-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(239,68,68,0.25)] relative text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {ticketCreated ? (
          <div className="text-center space-y-5 py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-950/60 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(16,185,129,0.4)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="font-heading font-black text-2xl text-white">
                REPAIR TICKET INITIATED!
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Your device repair intake has been registered at Joy Bangla Central Lab.
              </p>
            </div>

            {/* Generated Ticket Box */}
            <div className="p-4 rounded-2xl bg-[#141829] border border-red-500/40 flex items-center justify-between gap-4">
              <div>
                <div className="text-[10px] font-mono text-slate-400 uppercase">
                  Repair Ticket Number
                </div>
                <div className="font-heading font-black text-2xl text-rose-400 tracking-widest">
                  {ticketCreated}
                </div>
              </div>

              <button
                onClick={handleCopyTicket}
                className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono flex items-center gap-1.5 transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'COPIED' : 'COPY'}</span>
              </button>
            </div>

            <div className="text-left text-xs text-slate-300 space-y-2 bg-[#090b12] p-4 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2 text-cyan-400 font-mono font-medium">
                <Clock className="w-4 h-4" />
                <span>Next Steps for {method === 'dropoff' ? 'Walk-in Drop-off' : 'Courier Pickup'}:</span>
              </div>
              {method === 'dropoff' ? (
                <p className="text-slate-400 leading-relaxed">
                  Bring your device to Joy Bangla Lab (Suite 402, Computer City Center, Elephant Road, Dhaka). Quote your Ticket #{ticketCreated} for express intake!
                </p>
              ) : (
                <p className="text-slate-400 leading-relaxed">
                  Our secure static-safe courier agent will contact you at {phone || 'your phone number'} within 2 hours to collect your device in an anti-static cushioned bag.
                </p>
              )}
            </div>

            <button
              onClick={handleFinish}
              className="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-500 font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(239,68,68,0.4)]"
            >
              Done & Return to Store
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-rose-300 text-xs font-mono mb-2">
                <Wrench className="w-3.5 h-3.5 text-rose-400" />
                <span>LAB DIAGNOSTIC APPOINTMENT</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-white">
                {service.title}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Issue: <span className="text-slate-200 font-semibold">{issueTitle || 'Diagnostic Assessment'}</span> · Estimated Cost: <span className="font-mono text-rose-400 font-bold">{formatPrice(estimatedUSD, estimatedBDT)}</span>
              </p>
            </div>

            {/* Inputs */}
            <div className="space-y-3.5 text-xs">
              <div>
                <label className="block text-slate-300 mb-1 font-medium">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tanvir Rahman"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#121522] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-medium">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +880 1712-345678 or +1 (555) 019-2831"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#121522] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-medium">
                  Exact Device Model & Specifications
                </label>
                <input
                  type="text"
                  placeholder="e.g. ASUS ROG Strix 34 / Samsung 990 Pro 2TB / Custom Ryzen PC"
                  value={deviceModel}
                  onChange={(e) => setDeviceModel(e.target.value)}
                  className="w-full bg-[#121522] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              {/* Delivery method toggle */}
              <div>
                <label className="block text-slate-300 mb-1 font-medium">
                  Intake Method
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setMethod('dropoff')}
                    className={`py-2 px-3 rounded-xl border text-xs font-medium transition-all ${
                      method === 'dropoff'
                        ? 'border-red-500 bg-red-950/40 text-white shadow-sm'
                        : 'border-slate-800 bg-[#121522] text-slate-400'
                    }`}
                  >
                    Walk-in Drop-off (Dhaka Lab)
                  </button>
                  <button
                    type="button"
                    onClick={() => setMethod('courier')}
                    className={`py-2 px-3 rounded-xl border text-xs font-medium transition-all ${
                      method === 'courier'
                        ? 'border-red-500 bg-red-950/40 text-white shadow-sm'
                        : 'border-slate-800 bg-[#121522] text-slate-400'
                    }`}
                  >
                    Express Courier Doorstep Pickup
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-medium">
                  Problem Description / Symptoms
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe when the issue began, any burnt smell, sparks, or error codes..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#121522] border border-slate-700 rounded-xl px-3.5 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition-colors resize-none"
                />
              </div>
            </div>

            {/* Price & Guarantees */}
            <div className="p-3.5 rounded-xl bg-[#090b12] border border-slate-800 flex items-center justify-between text-xs">
              <div>
                <span className="text-slate-400">Diagnostic Fee:</span>
                <span className="font-mono text-emerald-400 ml-1.5 font-bold">100% FREE ($0)</span>
              </div>
              <div className="flex items-center gap-1 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>90-Day Labor Guarantee</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-600 text-white font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(239,68,68,0.5)] border border-red-400/40 disabled:opacity-50"
            >
              {isSubmitting ? 'GENERATING REPAIR TICKET...' : 'CONFIRM REPAIR BOOKING'}
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
