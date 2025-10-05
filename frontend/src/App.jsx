import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/header";
import Home from "./pages/home";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900 transition-colors">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    </>
  );
}
