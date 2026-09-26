import React from 'react';
import { ArrowDown, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroProps {
  onScrollToTable: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToTable }) => {
  return (
    <section className="py-10 sm:py-14 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Tag / Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF3F0] border border-[#E8D6CF] rounded-md text-xs font-semibold text-[#9C5B52] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Tres espacios de belleza en un único lugar</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight text-balance mb-5">
          Regalá a tu mamá una renovación inolvidable
        </h1>

        {/* Subtitle (sentence about discount removed and adapted to Argentine Spanish) */}
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-3xl mb-8">
          Peluquería de autor, spa de uñas y una exclusiva selección de lencería y ropa deportiva. Creá un paquete de regalo a su medida combinando los servicios que más le gusten.
        </p>

        {/* Action + Key Badges */}
        <div className="flex flex-wrap items-center gap-4 pt-1">
          <button
            onClick={onScrollToTable}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors shadow-xs"
          >
            <span>Elegí los servicios del paquete</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          <div className="flex flex-wrap items-center gap-4 text-xs text-stone-600 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Validez de 30 días
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#9C5B52]" />
              Entrega física o digital, a elección
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
