import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from './Counter';

describe('Counter', () => {
  it('renders with default values', () => {
    render(<Counter />);
    
    expect(screen.getByText('Counter')).toBeInTheDocument();
    expect(screen.getByTestId('counter-value')).toHaveTextContent('0');
  });

  it('renders with custom initial value and label', () => {
    render(<Counter initialValue={10} label="Custom Counter" />);
    
    expect(screen.getByText('Custom Counter')).toBeInTheDocument();
    expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
  });

  it('increments the counter when + button is clicked', async () => {
    render(<Counter initialValue={5} />);
    const user = userEvent.setup();
    
    expect(screen.getByTestId('counter-value')).toHaveTextContent('5');
    
    await user.click(screen.getByRole('button', { name: 'Increment' }));
    
    expect(screen.getByTestId('counter-value')).toHaveTextContent('6');
  });

  it('decrements the counter when - button is clicked', async () => {
    render(<Counter initialValue={5} />);
    const user = userEvent.setup();
    
    expect(screen.getByTestId('counter-value')).toHaveTextContent('5');
    
    await user.click(screen.getByRole('button', { name: 'Decrement' }));
    
    expect(screen.getByTestId('counter-value')).toHaveTextContent('4');
  });

  it('resets the counter when Reset button is clicked', async () => {
    render(<Counter initialValue={5} />);
    const user = userEvent.setup();
    
    // First increment to change the value
    await user.click(screen.getByRole('button', { name: 'Increment' }));
    expect(screen.getByTestId('counter-value')).toHaveTextContent('6');
    
    // Then reset
    await user.click(screen.getByRole('button', { name: 'Reset' }));
    
    expect(screen.getByTestId('counter-value')).toHaveTextContent('5');
  });

  it('uses custom step value for incrementing and decrementing', async () => {
    render(<Counter initialValue={10} step={5} />);
    const user = userEvent.setup();
    
    await user.click(screen.getByRole('button', { name: 'Increment' }));
    expect(screen.getByTestId('counter-value')).toHaveTextContent('15');
    
    await user.click(screen.getByRole('button', { name: 'Decrement' }));
    expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
  });
});
