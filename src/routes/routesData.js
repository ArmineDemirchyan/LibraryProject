import Admin from "pages/admin";
import Librarian from "pages/librarian";
import { Register } from "pages/login/register";
import { Login } from "pages/login/signin";
import Start from "pages/start";
import SuperAdmin from "pages/superadmin";
import User from "pages/user";
import routes from "routes/routes.js";

const routesData = [
  {
    title: "home",
    path: routes.home,
    Comp: Start,
    exact: true,
  },
  {
    title: "admin",
    path: routes.admin,
    Comp: Admin,
    exact: true,
  },
  {
    title: "user",
    path: routes.user,
    Comp: User,
    exact: true,
  },
  {
    title: "superAdmin",
    path: routes.superAdmin,
    Comp: SuperAdmin,
    exact: true,
  },
  {
    title: "librarian",
    path: routes.librarian,
    Comp: Librarian,
    exact: true,
  },
  {
    title: "login",
    path: routes.login,
    Comp: Login,
    exact: true,
  },
  {
    title: "register",
    path: routes.register,
    Comp: Register,
    exact: true,
  },
  {
    title: "bookList",
    path: routes.bookList,
    Comp: Register,
    exact: true,
  },
];

export default routesData;
