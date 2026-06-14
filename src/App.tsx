import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Courses } from "./pages/Courses";
import { About } from "./pages/About";
import { Admissions } from "./pages/Admissions";
import { Initiatives } from "./pages/Initiatives";
import { AuthProvider } from "./context/AuthContext";
import { AdminRoute } from "./components/AdminRoute";
import { Login } from "./pages/Admin/Login";
import { AdminLayout } from "./pages/Admin/AdminLayout";
import { Dashboard } from "./pages/Admin/Dashboard";
import { AdminInitiatives } from "./pages/Admin/AdminInitiatives";
import { AdminMedia } from "./pages/Admin/AdminMedia";
import { AdminCallbacks } from "./pages/Admin/AdminCallbacks";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/initiatives" element={<Initiatives />} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin" element={<AdminRoute><AdminLayout /></AdminRoute>}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="initiatives" element={<AdminInitiatives />} />
            <Route path="media" element={<AdminMedia />} />
            <Route path="requests" element={<AdminCallbacks />} />
          </Route>
        </Routes>
        <FloatingWhatsApp />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;