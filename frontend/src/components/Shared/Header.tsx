import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={{ backgroundColor: 'var(--primary-color)', padding: '1rem', color: 'white' }}>
      <h1>Vehicle Smoke Detection System</h1>
    </header>
  );
};

export default Header;