import { Button } from '../../components/button/Button';
import { NumberInput } from '../../components/number-input';
import { Slider } from '../../components/slider';
import { Input } from '../../components/input';
import plusIcon from '../../assets/icons/plus-icon-white.svg';

import styles from './ComponentsPanel.module.css';

export const ComponentsPanel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.componentsSection}>
        <h3 className={styles.sectionLabel}>Input</h3>
        <div className={styles.componentsWrapper}>
          <Input label="Default" placeholder="enter text" />
          <Input label="Disabled" placeholder="enter text" isDisabled={true} />
        </div>
      </div>

      <div className={styles.subContainer}>
        <div className={styles.componentsSection}>
          <h3 className={styles.sectionLabel}>Number Input</h3>
          <div className={styles.componentsWrapper}>
            <NumberInput label="Default" />
            <NumberInput label="Disabled" isDisabled={true} />
          </div>
        </div>

        <div className={styles.componentsSection}>
          <h3 className={styles.sectionLabel}>Slider</h3>
          <div className={styles.componentsWrapper}>
            <Slider />
          </div>
        </div>
      </div>

      <div className={styles.componentsSection}>
        <h3 className={styles.sectionLabel}>Buttons</h3>
        <div className={styles.buttonsWrapper}>
          <table className={styles.buttonsTable}>
            <thead>
              <tr>
                <th />
                <th>
                  <p>Small</p>
                  <p>Primary/Contained</p>
                </th>
                <th>
                  <p>Medium</p>
                  <p>Primary/Contained</p>
                </th>
                <th>
                  <p>Medium</p>
                  <p>Primary/Outlined</p>
                </th>
                <th>
                  <p>Medium</p>
                  <p>Secondary/Contained</p>
                </th>
                <th>
                  <p>Medium</p>
                  <p>Secondary/Outlined</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.firstColumnCell}>Default</td>
                <td>
                  <Button size="small" text="Button" />
                </td>
                <td>
                  <Button text="Button" />
                </td>
                <td>
                  <Button appearance="outlined" text="Button" />
                </td>
                <td>
                  <Button theme="secondary" text="Button" />
                </td>
                <td>
                  <Button appearance="outlined" theme="secondary" text="Button" />
                </td>
              </tr>
              <tr>
                <td className={styles.firstColumnCell}>Disabled</td>
                <td>
                  <Button size="small" text="Button" isDisabled={true} />
                </td>
                <td>
                  <Button text="Button" isDisabled={true} />
                </td>
                <td>
                  <Button appearance="outlined" text="Button" isDisabled={true} />
                </td>
                <td>
                  <Button theme="secondary" text="Button" isDisabled={true} />
                </td>
                <td>
                  <Button appearance="outlined" theme="secondary" text="Button" isDisabled={true} />
                </td>
              </tr>
              <tr>
                <td className={styles.firstColumnCell}>Icon left</td>
                <td>
                  <Button size="small" text="Button" icon={plusIcon} />
                </td>
                <td>
                  <Button text="Button" icon={plusIcon} />
                </td>
              </tr>
              <tr>
                <td className={styles.firstColumnCell}>Icon right</td>
                <td>
                  <Button size="small" text="Button" icon={plusIcon} iconPosition="right" />
                </td>
                <td>
                  <Button text="Button" icon={plusIcon} iconPosition="right" />
                </td>
              </tr>
              <tr>
                <td className={styles.firstColumnCell}>Icon only</td>
                <td>
                  <Button size="small" icon={plusIcon} />
                </td>
                <td>
                  <Button icon={plusIcon} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
