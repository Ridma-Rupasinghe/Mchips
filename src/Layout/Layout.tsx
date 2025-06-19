import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div>
      <NavBar />

      <main className="">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
