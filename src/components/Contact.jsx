import React from 'react'

 function Contact() {
  return (
     <div className="bg-gray-50 py-16 px-6 md:px-20 max-w-6xl mx-auto">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
        Contact Me
      </h2>

      {/* Grid for contact info and form */}
      <div className="grid gap-10 md:grid-cols-2">
        {/* Left Side: Contact Info */}
        <div className="space-y-8">
          {/* Phone */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Phone
            </h3>
            <p className="text-gray-700">067 187 4786</p>
          </div>

          {/* Email */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-700">taulauren@gmail.com</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Social Media
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 font-semibold hover:underline"
              >
                Instagram
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-semibold hover:underline"
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
            </div>
          </div>
        </div>

        {/* Right Side: Message Form */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Leave a Message
          </h3>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your email"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="message">
                Message / Advice
              </label>
              <textarea
                id="message"
                placeholder="Write your message or advice"
                className="w-full border border-gray-300 rounded-lg p-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Contact 
