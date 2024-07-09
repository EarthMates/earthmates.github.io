import { RouteObject } from "react-router-dom";
import { SiteWrapper } from "./components/site-wrapper/site-wrapper";
import { HomePage } from "./components/home-page/home-page";
import { Startups } from "./components/startups/startups";
import { Investors } from "./components/investors/investors";
import { Maintenance } from "./components/maintenance/maintenance";
import { Impressum } from "./components/impressum/impressum";
import { Terms } from "./components/contract/terms";
import { Privacy } from "./components/contract/privacy";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <SiteWrapper />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "startups", element: <Startups /> },
      { path: "investors", element: <Investors /> },
      { path: "maintenance", element: <Maintenance /> },
      { path: "impressum", element: <Impressum /> },
      { path: "terms", element: <Terms /> },
      { path: "privacy", element: <Privacy /> },
    ],
  },
];
