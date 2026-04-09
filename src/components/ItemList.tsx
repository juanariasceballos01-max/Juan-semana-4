import React from 'react';
import { ItemCard } from './ItemCard';
import { ServicioMudanza } from '../types';

interface Props {
  items: ServicioMudanza[];
  onSelectItem: (id: string) => void;
}

export const ItemList: React.FC<Props> = ({ items, onSelectItem }) => {
  return (
    <div className="items-grid" style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
      gap: '20px',
      padding: '20px 0' 
    }}>
      {items.map((item) => (
        <ItemCard 
          key={item.id} // Requisito: Usar ID único, no índice
          servicio={item} 
          onSelect={onSelectItem} 
        />
      ))}
    </div>
  );
};