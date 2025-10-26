import React from 'react'

 function Skills() {
  return (
     <div className="bg-gray-50 py-16 px-6 md:px-20 max-w-5xl mx-auto">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
        My Skills
      </h2>

      {/* Skills Container */}
      <div className="grid gap-10 md:grid-cols-3">
        {/* Frontend Skills */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Frontend Skills
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        {/* Tools */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tools I Use</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Git</li>
            <li>VS Code</li>
            <li>Figma</li>
          </ul>
        </div>

        {/* Soft Skills */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Soft Skills</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Creativity</li>
            <li>Emotional Intelligence</li>
            <li>Adaptability</li>
            <li>Problem Solving</li>
            <li>Leadership</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Skills