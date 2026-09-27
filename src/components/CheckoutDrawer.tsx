import React, { useState } from 'react';
import { X, Send, Trash2, Copy, Check, AlertCircle, Calendar } from 'lucide-react';
import { BookingFormState, ServiceItem } from '../types';

interface CheckoutDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItems: ServiceItem[];
  onRemoveItem: (id: string) => void;
  onClearAll: () => void;
  formData: BookingFormState;
  onFormChange: (updated: Partial<BookingFormState>) => void;
  whatsappNumber: string;
}

export const CheckoutDrawer: React.FC<CheckoutDrawerProps> = ({
  isOpen,
  onClose,
  selectedItems,
  onRemoveItem,
  onClearAll,
  formData,
  onFormChange,
  whatsappNumber,
}) => {
  const [copied, setCopied] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  if (!isOpen) return null;

  const subtotal = selectedItems.reduce((acc, item) => acc + item.price, 0);
  const isDiscountEligible = selectedItems.length >= 3;
  const discountAmount = isDiscountEligible ? Math.round(subtotal * 0.15) : 0;
  const finalTotal = subtotal - discountAmount;

  const peluqueriaItems = selectedItems.filter((i) => i.category === 'peluqueria');
  const manicuriaItems = selectedItems.filter((i) => i.category === 'manicuria');
  const ropaItems = selectedItems.filter((i) => i.category === 'ropa');

  const generateWhatsappMessage = () => {
    let msg = `🌸 *RESERVA DE REGALO - DÍA DE LA MADRE* 🌸\n`;
    msg += `✨ *Las 3 · Espacio de Belleza*\n`;
    msg += `📍 *Rudecindo Roca 1020, esq. Elordi, San Martín de los Andes*\n`;
    msg += `🗓️ *Validez:* 60 días desde la fecha de compra\n\n`;

    msg += `🎁 *Para:* ${formData.recipientName.trim()}\n`;
    msg += `💝 *De parte de:* ${formData.buyerName.trim() || 'No especificado'}\n`;
    msg += `💌 *Formato de tarjeta elegido:* ${
      formData.deliveryFormat === 'fisica'
        ? 'Tarjeta Física (para retirar en el local)'
        : 'Tarjeta Digital (envío por WhatsApp)'
    }\n`;

    if (formData.giftMessage.trim()) {
      msg += `💬 *Dedicatoria:*\n"${formData.giftMessage.trim()}"\n`;
    }
    if (formData.notes.trim()) {
      msg += `📝 *Observaciones:*\n${formData.notes.trim()}\n`;
    }

    msg += `\n✨ *OPCIONES SELECCIONADAS (${selectedItems.length}):*\n`;

    if (peluqueriaItems.length > 0) {
      msg += `\n💇‍♀️ *Peluquería (JV Estilista):*\n`;
      peluqueriaItems.forEach((i) => {
        msg += `• ${i.name} - $${i.price.toLocaleString('es-AR')}\n`;
      });
    }

    if (manicuriaItems.length > 0) {
      msg += `\n💅 *Manicuría (Yasmin Studio de Uñas):*\n`;
      manicuriaItems.forEach((i) => {
        msg += `• ${i.name} - $${i.price.toLocaleString('es-AR')}\n`;
      });
    }

    if (ropaItems.length > 0) {
      msg += `\n👗 *Ropa interior & deportiva (Jazmín):*\n`;
      ropaItems.forEach((i) => {
        msg += `• ${i.name} - $${i.price.toLocaleString('es-AR')}\n`;
      });
    }

    msg += `\n───────────────\n`;
    msg += `Subtotal: $${subtotal.toLocaleString('es-AR')}\n`;
    if (isDiscountEligible) {
      msg += `🎉 Descuento especial 3+ opciones (15% OFF): -$${discountAmount.toLocaleString('es-AR')}\n`;
    }
    msg += `*TOTAL A PAGAR: $${finalTotal.toLocaleString('es-AR')}*\n`;
    msg += `───────────────\n\n`;
    msg += `¡Hola! Me gustaría confirmar la reserva de este regalo para mamá. ¿Cómo procedemos con el pago y la entrega? Muchas gracias.`;

    return msg;
  };

  const handleSendWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedItems.length === 0) {
      setValidationError('Por favor seleccioná al menos 1 servicio antes de enviar.');
      return;
    }

    if (!formData.recipientName.trim()) {
      setValidationError('Por favor indicá el nombre de la mamá homenajeada.');
      return;
    }

    setValidationError(null);
    const message = generateWhatsappMessage();
    const cleanNumber = whatsappNumber.replace(/[^0-9]/g, '');
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${cleanNumber}?text=${encoded}`;
    window.open(url, '_blank');
  };

  const handleCopy = () => {
    const text = generateWhatsappMessage();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-[#4c4664]/30 backdrop-blur-2xs">
      <div className="relative w-full max-w-lg h-full bg-[#fbf9fc] shadow-2xl flex flex-col overflow-hidden border-l border-[#bfabcb]/40">
        {/* Header */}
        <div className="px-5 py-4 bg-white border-b border-[#bfabcb]/30 flex items-center justify-between shrink-0 shadow-2xs">
          <div>
            <h3 className="text-2xl font-story-script text-[#4c4664] tracking-normal">
              Confirmar Regalo
            </h3>
            <p className="text-xs text-[#8d89a6] font-light">
              Las 3 · Rudecindo Roca 1020 · Validez 60 días
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#8d89a6] hover:text-[#4c4664] hover:bg-[#f2d5f8]/40 transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5">
          {validationError && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{validationError}</span>
            </div>
          )}

          {/* Selected Services Summary */}
          <div className="bg-white rounded-2xl p-4 border border-[#bfabcb]/30 shadow-2xs">
            <div className="flex items-center justify-between pb-2.5 border-b border-[#bfabcb]/20 text-xs">
              <span className="font-medium text-[#4c4664] uppercase tracking-wider text-[11px]">
                Servicios seleccionados ({selectedItems.length})
              </span>
              {selectedItems.length > 0 && (
                <button
                  type="button"
                  onClick={onClearAll}
                  className="text-[#8d89a6] hover:text-red-600 flex items-center gap-1 transition-colors text-xs font-normal"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Vaciar</span>
                </button>
              )}
            </div>

            {selectedItems.length === 0 ? (
              <p className="py-4 text-center text-xs text-[#8d89a6]">
                Todavía no elegiste ningún servicio. Marcá las opciones que quieras en la tabla.
              </p>
            ) : (
              <ul className="divide-y divide-[#bfabcb]/15 mt-2 max-h-48 overflow-y-auto">
                {selectedItems.map((item) => (
                  <li key={item.id} className="py-2 flex items-center justify-between gap-3 text-xs sm:text-sm">
                    <span className="text-[#4c4664] truncate">• {item.name}</span>
                    <div className="flex items-center gap-2.5 shrink-0">
                      <span className="font-medium text-[#4c4664] tabular-nums">
                        ${item.price.toLocaleString('es-AR')}
                      </span>
                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.id)}
                        className="text-[#bfabcb] hover:text-red-500 p-0.5"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Simple Form */}
          <form id="simple-checkout-form" onSubmit={handleSendWhatsapp} className="space-y-4">
            <div className="bg-white rounded-2xl p-4 border border-[#bfabcb]/30 shadow-2xs space-y-3.5">
              <h4 className="text-[11px] font-normal uppercase tracking-wider text-[#8d89a6]">
                Datos para la Reserva
              </h4>

              <div>
                <label className="block text-xs font-normal text-[#4c4664] mb-1">
                  Tu nombre (Quien regala) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.buyerName}
                  onChange={(e) => onFormChange({ buyerName: e.target.value })}
                  placeholder="Ej. Camila"
                  className="w-full px-3 py-2 text-sm bg-white border border-[#bfabcb]/50 rounded-xl focus:outline-none focus:border-[#8d89a6] text-[#4c4664]"
                />
              </div>

              <div>
                <label className="block text-xs font-normal text-[#4c4664] mb-1">
                  Nombre de Mamá (Homenajeada) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.recipientName}
                  onChange={(e) => onFormChange({ recipientName: e.target.value })}
                  placeholder="Ej. Graciela"
                  className="w-full px-3 py-2 text-sm bg-white border border-[#bfabcb]/50 rounded-xl focus:outline-none focus:border-[#8d89a6] text-[#4c4664]"
                />
              </div>

              {/* Delivery format: física o digital a elección */}
              <div>
                <label className="block text-xs font-normal text-[#4c4664] mb-1.5">
                  Entrega de la Tarjeta Regalo *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => onFormChange({ deliveryFormat: 'digital' })}
                    className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                      formData.deliveryFormat === 'digital'
                        ? 'border-[#8d89a6] bg-[#f2d5f8]/40 font-medium text-[#4c4664]'
                        : 'border-[#bfabcb]/40 bg-white text-[#8d89a6] hover:bg-[#f2d5f8]/20'
                    }`}
                  >
                    <span className="block font-medium">📲 Digital</span>
                    <span className="text-[11px] text-[#8d89a6]">Envío por WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onFormChange({ deliveryFormat: 'fisica' })}
                    className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                      formData.deliveryFormat === 'fisica'
                        ? 'border-[#8d89a6] bg-[#f2d5f8]/40 font-medium text-[#4c4664]'
                        : 'border-[#bfabcb]/40 bg-white text-[#8d89a6] hover:bg-[#f2d5f8]/20'
                    }`}
                  >
                    <span className="block font-medium">💌 Física</span>
                    <span className="text-[11px] text-[#8d89a6]">Retiro en el local</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-normal text-[#4c4664] mb-1">
                  Dedicatoria para la tarjeta (opcional)
                </label>
                <textarea
                  rows={2}
                  value={formData.giftMessage}
                  onChange={(e) => onFormChange({ giftMessage: e.target.value })}
                  placeholder="Escribí un mensaje de dedicatoria para mamá..."
                  className="w-full px-3 py-2 text-sm bg-white border border-[#bfabcb]/50 rounded-xl focus:outline-none focus:border-[#8d89a6] resize-none text-[#4c4664]"
                />
              </div>

              <div>
                <label className="block text-xs font-normal text-[#4c4664] mb-1">
                  Observaciones o talles (opcional)
                </label>
                <input
                  type="text"
                  value={formData.notes}
                  onChange={(e) => onFormChange({ notes: e.target.value })}
                  placeholder="Ej. Talle M, o prefiere canje libre en el local"
                  className="w-full px-3 py-2 text-sm bg-white border border-[#bfabcb]/50 rounded-xl focus:outline-none focus:border-[#8d89a6] text-[#4c4664]"
                />
              </div>
            </div>
          </form>

          {/* Pricing Summary */}
          <div className="bg-white rounded-2xl p-4 border border-[#bfabcb]/30 space-y-2 text-xs sm:text-sm shadow-2xs">
            <div className="flex items-center justify-between text-[#8d89a6]">
              <span>Subtotal ({selectedItems.length} opciones)</span>
              <span className="tabular-nums font-normal text-[#4c4664]">${subtotal.toLocaleString('es-AR')}</span>
            </div>

            {isDiscountEligible && (
              <div className="flex items-center justify-between text-[#4c4664] font-normal">
                <span>Descuento (3 o más opciones · 15% OFF)</span>
                <span className="tabular-nums">-${discountAmount.toLocaleString('es-AR')}</span>
              </div>
            )}

            <div className="pt-2 border-t border-[#bfabcb]/20 flex items-center justify-between font-normal text-base text-[#4c4664]">
              <span>Total a pagar</span>
              <span className="text-xl tabular-nums font-medium text-[#4c4664]">
                ${finalTotal.toLocaleString('es-AR')}
              </span>
            </div>

            <div className="pt-2 flex items-center gap-1.5 text-[11px] text-[#8d89a6]">
              <Calendar className="w-3.5 h-3.5 text-[#bfabcb]" />
              <span>Validez del regalo: 60 días desde la fecha de compra.</span>
            </div>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="p-4 bg-white border-t border-[#bfabcb]/30 space-y-2 shrink-0">
          <button
            type="submit"
            form="simple-checkout-form"
            disabled={selectedItems.length === 0}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 text-base sm:text-lg font-button tracking-wide text-white bg-[#8d89a6] hover:bg-[#4c4664] disabled:opacity-40 disabled:pointer-events-none rounded-xl transition-all shadow-xs"
          >
            <Send className="w-4 h-4 text-[#f2d5f8]" />
            <span>Enviar pedido por WhatsApp</span>
          </button>

          <div className="flex items-center justify-between text-[11px] text-[#8d89a6] pt-1 font-sans font-normal">
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1 text-[#8d89a6] hover:text-[#4c4664]"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#4c4664]" />
                  <span className="text-[#4c4664] font-medium">¡Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copiar mensaje</span>
                </>
              )}
            </button>

            <span>WhatsApp: {whatsappNumber}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
