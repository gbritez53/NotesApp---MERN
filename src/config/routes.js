//Layouts
import Layout from "../Layout";

//Pages
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Error404 from "../pages/Error404";
import About from "../pages/AboutUs";
import Notes from "../pages/Notes";

const routes = [
  {
    path: "/",
    exact: false,
    component: Layout,
    subroutes: [
      {
        path: "/",
        exact: true,
        component: Home,
      },
      {
        path: "/users/signIn",
        exact: true,
        component: SignIn,
      },
      {
        path: "/users/signUp",
        exact: true,
        component: SignUp,
      },
      {
        path: "/about",
        exact: true,
        component: About,
      },
      {
        path: "/notes",
        exact: true,
        component: Notes,
      },
      {
        component: Error404,
      },
    ],
  },
];

export default routes;
