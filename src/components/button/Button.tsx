import { FC } from 'react';
import clsx from 'clsx';
import { Button as BaseButton, ButtonProps } from 'react-aria-components';
import styles from './Button.module.css';

interface Props extends Omit<ButtonProps, 'className' | 'style'> {
  appearance?: 'contained' | 'outlined';
  size?: 'small' | 'medium';
  theme?: 'primary' | 'secondary';
  text?: string;
  icon?: string;
  iconPosition?: 'left' | 'right';
}

export const Button: FC<Props> = ({
  appearance = 'contained',
  icon,
  iconPosition = 'left',
  size = 'medium',
  text,
  theme = 'primary',
  ...props
}) => {
  const className = clsx(styles.button, {
    [styles.containedButton]: appearance === 'contained',
    [styles.outlinedButton]: appearance === 'outlined',
    [styles.smallButton]: size === 'small',
    [styles.mediumButton]: size === 'medium',
    [styles.primaryButton]: theme === 'primary',
    [styles.secondaryButton]: theme === 'secondary',
    [styles.iconButton]: icon,
    [styles.iconButtonLeft]: icon && text && iconPosition === 'left',
    [styles.iconButtonRight]: icon && text && iconPosition === 'right',
  });

  return (
    <BaseButton {...props} className={className}>
      {icon && <img src={icon} className={styles.icon} />}
      {text}
    </BaseButton>
  );
};
