import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Documents } from "../pages/Documents";
import { Document } from "../pages/Document";
import { Layout } from "../layout/layout";
import { CreateDocument } from "../pages/CreateDocument";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/create-document" element={<CreateDocument />} />
          <Route path="/document/:id" element={<Document />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
