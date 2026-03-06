import React from 'react';

interface AlertCardProps {
  message: string;
  type: 'success' | 'error' | 'warning';
}

const AlertCard: React.FC<AlertCardProps> = ({ message, type }) => {
  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return 'var(--success-color)';
      case 'error':
        return 'var(--danger-color)';
      case 'warning':
        return 'var(--warning-color)';
      default:
        return 'var(--light-color)';
    }
  };

  return (
    <div style={{ backgroundColor: getBackgroundColor(), padding: '1rem', borderRadius: '4px', color: 'white' }}>
      {message}
    </div>
  );
};

export default AlertCard;