import React from 'react';

interface Props {
  value: string;
  onChange: (val: string) => void;
}

export const SearchBar: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="search-bar" style={{ marginBottom: '20px', position: 'relative' }}>
      <input
        type="text"
        placeholder="🔍 Buscar por nombre, descripción o ruta..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
      />
      {value && (
        <button 
          onClick={() => onChange('')}
          style={{ position: 'absolute', right: '10px', top: '25%', border: 'none', background: 'none', cursor: 'pointer' }}
        >
          ✖️
        </button>
      )}
    </div>
  );
};