import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Basket from "./pages/Basket";
import DevicePage from "./pages/DevicePage";
import Favourite from "./pages/Favourite";
import Shop from "./pages/Shop";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE,
  FAVOURITE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE
} from "./utils/consts";

export const authRouts = [
  {
    path: ADMIN_ROUTE,
    Component: Admin
  },
  {
    path: BASKET_ROUTE,
    Component: Basket
  },
  {
    path: FAVOURITE_ROUTE,
    Component: Favourite
  }
];

export const publicRouts = [
  {
    path: SHOP_ROUTE,
    Component: Shop
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth
  },

  {
    path: DEVICE_ROUTE + "/:id",
    Component: DevicePage
  },
  {
    path: BASKET_ROUTE,
    Component: Basket
  }
];
