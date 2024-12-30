import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
<<<<<<< HEAD
});
=======
});
>>>>>>> 8af11affe130b09266b4f8f477f12bbf32d4fba5
