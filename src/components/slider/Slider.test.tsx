import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Slider } from './Slider';

test('Slider: renders slider', () => {
  render(<Slider />);
  expect(screen.getByRole('slider')).toBeInTheDocument();
});
