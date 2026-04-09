import React from 'react';
import { CategoriaMudanza } from '../types';

interface Props {
  categoria: CategoriaMudanza | 'Todas';
  soloDisponibles: boolean;
  onCategoriaChange: (cat: CategoriaMudanza | 'Todas') => void;
  onDisponibleChange: (val: boolean) => void;
  onClear: () => void;
}

export const FilterPanel: React.FC<Props> = ({ 
  categoria, soloDisponibles, onCategoriaChange, onDisponibleChange, onClear 
}) => {
  return (
    <div className="filter-panel" style={{ background: '#f9f9f9', padding: '20px', borderRadius: '10px' }}>
      <h3>Filtros</h3>
      
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Categoría:</label>
        <select 
          value={categoria} 
          onChange={(e) => onCategoriaChange(e.target.value as any)}
          style={{ width: '100%', padding: '8px' }}
        >
          <option value="Todas">Todas</option>
          <option value="Residencial">Residencial</option>
          <option value="Corporativa">Corporativa</option>
          <option value="Internacional">Internacional</option>
          <option value="Express">Express</option>
        </select>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ cursor: 'pointer' }}>
          <input 
            type="checkbox" 
            checked={soloDisponibles} 
            onChange={(e) => onDisponibleChange(e.target.checked)} 
          /> Solo servicios disponibles
        </label>
      </div>

      <button 
        onClick={onClear}
        style={{ width: '100%', padding: '10px', background: '#e74c3c', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Limpiar Filtros
      </button>
    </div>
  );
};