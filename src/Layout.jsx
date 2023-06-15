import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollComponent from "./components/ScrollComponent";

export default function Layout() {
  return (
    <>
      <Navigation />
      <Outlet />
      <ScrollComponent />
      <Footer />
    </>
  );
}
