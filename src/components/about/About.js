import React from "react";
import Layout from "../Layout";

// MUI Icons
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import CodeIcon from "@mui/icons-material/Code";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";

import imageAbout from "../../assets/images/image-3.webp"; // your hero image
import Social from "./Social";
import MySkillSection from "./MySkillCard";
import codeforce from "../../assets/images/codeforce.jpeg";
import leetcode from "../../assets/images/leetcode.png";
import beecrowd from "../../assets/images/beecrowd.jpg";

const About = () => {
  return (
    <Layout title="About" className="container mx-auto px-4 md:px-20">
      <section className="pt-20 pb-16">
        {/* Hero / Intro */}
        <div className="md:flex md:items-center md:gap-12">
          <div className="md:flex-1">
            <h1 className="text-4xl md:text-[48px] font-bold text-gray-900 leading-tight">
              About Me — Building Future-Ready Digital Solutions
            </h1>
            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              I’m a passionate MERN-stack and React Native developer from
              Bangladesh, driven by building scalable, user-centric web and
              mobile apps. I combine creative problem-solving with robust
              architecture — whether working with MongoDB, Express, React, Node,
              or WordPress.
            </p>
            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              With experience across full-stack development, real-time
              applications, and cloud-native systems, I love transforming
              abstract ideas into real, performant experiences.
            </p>
          </div>
          <div className="">
            <img
              src={imageAbout}
              alt="About me"
              className="rounded-lg shadow-lg w-full max-w-md"
            />
            <Social />
          </div>
        </div>
      </section>

      {/* Vision / Values Section */}
      <section className="py-16 bg-gray-50 rounded-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-[40px] font-semibold text-gray-800">
            My Vision & Values
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center p-6">
            <EmojiObjectsIcon className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-medium text-gray-800">
              Creativity & Innovation
            </h3>
            <p className="mt-2 text-gray-600">
              Always exploring new ideas, keeping design and function in
              harmony.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <PeopleIcon className="text-green-500 text-4xl mb-4" />
            <h3 className="text-xl font-medium text-gray-800">Collaboration</h3>
            <p className="mt-2 text-gray-600">
              Building great products means working together — code reviews,
              many minds, shared purpose.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <BarChartIcon className="text-purple-500 text-4xl mb-4" />
            <h3 className="text-xl font-medium text-gray-800">
              Impact & Growth
            </h3>
            <p className="mt-2 text-gray-600">
              Striving for scalable solutions and continuous improvement in
              everything I do.
            </p>
          </div>
        </div>
      </section>

      <MySkillSection />

      {/* Large Feature Section for Education / Training / Achievements / Profiles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Coding Profiles */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <CodeIcon className="text-indigo-600 text-4xl" />
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
                <span className="text-sm text-indigo-600 font-medium">
                  Visit
                </span>
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
                <span className="text-sm text-indigo-600 font-medium">
                  Visit
                </span>
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
                <span className="text-sm text-indigo-600 font-medium">
                  Visit
                </span>
              </a>
            </div>
          </div>

          {/* Education / Training / Achievements */}
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">
            {/* Education */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-5">
                <SchoolIcon className="text-indigo-600 text-4xl" />
                <h3 className="text-3xl font-bold text-gray-800">Education</h3>
              </div>
              <ul className="text-gray-600 space-y-3 leading-relaxed">
                <li>
                  <strong className="text-gray-800">
                    BSc in Computer Science
                  </strong>
                  <br />
                  Daffodil International University
                </li>
              </ul>
            </div>

            {/* Training / Certification */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-5">
                <WorkspacePremiumIcon className="text-teal-600 text-4xl" />
                <h3 className="text-3xl font-bold text-gray-800">
                  Training & Certification
                </h3>
              </div>
              <ul className="text-gray-600 space-y-3 leading-relaxed">
                <li>
                  <strong className="text-gray-800">MERN Stack Training</strong>
                  <br />
                  Bohubrihi — 2024
                </li>
              </ul>
            </div>

            {/* Achievements */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-5">
                <MilitaryTechIcon className="text-yellow-600 text-4xl" />
                <h3 className="text-3xl font-bold text-gray-800">
                  Achievements
                </h3>
              </div>
              <ul className="text-gray-600 space-y-3 leading-relaxed">
                <li>
                  <strong className="text-gray-800">Top 10%</strong> —
                  University Programming Contest 2023
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
