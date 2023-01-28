import { Outlet } from 'react-router-dom';
import Sidebar from 'layouts/Sidebar';
import styles from 'styles/authenticated.module.css';

export default function Authenticated() {
  return (
    <div className={styles.authenticated}>
      <aside className={styles.aside}>
        <Sidebar />
      </aside>
      <main style={{ height: '200vh' }}>
        <Outlet />
      </main>
    </div>
  );
}
