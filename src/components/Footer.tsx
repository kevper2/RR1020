import React from 'react';
import { MapPin, Phone, Instagram, ShieldCheck, Calendar } from 'lucide-react';

interface FooterProps {
  whatsappNumber: string;
}

export const Footer: React.FC<FooterProps> = ({ whatsappNumber }) => {
  return (
    <footer className="bg-[#4c4664] text-[#e6c0e9] py-12 border-t border-[#8d89a6]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-[#8d89a6]/30">
          {/* Location & Brand */}
          <div className="space-y-3 scroll-reveal">
            <div>
              <span className="text-3xl font-story-script text-white block tracking-normal">
                Las 3
              </span>
              <span className="text-xs text-[#bfabcb] font-normal tracking-wider uppercase font-sans">
                Espacio de Belleza
              </span>
            </div>
            <div className="flex items-start gap-2 text-xs text-[#bfabcb]">
              <MapPin className="w-4 h-4 text-[#e6c0e9] shrink-0 mt-0.5" />
              <span>Rudecindo Roca 1020, esq. Elordi, San Martín de los Andes</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#bfabcb]">
              <Phone className="w-4 h-4 text-[#e6c0e9] shrink-0" />
              <span>WhatsApp: {whatsappNumber}</span>
            </div>
          </div>

          {/* 3 Spaces with Instagram */}
          <div className="space-y-2">
            <span className="text-xs uppercase font-normal text-white block tracking-wider font-sans">
              Los 3 Espacios
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://www.instagram.com/peluq_jv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#f2d5f8] hover:text-white transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#bfabcb]" />
                  <span>Peluquería: <strong className="font-medium text-white">JV Estilista</strong> (@peluq_jv)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/yasmin_nails.sma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#f2d5f8] hover:text-white transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#bfabcb]" />
                  <span>Manicuría: <strong className="font-medium text-white">Yasmin Studio de Uñas</strong> (@yasmin_nails.sma)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ropainteriorjazmin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#f2d5f8] hover:text-white transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#bfabcb]" />
                  <span>Ropa interior & deportiva: <strong className="font-medium text-white">Jazmín</strong> (@ropainteriorjazmin)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Gift Card Info */}
          <div className="space-y-2">
            <span className="text-xs uppercase font-normal text-white block tracking-wider font-sans">
              Condiciones del Regalo
            </span>
            <div className="flex items-center gap-2 text-xs text-[#bfabcb]">
              <Calendar className="w-4 h-4 text-[#e6c0e9] shrink-0" />
              <span>Validez de 60 días para utilizar los servicios.</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-[#bfabcb]">
              <ShieldCheck className="w-4 h-4 text-[#e6c0e9] shrink-0 mt-0.5" />
              <span>Tarjeta física para retirar o digital por WhatsApp.</span>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#bfabcb] gap-2">
          <p>© {new Date().getFullYear()} Las 3 · Rudecindo Roca 1020 · San Martín de los Andes</p>
          <p>Especial Día de la Madre</p>
        </div>
      </div>
    </footer>
  );
};
