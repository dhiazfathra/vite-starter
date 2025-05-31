import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('renders headline', () => {
    render(<App />);
    expect(screen.getByText('Vite + React')).toBeInTheDocument();
  });

  it('renders logos with correct links', () => {
    render(<App />);
    
    const viteLink = screen.getByRole('link', { name: /vite logo/i });
    expect(viteLink).toHaveAttribute('href', 'https://vite.dev');
    
    const reactLink = screen.getByRole('link', { name: /react logo/i });
    expect(reactLink).toHaveAttribute('href', 'https://react.dev');
  });

  it('increments count when button is clicked', async () => {
    render(<App />);
    const user = userEvent.setup();
    
    // Initial count should be 0
    expect(screen.getByText('count is 0')).toBeInTheDocument();
    
    // Click the button
    const button = screen.getByRole('button', { name: /count is/i });
    await user.click(button);
    
    // Count should be incremented to 1
    expect(screen.getByText('count is 1')).toBeInTheDocument();
  });
});
