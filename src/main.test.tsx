import { describe, it, expect, vi, beforeEach } from 'vitest';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Mock the modules
vi.mock('react-dom/client', () => ({
  createRoot: vi.fn(() => ({
    render: vi.fn(),
  })),
}));

vi.mock('./App.tsx', () => ({
  default: () => <div>Mocked App</div>,
}));

// Mock the index.css import
vi.mock('./index.css', () => ({}));

describe('Main entry point', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();
    
    // Create a fake DOM element to use as the root
    document.body.innerHTML = '<div id="root"></div>';
  });

  it('renders App component in StrictMode', async () => {
    // Import the module dynamically which executes the code
    await import('./main.tsx');
    
    // Verify createRoot was called with the root element
    expect(createRoot).toHaveBeenCalledWith(document.getElementById('root'));
    
    // Get the render function from the createRoot result
    const renderFn = (createRoot as unknown as ReturnType<typeof vi.fn>).mock.results[0].value.render;
    
    // Verify render was called
    expect(renderFn).toHaveBeenCalledTimes(1);
    
    // Check that the first argument to render contains StrictMode
    const renderArg = renderFn.mock.calls[0][0];
    expect(renderArg.type).toBe(StrictMode);
  });
});
