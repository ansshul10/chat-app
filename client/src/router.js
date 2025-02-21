import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import RegisterPage from "./pages/RegisterPage";
import CheckEmailPage from "./pages/CheckEmailPage";
import CheckPasswordPage from "./pages/CheckPasswordPage";
import Home from "./pages/Home";
import MessagePage from "./components/MessagePage";
import AuthLayouts from "./layout";
import Forgotpassword from "./pages/Forgotpassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Navigate to="/register" replace /> },  // 🔹 Default to Register Page
      { path: "register", element: <AuthLayouts><RegisterPage /></AuthLayouts> },
      { path: "email", element: <AuthLayouts><CheckEmailPage /></AuthLayouts> },
      { path: "password", element: <AuthLayouts><CheckPasswordPage /></AuthLayouts> },
      { path: "forgot-password", element: <AuthLayouts><Forgotpassword /></AuthLayouts> },
      {
        path: "home",
        element: <Home />,
        children: [{ path: ":userId", element: <MessagePage /> }],
      },
      { path: "*", element: <h1>404 - Page Not Found</h1> },
    ],
  },
]);

export default router;
