import React from 'react'
import { Link } from "react-router-dom";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

const Social = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-2">
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
          <InstagramIcon sx={{ marginRight: "12px", fontSize: "18px" }} />
        </Link>
        <Link target="blank" to="https://github.com/zafor4">
          {" "}
          <GitHubIcon sx={{ marginRight: "12px", fontSize: "18px" }} />
        </Link>
        <Link
          target="blank"
          to="https://www.linkedin.com/in/zaforiqbalxoy?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        >
          <LinkedInIcon sx={{ marginRight: "12px", fontSize: "18px" }} />
        </Link>
      </div>

      {/* Email */}
      <div className="flex items-center gap-2 ml-4">
        <EmailIcon className="text-gray-600" />
        <a href="mailto:xoy@gmail.com" className="text-gray-700">
          xoy@gmail.com
        </a>
      </div>
    </div>
  );
}

export default Social