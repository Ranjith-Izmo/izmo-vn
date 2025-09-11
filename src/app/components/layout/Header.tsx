import React from 'react';

const Header = () => {
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: '256px',
        right: 0,
        height: '80px',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2rem',
        fontSize: '2rem',
        fontWeight: 'bold',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        zIndex: 150,
      }}
    >
      {/* Header content goes here */}
      Dashboard
    </header>
  );
};

export default Header;