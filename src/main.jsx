import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import PilahSampah from "./pages/PilahSampah";
import SampahOrganik from "./pages/SampahOrganik";
import SampahAnorganik from "./pages/SampahAnorganik";
import SampahB3 from "./pages/SampahB3";
import Register from "./pages/RegisterPage";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="pilah-sampah" element={<PilahSampah />} />
      <Route path="sampah-organik" element={<SampahOrganik />} />
      <Route path="sampah-anorganik" element={<SampahAnorganik />} />
      <Route path="sampah-B3" element={<SampahB3 />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<Register />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
