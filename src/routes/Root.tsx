import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Root() {
  return (
    <div className="flex min-h-[100vh] flex-col">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}
