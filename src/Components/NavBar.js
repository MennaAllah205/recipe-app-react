import { Link } from "react-router-dom";
import "../Css/NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li></li>
      </ul>
    </nav>
  );
};

export default NavBar;
