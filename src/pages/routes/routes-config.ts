import Home from "@pages/Home";
import Auth from "@pages/Auth";
import Login from "@pages/Login";

export const routesConfig = [
  { path: "/1", exact: true, component: Home },
  { path: "/2", exact: true, component: Auth },
  { path: "/3", exact: true, component: Login },
];
