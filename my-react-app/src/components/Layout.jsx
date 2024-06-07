import PropTypes from 'prop-types';
import { Link, Outlet } from 'react-router-dom';

const Layout = ({ options }) => {
  return (
    <div style={{ width: '100%' }}>
      <nav>
        {options.map((option, index) => (
          <Link key={index} to={option.to}>{option.title}</Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
};

Layout.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Layout;
