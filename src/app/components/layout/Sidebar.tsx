import React from 'react';

const Sidebar = () => {
  return (
    <aside
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '256px',
        height: '100vh',
        background: '#fff',
        borderRight: '1px solid #eee',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '2rem 0',
        fontSize: '1.1rem',
        boxShadow: '2px 0 8px rgba(0,0,0,0.03)',
        zIndex: 200,
      }}
    >
      {/* Sidebar content goes here */}
      Sidebar
    </aside>
  );
};

export default Sidebar; 