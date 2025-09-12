import React from 'react';

const Content = ({ children }: { children?: React.ReactNode }) => {
  return (
    <section
      style={{
        flex: 1,
        height: '100%',
        background: 'var(--color-content-bg)',
        padding: '2rem',
        overflowY: 'auto',
      }}
    >
      {children ? children : 'Content'}
    </section>
  );
};

export default Content;