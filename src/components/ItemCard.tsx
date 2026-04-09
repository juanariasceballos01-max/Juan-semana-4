import React from 'react';
import { ServicioMudanza } from '../types';

interface Props {
  servicio: ServicioMudanza;
  onSelect: (id: string) => void;
}

export const ItemCard: React.FC<Props> = ({ servicio, onSelect }) => {
  return (
    <div className={`card ${!servicio.disponible ? 'disabled' : ''}`}>
      <div className="card-header">
        <span className={`badge ${servicio.categoria.toLowerCase()}`}>
          {servicio.categoria}
        </span>
        {servicio.disponible ? 
          <span className="status-available">✅ Disponible</span> : 
          <span className="status-unavailable">❌ Agotado</span>
        }
      </div>
      
      <h3>{servicio.nombre}</h3>
      <p>{servicio.descripcion}</p>
      
      <div className="card-footer">
        <span className="price">${servicio.precioBase}</span>
        <span className="rating">⭐ {servicio.rating}</span>
        <button 
          onClick={() => onSelect(servicio.id)}
          disabled={!servicio.disponible}
        >
          Ver Detalles
        </button>
      </div>
    </div>
  );
};