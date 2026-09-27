import React from 'react';
import { ArrowDown, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { DiscountBanner } from './DiscountBanner';

interface HeroProps {
  onScrollToTable: () => void;
  selectedCount: number;
  discountApplied: boolean;
  savingsAmount: number;
}

export const Hero: React.FC<HeroProps> = ({
  onScrollToTable,
  selectedCount,
  discountApplied,
  savingsAmount,
}) => {
  return (
    <section className="py-10 sm:py-16 border-b border-[#bfabcb]/30 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Tag / Pill */}
        <div className="scroll-reveal inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#f2d5f8]/50 border border-[#bfabcb]/50 rounded-full text-xs font-normal tracking-wide text-[#4c4664] mb-5 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#8d89a6]" />
          <span>Tres espacios de belleza en un único lugar</span>
        </div>

        {/* Title with refined, feminine Story Script font (lighter weight) */}
        <h1 className="scroll-reveal delay-100 text-4xl sm:text-6xl lg:text-7xl font-story-script text-[#4c4664] tracking-normal leading-[1.25] text-balance mb-5 max-w-4xl">
          Regalá a tu mamá una renovación inolvidable
        </h1>

        {/* Subtitle con punto y aparte */}
        <div className="scroll-reveal delay-200 text-base sm:text-lg text-[#8d89a6] font-light leading-relaxed max-w-3xl mb-7 space-y-2">
          <p>
            Peluquería de autor, spa de uñas y una exclusiva selección de lencería y ropa deportiva en nuestro espacio <strong className="font-medium text-[#4c4664]">Las 3</strong>.
          </p>
          <p>
            Creá un paquete de regalo a su medida combinando los servicios que más le gusten.
          </p>
        </div>

        {/* Beneficio Especial subido a la parte superior para verse al abrir la página */}
        <div className="max-w-3xl">
          <DiscountBanner
            selectedCount={selectedCount}
            discountApplied={discountApplied}
            savingsAmount={savingsAmount}
          />
        </div>

        {/* Action + Key Badges - Centered */}
        <div className="scroll-reveal delay-300 flex flex-col items-center justify-center gap-3.5 pt-4 text-center">
          <button
            onClick={onScrollToTable}
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 text-sm sm:text-base md:text-lg font-button tracking-wide text-white bg-[#8d89a6] hover:bg-[#4c4664] rounded-xl transition-all shadow-xs active:scale-[0.99] group whitespace-nowrap"
          >
            <span className="whitespace-nowrap">Elegí los servicios y productos del regalo</span>
            <ArrowDown className="w-4 h-4 text-[#e6c0e9] group-hover:translate-y-0.5 transition-transform shrink-0" />
          </button>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-[#4c4664] font-normal bg-[#fbf9fc] px-4 py-2 rounded-xl border border-[#bfabcb]/40">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#8d89a6]" />
              Validez de 60 días
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#8d89a6]" />
              Entrega física o digital, a elección
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
