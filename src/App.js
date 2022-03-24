import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [disabled, setDisabled] = useState(false);

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
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <div
        style={{ display: 'flex', alignItens: 'center', lineHeight: '1rem' }}
      >
        <input
          type="checkbox"
          id="disable-button-checkbox"
          defaultChecked={disabled}
          aria-checked={disabled}
          onChange={e => setDisabled(e.target.checked)}
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        />
        <label
          htmlFor="disable-button-checkbox"
          style={{
            color: '#ddd',
            fontSize: '0.75rem',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Disable button
        </label>
      </div>
    </div>
  );
}

export default App;
