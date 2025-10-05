import "./App.css";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navbar from "./components/header";
import Home from "./pages/home";

const Docs = lazy(() => import("./pages/docs"));
const Overview = lazy(() => import("./docs/overview"));

export default function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900 transition-colors">
        <Navbar />
        <main className="flex-1">
          <Suspense
            fallback={<div className="text-center p-8">Loading...</div>}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/docs" element={<Docs />}>
                <Route index element={<Overview />}></Route>
              </Route>
            </Routes>
          </Suspense>
        </main>
      </div>
    </>
  );
}
