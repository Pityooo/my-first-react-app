import { render, screen } from '@testing-library/react';
import App from './App';

// ez egy teszt, ami megvizsgálja h a documentumban megvan-e a /learn react/ szöveg
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
