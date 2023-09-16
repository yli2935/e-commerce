/*
 * @Description: temp
 */
import { Outlet } from "react-router-dom";
import Home from "../pages/Home/Home";
const Layout = () => {
    return (
      <div className="app">
        {/* <Navbar /> */}
        <Outlet />
        {/* <Footer /> */}
      </div>
    );
};

const MainRoutes = {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,

      },
      {
        path: "/products/:id",
        // element: <Products />,
      },
      {
        path: "/product/:id",
        // element: <Product />,
      },
    ],
}
export default MainRoutes;