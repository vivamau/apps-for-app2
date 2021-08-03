import Homepage from "../views/Homepage/Homepage";

const siteRoutes = [
  {
    path: "/homepage",
    name: "Homepage",
    component: Homepage,
    private: false,
  },
  {
    path: "/",
    name: "homepage",
    component: Homepage,
    private: false,
  },
];
export default siteRoutes;
