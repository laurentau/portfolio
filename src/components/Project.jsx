import React from 'react'

 function Project() {
  return (
     <div className="bg-gray-50 py-10 px-6 md:px-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        My Projects
      </h2>
      <ul className="space-y-6">
        <li>
          <span className="text-xl font-semibold text-gray-800">
            Portfolio Websites
          </span>{" "}
          <span className="text-gray-600 text-base">
            I build personal portfolio websites to showcase professional skills, projects,
            and experience in a clean, user-friendly design.
          </span>
        </li>

        <li>
          <span className="text-xl font-semibold text-gray-800">
            Task Management Apps
          </span>{" "}
          <span className="text-gray-600 text-base">
            I create task management tools that help individuals or teams organize, track,
            and complete daily tasks efficiently.
          </span>
        </li>

        <li>
          <span className="text-xl font-semibold text-gray-800">
            E-Commerce Platforms
          </span>{" "}
          <span className="text-gray-600 text-base">
            I develop online stores where users can browse products, add them to a cart,
            and make purchases securely.
          </span>
        </li>

        <li>
          <span className="text-xl font-semibold text-gray-800">
            Weather Dashboards
          </span>{" "}
          <span className="text-gray-600 text-base">
            I design weather tracking apps that display current conditions and forecasts
            using live API data.
          </span>
        </li>

        <li>
          <span className="text-xl font-semibold text-gray-800">
            Blog Websites
          </span>{" "}
          <span className="text-gray-600 text-base">
            I build simple, responsive blog platforms where content can be shared,
            categorized, and easily managed.
          </span>
        </li>

        <li>
          <span className="text-xl font-semibold text-gray-800">
            Company Landing Pages
          </span>{" "}
          <span className="text-gray-600 text-base">
            I create landing pages for businesses that highlight services, products,
            and contact details in a professional layout.
          </span>
        </li>
      </ul>
    </div>
  )
}
export default Project