import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-light">
      <div class="container">
        <NavLink to="/" class="navbar-brand">
          <div>
            <img
              src={require("../assets/img/Lagos-logo.png")}
              alt="Lagos-logo"
              class="Nav__logo"
            />
            <img
              src={require("../assets/img/Eko360.png")}
              alt="Eko360"
              class="Nav__img"
            />
          </div>
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon "></span>
        </button>
        <div class="collapse navbar-collapse nav-flex" id="navbarNav">
          <ul class="navbar-nav ">
            <li class="nav-item">
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
            <li class="nav-item">
              <NavLink
                to="/submit-dataset"
                className={({ isActive }) =>
                  isActive ? "Nav__link Nav__link--active" : "Nav__link "
                }
              >
                Submit Dataset
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                to="/publications"
                className={({ isActive }) =>
                  isActive ? "Nav__link Nav__link--active" : "Nav__link "
                }
              >
                Publications
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                to="/public-data"
                className={({ isActive }) =>
                  isActive ? "Nav__link Nav__link--active" : "Nav__link "
                }
              >
                Public Data
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "Nav__link Nav__link--active" : "Nav__link "
                }
              >
                About
              </NavLink>
            </li>
            <li class="nav-item">
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
