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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="pilah-sampah" element={<PilahSampah />} />
      <Route path="sampah-organik" element={<SampahOrganik />} />
      <Route path="sampah-anorganik" element={<SampahAnorganik />} />
      <Route path="sampah-B3" element={<SampahB3 />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
