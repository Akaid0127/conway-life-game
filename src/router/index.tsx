import { Navigate, createBrowserRouter } from "react-router-dom";
import ConwayLife from "../pages/ConwayLife";
import CreditsLink from "../pages/CreditsLink";
import RuleDesc from "../pages/RuleDesc";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/ruleDesc" />,
  },
  {
    path: "/conwayLife",
    element: <ConwayLife />,
  },
  {
    path: "/creditsLink",
    element: <CreditsLink />,
  },
  {
    path: "/ruleDesc",
    element: <RuleDesc />,
  },
]);

export default router;
