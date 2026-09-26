import React from 'react';
import { ShoppingBag, MapPin } from 'lucide-react';

interface HeaderProps {
  selectedCount: number;
  totalPrice: number;
  onOpenCheckout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ selectedCount, onOpenCheckout }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F5]/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Brand / Place Name */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900">
              Rudecindo Roca 1020
            </span>
            <span className="flex items-center gap-1 text-[11px] font-medium text-stone-500">
              <MapPin className="w-3 h-3 text-[#B87364]" />
              Esq. Elordi · San Martín de los Andes
            </span>
          </a>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCheckout}
            className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors shadow-xs"
            aria-label="Ver paquete regalo"
          >
            <ShoppingBag className="w-4 h-4 text-stone-300" />
            <span>Paquete</span>
            {selectedCount > 0 ? (
              <span className="ml-1 px-1.5 py-0.5 text-xs font-bold bg-[#B87364] text-white rounded">
                {selectedCount}
              </span>
            ) : null}
          </button>
        </div>
      </div>
    </header>
  );
};
