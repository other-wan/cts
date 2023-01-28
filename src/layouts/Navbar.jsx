import { BsBell } from 'react-icons/bs';
import styles from 'styles/navbar.module.css';

export default function Navbar({ title }) {
  return (
    <nav className={styles.nav}>
      <h1>{title}</h1>

      <button className={styles.notification_btn}>
        <BsBell size={18} />
      </button>

      <div className={styles.details}>
        <div>TB</div>
        <span>Tunde Bakare</span>
      </div>
    </nav>
  );
}
