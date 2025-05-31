import { useState } from 'react';

interface CounterProps {
  initialValue?: number;
  step?: number;
  label?: string;
}

export function Counter({ 
  initialValue = 0, 
  step = 1, 
  label = 'Counter'
}: CounterProps) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + step);
  const decrement = () => setCount(count - step);
  const reset = () => setCount(initialValue);

  return (
    <div className="counter">
      <h2>{label}</h2>
      <div className="counter-display" data-testid="counter-value">
        {count}
      </div>
      <div className="counter-controls">
        <button onClick={decrement} aria-label="Decrement">-</button>
        <button onClick={reset} aria-label="Reset">Reset</button>
        <button onClick={increment} aria-label="Increment">+</button>
      </div>
    </div>
  );
}
