import { useState } from "react";
import "./App.css";
import { AdminPanel } from "./pages/admin-panel";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home-page";

function App() {
  const [showPage, setShowPage] = useState("admin-panel");

  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/admin-panel" element={<AdminPanel />} />
    </Routes>
  );
}

export default App;
