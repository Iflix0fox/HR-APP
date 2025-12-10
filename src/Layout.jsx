import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    // <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
    <div className="app">
      <Header />
      <div style={{ flexGrow: 1 }}>
        <Outlet />
      </div>
      <Footer />
    </div>
    // </div>
  );
};

export default Layout;
