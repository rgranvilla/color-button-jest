import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [isChecked, setIsChecked] = useState(false);

  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        background: '#333',
      }}
    >
      <button
        style={{
          padding: '0.5rem',
          fontSize: '1rem',
          backgroundColor: buttonColor,
          color: '#ddd',
        }}
        onClick={() => setButtonColor(newButtonColor)}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        checked={isChecked}
        onClick={() => setIsChecked(!isChecked)}
      />
    </div>
  );
}

export default App;
