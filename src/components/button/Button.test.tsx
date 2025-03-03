import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';

import icon from '@assets/icons/plus-icon-black.svg';

import { Button } from './Button';
import styles from './Button.module.css';

test('Button: renders button by default', () => {
  render(<Button />);
  expect(screen.getByRole('button')).toBeInTheDocument();
});

test('Button: renders text when it is passed', () => {
  const text = 'test text';

  const { rerender } = render(<Button />);
  expect(screen.getByRole('button')).toHaveTextContent('');

  rerender(<Button text={text} />);
  expect(screen.getByText(text)).toBeInTheDocument();
});

test('Button: renders icon when it is passed', () => {
  const { rerender } = render(<Button />);
  expect(screen.getByRole('button')).toHaveTextContent('');

  rerender(<Button icon={icon} />);
  expect(screen.getByRole('button').querySelector('img')).toBeInTheDocument();
});

test('Button: renders icon and text at the same time when it is passed', () => {
  const text = 'test text';

  const { rerender } = render(<Button />);
  expect(screen.getByRole('button')).toHaveTextContent('');

  rerender(<Button icon={icon} text={text} />);
  expect(screen.getByText(text)).toBeInTheDocument();
  expect(screen.getByRole('button').querySelector('img')).toBeInTheDocument();
});

test('Button: renders icon left and icon right', () => {
  const { rerender } = render(<Button icon={icon} text="test text" />);
  expect(screen.getByRole('button')).toHaveClass(styles.iconButtonLeft);

  rerender(<Button icon={icon} text="test text" iconPosition="left" />);
  expect(screen.getByRole('button')).toHaveClass(styles.iconButtonLeft);

  rerender(<Button icon={icon} text="test text" iconPosition="right" />);
  expect(screen.getByRole('button')).toHaveClass(styles.iconButtonRight);
});

test('Button: renders in all sizes', () => {
  const { rerender } = render(<Button />);
  expect(screen.getByRole('button')).toHaveClass(styles.mediumButton);

  rerender(<Button size="medium" />);
  expect(screen.getByRole('button')).toHaveClass(styles.mediumButton);

  rerender(<Button size="small" />);
  expect(screen.getByRole('button')).toHaveClass(styles.smallButton);
});

test('Button: renders in all themes', () => {
  const { rerender } = render(<Button />);
  expect(screen.getByRole('button')).toHaveClass(styles.primaryButton);

  rerender(<Button theme="primary" />);
  expect(screen.getByRole('button')).toHaveClass(styles.primaryButton);

  rerender(<Button theme="secondary" />);
  expect(screen.getByRole('button')).toHaveClass(styles.secondaryButton);
});

test('Button: renders in all appearances', () => {
  const { rerender } = render(<Button />);
  expect(screen.getByRole('button')).toHaveClass(styles.containedButton);

  rerender(<Button appearance="contained" />);
  expect(screen.getByRole('button')).toHaveClass(styles.containedButton);

  rerender(<Button appearance="outlined" />);
  expect(screen.getByRole('button')).toHaveClass(styles.outlinedButton);
});
