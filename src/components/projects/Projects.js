import Layout from "../Layout";
import { connect } from "react-redux";
import ProjectCard from "./ProjectCard";
import Preparation from "../Preparation";
import { useState, useEffect } from "react";

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};

const Projects = (props) => {
  const [projectsSumary, setProjectsSumary] = useState({
    totalProjects: 0,
    web_mern: 0,
    web_cms: 0,
    mobile_react_native: 0,
  });

  const calculateSumary = (projects) => {
    const sumary = {
      totalProjects: projects.length,
      web_mern: 0,
      web_cms: 0,
      mobile_react_native: 0,
    };

    projects.forEach((project) => {
      if (project.category === "Web(MERN)") {
        sumary.web_mern += 1;
      } else if (project.category === "Web(CMS)") {
        sumary.web_cms += 1;
      } else if (project.category === "Mobile(React Native)") {
        sumary.mobile_react_native += 1;
      }
    });
    return sumary;
  };

  useEffect(() => {
    const sumary = calculateSumary(props.projects);
    setProjectsSumary(sumary);
  }, [props.projects]);

  const projects = props.projects.map((project) => (
    <div key={project._id}>
      <ProjectCard project={project} />
    </div>
  ));
  return (
    <Layout title="Projects" className="container mx-auto px-4 md:px-20">
      <Preparation>
        <div className="mt-20 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="">
              <h1 className="text-4xl md:text-[48px] font-bold text-gray-900 leading-tight">
                Things I've made trying to put my dent in the universe
              </h1>
              <p className="mt-6 text-gray-700 text-lg leading-relaxed">
                I’ve worked on tons of little projects over the years but these
                are the ones that I’m most proud of. Many of them are
                open-source, so if you see something that piques your interest,
                check out the code and contribute if you have ideas for how it
                can be improved.
              </p>
            </div>

            {/* Metrics / Numbers Section - styled cards */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  label: "Total Projects",
                  value: projectsSumary.totalProjects,
                  color: "bg-indigo-50",
                  accent: "text-indigo-600",
                },
                {
                  label: "Web (MERN)",
                  value: projectsSumary.web_mern,
                  color: "bg-teal-50",
                  accent: "text-teal-600",
                },
                {
                  label: "Web (CMS)",
                  value: projectsSumary.web_cms,
                  color: "bg-yellow-50",
                  accent: "text-yellow-600",
                },
                {
                  label: "Mobile (React Native)",
                  value: projectsSumary.mobile_react_native,
                  color: "bg-purple-50",
                  accent: "text-purple-600",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`${item.color} border rounded-lg p-6 flex flex-col items-start shadow-sm`}
                >
                  <div className="text-sm text-gray-500 mb-2">{item.label}</div>
                  <div className={`text-3xl font-bold ${item.accent}`}>
                    {item.value}
                  </div>
                  <div className="mt-3 text-xs text-gray-400">
                    Projects & contributions
                  </div>
                </div>
              ))}
            </section>
          </div>

          <div className="grid grid-col-1 gap-2 md:grid-cols-2 my-16">
            {projects}
          </div>
        </div>
      </Preparation>
    </Layout>
  );
};

export default connect(mapStateToProps)(Projects);
