import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Input } from './Input';

test('Input: renders input by default', () => {
  render(<Input />);
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});

test('Input: renders label when it is passed', () => {
  const label = 'test label';

  const { rerender } = render(<Input />);
  expect(screen.queryByLabelText(/label/)).not.toBeInTheDocument();

  rerender(<Input label={label} />);
  expect(screen.getByText(label)).toBeInTheDocument();
});
