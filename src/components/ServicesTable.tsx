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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
      {categories.map((catKey) => {
        const info = BUSINESSES_INFO[catKey];
        const services = SERVICES_LIST.filter((s) => s.category === catKey);
        const selectedCountInGroup = services.filter((s) => selectedIds.includes(s.id)).length;

        return (
          <div
            key={catKey}
            className="bg-white rounded-xl border border-stone-200 shadow-xs overflow-hidden flex flex-col h-full"
          >
            {/* Business Header */}
            <div className="p-4 sm:p-5 bg-stone-50/80 border-b border-stone-200 flex flex-col justify-between gap-3">
              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-xs uppercase tracking-wider font-bold text-[#9C5B52]">
                    {info.typeLabel}
                  </span>
                  <span className="text-[11px] text-stone-500 font-medium">
                    {selectedCountInGroup > 0 ? (
                      <span className="text-[#9C5B52] font-semibold bg-[#FAF3F0] px-2 py-0.5 rounded border border-[#E8D6CF]">
                        {selectedCountInGroup} de 5
                      </span>
                    ) : (
                      '5 opciones'
                    )}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-stone-900 leading-snug">
                  {info.name}
                </h3>
                <p className="text-xs text-stone-500 mt-1 line-clamp-2 min-h-[2rem]">
                  {info.subtitle}
                </p>
              </div>

              {/* Instagram link */}
              <div>
                <a
                  href={info.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium text-stone-700 bg-white border border-stone-200 hover:border-stone-400 hover:text-stone-950 transition-colors"
                  title={`Ver Instagram de ${info.name}`}
                >
                  <span>{info.instagramHandle}</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>
              </div>
            </div>

            {/* Simple Table Rows */}
            <div className="divide-y divide-stone-100 flex-1">
              {services.map((service) => {
                const isChecked = selectedIds.includes(service.id);
                return (
                  <label
                    key={service.id}
                    onClick={() => onToggle(service.id)}
                    className={`flex items-start justify-between p-3.5 sm:p-4 cursor-pointer select-none transition-colors gap-3 ${
                      isChecked
                        ? 'bg-[#FAF3F0]/70 hover:bg-[#FAF3F0]'
                        : 'hover:bg-stone-50/80'
                    }`}
                  >
                    <div className="flex items-start gap-3 min-w-0 flex-1">
                      {/* Checkbox */}
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center border transition-all shrink-0 mt-0.5 ${
                          isChecked
                            ? 'bg-[#B87364] border-[#B87364] text-white shadow-xs'
                            : 'border-stone-300 bg-white hover:border-stone-400'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>

                      <span
                        className={`text-xs sm:text-sm leading-snug ${
                          isChecked ? 'text-stone-950 font-semibold' : 'text-stone-700'
                        }`}
                      >
                        {service.name}
                      </span>
                    </div>

                    <div className="shrink-0 text-right mt-0.5">
                      <span className="text-xs sm:text-sm font-bold text-stone-900 tabular-nums">
                        ${service.price.toLocaleString('es-AR')}
                      </span>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
