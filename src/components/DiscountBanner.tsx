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
    <div className="scroll-reveal bg-white border border-[#bfabcb]/40 rounded-2xl p-4 sm:p-5 mb-8 shadow-xs relative text-center">
      <div className="flex flex-col items-center justify-center gap-2.5 relative z-10 text-center">
        {/* Top Tag with Icon */}
        <div className="flex items-center justify-center gap-2">
          <div className="p-1 rounded-md bg-[#f2d5f8]/50 border border-[#bfabcb]/40 text-[#4c4664] shrink-0">
            {discountApplied ? (
              <Check className="w-3.5 h-3.5 text-[#4c4664] stroke-[2.5]" />
            ) : (
              <Gift className="w-3.5 h-3.5 text-[#8d89a6]" />
            )}
          </div>
          <span className="text-[11px] uppercase tracking-widest font-normal text-[#8d89a6]">
            Beneficio especial: mínimo 3 servicios y/o productos
          </span>
          <span className="text-xs text-[#bfabcb]">·</span>
          <span className="text-xs text-[#8d89a6] font-light">Día de la Madre</span>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-story-script text-[#4c4664] mt-1 tracking-normal leading-tight">
            {discountApplied ? (
              <>
                <span className="block sm:inline">¡Descuento del 15%</span>{' '}
                <span className="block sm:inline">activado en tu regalo!</span>
              </>
            ) : (
              '15% de descuento (mínimo 3 servicios y/o productos)'
            )}
          </h3>

          <p className="text-xs sm:text-sm text-[#8d89a6] font-light mt-1 max-w-xl mx-auto">
            {discountApplied ? (
              <span>
                Elegiste <strong className="text-[#4c4664] font-medium">{selectedCount} {selectedCount === 1 ? 'opción' : 'opciones'}</strong>. Ahorrás{' '}
                <strong className="text-[#4c4664] font-medium tabular-nums">
                  ${savingsAmount.toLocaleString('es-AR')}
                </strong>{' '}
                en el total.
              </span>
            ) : selectedCount === 0 ? (
              'Marcá los servicios y productos que te gustaría incluir. Con un mínimo de 3 servicios y/o productos recibís 15% de descuento en el total.'
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

        {/* Progress Pills */}
        <div className="flex items-center justify-center gap-1.5 pt-1">
          {[1, 2, 3].map((step) => {
            const isFilled = selectedCount >= step;
            return (
              <div
                key={step}
                className={`h-2 rounded-full transition-all duration-300 ${
                  isFilled
                    ? 'w-8 bg-[#8d89a6]'
                    : 'w-6 bg-[#f2d5f8]'
                }`}
                title={`Paso ${step} de 3 para el descuento`}
              />
            );
          })}
        </div>

        {/* Payment Condition Clarification */}
        <div className="pt-1 text-[11px] sm:text-xs text-[#8d89a6] font-light">
          <span>* La promoción es válida exclusivamente abonando en efectivo o transferencia.</span>
        </div>
      </div>
    </div>
  );
};
