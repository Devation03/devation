import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Home from "../pages/Home";
import Documents from "../pages/Documents";
import Document from "../pages/Document";
import CreateDocument from "../pages/CreateDocument";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import { useAuthStore } from "../store/auth";

const Router = () => {
  const [authState] = useAuthStore((state) => [state.authState]);

  const PrivateRoute = () => {
    const auth = authState.isLoggedIn;

    return auth ? <Outlet /> : <Navigate to="/signin" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/create-document" element={<CreateDocument />} />
          <Route path="/document/:id" element={<Document />} />
        </Route>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
