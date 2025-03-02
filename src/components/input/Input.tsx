import { FC } from 'react';
import { TextField, Input as BaseInput, Label, TextFieldProps, FieldError } from 'react-aria-components';
import styles from './Input.module.css';

interface Props extends Omit<TextFieldProps, 'className' | 'style'> {
  label?: string;
  placeholder?: string;
}

export const Input: FC<Props> = ({ label, placeholder, ...props }) => {
  return (
    <TextField {...props} className={styles.container}>
      {label && <Label className={styles.label}>{label}</Label>}
      <BaseInput className={styles.input} placeholder={placeholder} />
      <FieldError className={styles.error} />
    </TextField>
  );
};
