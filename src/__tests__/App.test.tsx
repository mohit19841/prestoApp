import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders Product List text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Product List/i);
  expect(linkElement).toBeInTheDocument();
});
