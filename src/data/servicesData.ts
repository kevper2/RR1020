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
  // 1. Peluquería: JV Estilista (5 opciones actualizadas)
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
    name: 'Keratina / Bótox',
    category: 'peluqueria',
    price: 73000,
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

  // 3. Ropa: Jazmín (5 opciones actualizadas)
  {
    id: 'rop-1',
    name: 'Conjunto taza soft - Talles 85 al 100',
    category: 'ropa',
    price: 16000,
  },
  {
    id: 'rop-2',
    name: 'Camisolín',
    category: 'ropa',
    price: 21000,
  },
  {
    id: 'rop-3',
    name: 'Pack de less Frashe',
    category: 'ropa',
    price: 10000,
  },
  {
    id: 'rop-4',
    name: 'Conjunto triángulo soft',
    category: 'ropa',
    price: 19000,
  },
  {
    id: 'rop-5',
    name: 'Calzas estampadas - Talles 1 al 6',
    category: 'ropa',
    price: 20000,
  },
];
