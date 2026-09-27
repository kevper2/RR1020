import React from 'react';
import { Check, ExternalLink } from 'lucide-react';
import { BusinessCategory } from '../types';
import { BUSINESSES_INFO, SERVICES_LIST } from '../data/servicesData';

interface ServicesTableProps {
  selectedIds: string[];
  onToggle: (id: string) => void;
}

export const ServicesTable: React.FC<ServicesTableProps> = ({ selectedIds, onToggle }) => {
  const categories: BusinessCategory[] = ['peluqueria', 'manicuria', 'ropa'];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
      {categories.map((catKey) => {
        const info = BUSINESSES_INFO[catKey];
        const services = SERVICES_LIST.filter((s) => s.category === catKey);
        const selectedCountInGroup = services.filter((s) => selectedIds.includes(s.id)).length;

        return (
          <div
            key={catKey}
            className="card-glow-subtle bg-white rounded-2xl border border-[#bfabcb]/40 shadow-xs overflow-hidden flex flex-col h-full"
          >
            {/* Compact Business Header with solid background & delicate fonts */}
            <div className="px-4 py-3.5 bg-[#f2d5f8]/35 border-b border-[#bfabcb]/30">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] uppercase tracking-widest font-normal text-[#8d89a6]">
                  {info.typeLabel}
                </span>

                <a
                  href={info.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-normal text-[#8d89a6] hover:text-[#4c4664] transition-colors"
                  title={`Instagram de ${info.name}`}
                >
                  <span>{info.instagramHandle}</span>
                  <ExternalLink className="w-2.5 h-2.5 text-[#bfabcb]" />
                </a>
              </div>

              <div className="flex items-baseline justify-between gap-2 mt-1">
                <h3 className="text-2xl sm:text-[27px] font-story-script text-[#4c4664] tracking-normal leading-tight">
                  {info.name}
                </h3>
                {selectedCountInGroup > 0 ? (
                  <span className="inline-flex items-center gap-1 text-[11px] font-normal text-[#4c4664] bg-[#e6c0e9]/50 px-2.5 py-0.5 rounded-full border border-[#bfabcb]/40">
                    <span>{selectedCountInGroup} de {services.length}</span>
                  </span>
                ) : (
                  <span className="text-[11px] text-[#8d89a6] font-light">{services.length} opciones</span>
                )}
              </div>

              <p className="text-[11px] sm:text-xs text-[#8d89a6] font-light mt-0.5 truncate">
                {info.subtitle}
              </p>
            </div>

            {/* Compact Table Rows with clean solid backgrounds */}
            <div className="divide-y divide-[#bfabcb]/20 flex-1 bg-white">
              {services.map((service) => {
                const isChecked = selectedIds.includes(service.id);
                return (
                  <button
                    type="button"
                    key={service.id}
                    onClick={() => onToggle(service.id)}
                    className={`w-full text-left flex items-center justify-between px-3.5 py-2.5 cursor-pointer select-none transition-colors duration-150 gap-2.5 group ${
                      isChecked
                        ? 'bg-[#f2d5f8]/45 hover:bg-[#f2d5f8]/60'
                        : 'hover:bg-[#fbf9fc]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0 flex-1">
                      {/* Checkbox in Lavender Grey / Lilac */}
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center border transition-all shrink-0 ${
                          isChecked
                            ? 'bg-[#8d89a6] border-[#8d89a6] text-white'
                            : 'border-[#bfabcb] bg-white group-hover:border-[#8d89a6]'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[2.5]" />}
                      </div>

                      <span
                        className={`text-xs sm:text-[13px] leading-tight truncate transition-colors ${
                          isChecked
                            ? 'text-[#4c4664] font-medium'
                            : 'text-[#4c4664]/85 font-normal group-hover:text-[#4c4664]'
                        }`}
                        title={service.name}
                      >
                        {service.name}
                      </span>
                    </div>

                    <div className="shrink-0 text-right">
                      <span
                        className={`text-xs sm:text-[13px] tabular-nums transition-colors ${
                          isChecked ? 'font-semibold text-[#4c4664]' : 'font-normal text-[#8d89a6]'
                        }`}
                      >
                        ${service.price.toLocaleString('es-AR')}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
