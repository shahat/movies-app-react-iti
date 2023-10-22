// import
import {
  BrowserRouter,
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { useState } from "react";
//import external packages
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import components
import AppLayOut from "./pages/AppLayout/AppLayOut";
import Movies from "./components/movies/movies";
import LogIn from "./components/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Favorites from "./components/Favorites/Favorites";
import Register from "./components/Register/Register";
import ProtectedRoute from "./helpers/ProtectedRoute";
import { Provider } from "react-redux";
import { store } from "./store/store";
function App() {
  const [isLoggedIn, setisLoggedIn] = useState(null);
  const logIn = () => {
    setisLoggedIn(true);
  };
  const logOut = () => {
    setisLoggedIn(false);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayOut />,
      children: [
        { index: true, element: <Movies /> },
        { path: "/login", element: <LogIn /> },
        { path: "/register", element: <Register /> },
        { path: "/productdetails/:id", element: <ProductDetails /> },
        {
          path: "/favorate",
          element: (
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              {" "}
              <Favorites />{" "}
            </ProtectedRoute>
          ),
        },
      ],
    },
    { path: "/*", element: <NotFound /> },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
