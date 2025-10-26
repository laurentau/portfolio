import React from 'react'


 function Header() {
  return (
    <><nav>
      <ul class="flex space-x-6 text-lg font-medium  justify-around">
        <li><a href="Home" class="hover:text-blue-500 transition">Home</a></li>
        <li><a href="About" class="hover:text-blue-500 transition">About</a></li>
        <li><a href="Skills" class="hover:text-blue-500 transition">Skills</a></li>
        <li><a href="projects" class="hover:text-blue-500 transition">Projects</a></li>
        <li><a href="Contact" class="hover:text-blue-500 transition">Contact</a></li>
      </ul>
    </nav><div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-center text-3xl font-bold text-gray-800 max-w-2xl px-4">
          Hi, I'm Lauren Tau — a passionate web developer who enjoys creating clean,
          user-friendly designs and turning ideas into interactive digital
          experiences.
        </p>
      </div></>

  )
}   
export default Header