import { ServicioMudanza } from '../types';

export const SERVICIOS_MUDANZA: ServicioMudanza[] = [
  {
    id: '1',
    nombre: 'Mudanza Apartamento Studio',
    descripcion: 'Ideal para personas solas o parejas. Incluye embalaje básico y transporte.',
    precioBase: 150,
    categoria: 'Residencial',
    disponible: true,
    tiempoEstimado: '3-5 horas',
    rating: 4.8
  },
  {
    id: '2',
    nombre: 'Traslado de Oficinas Premium',
    descripcion: 'Mudanza técnica de servidores, mobiliario y archivos confidenciales.',
    precioBase: 800,
    categoria: 'Corporativa',
    disponible: true,
    tiempoEstimado: '12-24 horas',
    rating: 4.9
  },
  {
    id: '3',
    nombre: 'Mudanza Express (Mismo día)',
    descripcion: 'Servicio ultra rápido para pocos objetos en perímetros urbanos.',
    precioBase: 90,
    categoria: 'Express',
    disponible: false,
    tiempoEstimado: '1-2 horas',
    rating: 4.2
  },
  {
    id: '4',
    nombre: 'Mudanza Transfronteriza',
    descripcion: 'Gestión de aduanas y transporte internacional marítimo o terrestre.',
    precioBase: 2500,
    categoria: 'Internacional',
    disponible: true,
    tiempoEstimado: '15-30 días',
    rating: 4.5
  }
];