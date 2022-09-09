import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/svg/logo.svg";
import { ReactComponent as Home } from "../assets/svg/home-page.svg";
import { ReactComponent as Explore } from "../assets/svg/explore.svg";
import { ReactComponent as Auction } from "../assets/svg/auction.svg";
import { ReactComponent as User } from "../assets/svg/user.svg";

function Navbar() {
  return (
    <nav className="navbar container">
      <ul className="navbarListItems">
        <li>
          <NavLink to="/" className="navbarListItem">
            <Logo className="logo" width="135px" height="38px" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navbarListItemActive" : "navbarListItem"
            }
          >
            <Home className="icon" width="24px" height="23.7px" />

            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/explore"
            className={({ isActive }) =>
              isActive ? "navbarListItemActive" : "navbarListItem"
            }
          >
            <Explore className="icon" width="24px" height="24px" />
            <p>Explore</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/auctions"
            className={({ isActive }) =>
              isActive ? "navbarListItemActive" : "navbarListItem"
            }
          >
            <Auction className="icon" width="24px" height="24.07px" />
            <p>Auction</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "navbarListItemActive" : "navbarListItem"
            }
          >
            <User className="icon" width="24px" height="24px" />
            <p>Login/Register</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
