import React from 'react'

 function About() {
  return (
    <section className="bg-linear-to-r from-pink-500 to-blue-500 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section heading */}
        <h2 className="text-4xl font-extrabold mb-6 border-b-4 border-white inline-block pb-2">
          About Me
        </h2>

        {/*  introducing myself */}
        <p className="text-lg leading-relaxed mt-6">
          Hi, I'm <span className="font-semibold">Lauren Tau</span>, a 22-year-old
          passionate software developer who enjoys building digital experiences
          that are both functional and beautiful. I specialize in crafting
          responsive web interfaces with modern technologies like React and
          Tailwind CSS.  
        </p>

        {/* Paragraph about my hobbies and interests */}
        <p className="text-lg leading-relaxed mt-6">
          Outside of coding, I love swimming, reading, and singing. I’m also
          passionate about public speaking and athletics, which keep me active
          and help me develop strong communication and teamwork skills. I
          believe balancing technology with personal interests makes me a more
          creative and well-rounded developer.
        </p>

        {/* little slogan i always say */}
        <p className="mt-8 italic text-pink-100">
          "Turning ideas into clean, functional, and creative code."
        </p>
      </div>
    </section>
  )
}
export default About 
