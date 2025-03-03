import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';

import { NumberInput } from './NumberInput';

test('NumberInput: renders input by default', () => {
  render(<NumberInput />);
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});

test('NumberInput: renders decrement and increment buttons', () => {
  render(<NumberInput />);
  expect(screen.getByRole('button', { name: /decrease/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /increase/i })).toBeInTheDocument();
});

test('NumberInput: renders label when it is passed', () => {
  const label = 'test label';

  const { rerender } = render(<NumberInput />);
  expect(screen.queryByLabelText(/label/)).not.toBeInTheDocument();

  rerender(<NumberInput label={label} />);
  expect(screen.getByText(label)).toBeInTheDocument();
});
