import React from 'react';
import { ArrowDown, Instagram, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';

interface HeroProps {
  onScrollToTable: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToTable }) => {
  return (
    <section className="py-10 sm:py-14 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Location Bar */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF3F0] border border-[#E8D6CF] rounded-md text-xs font-semibold text-[#9C5B52] mb-6">
          <MapPin className="w-3.5 h-3.5" />
          <span>Rudecindo Roca 1020, esq. Elordi · San Martín de los Andes</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight text-balance mb-5">
          Regálale una renovación inolvidable: tres espacios de belleza en un único lugar
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-3xl mb-8">
          Peluquería de autor, spa de uñas y una exclusiva selección de lencería y ropa deportiva. Crea un paquete de regalo a su medida combinando los servicios que más le gusten. Si seleccionas 3 o más servicios, disfrutas de un 10% de descuento especial en el total.
        </p>

        {/* 3 Businesses Quick Bar with direct Instagram links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
          {/* Peluquería */}
          <a
            href="https://www.instagram.com/peluq_jv"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 bg-white rounded-lg border border-stone-200 hover:border-stone-300 transition-colors flex items-center justify-between group"
          >
            <div>
              <span className="text-[11px] font-semibold uppercase text-stone-400 block">Peluquería</span>
              <span className="text-sm font-bold text-stone-900 group-hover:text-[#9C5B52] transition-colors">
                JV Estilista
              </span>
              <span className="text-xs text-stone-500 block">@peluq_jv</span>
            </div>
            <Instagram className="w-4 h-4 text-stone-400 group-hover:text-stone-700" />
          </a>

          {/* Manicuría */}
          <a
            href="https://www.instagram.com/yasmin_nails.sma"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 bg-white rounded-lg border border-stone-200 hover:border-stone-300 transition-colors flex items-center justify-between group"
          >
            <div>
              <span className="text-[11px] font-semibold uppercase text-stone-400 block">Manicuría</span>
              <span className="text-sm font-bold text-stone-900 group-hover:text-[#9C5B52] transition-colors">
                Yasmin Studio de Uñas
              </span>
              <span className="text-xs text-stone-500 block">@yasmin_nails.sma</span>
            </div>
            <Instagram className="w-4 h-4 text-stone-400 group-hover:text-stone-700" />
          </a>

          {/* Ropa */}
          <a
            href="https://www.instagram.com/ropainteriorjazmin"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 bg-white rounded-lg border border-stone-200 hover:border-stone-300 transition-colors flex items-center justify-between group"
          >
            <div>
              <span className="text-[11px] font-semibold uppercase text-stone-400 block">Ropa Interior & Deportiva</span>
              <span className="text-sm font-bold text-stone-900 group-hover:text-[#9C5B52] transition-colors">
                Jazmín
              </span>
              <span className="text-xs text-stone-500 block">@ropainteriorjazmin</span>
            </div>
            <Instagram className="w-4 h-4 text-stone-400 group-hover:text-stone-700" />
          </a>
        </div>

        {/* Action + Key Badges */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            onClick={onScrollToTable}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors shadow-xs"
          >
            <span>Seleccionar Servicios del Paquete</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          <div className="flex flex-wrap items-center gap-4 text-xs text-stone-600 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Validez de 30 días
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#9C5B52]" />
              Entrega física o digital a elección
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
