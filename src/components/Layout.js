import React, { Children, useEffect } from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import DownloadIcon from "@mui/icons-material/Download";

const Layout = ({ title = "Title", className, children }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div>
      <div className="container mx-auto px-4 md:px-20">
        <Menu />
      </div>
      <div className={className}>{children}</div>
      {/* Fixed Download CV button visible on every page */}
      <a
        href="/MyCV.pdf"
        download="Zafor_Iqbal_CV.pdf"
        className="fixed right-4 bottom-4 z-50 bg-[#0BC1C0] hover:bg-[#09a7a6] text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2"
        aria-label="Download CV"
      >
        <DownloadIcon sx={{ fontSize: 20 }} />
        <span className="hidden sm:inline">Download CV</span>
      </a>

      <Footer />
    </div>
  );
};

export default Layout;
