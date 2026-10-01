import React, { useState, useMemo } from 'react';
import { PRODUCTS, REPAIR_SERVICES } from './data/products';
import { Product, CartItem, RepairService } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedCategories } from './components/FeaturedCategories';
import { HotDeals } from './components/HotDeals';
import { RepairLab } from './components/RepairLab';
import { PCBuilder } from './components/PCBuilder';
import { CartDrawer } from './components/CartDrawer';
import { RepairBookingModal } from './components/RepairBookingModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { Footer } from './components/Footer';
import { Sparkles, Cpu, Monitor, HardDrive, Wrench } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currency, setCurrency] = useState<'USD' | 'BDT'>('USD');
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 'initial-cart-item-1',
      product: PRODUCTS[2], // Samsung 990 Pro SSD
      quantity: 1
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Modals state
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [bookingService, setBookingService] = useState<RepairService | null>(null);
  const [bookingIssue, setBookingIssue] = useState<string>('');
  const [bookingCostUSD, setBookingCostUSD] = useState<number>(0);
  const [bookingCostBDT, setBookingCostBDT] = useState<number>(0);
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  // Cart Handlers
  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { id: `cart-${Date.now()}-${product.id}`, product, quantity: 1 }];
    });

    setAddedProductId(product.id);
    setTimeout(() => {
      setAddedProductId(null);
    }, 1500);
  };

  const handleUpdateCartQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Repair Booking Handler
  const handleOpenRepairBooking = (
    service: RepairService,
    issueTitle?: string,
    costUSD?: number,
    costBDT?: number
  ) => {
    setBookingService(service);
    setBookingIssue(issueTitle || service.commonIssues[0]?.issue || 'General Diagnosis');
    setBookingCostUSD(costUSD || service.basePriceUSD);
    setBookingCostBDT(costBDT || service.basePriceBDT);
  };

  // Filtered Products with Search Term
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesSearch =
        searchTerm === '' ||
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.specs.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSearch;
    });
  }, [searchTerm]);

  const handleCategoryNav = (cat: string) => {
    if (cat === 'repairs') {
      setActiveTab('repairs');
      setSelectedCategory('all');
    } else if (cat === 'builder') {
      setActiveTab('builder');
    } else if (cat === 'gaming-pc' || cat === 'monitors' || cat === 'storage') {
      setActiveTab(cat);
      setSelectedCategory(cat);
    } else {
      setActiveTab('home');
      setSelectedCategory('all');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#08090d] text-slate-100 flex flex-col font-sans selection:bg-red-500 selection:text-white">
      {/* Universal Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          if (tab === 'home') setSelectedCategory('all');
          if (tab === 'gaming-pc') setSelectedCategory('gaming-pc');
          if (tab === 'monitors') setSelectedCategory('monitors');
          if (tab === 'storage') setSelectedCategory('storage');
        }}
        currency={currency}
        setCurrency={setCurrency}
        cartCount={cart.reduce((sum, i) => sum + i.quantity, 0)}
        openCart={() => setIsCartOpen(true)}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {/* If user is actively searching, prioritize search results view */}
        {searchTerm.trim().length > 0 ? (
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
              <div>
                <h1 className="font-heading font-bold text-2xl text-white">
                  SEARCH RESULTS FOR: "{searchTerm}"
                </h1>
                <p className="text-xs text-slate-400 mt-1">
                  Found {filteredProducts.length} matching hardware products
                </p>
              </div>
              <button
                onClick={() => setSearchTerm('')}
                className="text-xs font-mono text-rose-400 hover:text-white"
              >
                Clear Search ✕
              </button>
            </div>

            <HotDeals
              products={filteredProducts}
              currency={currency}
              onAddToCart={handleAddToCart}
              onQuickView={setQuickViewProduct}
              selectedCategory="all"
              setSelectedCategory={setSelectedCategory}
              addedProductId={addedProductId}
            />
          </div>
        ) : (
          <>
            {/* TAB: HOME */}
            {activeTab === 'home' && (
              <>
                <Hero
                  onShopNow={() => {
                    const dealsSection = document.getElementById('hot-deals-section');
                    if (dealsSection) {
                      dealsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  onBuildPC={() => setActiveTab('builder')}
                  onBookRepair={() => setActiveTab('repairs')}
                />

                {/* Animated Cyber Ticker Strip matching screenshot */}
                <div className="bg-[#0b0d14] border-y border-red-500/20 py-2.5 overflow-hidden">
                  <div className="flex whitespace-nowrap animate-marquee gap-8 text-xs font-mono text-slate-300">
                    <span className="flex items-center gap-2 text-rose-400">
                      ⚡ WEEKLY DEALS: SSDs & HDDs ON SALE!
                    </span>
                    <span>•</span>
                    <span className="text-cyan-400">
                      FREE 30-POINT DIAGNOSTICS WITH ANY HARDWARE REPAIR
                    </span>
                    <span>•</span>
                    <span className="text-emerald-400">
                      GENUINE SAMSUNG NVMe 7450 MB/s IN STOCK
                    </span>
                    <span>•</span>
                    <span className="text-amber-400">
                      CLASS-100 CLEAN ROOM HDD DATA RESCUE
                    </span>
                    <span>•</span>
                    <span className="text-rose-400">
                      JOY BANGLA CUSTOM LIQUID-COOLED GAMING RIGS
                    </span>
                    <span>•</span>
                    <span className="text-slate-400">
                      EXPRESS SAME-DAY COURIER ACROSS BANGLADESH & WORLDWIDE
                    </span>
                  </div>
                </div>

                <FeaturedCategories
                  onSelectCategory={handleCategoryNav}
                  selectedCategory={selectedCategory}
                />

                <div id="hot-deals-section">
                  <HotDeals
                    products={PRODUCTS}
                    currency={currency}
                    onAddToCart={handleAddToCart}
                    onQuickView={setQuickViewProduct}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    addedProductId={addedProductId}
                  />
                </div>

                {/* Embedded Repair Lab Section on Homepage */}
                <RepairLab
                  currency={currency}
                  onBookRepair={handleOpenRepairBooking}
                />
              </>
            )}

            {/* TAB: GAMING PC */}
            {activeTab === 'gaming-pc' && (
              <div className="py-12 space-y-8">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                  <div className="rounded-3xl bg-gradient-to-r from-red-950/60 via-[#121522] to-[#08090d] border border-red-500/30 p-8 sm:p-12 mb-8 relative overflow-hidden">
                    <div className="max-w-2xl relative z-10 space-y-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950 border border-red-500/40 text-rose-300 text-xs font-mono">
                        <Cpu className="w-3.5 h-3.5" />
                        <span>PREBUILT & BESPOKE RIGS</span>
                      </div>
                      <h1 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
                        GAMING PCs & WORKSTATIONS
                      </h1>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Hand-assembled by master technicians with custom sleeved cables, thermal phase-change TIMs, and 24-hour stress tests. Zero bottlenecks, infinite frames.
                      </p>
                    </div>
                  </div>
                </div>

                <HotDeals
                  products={PRODUCTS.filter((p) => p.category === 'gaming-pc')}
                  currency={currency}
                  onAddToCart={handleAddToCart}
                  onQuickView={setQuickViewProduct}
                  selectedCategory="gaming-pc"
                  setSelectedCategory={setSelectedCategory}
                  addedProductId={addedProductId}
                />
              </div>
            )}

            {/* TAB: MONITORS */}
            {activeTab === 'monitors' && (
              <div className="py-12 space-y-8">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                  <div className="rounded-3xl bg-gradient-to-r from-rose-950/60 via-[#121522] to-[#08090d] border border-rose-500/30 p-8 sm:p-12 mb-8 relative overflow-hidden">
                    <div className="max-w-2xl relative z-10 space-y-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950 border border-rose-500/40 text-rose-300 text-xs font-mono">
                        <Monitor className="w-3.5 h-3.5" />
                        <span>CURVED & HIGH REFRESH</span>
                      </div>
                      <h1 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
                        CURVED & OLED GAMING MONITORS
                      </h1>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Experience panoramic vision with 1500R deep curvature, 165Hz to 240Hz refresh rates, and 0.03ms instant pixel response times.
                      </p>
                    </div>
                  </div>
                </div>

                <HotDeals
                  products={PRODUCTS.filter((p) => p.category === 'monitors')}
                  currency={currency}
                  onAddToCart={handleAddToCart}
                  onQuickView={setQuickViewProduct}
                  selectedCategory="monitors"
                  setSelectedCategory={setSelectedCategory}
                  addedProductId={addedProductId}
                />
              </div>
            )}

            {/* TAB: STORAGE (SSDs & HDDs) */}
            {activeTab === 'storage' && (
              <div className="py-12 space-y-8">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                  <div className="rounded-3xl bg-gradient-to-r from-cyan-950/60 via-[#121522] to-[#08090d] border border-cyan-500/30 p-8 sm:p-12 mb-8 relative overflow-hidden">
                    <div className="max-w-2xl relative z-10 space-y-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs font-mono">
                        <HardDrive className="w-3.5 h-3.5" />
                        <span>SOLID STATE & MECHANICAL STORAGE</span>
                      </div>
                      <h1 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
                        SSDs & PERFORMANCE HDDs
                      </h1>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Blazing Gen4/Gen5 PCIe M.2 NVMe SSDs reaching 7450 MB/s and heavy-duty 7200 RPM enterprise hard drives for massive game libraries and redundant data safety.
                      </p>
                    </div>
                  </div>
                </div>

                <HotDeals
                  products={PRODUCTS.filter((p) => p.category === 'ssd' || p.category === 'hdd')}
                  currency={currency}
                  onAddToCart={handleAddToCart}
                  onQuickView={setQuickViewProduct}
                  selectedCategory="storage"
                  setSelectedCategory={setSelectedCategory}
                  addedProductId={addedProductId}
                />
              </div>
            )}

            {/* TAB: REPAIRS */}
            {activeTab === 'repairs' && (
              <div className="py-8">
                <RepairLab
                  currency={currency}
                  onBookRepair={handleOpenRepairBooking}
                />
              </div>
            )}

            {/* TAB: PC BUILDER */}
            {activeTab === 'builder' && (
              <div className="py-8">
                <PCBuilder
                  currency={currency}
                  onAddCustomRigToCart={(customRig) => {
                    handleAddToCart(customRig);
                    setIsCartOpen(true);
                  }}
                />
              </div>
            )}
          </>
        )}
      </main>

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        currency={currency}
      />

      {/* Repair Booking Modal */}
      <RepairBookingModal
        isOpen={Boolean(bookingService)}
        onClose={() => setBookingService(null)}
        service={bookingService}
        issueTitle={bookingIssue}
        costUSD={bookingCostUSD}
        costBDT={bookingCostBDT}
        currency={currency}
      />

      {/* Product Quick-View Spec Modal */}
      <ProductDetailModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={(p) => {
          handleAddToCart(p);
        }}
        currency={currency}
        isAdded={Boolean(quickViewProduct && addedProductId === quickViewProduct.id)}
      />

      {/* Footer */}
      <Footer
        onSelectCategory={handleCategoryNav}
      />
    </div>
  );
}
