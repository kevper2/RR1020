export type BusinessCategory = 'peluqueria' | 'manicuria' | 'ropa';

export type DeliveryFormat = 'digital' | 'fisica';

export interface ServiceItem {
  id: string;
  name: string;
  category: BusinessCategory;
  price: number;
}

export interface BusinessInfo {
  category: BusinessCategory;
  name: string;
  typeLabel: string;
  subtitle: string;
  instagramHandle: string;
  instagramUrl: string;
}

export interface BookingFormState {
  buyerName: string;
  recipientName: string;
  deliveryFormat: DeliveryFormat;
  giftMessage: string;
  notes: string;
}
