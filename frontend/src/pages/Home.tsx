import React from 'react';
import Header from '../components/Shared/Header';
import Sidebar from '../components/Shared/Sidebar';

const Home: React.FC = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />
        <main style={{ padding: '1rem' }}>
          <h2>Welcome to the Dashboard</h2>
          <p>This is the home page of the Vehicle Smoke Detection System.</p>
        </main>
      </div>
    </div>
  );
};

export default Home;
