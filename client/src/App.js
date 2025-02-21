import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <Outlet />  {/* 🔹 Renders the child route (e.g., Register Page) */}
    </>
  );
}

export default App;
