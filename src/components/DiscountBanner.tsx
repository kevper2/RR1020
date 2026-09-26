import React from 'react';
import { Sparkles, Check, Gift } from 'lucide-react';

interface DiscountBannerProps {
  selectedCount: number;
  discountApplied: boolean;
  savingsAmount: number;
}

export const DiscountBanner: React.FC<DiscountBannerProps> = ({
  selectedCount,
  discountApplied,
  savingsAmount,
}) => {
  const needed = Math.max(0, 3 - selectedCount);

  return (
    <div className="bg-[#FAF3F0] border border-[#E8D6CF] rounded-xl p-4 sm:p-5 mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-white border border-[#E8D6CF] text-[#9C5B52] shrink-0">
            {discountApplied ? (
              <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
            ) : (
              <Gift className="w-4 h-4" />
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider font-bold text-[#9C5B52]">
                Beneficio Especial
              </span>
              <span className="text-xs text-stone-400">·</span>
              <span className="text-xs text-stone-600 font-medium">Día de la Madre</span>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-0.5">
              {discountApplied
                ? '¡Descuento del 10% activado en tu paquete!'
                : '10% de descuento a partir de 3 servicios'}
            </h3>

            <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
              {discountApplied ? (
                <span>
                  Seleccionaste <strong className="text-stone-900">{selectedCount} servicios</strong>. Ahorro de{' '}
                  <strong className="text-emerald-700 font-bold tabular-nums">
                    ${savingsAmount.toLocaleString('es-AR')}
                  </strong>{' '}
                  en el total.
                </span>
              ) : selectedCount === 0 ? (
                'Marca los servicios que desees en las tablas de abajo. Con 3 o más servicios recibes el 10% de descuento.'
              ) : (
                <span>
                  Llevas <strong className="text-stone-900">{selectedCount} {selectedCount === 1 ? 'servicio' : 'servicios'}</strong>.{' '}
                  {needed > 0
                    ? `Suma ${needed} más para activar el 10% de descuento.`
                    : ''}
                </span>
              )}
            </p>
          </div>
        </div>

        {/* Progress tag */}
        <div className="shrink-0 flex items-center gap-2 self-start sm:self-center bg-white px-3 py-1.5 rounded-lg border border-[#E8D6CF] text-xs font-semibold text-stone-800">
          <span>Servicios elegidos:</span>
          <span className="text-[#9C5B52] tabular-nums font-bold">
            {selectedCount} {discountApplied ? '(10% OFF ✓)' : ''}
          </span>
        </div>
      </div>
    </div>
  );
};
