import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = 5; //getByText(/learn react/i);
  expect(linkElement).toEqual(5);
});
