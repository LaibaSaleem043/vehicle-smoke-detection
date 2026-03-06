import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside style={{ width: '200px', backgroundColor: 'var(--light-color)', padding: '1rem' }}>
      <ul>
        <li>Dashboard</li>
        <li>Smoke Detection</li>
        <li>Violations</li>
        <li>Reports</li>
        <li>User Management</li>
        <li>Settings</li>
      </ul>
    </aside>
  );
};

export default Sidebar;