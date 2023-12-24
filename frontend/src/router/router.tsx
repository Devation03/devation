import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Documents } from "../pages/Documents";
import { Document } from "../pages/Document";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/document/:id" element={<Document />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
