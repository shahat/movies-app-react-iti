import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayOut from "./pages/AppLayout/AppLayOut";
import Movies from "./components/movies/movies";
import LogIn from "./components/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Favorites from "./components/Favorites/Favorites";
import Register from "./components/Register/Register";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ProtectedRoute from "./helpers/ProtectedRoute";
import { useState } from "react";
function App() {
  const [isLoggedIn, setisLoggedIn] = useState(null);
  const logIn = () => {
    setisLoggedIn(true);
  };
  const logOut = () => {
    setisLoggedIn(false);
  };

  return (
    <>
      <BrowserRouter>
        {isLoggedIn ? (
          <button onClick={logOut}>Logout</button>
        ) : (
          <button onClick={logIn}>Login</button>
        )}
        <Routes>
          <Route path="/" element={<AppLayOut />}>
            <Route path="/" element={<Movies />} />
            <Route
              path="/favorate"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Favorites />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/productdetails/:id" element={<ProductDetails />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
