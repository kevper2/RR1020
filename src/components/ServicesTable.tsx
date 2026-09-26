import React from 'react';
import { Check, ExternalLink } from 'lucide-react';
import { BusinessCategory, ServiceItem } from '../types';
import { BUSINESSES_INFO, SERVICES_LIST } from '../data/servicesData';

interface ServicesTableProps {
  selectedIds: string[];
  onToggle: (id: string) => void;
}

export const ServicesTable: React.FC<ServicesTableProps> = ({ selectedIds, onToggle }) => {
  const categories: BusinessCategory[] = ['peluqueria', 'manicuria', 'ropa'];

  return (
    <div className="space-y-8">
      {categories.map((catKey) => {
        const info = BUSINESSES_INFO[catKey];
        const services = SERVICES_LIST.filter((s) => s.category === catKey);
        const selectedCountInGroup = services.filter((s) => selectedIds.includes(s.id)).length;

        return (
          <div
            key={catKey}
            className="bg-white rounded-xl border border-stone-200/90 shadow-xs overflow-hidden"
          >
            {/* Business Header */}
            <div className="p-4 sm:p-5 bg-stone-50/70 border-b border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#9C5B52]">
                    {info.typeLabel}
                  </span>
                  <span className="text-xs text-stone-300">·</span>
                  <span className="text-xs text-stone-500">
                    {selectedCountInGroup > 0 ? (
                      <span className="font-medium text-[#9C5B52]">
                        {selectedCountInGroup} de 5 elegidos
                      </span>
                    ) : (
                      '5 opciones para elegir'
                    )}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-0.5">
                  {info.name}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                  {info.subtitle}
                </p>
              </div>

              {/* Instagram link */}
              <a
                href={info.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 self-start sm:self-center px-3 py-1.5 rounded-lg text-xs font-medium text-stone-700 bg-white border border-stone-200 hover:border-stone-400 hover:text-stone-950 transition-colors"
                title={`Ver Instagram de ${info.name}`}
              >
                <span>{info.instagramHandle}</span>
                <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
              </a>
            </div>

            {/* Simple Table */}
            <div className="divide-y divide-stone-100">
              {services.map((service) => {
                const isChecked = selectedIds.includes(service.id);
                return (
                  <label
                    key={service.id}
                    onClick={() => onToggle(service.id)}
                    className={`flex items-center justify-between p-3.5 sm:p-4 cursor-pointer select-none transition-colors ${
                      isChecked
                        ? 'bg-[#FAF3F0]/60 hover:bg-[#FAF3F0]'
                        : 'hover:bg-stone-50/80'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0 pr-4">
                      {/* Checkbox */}
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center border transition-all shrink-0 ${
                          isChecked
                            ? 'bg-[#B87364] border-[#B87364] text-white shadow-xs'
                            : 'border-stone-300 bg-white hover:border-stone-400'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>

                      <span
                        className={`text-sm sm:text-base font-normal truncate ${
                          isChecked ? 'text-stone-950 font-medium' : 'text-stone-700'
                        }`}
                      >
                        {service.name}
                      </span>
                    </div>

                    <div className="shrink-0 text-right">
                      <span className="text-sm sm:text-base font-semibold text-stone-900 tabular-nums">
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
