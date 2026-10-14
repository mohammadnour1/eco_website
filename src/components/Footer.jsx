import React from 'react'
import logo from "../assets/Logo.png"

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div
        className="flex flex-col items-end p-0 gap-10 w-[1201px] h-[266px] flex-none order-0 flex-grow-0 mx-auto"
      >
        <div className="flex flex-row items-start p-0 gap-[59px] w-[1201px] h-[212px] flex-none order-0 flex-grow-0">
          {/* Newsletter Section */}
          <div
            className="flex flex-col items-start p-0 gap-4 w-[516px] h-[212px] flex-none order-0 flex-grow-0"
          >
            <div className="mb-2">
        <img className="h-15 w-auto" src={logo} alt="" />
            </div>
            <p className="text-gray-600 text-sm">
              Join our newsletter to stay up to date on features and releases.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
              />
              <button className="bg-purple-600 text-white px-4 py-2 rounded-r-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm">
                Subscribe
              </button>
            </div>
            <p className="text-gray-500 text-xs mt-2">
              By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.
            </p>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm">Returns</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm">Shipping</a></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Customer Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm">Affiliates</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm">Apple Pay Payments</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm">Returns</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm">Returns Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm">Returns</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm flex items-center gap-2">
                <span></span> Facebook
              </a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm flex items-center gap-2">
                <span></span> Instagram
              </a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm flex items-center gap-2">
                <span></span> Twitter
              </a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm flex items-center gap-2">
                <span></span> LinkedIn
              </a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © 2023 GFirnuture. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-purple-600 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-purple-600 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-purple-600 text-sm">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
