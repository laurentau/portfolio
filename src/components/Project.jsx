import React from 'react'
const Project = () => {
  
  const projects = [
    {
      name: "Menu Website",
      description: "A clean and cute menu website showcasing various dishes.",
      link: "https://menupage15.netlify.app/", // my link to project
    },
    {
      name: "Restaurant Website",
      description: "A modern restaurant website with menu, gallery, and contact features.",
      link: "https://elandl15.netlify.app/", // my link to project
    },
    {
      name: "Flower Website",
      description: "A beautiful flower e-commerce website with catalog and shop features.",
      link: "https://flowerwebsite2003.netlify.app/", // my link to project
    },
    {
      name: "Cafe Website",
      description: "A cozy cafe website displaying menu, contact, and gallery.",
      link: "https://cafestar.netlify.app/", // my link to project
    },
  ];

  return (
    <section id='Project' className="bg-linear-to-r from-pink-500 to-blue-500 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold mb-10 border-b-4 border-white inline-block pb-2">
          My Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl p-6 flex flex-col justify-between hover:scale-105 transition duration-500"
            >
              {/* The project title */}
              <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
              
              {/*The project description */}
              <p className="mb-6 text-gray-100">{project.description}</p>
              
              {/* The project link button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-pink-500 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
  