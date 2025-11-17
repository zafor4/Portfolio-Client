import React from "react";
import { Link } from "react-router-dom";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { LinkedIn } from "@mui/icons-material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-4 py-10 md:px-20">
        <div className="md:flex md:items-start md:justify-between md:gap-6">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0BC1C0] flex items-center justify-center text-white font-bold">
                Z
              </div>
              <div>
                <div className="font-bold text-lg text-gray-900">
                  Zafor Iqbal
                </div>
                <div className="text-sm text-gray-500">
                  Full-stack Developer
                </div>
              </div>
            </Link>
            <p className="mt-4 text-sm text-gray-600 max-w-sm">
              Building clean, maintainable web and mobile apps. Available for
              freelance and full-time opportunities.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 flex-1">
            <div>
              <h4 className="text-sm font-semibold text-gray-800 mb-3">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/articles"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Articles
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-800 mb-3">
                Contact
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <MailOutlineIcon fontSize="small" className="text-gray-500" />
                  <a
                    href="mailto:your-email@example.com"
                    className="hover:underline"
                  >
                    xoy4444@gmail.com
                  </a>
                </li>
                <li>Based in Bangladesh</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-800 mb-3">
                Social
              </h4>
              <div className="flex items-center gap-3">
                <Link
                  target="blank"
                  to="https://x.com/zafo17_iqbal?t=7qvbVqjqBOA-ixC9DiDC0g&s=09"
                >
                  <XIcon sx={{ marginRight: "12px", fontSize: "18px" }} />
                </Link>
                <Link
                  target="blank"
                  to="https://www.instagram.com/2416xoy?igsh=MXY0cTU0cmw5Mzdzag=="
                >
                  <InstagramIcon
                    sx={{ marginRight: "12px", fontSize: "18px" }}
                  />
                </Link>
                <Link target="blank" to="https://github.com/zafor4">
                  {" "}
                  <GitHubIcon sx={{ marginRight: "12px", fontSize: "18px" }} />
                </Link>
                <Link
                  target="blank"
                  to="https://www.linkedin.com/in/zaforiqbalxoy?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                >
                  <LinkedIn sx={{ marginRight: "12px", fontSize: "18px" }} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-8 border-t pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Zafor's portfolio. All rights reserved.
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
