import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
 
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-6 gap-8 px-4">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm text-gray-400">
            Your trusted online store for quality products and exceptional service.
          </p>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                Shipping
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              Email:{' '}
              <a href="mailto:info@store.com" className="hover:text-blue-400">
                info@store.com
              </a>
            </li>
            <li>
              Phone:{' '}
              <a href="tel:+1234567890" className="hover:text-blue-400">
                +123-456-7890
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              <FaFacebook className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              <FaInstagram className="text-xl" />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-sm text-gray-400 mb-2">Subscribe for updates and offers.</p>
          <form>
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Kadees Wardy  All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;