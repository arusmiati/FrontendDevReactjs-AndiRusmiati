import React from 'react';
import './Status.css'

function Status({ status }) {
  const dotColor = status === "CLOSED" ? 'red-dot' : 'green-dot';

  return (
    <div className="status">
      <span className={`dot ${dotColor}`}>&#8226;</span>
    </div>
  );
}

export default Status;
