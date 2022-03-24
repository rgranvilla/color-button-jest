import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color and change color to blue when clicked, and change text to `Change to red`', () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  // click button
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
  expect(colorButton.textContent).toBe('Change to red');
});

test('intial conditions', () => {
  render(<App />);
  //check that the button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toBeEnabled();

  //check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('checkbox has checked when first time click', () => {
  render(<App />);

  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
});

test('checkbox hasn`t checked when click two times', () => {
  render(<App />);

  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);
  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
});
