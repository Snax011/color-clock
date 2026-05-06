import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import App from './App';

describe('Color Clock', () => {
  beforeEach(() => {
    // Fix the system time to a known value for predictable output
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-05-06T14:30:45'));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders the clock title', () => {
    render(<App />);
    expect(screen.getByText('Color Clock')).toBeInTheDocument();
  });

  it('displays the current time in hh:mm:ss a format', () => {
    render(<App />);
    // 14:30:45 → 02:30:45 PM
    expect(screen.getByText('02:30:45 PM')).toBeInTheDocument();
  });

  it('displays the current date in readable format', () => {
    render(<App />);
    expect(screen.getByText('Wednesday, May 6th 2026')).toBeInTheDocument();
  });

  it('updates the time every second', () => {
    render(<App />);
    expect(screen.getByText('02:30:45 PM')).toBeInTheDocument();

    // Advance clock by 1 second
    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(screen.getByText('02:30:46 PM')).toBeInTheDocument();
  });
});
