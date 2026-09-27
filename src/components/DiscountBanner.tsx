import React from 'react';
import { Check, Gift } from 'lucide-react';

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
    <div className="scroll-reveal bg-white border border-[#bfabcb]/40 rounded-2xl p-4 sm:p-5 mb-8 shadow-xs relative">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
        <div className="flex items-start gap-3.5">
          <div className="p-2.5 rounded-xl bg-[#f2d5f8]/50 border border-[#bfabcb]/40 text-[#4c4664] shrink-0">
            {discountApplied ? (
              <Check className="w-4 h-4 text-[#4c4664] stroke-[2.5]" />
            ) : (
              <Gift className="w-4 h-4 text-[#8d89a6]" />
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-widest font-normal text-[#8d89a6]">
                Beneficio Especial
              </span>
              <span className="text-xs text-[#bfabcb]">·</span>
              <span className="text-xs text-[#8d89a6] font-light">Día de la Madre</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-story-script text-[#4c4664] mt-1 tracking-normal">
              {discountApplied
                ? '¡Descuento del 15% activado en tu regalo!'
                : '15% de descuento a partir de 3 servicios'}
            </h3>

            <p className="text-xs sm:text-sm text-[#8d89a6] font-light mt-0.5">
              {discountApplied ? (
                <span>
                  Elegiste <strong className="text-[#4c4664] font-medium">{selectedCount} {selectedCount === 1 ? 'opción' : 'opciones'}</strong>. Ahorrás{' '}
                  <strong className="text-[#4c4664] font-medium tabular-nums">
                    ${savingsAmount.toLocaleString('es-AR')}
                  </strong>{' '}
                  en el total.
                </span>
              ) : selectedCount === 0 ? (
                'Marcá los servicios y productos que te gustaría incluir. Con 3 o más recibís 15% de descuento en el total.'
              ) : (
                <span>
                  Llevás <strong className="text-[#4c4664] font-medium">{selectedCount} {selectedCount === 1 ? 'opción' : 'opciones'}</strong>.{' '}
                  {needed > 0
                    ? `Sumá ${needed} más para activar el 15% de descuento.`
                    : ''}
                </span>
              )}
            </p>
          </div>
        </div>

        {/* Progress Pills */}
        <div className="flex items-center gap-1.5 self-end sm:self-center shrink-0">
          {[1, 2, 3].map((step) => {
            const isFilled = selectedCount >= step;
            return (
              <div
                key={step}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  isFilled
                    ? 'w-8 bg-[#8d89a6]'
                    : 'w-6 bg-[#f2d5f8]'
                }`}
                title={`Paso ${step} de 3 para el descuento`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
