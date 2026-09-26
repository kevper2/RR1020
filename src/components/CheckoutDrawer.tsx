import React, { useState } from 'react';
import { X, Send, Trash2, Check, AlertCircle, Copy, MapPin, Calendar } from 'lucide-react';
import { ServiceItem, BookingFormState, DeliveryFormat } from '../types';

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
  const [validationError, setValidationError] = useState('');

  if (!isOpen) return null;

  const subtotal = selectedItems.reduce((acc, item) => acc + item.price, 0);
  const isDiscountEligible = selectedItems.length >= 3;
  const discountAmount = isDiscountEligible ? Math.round(subtotal * 0.1) : 0;
  const finalTotal = subtotal - discountAmount;

  const peluqueriaItems = selectedItems.filter((i) => i.category === 'peluqueria');
  const manicuriaItems = selectedItems.filter((i) => i.category === 'manicuria');
  const ropaItems = selectedItems.filter((i) => i.category === 'ropa');

  const generateWhatsappMessage = () => {
    let msg = `🌸 *RESERVA DE PACK - DÍA DE LA MADRE* 🌸\n`;
    msg += `📍 *Rudecindo Roca 1020, esq. Elordi, San Martín de los Andes*\n\n`;

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

    msg += `\n✨ *SERVICIOS SELECCIONADOS (${selectedItems.length}):*\n`;

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
      msg += `\n🛍️ *Ropa Interior & Deportiva (Jazmín):*\n`;
      ropaItems.forEach((i) => {
        msg += `• ${i.name} - $${i.price.toLocaleString('es-AR')}\n`;
      });
    }

    msg += `\n💰 *TOTALES:*\n`;
    msg += `Subtotal: $${subtotal.toLocaleString('es-AR')}\n`;
    if (isDiscountEligible) {
      msg += `🎉 *Descuento especial (3 o más servicios · 10% OFF):* -$${discountAmount.toLocaleString('es-AR')}\n`;
    }
    msg += `*TOTAL FINAL: $${finalTotal.toLocaleString('es-AR')}*\n`;
    msg += `⏳ *Validez:* 30 días a partir de la compra.\n\n`;
    msg += `Hola! Quisiera confirmar este paquete regalo para coordinar el pago y la entrega de la tarjeta. ¡Muchas gracias!`;

    return msg;
  };

  const handleSendWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedItems.length === 0) {
      setValidationError('Por favor selecciona al menos un servicio para armar el paquete.');
      return;
    }

    if (!formData.buyerName.trim()) {
      setValidationError('Por favor ingresa tu nombre (quien regala).');
      return;
    }

    if (!formData.recipientName.trim()) {
      setValidationError('Por favor ingresa el nombre de mamá (homenajeada).');
      return;
    }

    setValidationError('');

    const text = generateWhatsappMessage();
    const cleanNumber = whatsappNumber.replace(/\D/g, '');
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopy = () => {
    const text = generateWhatsappMessage();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-stone-900/40 backdrop-blur-xs">
      <div className="relative w-full max-w-lg h-full bg-[#FAF7F5] shadow-2xl flex flex-col overflow-hidden border-l border-stone-200">
        {/* Header */}
        <div className="px-5 py-4 bg-white border-b border-stone-200 flex items-center justify-between shrink-0">
          <div>
            <h3 className="text-lg font-bold text-stone-900">
              Confirmar Paquete Regalo
            </h3>
            <p className="text-xs text-stone-500">
              Rudecindo Roca 1020 · Validez 30 días
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5">
          {validationError && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{validationError}</span>
            </div>
          )}

          {/* Selected Services Summary */}
          <div className="bg-white rounded-xl p-4 border border-stone-200">
            <div className="flex items-center justify-between pb-2.5 border-b border-stone-100 text-xs">
              <span className="font-bold text-stone-700 uppercase tracking-wider">
                Servicios seleccionados ({selectedItems.length})
              </span>
              {selectedItems.length > 0 && (
                <button
                  type="button"
                  onClick={onClearAll}
                  className="text-stone-400 hover:text-red-600 flex items-center gap-1 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Vaciar</span>
                </button>
              )}
            </div>

            {selectedItems.length === 0 ? (
              <p className="py-4 text-center text-xs text-stone-500">
                Aún no has seleccionado ningún servicio. Marca opciones en la tabla.
              </p>
            ) : (
              <ul className="divide-y divide-stone-100 mt-2 max-h-48 overflow-y-auto">
                {selectedItems.map((item) => (
                  <li key={item.id} className="py-2 flex items-center justify-between gap-3 text-xs sm:text-sm">
                    <span className="text-stone-800 truncate">• {item.name}</span>
                    <div className="flex items-center gap-2.5 shrink-0">
                      <span className="font-semibold text-stone-900 tabular-nums">
                        ${item.price.toLocaleString('es-AR')}
                      </span>
                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.id)}
                        className="text-stone-300 hover:text-red-500 p-0.5"
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
            <div className="bg-white rounded-xl p-4 border border-stone-200 space-y-3.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Datos para la Reserva
              </h4>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Tu nombre (Quien regala) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.buyerName}
                  onChange={(e) => onFormChange({ buyerName: e.target.value })}
                  placeholder="Ej. Camila"
                  className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-stone-400 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Nombre de Mamá (Homenajeada) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.recipientName}
                  onChange={(e) => onFormChange({ recipientName: e.target.value })}
                  placeholder="Ej. Graciela"
                  className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-stone-400 focus:bg-white"
                />
              </div>

              {/* Delivery format: física o digital a elección */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                  Entrega de la Tarjeta Regalo *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => onFormChange({ deliveryFormat: 'digital' })}
                    className={`p-2.5 rounded-lg border text-left text-xs transition-colors ${
                      formData.deliveryFormat === 'digital'
                        ? 'border-[#B87364] bg-[#FAF3F0] font-semibold text-stone-900'
                        : 'border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    <span className="block font-bold">📲 Digital</span>
                    <span className="text-[11px] text-stone-500">Envío por WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onFormChange({ deliveryFormat: 'fisica' })}
                    className={`p-2.5 rounded-lg border text-left text-xs transition-colors ${
                      formData.deliveryFormat === 'fisica'
                        ? 'border-[#B87364] bg-[#FAF3F0] font-semibold text-stone-900'
                        : 'border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    <span className="block font-bold">💌 Física</span>
                    <span className="text-[11px] text-stone-500">Retiro en el local</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Dedicatoria para la tarjeta (opcional)
                </label>
                <textarea
                  rows={2}
                  value={formData.giftMessage}
                  onChange={(e) => onFormChange({ giftMessage: e.target.value })}
                  placeholder="Mensaje de felicitación para mamá..."
                  className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-stone-400 focus:bg-white resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Observaciones o talles (opcional)
                </label>
                <input
                  type="text"
                  value={formData.notes}
                  onChange={(e) => onFormChange({ notes: e.target.value })}
                  placeholder="Ej. Talle M, o prefiere canje libre"
                  className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-stone-400 focus:bg-white"
                />
              </div>
            </div>
          </form>

          {/* Pricing Summary */}
          <div className="bg-white rounded-xl p-4 border border-stone-200 space-y-2 text-xs sm:text-sm">
            <div className="flex items-center justify-between text-stone-600">
              <span>Subtotal ({selectedItems.length} servicios)</span>
              <span className="tabular-nums font-semibold">${subtotal.toLocaleString('es-AR')}</span>
            </div>

            {isDiscountEligible && (
              <div className="flex items-center justify-between text-emerald-700 font-semibold">
                <span>Descuento (3 o más servicios · 10% OFF)</span>
                <span className="tabular-nums">-${discountAmount.toLocaleString('es-AR')}</span>
              </div>
            )}

            <div className="pt-2 border-t border-stone-200 flex items-center justify-between font-bold text-base text-stone-900">
              <span>Total a pagar</span>
              <span className="text-xl tabular-nums text-[#9C5B52]">
                ${finalTotal.toLocaleString('es-AR')}
              </span>
            </div>

            <div className="pt-2 flex items-center gap-1.5 text-[11px] text-stone-500">
              <Calendar className="w-3.5 h-3.5 text-stone-400" />
              <span>Validez del paquete: 30 días desde la fecha de compra.</span>
            </div>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="p-4 bg-white border-t border-stone-200 space-y-2 shrink-0">
          <button
            type="submit"
            form="simple-checkout-form"
            disabled={selectedItems.length === 0}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 disabled:opacity-40 disabled:pointer-events-none transition-colors shadow-xs"
          >
            <Send className="w-4 h-4" />
            <span>Enviar Pedido a WhatsApp</span>
          </button>

          <div className="flex items-center justify-between text-[11px] text-stone-500 pt-1">
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1 text-stone-600 hover:text-stone-900"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">¡Mensaje copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copiar texto</span>
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
