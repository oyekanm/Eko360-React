import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-light">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          <div>
            <img
              src={require("../assets/img/Lagos-logo.png")}
              alt="Lagos-logo"
              className="Nav__logo"
            />
            <img
              src={require("../assets/img/Eko360.png")}
              alt="Eko360"
              className="Nav__img"
            />
          </div>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse nav-flex" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "Nav__link Nav__link--active" : "Nav__link "
                }
                aria-current="page"
              >
                Search
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav__link dropdown-toggle"
                href=""
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Explore
              </a>
              <ul className="dropdown-menu dropdown-menu-light">
                <li>
                  <NavLink
                    to="/interactive"
                    className={({ isActive }) =>
                      isActive
                        ? "dropdown-item explore__link"
                        : "dropdown-item explore__link"
                    }
                  >
                    Interactive Analysis
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/slice&dice"
                    className={({ isActive }) =>
                      isActive
                        ? "dropdown-item explore__link"
                        : "dropdown-item explore__link"
                    }
                  >
                    Slice & Dice
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink
                to="/submit-dataset"
                className={({ isActive }) =>
                  isActive ? "Nav__link Nav__link--active" : "Nav__link "
                }
              >
                Submit Dataset
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/publications"
                className={({ isActive }) =>
                  isActive ? "Nav__link Nav__link--active" : "Nav__link "
                }
              >
                Publications
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/public-data"
                className={({ isActive }) =>
                  isActive ? "Nav__link Nav__link--active" : "Nav__link "
                }
              >
                Public Data
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "Nav__link Nav__link--active" : "Nav__link "
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/faqs"
                className={({ isActive }) =>
                  isActive ? "Nav__link Nav__link--active" : "Nav__link "
                }
              >
                FAQs
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
