import "./App.css";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navbar from "./components/header";
import Home from "./pages/home";
import CreateTutorial from "./pages/tutorialForm";
import CreateResource from "./pages/resourceForm";
import AuthForm from "./components/authForm";

const Tutorial = lazy(() => import("./pages/tutorials"));
const Resource = lazy(() => import("./pages/resources"));
const Docs = lazy(() => import("./pages/docs"));
const Overview = lazy(() => import("./docs/overview"));
const Start = lazy(() => import("./docs/getStart"));
const Aboutllm = lazy(() => import("./docs/llm"));

export default function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-white  ">
        <Navbar />
        <main className="flex-1 hero-dots">
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-screen">
                <div className="w-12 h-12 border-10 border-black border-dotted rounded-full animate-spin"></div>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/docs" element={<Docs />}>
                <Route index element={<Overview />}></Route>
                <Route path="start" element={<Start />}></Route>
                <Route path="llm" element={<Aboutllm />}></Route>
              </Route>
              <Route path="/resource" element={<Resource />} />
              <Route path="/tutorial" element={<Tutorial />} />
              <Route path="/createResource" element={<CreateResource />} />
              <Route path="/createTutorial" element={<CreateTutorial />} />
              <Route path="/authform" element={<AuthForm />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </>
  );
}
