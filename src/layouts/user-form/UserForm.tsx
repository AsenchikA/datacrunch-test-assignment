import { Form } from 'react-aria-components';
import { Input } from '../../components/input';
import { FormEvent, useState } from 'react';
import { NumberInput } from '../../components/number-input';
import { Slider } from '../../components/slider';
import { Button } from '../../components/button';
import binIcon from '../../assets/icons/bin-icon.svg';
import styles from './UserForm.module.css';

const MIN_VALUE = 0;
const MAX_VALUE = 100;

export const UserForm = () => {
  const [name, setName] = useState('');
  const [size, setSize] = useState(0);
  const [results, setResults] = useState<{ name: string; size: number } | null>(null);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setResults({ name, size });
  };

  const onReset = () => {
    setResults(null);
  };

  return (
    <div className={styles.container}>
      <Form className={styles.formContainer} aria-label="userForm" onSubmit={onSubmit} onReset={onReset}>
        <div className={styles.nameContainer}>
          <Input label="Name" placeholder="enter text" value={name} onChange={setName} isRequired={true} />
        </div>

        <div className={styles.sizeContainer}>
          <NumberInput label="Size (GB)" value={size} onChange={setSize} minValue={MIN_VALUE} maxValue={MAX_VALUE} />
          <Slider value={size} onChange={setSize} minValue={MIN_VALUE} maxValue={MAX_VALUE} />
        </div>

        <div className={styles.footer}>
          <Button type="reset" text="Clear" appearance="outlined" icon={binIcon} />
          <Button type="submit" text="Submit" />
        </div>
      </Form>

      {results && (
        <div data-testid="resultsForm" className={styles.resultsContainer}>
          <h3 className={styles.resultsLabel}>Results</h3>
          <p>Name: {results.name}</p>
          <p>Size: {results.size} GB</p>
        </div>
      )}
    </div>
  );
};
