import "./App.css";
import Navbar from "./components/header";
import { BrowserRouter } from "react-router-dom";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </>
  );
}
