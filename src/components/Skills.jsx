import React from 'react'

 function Skills() {
  return (
      <section id='Skills' className="bg-linear-to-r from-pink-500 to-blue-500 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-white mb-12">
          My Skills
        </h2>

        {/* Skills Container */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Frontend Skills */}
          <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Frontend Skills
            </h3>
            <ul className="list-disc list-inside text-white/90 space-y-2">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Tools I Use
            </h3>
            <ul className="list-disc list-inside text-white/90 space-y-2">
              <li>Git</li>
              <li>VS Code</li>
              <li>Figma</li>
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Soft Skills
            </h3>
            <ul className="list-disc list-inside text-white/90 space-y-2">
              <li>Creativity</li>
              <li>Emotional Intelligence</li>
              <li>Adaptability</li>
              <li>Problem Solving</li>
              <li>Leadership</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Skills