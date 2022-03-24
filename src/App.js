import { useState } from 'react';

export function replaceCamelWithSpace(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  const [disabled, setDisabled] = useState(false);

  const newButtonColor =
    buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';
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
          backgroundColor: disabled ? 'gray' : buttonColor,
          color: '#ddd',
        }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {replaceCamelWithSpace(newButtonColor)}
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
