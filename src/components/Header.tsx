import React from 'react';
import { ShoppingBag, Instagram } from 'lucide-react';

interface HeaderProps {
  selectedCount: number;
  totalPrice: number;
  onOpenCheckout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ selectedCount, onOpenCheckout }) => {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#bfabcb]/40 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-4">
        {/* Brand / Place Name */}
        <div className="flex items-center gap-3 shrink-0">
          <a href="#" className="flex flex-col group">
            <span className="text-3xl sm:text-4xl font-story-script text-[#4c4664] group-hover:text-[#8d89a6] transition-colors leading-tight">
              Las 3
            </span>
          </a>
        </div>

        {/* 3 Instagram Links in the Header Bar */}
        <nav className="hidden sm:flex items-center gap-2 md:gap-3 text-xs">
          <a
            href="https://www.instagram.com/peluq_jv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[#4c4664] bg-white border border-[#bfabcb]/50 hover:border-[#8d89a6] hover:bg-[#f2d5f8]/30 transition-all"
            title="Instagram JV Estilista (Peluquería)"
          >
            <Instagram className="w-3.5 h-3.5 text-[#8d89a6]" />
            <span className="font-normal">JV Estilista</span>
          </a>

          <a
            href="https://www.instagram.com/yasmin_nails.sma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[#4c4664] bg-white border border-[#bfabcb]/50 hover:border-[#8d89a6] hover:bg-[#f2d5f8]/30 transition-all"
            title="Instagram Yasmin Studio de Uñas (Manicura)"
          >
            <Instagram className="w-3.5 h-3.5 text-[#8d89a6]" />
            <span className="font-normal">Yasmin Nails</span>
          </a>

          <a
            href="https://www.instagram.com/ropainteriorjazmin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[#4c4664] bg-white border border-[#bfabcb]/50 hover:border-[#8d89a6] hover:bg-[#f2d5f8]/30 transition-all"
            title="Instagram Jazmín (Ropa interior y deportiva)"
          >
            <Instagram className="w-3.5 h-3.5 text-[#8d89a6]" />
            <span className="font-normal">Jazmín</span>
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenCheckout}
            className="flex items-center gap-2 px-4 py-2 text-sm sm:text-base font-button text-white bg-[#8d89a6] hover:bg-[#4c4664] rounded-xl transition-all shadow-xs"
            aria-label="Ver regalo"
          >
            <ShoppingBag className="w-4 h-4 text-[#f2d5f8]" />
            <span>Regalo</span>
            {selectedCount > 0 ? (
              <span className="ml-1 px-1.5 py-0.5 text-xs font-sans font-medium bg-[#e6c0e9] text-[#4c4664] rounded-md">
                {selectedCount}
              </span>
            ) : null}
          </button>
        </div>
      </div>

      {/* Mobile-only secondary instagram strip */}
      <div className="sm:hidden flex items-center justify-around px-3 py-1.5 bg-[#f2d5f8]/30 border-t border-[#bfabcb]/30 text-[11px]">
        <a
          href="https://www.instagram.com/peluq_jv"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[#4c4664] font-normal"
        >
          <Instagram className="w-3 h-3 text-[#8d89a6]" />
          <span>JV Estilista</span>
        </a>
        <span className="text-[#bfabcb]">·</span>
        <a
          href="https://www.instagram.com/yasmin_nails.sma"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[#4c4664] font-normal"
        >
          <Instagram className="w-3 h-3 text-[#8d89a6]" />
          <span>Yasmin Nails</span>
        </a>
        <span className="text-[#bfabcb]">·</span>
        <a
          href="https://www.instagram.com/ropainteriorjazmin"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[#4c4664] font-normal"
        >
          <Instagram className="w-3 h-3 text-[#8d89a6]" />
          <span>Jazmín</span>
        </a>
      </div>
    </header>
  );
};
