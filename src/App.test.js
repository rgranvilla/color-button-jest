import { render, screen, fireEvent } from '@testing-library/react';
import App, { replaceCamelWithSpace } from './App';

test('button has correct initial color and change color to MidnightBlue when clicked, and change text to `Change to Medium Violet Red`', () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

  // click button
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });
  expect(colorButton).toHaveTextContent('Change to Medium Violet Red');
});

test('intial conditions', () => {
  render(<App />);
  //check that the button starts out enabled
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });
  expect(colorButton).toBeEnabled();

  //check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('checkbox has checked when first time click', () => {
  render(<App />);

  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
});

test('checkbox hasn`t checked when click two times', () => {
  render(<App />);

  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  fireEvent.click(checkbox);
  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
});

test('has disabled button when checkbox is checked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(colorButton).toBeDisabled();
});

test('flow: disable button -> button is gray -> enable button -> button is Medium Violet Red', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  // disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

  // re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'Medium Violet Red' });
});

test('flow: click button to change color -> disable button -> button is gray then enable button -> button is MidnightBlue', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  // change button to blue
  fireEvent.click(colorButton);

  // disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

  //re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });
});

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpace('Red')).toBe('Red');
  });
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpace('MidnightBlue')).toBe('Midnight Blue');
  });
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpace('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
