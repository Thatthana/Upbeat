import React, { useState } from 'react';

export default function Slider() {
  const [value, setValue] = useState(50);

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input type="range" min="0" max="100" value={value} onChange={handleChange} style={{ flex: 1 }} /> 
      <p style={{ marginLeft: '10px' }}>{value}</p>
    </div>
  );
}