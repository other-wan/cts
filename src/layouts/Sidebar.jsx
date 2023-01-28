import SidebarConfigs from 'configs/sidebar';
import NavLink from 'components/common/NavLink';
import styles from 'styles/sidebar.module.css';

export default function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <ul className={styles.nav_list}>
        {SidebarConfigs.map(({ name, route, icon }) => (
          <li key={route + name} className={styles.nav_item}>
            <NavLink
              to={route}
              className={styles.nav_link}
              activeClassName={styles.nav_active}
            >
              {icon}
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
