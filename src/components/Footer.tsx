import React from 'react';
import { MapPin, Phone, Instagram, ShieldCheck, Calendar } from 'lucide-react';

interface FooterProps {
  whatsappNumber: string;
}

export const Footer: React.FC<FooterProps> = ({ whatsappNumber }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-stone-800">
          {/* Location & Brand */}
          <div className="space-y-3">
            <span className="text-xl font-bold text-white block">
              Rudecindo Roca 1020
            </span>
            <div className="flex items-start gap-2 text-xs text-stone-400">
              <MapPin className="w-4 h-4 text-[#B87364] shrink-0 mt-0.5" />
              <span>Rudecindo Roca 1020, esq. Elordi, San Martín de los Andes</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-stone-400">
              <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>WhatsApp: {whatsappNumber}</span>
            </div>
          </div>

          {/* 3 Spaces with Instagram */}
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold text-stone-400 block tracking-wider">
              Los 3 Espacios
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://www.instagram.com/peluq_jv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-stone-300 hover:text-white transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-stone-400" />
                  <span>Peluquería: <strong>JV Estilista</strong> (@peluq_jv)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/yasmin_nails.sma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-stone-300 hover:text-white transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-stone-400" />
                  <span>Manicuría: <strong>Yasmin Studio de Uñas</strong> (@yasmin_nails.sma)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ropainteriorjazmin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-stone-300 hover:text-white transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-stone-400" />
                  <span>Ropa interior & deportiva: <strong>Jazmín</strong> (@ropainteriorjazmin)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Gift Card Info */}
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold text-stone-400 block tracking-wider">
              Condiciones del Regalo
            </span>
            <div className="flex items-center gap-2 text-xs text-stone-400">
              <Calendar className="w-4 h-4 text-[#B87364] shrink-0" />
              <span>Validez de 30 días para utilizar los servicios.</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-stone-400">
              <ShieldCheck className="w-4 h-4 text-[#B87364] shrink-0 mt-0.5" />
              <span>Tarjeta física para retirar o digital por WhatsApp.</span>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-2">
          <p>© {new Date().getFullYear()} Rudecindo Roca 1020 · San Martín de los Andes</p>
          <p>Especial Día de la Madre</p>
        </div>
      </div>
    </footer>
  );
};
