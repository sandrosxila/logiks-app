import "./App.css";
import { AdminPanel } from "./pages/admin-panel";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home-page";
import { ProductPage } from "./pages/product-page";

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/admin-panel" element={<AdminPanel />} />
      <Route path="/product" element={<ProductPage />} />
    </Routes>
  );
}

export default App;
