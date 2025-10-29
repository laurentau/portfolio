import React from 'react'
function Header() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-pink-500 py-4 shadow-md">
        {/* Navigation list */}
        <ul className="flex justify-center space-x-8">
          {/* Gallery link */}
          <li>
            <a
              href="#Hero"
              className="text-white font-semibold hover:text-blue-400 transition duration-300"
            >
              Gallery
            </a>
          </li>

          {/* About link */}
          <li>
            <a
              href="#About"
              className="text-white font-semibold hover:text-blue-400 transition duration-300"
            >
              About
            </a>
          </li>

          {/* My Projects link */}
          <li>
            <a
              href="#Project"
              className="text-white font-semibold hover:text-blue-400 transition duration-300"
            >
              My Project
            </a>
          </li>

          {/* Skills link */}
          <li>
            <a
              href="#Skills"
              className="text-white font-semibold hover:text-blue-400 transition duration-300"
            >
              My Skills
            </a>
          </li>

          {/* Contact link */}
          <li>
            <a
              href="#Contact"
              className="text-white font-semibold hover:text-blue-400 transition duration-300"
            >
              My Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero / Introduction Section */}
      <header className="bg-linear-to-r from-pink-500 to-blue-500 text-white flex flex-col items-center justify-center h-screen text-center p-6">
        {/* My Name */}
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          Hi, I'm Lauren Tau
        </h1>

        {/* Professional Title */}
        <h2 className="text-2xl font-semibold mb-6">
          A Passionate Software Developer
        </h2>

        {/* Introduction Paragraph */}
        <p className="max-w-2xl text-lg leading-relaxed">
          I’m a creative and dedicated software developer who enjoys building
          responsive, user-friendly web applications. I love combining design and
          functionality to create digital experiences that are both beautiful and
          efficient. Always learning, always growing — technology inspires me to
          innovate every day.
        </p>
      </header>
    </>
  );
}

export default Header;

