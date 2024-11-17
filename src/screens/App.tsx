import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";

export default function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar scroll={scrollPosition}></Navbar>
      <div className="bg-white min-h-full overflow-auto">
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
}
