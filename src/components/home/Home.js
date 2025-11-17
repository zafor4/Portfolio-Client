import React, { useState } from "react";
import Layout from "../Layout";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EastIcon from "@mui/icons-material/East";
import { Link } from "react-router-dom";
import SkillCard from "./SkillCard";
import { connect } from "react-redux";
import Preparation from "../Preparation";
import ProjectCardHome from "./ProjectCardHome";
import ArticleCardHome from "./ArticleCardHome";
import heroimg from "../../assets/images/un.jpg";
import codeforce from "../../assets/images/codeforce.jpeg";
import leetcode from "../../assets/images/leetcode.png";
import beecrowd from "../../assets/images/beecrowd.jpg";
import CodeIcon from "@mui/icons-material/Code";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
    articles: state.articles,
  };
};

const Home = (props) => {


  return (
    <Layout title="Home" className="container mx-auto px-4 md:px-20">
      <Preparation>
        <div className="md:mt-20 mt-6">
          {/* Top section */}
          <div className="w-full bg-[#f8f8f8]  grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* LEFT SIDE */}
            <div className="flex flex-col justify-between h-full p-2">
              <h1 className="text-3xl md:text-[48px] text-gray-900 font-semibold leading-tight ">
                A creator at heart and a developer by craft
              </h1>

              <p className="mt-6 text-lg md:text-xl text-gray-700 border-t-2 pt-4">
                I design, build, and refine web and mobile experiences that
                solve problems and inspire users. Every line of code is a piece
                of a bigger story I’m shaping.
              </p>

              {/* Me section */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t-2 pt-4">
                <button className="bg-[#0BC1C0] text-white px-6 py-3 rounded-full flex items-center gap-2 w-fit">
                  About Me <EastIcon />
                </button>
                <div className="border-l-2 pl-4">
                  <h2>Find me on:</h2>
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
                      <InstagramIcon
                        sx={{ marginRight: "12px", fontSize: "18px" }}
                      />
                    </Link>
                    <Link target="blank" to="https://github.com/zafor4">
                      {" "}
                      <GitHubIcon
                        sx={{ marginRight: "12px", fontSize: "18px" }}
                      />
                    </Link>
                    <Link
                      target="blank"
                      to="https://www.linkedin.com/in/zaforiqbalxoy?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    >
                      <LinkedInIcon
                        sx={{ marginRight: "12px", fontSize: "18px" }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="w-full">
              <img
                src={heroimg}
                alt="Hero"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
          </div>

          <ArticleCardHome />
          <ProjectCardHome />
          <SkillCard />

          {/* Coding Profiles */}
          <div className="bg-white mt-16 mb-20 md:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <CodeIcon className="text-[#0BC1C0] text-4xl" />
              <h3 className="text-3xl md:text-[40px] font-bold text-gray-800">
                Coding Profiles
              </h3>
            </div>

            {/* Profiles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* LeetCode */}
              <a
                href="https://leetcode.com/u/Zafor_Iqbal/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-lg hover:border-indigo-200 transition-all duration-300"
              >
                <img
                  src={leetcode}
                  alt="LeetCode"
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">LeetCode</h4>
                  <p className="text-sm text-gray-500">
                    Algorithms & practice — 100+ problems solved
                  </p>
                </div>
                <Link
                  to="https://leetcode.com/u/Zafor_Iqbal/"
                  className="text-sm font-medium text-black inline-flex items-center gap-1 hover:opacity-70"
                >
                  Visit
                  <ArrowOutwardIcon style={{ fontSize: 16 }} />
                </Link>
              </a>

              {/* Codeforces */}
              <a
                href="https://codeforces.com/profile/Zafor."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-lg hover:border-indigo-200 transition-all duration-300"
              >
                <img
                  src={codeforce}
                  alt="Codeforces"
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Codeforces</h4>
                  <p className="text-sm text-gray-500">
                    Competitive programming — 150+ problems solved
                  </p>
                </div>
                <Link
                  to="https://codeforces.com/profile/Zafor."
                  className="text-sm font-medium text-black inline-flex items-center gap-1 hover:opacity-70"
                >
                  Visit
                  <ArrowOutwardIcon style={{ fontSize: 16 }} />
                </Link>
              </a>

              {/* Beecrowd */}
              <a
                href="https://judge.beecrowd.com/en/profile/647417"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-lg hover:border-indigo-200 transition-all duration-300"
              >
                <img
                  src={beecrowd}
                  alt="Beecrowd"
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Beecrowd</h4>
                  <p className="text-sm text-gray-500">
                    Online judge problems — 200+ solved
                  </p>
                </div>
                <Link
                  to="https://judge.beecrowd.com/en/profile/647417"
                  className="text-sm font-medium text-black inline-flex items-center gap-1 hover:opacity-70"
                >
                  Visit
                  <ArrowOutwardIcon style={{ fontSize: 16 }} />
                </Link>
              </a>
            </div>
          </div>
        </div>
      </Preparation>
    </Layout>
  );
};

export default connect(mapStateToProps)(Home);
