/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DiscountBanner } from './components/DiscountBanner';
import { ServicesTable } from './components/ServicesTable';
import { CheckoutDrawer } from './components/CheckoutDrawer';
import { Footer } from './components/Footer';
import { SERVICES_LIST } from './data/servicesData';
import { BookingFormState } from './types';
import { ShoppingBag, ArrowRight, Sparkles, Check, Calendar, MapPin } from 'lucide-react';

const CLINIC_WHATSAPP = '+54 9 2944 33-5996';

export default function App() {
  // Pre-select 1 or 2 options initially to show functionality, or start empty. Let's start with 2 popular ones:
  const [selectedIds, setSelectedIds] = useState<string[]>(['pel-1', 'man-2']);
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

  // Discount rule: 3 or more services for 10% discount
  const isDiscountApplied = selectedServices.length >= 3;
  const discountSavings = isDiscountApplied ? Math.round(subtotal * 0.1) : 0;
  const finalTotal = subtotal - discountSavings;

  const scrollToTable = () => {
    const el = document.getElementById('tabla-servicios');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F5] text-stone-800 font-sans selection:bg-[#EAD8D0]">
      {/* Top Header */}
      <Header
        selectedCount={selectedServices.length}
        totalPrice={finalTotal}
        onOpenCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* Hero Section */}
      <Hero onScrollToTable={scrollToTable} />

      {/* Main Services Selection Area */}
      <main id="tabla-servicios" className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 py-10 w-full">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-stone-900 tracking-tight">
              Selecciona los servicios para el paquete
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Marca los servicios que deseas incluir de cada negocio. Puedes elegir todos los que quieras.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-stone-500 font-medium self-start sm:self-auto bg-white px-3 py-1.5 rounded-lg border border-stone-200">
            <Calendar className="w-3.5 h-3.5 text-[#B87364]" />
            <span>Validez: 30 días</span>
          </div>
        </div>

        {/* Dynamic 10% Discount Banner */}
        <DiscountBanner
          selectedCount={selectedServices.length}
          discountApplied={isDiscountApplied}
          savingsAmount={discountSavings}
        />

        {/* The Simple Selection Tables (5 options per business, no photos, no long descriptions) */}
        <ServicesTable selectedIds={selectedIds} onToggle={handleToggle} />

        {/* Summary Callout Card at bottom of table */}
        <div className="mt-10 p-5 sm:p-6 bg-white rounded-xl border border-stone-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs uppercase tracking-wider text-[#9C5B52] font-bold">
              Resumen del Paquete Regalo
            </span>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="text-xl font-bold text-stone-900">
                {selectedServices.length} {selectedServices.length === 1 ? 'servicio elegido' : 'servicios elegidos'}
              </span>
              {isDiscountApplied && (
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                  10% OFF Aplicado
                </span>
              )}
            </div>
            <p className="text-xs text-stone-500">
              {isDiscountApplied ? (
                <span>
                  Total con descuento: <strong className="text-stone-900">${finalTotal.toLocaleString('es-AR')}</strong> (Ahorras ${discountSavings.toLocaleString('es-AR')})
                </span>
              ) : selectedServices.length === 2 ? (
                <span className="text-[#9C5B52] font-medium">
                  ¡Suma 1 servicio más para recibir 10% de descuento en el total!
                </span>
              ) : (
                <span>Total: ${subtotal.toLocaleString('es-AR')}</span>
              )}
            </p>
          </div>

          <button
            onClick={() => setIsCheckoutOpen(true)}
            disabled={selectedServices.length === 0}
            className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 disabled:opacity-40 disabled:pointer-events-none transition-colors shadow-xs"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Confirmar Datos y Enviar a WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-stone-400" />
          </button>
        </div>
      </main>

      {/* Footer with address, Instagrams and 30-day validity */}
      <Footer whatsappNumber={CLINIC_WHATSAPP} />

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
        <div className="fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-stone-200 py-3 px-4 shadow-lg">
          <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-bold text-stone-900">
                {selectedServices.length} {selectedServices.length === 1 ? 'servicio' : 'servicios'}
              </span>
              {isDiscountApplied && (
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                  10% OFF
                </span>
              )}
              <span className="text-stone-300">·</span>
              <span className="text-sm font-extrabold text-stone-900 tabular-nums">
                ${finalTotal.toLocaleString('es-AR')}
              </span>
            </div>

            <button
              onClick={() => setIsCheckoutOpen(true)}
              className="flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors shadow-xs"
            >
              <span>Pedir por WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
