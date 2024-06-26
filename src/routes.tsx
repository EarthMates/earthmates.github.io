import { RouteObject } from "react-router-dom";
import { SiteWrapper } from "./components/site-wrapper/site-wrapper";
import { HomePage } from "./components/home-page/home-page";
import { Startups } from "./components/startups/startups";
import { Investors } from "./components/investors/investors";
import { Maintenance } from "./components/maintenance/maintenance";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <SiteWrapper />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "startups", element: <Startups /> },
      { path: "investors", element: <Investors /> },
      { path: "maintenance", element: <Maintenance /> },
    ],
  },
];
