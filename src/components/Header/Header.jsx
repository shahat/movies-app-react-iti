import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light container d-flex justify-content-between">
        <div>
          <a className="navbar-brand" href="#">
            SHe7tawy Moves
          </a>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-item nav-link " to="/">
                Movies
              </Link>
              <Link className="nav-item nav-link" to="favorate">
                Favorites
              </Link>{" "}
              <Link className="nav-item nav-link" to="/register">
                Register
              </Link>
              <Link className="nav-item nav-link" to="/login">
                Login
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </nav>
    </>
  );
}
