import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import RegisterPage from "./pages/RegisterPage";
import CheckEmailPage from "./pages/CheckEmailPage";
import CheckPasswordPage from "./pages/CheckPasswordPage";
import Home from "./pages/Home";
import MessagePage from "./components/MessagePage";
import AuthLayouts from "./layout";
import Forgotpassword from "./pages/Forgotpassword";
import App from "./App";
import "./index.css";

// Render Application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Default Route to Register Page */}
          <Route path="/" element={<Navigate to="/register" />} />
          
          {/* Authentication Routes */}
          <Route path="/register" element={<AuthLayouts><RegisterPage /></AuthLayouts>} />
          <Route path="/email" element={<AuthLayouts><CheckEmailPage /></AuthLayouts>} />
          <Route path="/password" element={<AuthLayouts><CheckPasswordPage /></AuthLayouts>} />
          <Route path="/forgot-password" element={<AuthLayouts><Forgotpassword /></AuthLayouts>} />
          
          {/* Main Routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/home/:userId" element={<MessagePage />} />

          {/* Catch-all 404 Page */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
