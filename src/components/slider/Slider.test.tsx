import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';

import { Slider } from './Slider';

test('Slider: renders slider', () => {
  render(<Slider />);
  expect(screen.getByRole('slider')).toBeInTheDocument();
});
