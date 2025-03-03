import { FC } from 'react';
import { Group, Input, Label, NumberField, NumberFieldProps } from 'react-aria-components';

import minusIcon from '@assets/icons/minus-icon.svg';
import plusIcon from '@assets/icons/plus-icon-black.svg';

import { Button } from '../button';

import styles from './NumberInput.module.css';

interface Props extends Omit<NumberFieldProps, 'className' | 'style'> {
  label?: string;
}

export const NumberInput: FC<Props> = ({ label, ...props }) => {
  return (
    <NumberField {...props} className={styles.container}>
      {label && <Label>{label}</Label>}
      <Group className={styles.inputContainer}>
        <Button size="small" theme="secondary" icon={minusIcon} slot="decrement" />
        <Input className={styles.input} />
        <Button size="small" theme="secondary" icon={plusIcon} slot="increment" />
      </Group>
    </NumberField>
  );
};
