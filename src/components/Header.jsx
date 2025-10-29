import React from 'react'


 function Header() {
  return (
    

  
      
      <><nav className="bg-pink-500 py-4 shadow-md">
      {/*
<ul> it  groups the navigation items.
flex = use Flexbox
justify-center  center items horizontally
space-x-8 = horizontal spacing between the list items
*/}
      <ul className="flex justify-center space-x-8">
        {/* Each <li> holds one link */}

        <li>
          {/*
 <a> is the clickable link that scrolls to a section on the page.
href="#about" = it points to an element with id="about" 
text-white = white text color for good contrast on the pink background
font-semibold = slightly bold text
hover:text-blue-400 = change text color to a cute blue on hover
transition duration-300 = smooth color transition over 300ms
*/}
          <a
            href="#about"
            className="text-white font-semibold hover:text-blue-400 transition duration-300"
          >
            About
          </a>
        </li>

        <li>
          {/* Project link  */}
          <a
            href="#projects"
            className="text-white font-semibold hover:text-blue-400 transition duration-300"
          >
            Projects
          </a>
        </li>

        <li>
          {/* Skill link  */}
          <a
            href="#skills"
            className="text-white font-semibold hover:text-blue-400 transition duration-300"
          >
            Skills
          </a>
        </li>

        <li>
          {/* Contact link  */}
          <a
            href="#contact"
            className="text-white font-semibold hover:text-blue-400 transition duration-300"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
     
      <header className="bg-linear-to-r from-pink-500 to-blue-500 text-white flex flex-col items-center justify-center h-screen text-center p-6">

        {/* My name   */}
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          Hi, I'm Lauren Tau
        </h1>

        {/* My professional title */}
        <h2 className="text-2xl font-semibold mb-6">
          A Passionate Software Developer
        </h2>

        {/* Introduction paragraph */}
        <p className="max-w-2xl text-lg leading-relaxed">
          I’m a creative and dedicated software developer who enjoys building
          responsive, user-friendly web applications. I love combining design and
          functionality to create digital experiences that are both beautiful and
          efficient. Always learning, always growing — technology inspires me to
          innovate every day.
        </p>
      </header></>

      
  
      

  )
}   
export default Header