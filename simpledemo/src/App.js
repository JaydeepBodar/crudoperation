import styles from "./App.module.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigation from "./Component/Navigation";
import Home from "./Pages/Home";
import Aboutus from "./Pages/Aboutus";
import Adduser from "./Pages/Adduser";
import Contactus from "./Pages/Contactus";
import Updateuser from "./Pages/Updateuser";
import Users from "./Component/Users";
import Footer from "./Component/Footer ";
import Layout from "./Component/Layout";
import Postdetails from "./Component/Postdetails";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about-us", element: <Aboutus /> },
        { path: "adduser", element: <Adduser /> },
        { path: "contactus", element: <Contactus /> },
        { path: "updateuser/:id", element: <Updateuser /> },
        { path: "users/:id", element: <Users /> },
        { path: "Postdetails/:id", element: <Postdetails /> },
      ],
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
