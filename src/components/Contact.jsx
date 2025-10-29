import React from 'react'

 function Contact() {
  return (
     <section id='Contact' className="bg-linear-to-r from-pink-500 to-blue-500 py-16 px-6 md:px-20 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-12 text-center border-b-4 border-white inline-block pb-2">
          Contact Me
        </h2>

        {/* Two-column grid: contact info + message form */}
        <div className="grid gap-10 md:grid-cols-2">
          {/* Left Side: Contact Info */}
          <div className="space-y-8">
            {/*my Phone number */}
            <div>
              <h3 className="text-2xl font-semibold mb-2">Phone</h3>
              <p>067 187 4786</p>
            </div>

            {/* my  Email */}
            <div>
              <h3 className="text-2xl font-semibold mb-2">Email</h3>
              <p>taulauren@gmail.com</p>
            </div>

            {/* my Social Media */}
            <div>
              <h3 className="text-2xl font-semibold mb-2">Social Media</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-200 font-semibold hover:underline"
                >
                  Instagram
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 font-semibold hover:underline"
                >
                  Twitter
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-800 font-semibold hover:underline"
                >
                  Facebook
                </a>
                 <a
                  href="https://www.linkedin.com/in/lauren-tau-030499166"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 font-semibold hover:underline"
                >
                  Linkdin 
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Message Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Leave a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full border border-white/40 rounded-lg p-2 bg-white/10 placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
              </div>
              <div>
                <label className="block mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  className="w-full border border-white/40 rounded-lg p-2 bg-white/10 placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block mb-1" htmlFor="message">
                  Message / Advice
                </label>
                <textarea
                  id="message"
                  placeholder="Write your message or advice"
                  className="w-full border border-white/40 rounded-lg p-2 h-32 bg-white/10 placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-blue-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-pink-500 hover:bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact 
