export type CategoriaMudanza = 'Residencial' 'Corporativa' | 'Internacional' | 'Express';

export interface ServicioMudanza {
  id: string;
  nombre: string;
  descripcion: string;
  precioBase: number;
  categoria: CategoriaMudanza;
  disponible: boolean;
  tiempoEstimado: string; // ej: "4-6 horas"
  rating: number;
}

export type CriterioOrden = 'precio-asc' | 'precio-desc' | 'rating' | 'nombre';