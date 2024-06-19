import React from 'react';

const Notification = ({ message, onClose, type }) => {
  return (
    <div className={`fixed top-4 right-4 p-4 rounded shadow-md z-50 ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
      <div className="text-white">
        {message}
        <button onClick={onClose} className="ml-4 font-bold">X</button>
      </div>
    </div>
  );
};

export default Notification;
