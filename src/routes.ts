import { ROUTE } from "./utils/consts";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Groups from "./pages/Groups";
import Users from "./pages/Users";
import Settings from "./pages/Settings";

export const routes = [
  {
    path: ROUTE.ORDERS,
    Component: Orders,
  },
  {
    path: ROUTE.GROUPS,
    Component: Groups,
  },
  {
    path: ROUTE.USERS,
    Component: Users,
  },
  {
    path: ROUTE.PRODUCTS,
    Component: Products,
  },
  {
    path: ROUTE.SETTINGS,
    Component: Settings,
  },
];
