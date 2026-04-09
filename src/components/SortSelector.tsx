import React from 'react';
import { CriterioOrden } from '../types';

interface Props {
  currentSort: CriterioOrden;
  onSortChange: (newSort: CriterioOrden) => void;
}

export const SortSelector: React.FC<Props> = ({ currentSort, onSortChange }) => {
  return (
    <div className="sort-selector">
      <label>Ordenar por: </label>
      <select 
        value={currentSort} 
        onChange={(e) => onSortChange(e.target.value as CriterioOrden)}
        style={{ padding: '5px', borderRadius: '4px' }}
      >
        <option value="nombre">Nombre (A-Z)</option>
        <option value="precio-asc">Precio: Menor a Mayor</option>
        <option value="precio-desc">Precio: Mayor a Menor</option>
        <option value="rating">Mejor Valorados</option>
      </select>
    </div>
  );
};