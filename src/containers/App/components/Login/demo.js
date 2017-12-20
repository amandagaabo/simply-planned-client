import React from 'react';
import './demo.css';

export default function Demo() {
  return (
    <div className='demo-info'>
      <h3>Demo this App</h3>
      <p className="demo">Use the following credentials to see this app in use:</p>
      <p className="demo">email: user@test.com</p>
      <p className="demo">password: password123</p>
    </div>
  );
}
