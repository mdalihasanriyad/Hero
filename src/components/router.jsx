import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import App from "../App";
import ErrorPage from "./ErrorPage";
import AppSection from "./AppSection";
import MyInstallation from "./MyInstallation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/apps", element: <AppSection /> },
    //   { path: "/app/:id", element: <AppDetails /> },
      { path: "/installation", element: <MyInstallation /> },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);