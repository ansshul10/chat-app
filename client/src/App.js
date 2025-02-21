import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import Home from "./pages/Home";
import MessagePage from "./components/MessagePage";
import CheckEmailPage from "./pages/CheckEmailPage";
import CheckPasswordPage from "./pages/CheckPasswordPage";
import Forgotpassword from "./pages/Forgotpassword";
import AuthLayouts from "./layout";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/register" element={<AuthLayouts><RegisterPage /></AuthLayouts>} />
        <Route path="/email" element={<AuthLayouts><CheckEmailPage /></AuthLayouts>} />
        <Route path="/password" element={<AuthLayouts><CheckPasswordPage /></AuthLayouts>} />
        <Route path="/forgot-password" element={<AuthLayouts><Forgotpassword /></AuthLayouts>} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:userId" element={<MessagePage />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
