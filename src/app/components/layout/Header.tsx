import React from 'react';

const Header = () => {
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: '336px',
        right: 0,
        height: '138px',
        background: 'var(--color-header-bg)',
        color: 'var(--color-header-text)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        zIndex: 150,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <span style={{ fontSize: '2rem', fontWeight: 600 }}>Dashboard</span>
        {/* Filters row */}

      </div>
    </header>
  );
};

export default Header;