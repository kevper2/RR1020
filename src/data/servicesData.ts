import { BusinessInfo, ServiceItem } from '../types';

export const BUSINESSES_INFO: Record<string, BusinessInfo> = {
  peluqueria: {
    category: 'peluqueria',
    name: 'JV Estilista',
    typeLabel: 'Peluquería',
    subtitle: 'Cortes, peinados, alisados y nutriciones',
    instagramHandle: '@peluq_jv',
    instagramUrl: 'https://www.instagram.com/peluq_jv',
  },
  manicuria: {
    category: 'manicuria',
    name: 'Yasmin Studio de Uñas',
    typeLabel: 'Manicura',
    subtitle: 'Capping gel, semipermanente y nail art',
    instagramHandle: '@yasmin_nails.sma',
    instagramUrl: 'https://www.instagram.com/yasmin_nails.sma',
  },
  ropa: {
    category: 'ropa',
    name: 'Jazmín',
    typeLabel: 'Ropa interior',
    subtitle: 'Ropa interior y ropa deportiva cómoda para todos los días',
    instagramHandle: '@ropainteriorjazmin',
    instagramUrl: 'https://www.instagram.com/ropainteriorjazmin',
  },
};

export const SERVICES_LIST: ServiceItem[] = [
  // 1. Peluquería: JV Estilista (5 opciones)
  {
    id: 'pel-1',
    name: 'Corte de pelo & Brushing',
    category: 'peluqueria',
    price: 18000,
  },
  {
    id: 'pel-2',
    name: 'Nutrición capilar profunda',
    category: 'peluqueria',
    price: 22000,
  },
  {
    id: 'pel-3',
    name: 'Alisado progresivo',
    category: 'peluqueria',
    price: 32000,
  },
  {
    id: 'pel-4',
    name: 'Peinado & Ondas',
    category: 'peluqueria',
    price: 16000,
  },
  {
    id: 'pel-5',
    name: 'Baño de luz & Coloración',
    category: 'peluqueria',
    price: 26000,
  },

  // 2. Manicuría: Yasmin Studio de Uñas (5 opciones)
  {
    id: 'man-1',
    name: 'Esmaltado semipermanente',
    category: 'manicuria',
    price: 14000,
  },
  {
    id: 'man-2',
    name: 'Capping gel con semipermanente',
    category: 'manicuria',
    price: 18000,
  },
  {
    id: 'man-3',
    name: 'Soft gel / Uñas esculpidas',
    category: 'manicuria',
    price: 24000,
  },
  {
    id: 'man-4',
    name: 'Belleza de pies semipermanente',
    category: 'manicuria',
    price: 16000,
  },
  {
    id: 'man-5',
    name: 'Nail art & diseño decorativo',
    category: 'manicuria',
    price: 6000,
  },

  // 3. Ropa: Jazmín (5 opciones)
  {
    id: 'rop-1',
    name: 'Conjunto de ropa interior de algodón',
    category: 'ropa',
    price: 16000,
  },
  {
    id: 'rop-2',
    name: 'Conjunto deportivo diario (calza + top)',
    category: 'ropa',
    price: 28000,
  },
  {
    id: 'rop-3',
    name: 'Pijama cómodo de modal para todos los días',
    category: 'ropa',
    price: 22000,
  },
  {
    id: 'rop-4',
    name: 'Pack x3 bombachas de algodón',
    category: 'ropa',
    price: 12000,
  },
  {
    id: 'rop-5',
    name: 'Voucher de compra libre en el local ($20.000)',
    category: 'ropa',
    price: 20000,
  },
];
