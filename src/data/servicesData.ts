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
    name: 'Jazmín Ropa Interior',
    typeLabel: 'Ropa interior',
    subtitle: 'Ropa interior y ropa deportiva cómoda para todos los días',
    instagramHandle: '@ropainteriorjazmin',
    instagramUrl: 'https://www.instagram.com/ropainteriorjazmin',
  },
};

export const SERVICES_LIST: ServiceItem[] = [
  // 1. Peluquería: JV Estilista
  {
    id: 'pel-1',
    name: 'Corte de Pelo',
    category: 'peluqueria',
    price: 42000,
  },
  {
    id: 'pel-2',
    name: 'Tintura Color Completo',
    category: 'peluqueria',
    price: 74000,
  },
  {
    id: 'pel-3',
    name: 'Nutrición',
    category: 'peluqueria',
    price: 43000,
  },
  {
    id: 'pel-4',
    name: 'Alisado',
    category: 'peluqueria',
    price: 87000,
  },
  {
    id: 'pel-5',
    name: 'Keratina',
    category: 'peluqueria',
    price: 73000,
  },
  {
    id: 'pel-6',
    name: 'Peinado',
    category: 'peluqueria',
    price: 45000,
  },

  // 2. Manicuría: Yasmin Studio de Uñas (actualizadas)
  {
    id: 'man-1',
    name: 'Semi Perm',
    category: 'manicuria',
    price: 30000,
  },
  {
    id: 'man-2',
    name: 'Capping',
    category: 'manicuria',
    price: 32000,
  },
  {
    id: 'man-3',
    name: 'Soft Gel',
    category: 'manicuria',
    price: 36000,
  },
  {
    id: 'man-4',
    name: 'Poly Gel',
    category: 'manicuria',
    price: 40000,
  },
  {
    id: 'man-5',
    name: '2 Full Diseños',
    category: 'manicuria',
    price: 20000,
  },
  {
    id: 'man-6',
    name: 'French o 1 diseño medio',
    category: 'manicuria',
    price: 5000,
  },

  // 3. Ropa interior: Jazmín Ropa Interior (actualizadas)
  {
    id: 'rop-1',
    name: 'Conjunto taza soft de algodón con less regulable. Talles 85 al 100',
    category: 'ropa',
    price: 21000,
  },
  {
    id: 'rop-2',
    name: 'Corpiño segunda piel talle 105',
    category: 'ropa',
    price: 28900,
  },
  {
    id: 'rop-3',
    name: 'Camisolín + bata',
    category: 'ropa',
    price: 32000,
  },
  {
    id: 'rop-4',
    name: 'Pack de less frashe talle único',
    category: 'ropa',
    price: 15000,
  },
  {
    id: 'rop-5',
    name: 'Calza larga',
    category: 'ropa',
    price: 23000,
  },
];
