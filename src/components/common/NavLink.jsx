import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

const NavLink = ({ children, to, className, activeClassName, ...rest }) => {
  const { pathname } = useLocation();

  return (
    <Link
      to={to}
      className={classNames(className, { [activeClassName]: pathname === to })}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default NavLink;
