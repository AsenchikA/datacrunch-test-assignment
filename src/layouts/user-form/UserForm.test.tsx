import { test, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserForm } from './UserForm';

test('UserForm: renders form by default', () => {
  render(<UserForm />);
  expect(screen.getByRole('form', { name: 'userForm' })).toBeInTheDocument();
});

test('UserForm: renders required elements inside form', () => {
  render(<UserForm />);
  expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument();
  expect(screen.getByRole('textbox', { name: /size/i })).toBeInTheDocument();
  expect(screen.getByRole('slider')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /clear/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
});

test('UserForm: does not render results by default', () => {
  render(<UserForm />);
  expect(screen.queryByTestId('resultsForm')).not.toBeInTheDocument();
});

test('UserForm: renders results after form submit', async () => {
  const name = 'test name';
  const size = '33';

  const user = userEvent.setup();

  render(<UserForm />);

  await user.type(screen.getByRole('textbox', { name: /name/i }), name);
  await user.type(screen.getByRole('textbox', { name: /size/i }), size);

  await user.click(screen.getByRole('button', { name: /submit/i }));

  const resultsForm = screen.getByTestId('resultsForm');

  expect(resultsForm).toBeInTheDocument();
  expect(within(resultsForm).getByText(`Name: ${name}`)).toBeInTheDocument();
  expect(within(resultsForm).getByText(`Size: ${size} GB`)).toBeInTheDocument();
});

test('UserForm: clear button clears form', async () => {
  const name = 'test name';
  const size = '33';

  const user = userEvent.setup();

  render(<UserForm />);

  await user.type(screen.getByRole('textbox', { name: /name/i }), name);
  await user.type(screen.getByRole('textbox', { name: /size/i }), size);

  await user.click(screen.getByRole('button', { name: /submit/i }));

  expect(screen.getByTestId('resultsForm')).toBeInTheDocument();

  await user.click(screen.getByRole('button', { name: /clear/i }));

  expect(screen.queryByTestId('resultsForm')).not.toBeInTheDocument();
  expect(screen.getByRole('textbox', { name: /name/i })).toHaveValue('');
  expect(screen.getByRole('textbox', { name: /size/i })).toHaveValue('0');
});
