import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';

describe('App Component', () => {
  it('renders the To-Do List header', () => {
    render(<App />);
    const headerElement = screen.getByRole('heading', {
      name: /to-do list/i,
    });
    expect(headerElement).toBeInTheDocument();
  });

  it('toggles theme icon when theme toggle button is clicked', () => {
    render(<App />);
    // Initially, dark mode icon is visible
    expect(screen.getByTestId('dark-mode-icon')).toBeInTheDocument();

    // Click the theme toggle button
    const themeToggleButton = screen.getByTestId('theme-toggle');
    fireEvent.click(themeToggleButton);

    // After clicking, the light mode icon should be visible
    expect(screen.getByTestId('light-mode-icon')).toBeInTheDocument();
  });
});
