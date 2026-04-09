import React, { useState, useMemo } from 'react';
import { SERVICIOS_MUDANZA } from '../data/items';
import { ItemCard } from './ItemCard';
import { CriterioOrden, CategoriaMudanza } from '../types';

export const Catalog: React.FC = () => {
  // Estados para Filtros y Búsqueda
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState<CategoriaMudanza | 'Todas'>('Todas');
  const [soloDisponibles, setSoloDisponibles] = useState(false);
  const [orden, setOrden] = useState<CriterioOrden>('nombre');

  // Lógica de filtrado y ordenamiento (useMemo para rendimiento)
  const serviciosFiltrados = useMemo(() => {
    let resultado = [...SERVICIOS_MUDANZA];

    // 1. Filtro de Búsqueda (Múltiples campos e insensible a mayúsculas)
    if (busqueda) {
      const query = busqueda.toLowerCase();
      resultado = resultado.filter(s => 
        s.nombre.toLowerCase().includes(query) || 
        s.descripcion.toLowerCase().includes(query)
      );
    }

    // 2. Filtro por Categoría
    if (categoria !== 'Todas') {
      resultado = resultado.filter(s => s.categoria === categoria);
    }

    // 3. Filtro Booleano
    if (soloDisponibles) {
      resultado = resultado.filter(s => s.disponible);
    }

    // 4. Ordenamiento (SIN MUTAR)
    resultado.sort((a, b) => {
      switch (orden) {
        case 'precio-asc': return a.precioBase - b.precioBase;
        case 'precio-desc': return b.precioBase - a.precioBase;
        case 'rating': return b.rating - a.rating;
        default: return a.nombre.localeCompare(b.nombre);
      }
    });

    return resultado;
  }, [busqueda, categoria, soloDisponibles, orden]);

  return (
    <div className="catalog-container">
      <aside className="filters">
        <h4>Filtros</h4>
        {/* Aquí irían los inputs de filtro */}
        <select onChange={(e) => setCategoria(e.target.value as any)}>
            <option value="Todas">Todas las categorías</option>
            <option value="Residencial">Residencial</option>
            <option value="Corporativa">Corporativa</option>
        </select>
        
        <label>
          <input 
            type="checkbox" 
            checked={soloDisponibles} 
            onChange={(e) => setSoloDisponibles(e.target.checked)} 
          /> Solo disponibles
        </label>

        <button onClick={() => {setBusqueda(''); setCategoria('Todas'); setSoloDisponibles(false);}}>
            Limpiar Filtros
        </button>
      </aside>

      <main>
        <div className="catalog-header">
          <input 
            type="text" 
            placeholder="Buscar mudanza..." 
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          <p>Resultados encontrados: {serviciosFiltrados.length}</p>
        </div>

        <div className="items-grid">
          {serviciosFiltrados.length > 0 ? (
            serviciosFiltrados.map(servicio => (
              <ItemCard 
                key={servicio.id} 
                servicio={servicio} 
                onSelect={(id) => console.log("Seleccionado:", id)} 
              />
            ))
          ) : (
            <div className="empty-state">No hay servicios que coincidan.</div>
          )}
        </div>
      </main>
    </div>
  );
};