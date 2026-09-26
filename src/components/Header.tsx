import React from 'react';
import { ShoppingBag, Instagram } from 'lucide-react';

interface HeaderProps {
  selectedCount: number;
  totalPrice: number;
  onOpenCheckout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ selectedCount, onOpenCheckout }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F5]/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-4">
        {/* Brand / Place Name */}
        <div className="flex items-center gap-3 shrink-0">
          <a href="#" className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900">
              Rudecindo Roca 1020
            </span>
          </a>
        </div>

        {/* 3 Instagram Links in the Hero Bar */}
        <nav className="hidden sm:flex items-center gap-2 md:gap-3 text-xs">
          <a
            href="https://www.instagram.com/peluq_jv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-stone-700 bg-white border border-stone-200/90 hover:border-stone-400 hover:text-stone-950 transition-colors"
            title="Instagram JV Estilista (Peluquería)"
          >
            <Instagram className="w-3.5 h-3.5 text-[#9C5B52]" />
            <span className="font-semibold">JV Estilista</span>
          </a>

          <a
            href="https://www.instagram.com/yasmin_nails.sma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-stone-700 bg-white border border-stone-200/90 hover:border-stone-400 hover:text-stone-950 transition-colors"
            title="Instagram Yasmin Studio de Uñas (Manicura)"
          >
            <Instagram className="w-3.5 h-3.5 text-[#9C5B52]" />
            <span className="font-semibold">Yasmin Nails</span>
          </a>

          <a
            href="https://www.instagram.com/ropainteriorjazmin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-stone-700 bg-white border border-stone-200/90 hover:border-stone-400 hover:text-stone-950 transition-colors"
            title="Instagram Jazmín (Ropa interior y deportiva)"
          >
            <Instagram className="w-3.5 h-3.5 text-[#9C5B52]" />
            <span className="font-semibold">Jazmín</span>
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3 shrink-0">
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

      {/* Mobile-only secondary instagram strip */}
      <div className="sm:hidden flex items-center justify-around px-3 py-1.5 bg-stone-100/70 border-t border-stone-200/60 text-[11px]">
        <a
          href="https://www.instagram.com/peluq_jv"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-stone-600 hover:text-stone-900"
        >
          <Instagram className="w-3 h-3 text-[#9C5B52]" />
          <span>@peluq_jv</span>
        </a>
        <span className="text-stone-300">·</span>
        <a
          href="https://www.instagram.com/yasmin_nails.sma"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-stone-600 hover:text-stone-900"
        >
          <Instagram className="w-3 h-3 text-[#9C5B52]" />
          <span>@yasmin_nails</span>
        </a>
        <span className="text-stone-300">·</span>
        <a
          href="https://www.instagram.com/ropainteriorjazmin"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-stone-600 hover:text-stone-900"
        >
          <Instagram className="w-3 h-3 text-[#9C5B52]" />
          <span>@ropainteriorjazmin</span>
        </a>
      </div>
    </header>
  );
};
