import "./App.css";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navbar from "./components/header";
import Home from "./pages/home";

const Tutorial = lazy(() => import("./pages/tutorials"));
const Resource = lazy(() => import("./pages/resources"));
const Docs = lazy(() => import("./pages/docs"));
const Overview = lazy(() => import("./docs/overview"));
const Start = lazy(() => import("./docs/getStart"));
const Aboutllm = lazy(() => import("./docs/llm"));
const AboutModels = lazy(() => import("./docs/models"));
const AboutPrompts = lazy(() => import("./docs/prompts"));

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
                <Route path="start" element={<Start />}></Route>
                <Route path="llm" element={<Aboutllm />}></Route>
                <Route path="models" element={<AboutModels />}></Route>
                <Route path="prompts" element={<AboutPrompts />}></Route>
              </Route>
              <Route path="/resource" element={<Resource />} />
              <Route path="/tutorial" element={<Tutorial />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </>
  );
}
