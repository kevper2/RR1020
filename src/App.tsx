/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesTable } from './components/ServicesTable';
import { CheckoutDrawer } from './components/CheckoutDrawer';
import { Footer } from './components/Footer';
import { ScrollEffects } from './components/ScrollEffects';
import { SERVICES_LIST } from './data/servicesData';
import { BookingFormState } from './types';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const CLINIC_WHATSAPP = '+54 9 2944 33-5996';

export default function App() {
  const [selectedIds, setSelectedIds] = useState<string[]>(['pel-1', 'man-3', 'rop-4']);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState<BookingFormState>({
    buyerName: '',
    recipientName: '',
    deliveryFormat: 'digital',
    giftMessage: '',
    notes: '',
  });

  const handleFormChange = (updated: Partial<BookingFormState>) => {
    setFormData((prev) => ({ ...prev, ...updated }));
  };

  // Toggle service selection
  const handleToggle = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleRemove = (id: string) => {
    setSelectedIds((prev) => prev.filter((item) => item !== id));
  };

  const handleClearAll = () => {
    setSelectedIds([]);
  };

  // Selected Services List & Pricing Calculations
  const selectedServices = useMemo(() => {
    return SERVICES_LIST.filter((s) => selectedIds.includes(s.id));
  }, [selectedIds]);

  const subtotal = useMemo(() => {
    return selectedServices.reduce((sum, s) => sum + s.price, 0);
  }, [selectedServices]);

  // Discount rule: 3 or more services for 15% discount
  const isDiscountApplied = selectedServices.length >= 3;
  const discountSavings = isDiscountApplied ? Math.round(subtotal * 0.15) : 0;
  const finalTotal = subtotal - discountSavings;

  const scrollToTable = () => {
    const el = document.getElementById('tabla-servicios');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9fc] text-[#4c4664] font-sans selection:bg-[#e6c0e9] selection:text-[#4c4664] relative">
      <ScrollEffects />

      {/* Top Header */}
      <Header
        selectedCount={selectedServices.length}
        totalPrice={finalTotal}
        onOpenCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* Hero Section with Beneficio Especial container moved to top */}
      <Hero
        onScrollToTable={scrollToTable}
        selectedCount={selectedServices.length}
        discountApplied={isDiscountApplied}
        savingsAmount={discountSavings}
      />

      {/* Main Services Selection Area */}
      <main id="tabla-servicios" className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-10 w-full relative z-10">
        <div className="scroll-reveal mb-8 sm:mb-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-story-script text-[#4c4664] tracking-normal leading-tight">
            Elegí los servicios y productos del regalo
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#8d89a6] font-light mt-2 max-w-xl mx-auto">
            Marcá los servicios y productos que te gustaría incluir en tu regalo. Podés elegir todos los que quieras.
          </p>
        </div>

        {/* The Simple Selection Tables */}
        <ServicesTable selectedIds={selectedIds} onToggle={handleToggle} />

        {/* Summary Callout Bar at bottom of table - Sleek Horizontal Strip */}
        <div className="scroll-reveal delay-200 mt-8 px-5 sm:px-7 py-3.5 sm:py-4 bg-white rounded-2xl border border-[#bfabcb]/40 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4 card-glow-subtle">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <div className="flex items-center gap-2.5">
              <span className="text-xl sm:text-2xl font-story-script text-[#4c4664] tracking-normal whitespace-nowrap">
                {selectedServices.length} {selectedServices.length === 1 ? 'opción' : 'opciones'}
              </span>
              {isDiscountApplied && (
                <span className="text-[11px] font-normal text-[#4c4664] bg-[#e6c0e9]/50 border border-[#bfabcb]/50 px-2 py-0.5 rounded-full whitespace-nowrap">
                  15% OFF
                </span>
              )}
            </div>

            <div className="h-4 w-px bg-[#bfabcb]/30 hidden sm:block" />

            <div className="text-xs sm:text-sm text-[#8d89a6] font-light">
              {isDiscountApplied ? (
                <span>
                  Total con 15% OFF: <strong className="text-base sm:text-lg text-[#4c4664] font-medium ml-1">${finalTotal.toLocaleString('es-AR')}</strong>
                  <span className="ml-2 text-xs text-[#8d89a6]">(Ahorrás ${discountSavings.toLocaleString('es-AR')} · Efectivo/transf.)</span>
                </span>
              ) : selectedServices.length === 2 ? (
                <span className="text-[#8d89a6]">
                  Total: <strong className="text-base text-[#4c4664] font-medium mr-1">${subtotal.toLocaleString('es-AR')}</strong>· ¡Sumá 1 opción más para 15% OFF!
                </span>
              ) : (
                <span>Total: <strong className="text-base text-[#4c4664] font-medium ml-1">${subtotal.toLocaleString('es-AR')}</strong></span>
              )}
            </div>
          </div>

          <button
            onClick={() => setIsCheckoutOpen(true)}
            disabled={selectedServices.length === 0}
            className="flex items-center justify-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 text-sm sm:text-base font-button tracking-wide text-white bg-[#8d89a6] hover:bg-[#4c4664] rounded-xl disabled:opacity-40 disabled:pointer-events-none transition-all shadow-xs active:scale-[0.99] whitespace-nowrap shrink-0 self-stretch sm:self-auto"
          >
            <ShoppingBag className="w-4 h-4 text-[#f2d5f8] shrink-0" />
            <span>Confirmar regalo</span>
            <ArrowRight className="w-4 h-4 text-[#f2d5f8] shrink-0" />
          </button>
        </div>
      </main>

      {/* Footer with address, Instagrams and 60-day validity */}
      <Footer
        whatsappNumber={CLINIC_WHATSAPP}
        hasStickyBar={selectedServices.length > 0 && !isCheckoutOpen}
      />

      {/* Simple Checkout Modal/Drawer */}
      <CheckoutDrawer
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        selectedItems={selectedServices}
        onRemoveItem={handleRemove}
        onClearAll={handleClearAll}
        formData={formData}
        onFormChange={handleFormChange}
        whatsappNumber={CLINIC_WHATSAPP}
      />

      {/* Sticky Bottom Bar on mobile/desktop when services are selected */}
      {selectedServices.length > 0 && !isCheckoutOpen && (
        <div className="fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-[#bfabcb]/40 py-2 sm:py-2.5 px-3 sm:px-4 shadow-md">
          <div className="max-w-6xl mx-auto flex flex-row items-center justify-between gap-2 flex-nowrap">
            {/* Left Info: 3 opciones · 15% OFF · $80.750 */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-nowrap whitespace-nowrap min-w-0">
              <span className="text-xs sm:text-sm font-medium text-[#4c4664] whitespace-nowrap shrink-0">
                {selectedServices.length} {selectedServices.length === 1 ? 'opción' : 'opciones'}
              </span>
              {isDiscountApplied && (
                <span className="text-[10px] sm:text-[11px] font-normal text-[#4c4664] bg-[#e6c0e9]/50 border border-[#bfabcb]/50 px-1.5 py-0.5 rounded-md whitespace-nowrap shrink-0">
                  15% OFF
                </span>
              )}
              <span className="text-[#bfabcb] shrink-0 text-xs sm:text-sm">·</span>
              <span className="text-xs sm:text-sm font-bold text-[#4c4664] tabular-nums whitespace-nowrap shrink-0">
                ${finalTotal.toLocaleString('es-AR')}
              </span>
            </div>

            {/* Right Button: Pedir por WhatsApp */}
            <button
              onClick={() => setIsCheckoutOpen(true)}
              className="flex items-center gap-1 sm:gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-button tracking-wide text-white bg-[#8d89a6] hover:bg-[#4c4664] rounded-xl transition-colors shadow-xs whitespace-nowrap shrink-0"
            >
              <span className="whitespace-nowrap">Pedir por WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#f2d5f8] shrink-0" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
