import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import CarDetail from "./pages/CarDetail";
import About from "./pages/About";
import CarMatch from "./pages/CarMatch";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/car/:id" element={<CarDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/car-match" element={<CarMatch />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}