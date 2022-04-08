import { render, screen } from '@testing-library/react';
import App2 from './App2';

test('renders Is it a Jif or a Gif? link', () => {
  render(<App2 />);
  const linkElement = screen.getByText(/Is it a Jif or a Gif?/i);
  expect(linkElement).toBeInTheDocument();
});
