import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AuthProvider } from "./components/contexts/AuthContext";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home";
import Header from "./components/Header";
import Planner from "./components/Planner";
import UmrahGuide from "./components/UmrahGuide";
import YourPlan from "./components/YourPlan";
import "./App.css";

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    fetch("https://manasik.onrender.com/")
      .then(() => console.log("🔄 Backend wake-up ping sent"))
      .catch((err) => console.error("⚠️ Backend warm-up failed:", err));
  }, []);

  const showHeaderRoutes = ["/home", "/planner", "/umrah-guide", "/yourplan"];
  const showHeader = showHeaderRoutes.includes(location.pathname);

  return (
    <div className="App">
      {showHeader && <Header />}

      <Routes>
        <Route path="/" element={<Auth />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/planner"
          element={
            <ProtectedRoute>
              <Planner />
            </ProtectedRoute>
          }
        />

        <Route
          path="/yourplan"
          element={
            <ProtectedRoute>
              <YourPlan />
            </ProtectedRoute>
          }
        />

        {/* ✅ Public route */}
        <Route path="/umrah-guide" element={<UmrahGuide />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
