import React from 'react';
import { Catalog } from './components/Catalog';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar Simple */}
      <nav style={{ 
        backgroundColor: '#1a2a3a', 
        color: 'white', 
        padding: '1rem 2rem',
        marginBottom: '2rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>
          🚛 Mudanzas Express | <span style={{ fontWeight: 'normal', fontSize: '1rem' }}>Catálogo de Servicios</span>
        </h1>
      </nav>

      {/* Contenedor del Catálogo */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <Catalog />
      </div>

      {/* Footer Simple */}
      <footer style={{ 
        textAlign: 'center', 
        padding: '2rem', 
        marginTop: '3rem', 
        color: '#666',
        borderTop: '1px solid #ddd'
      }}>
        <p>© 2026 Mudanzas Express S.A. - Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;