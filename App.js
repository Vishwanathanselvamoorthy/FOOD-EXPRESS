import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./src/Components/Cart";
// import About from "./src/Components/About";
// import Contact from "./src/Components/Contact";
import Menu from "./src/Components/Menu";
import UserContext from "./src/Components/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/Components/utils/appStore";
import Search from "./src/Components/Search";
import SignUp from "./src/Components/SignUp";
import Error from "./src/Components/Error";

const App = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "",
    };
    setUserName(data.name);
  }, []);
  return (
    <>
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <Header />

          <Outlet />
        </UserContext.Provider>
      </Provider>
    </>
  );
};

const About = lazy(() => import("./src/Components/About"));
const Contact = lazy(() => import("./src/Components/Contact"));
const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading Contact</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading About</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <Menu />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path:'/signup',
        element:<SignUp/>
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoutes} />);
