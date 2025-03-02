import { ComponentsPanel } from './layouts/components-panel';
import { UserForm } from './layouts/user-form';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <h2>Form</h2>
      <UserForm />
      <h2>Components</h2>
      <ComponentsPanel />
    </div>
  );
}

export default App;
