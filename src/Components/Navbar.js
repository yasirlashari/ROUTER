// import { Link } from 'react-router-dom';

// export const Navbar = () => {
  // return (
    // <nav>
      // <Link to="/">Home</Link>
      // <Link to="/about">About</Link>
    // </nav>
  // );
// };

import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};
