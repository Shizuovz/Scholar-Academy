import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Courses } from "./pages/Courses";
import { About } from "./pages/About";
import { Admissions } from "./pages/Admissions";
import { Initiatives } from "./pages/Initiatives";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/initiatives" element={<Initiatives />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;