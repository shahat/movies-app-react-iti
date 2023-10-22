import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../store/slice/isLogged";
export default function Header() {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.isLogged.isLogged);
  const favoraties = useSelector((state) => state.favorates.favorates);

  const handleLogOut = (value) => {
    dispatch(logIn(value));
  };
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
                <span>{favoraties.length}</span>
              </Link>{" "}
              <Link className="nav-item nav-link" to="/register">
                Register
              </Link>
              <Link className="nav-item nav-link" to="/login">
                Login
              </Link>
              <Link
                className="nav-item nav-link"
                onClick={() => handleLogOut(false)}
                to="#"
              >
                LogOut
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </nav>
    </>
  );
}
