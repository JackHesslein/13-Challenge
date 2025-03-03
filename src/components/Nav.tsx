import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
        <li style={{ margin: '0 10px' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            Home
          </Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/SavedCandidates" style={{ textDecoration: 'none', color: 'black' }}>
            Saved Candidates
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;