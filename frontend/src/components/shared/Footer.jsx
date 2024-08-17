import React from "react";

const Footer = () => {
  return (
    <div className="mt-7">
      <footer class="bg-gray-800 text-white py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h5 class="text-lg font-bold mb-4">Company</h5>
              <ul>
                <li>
                  <a href="#" class="text-gray-300 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-300 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-300 hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 class="text-lg font-bold mb-4">Support</h5>
              <ul>
                <li>
                  <a href="#" class="text-gray-300 hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-300 hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-300 hover:text-white">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 class="text-lg font-bold mb-4">Legal</h5>
              <ul>
                <li>
                  <a href="#" class="text-gray-300 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-300 hover:text-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 class="text-lg font-bold mb-4">Follow Us</h5>
              <ul class="flex space-x-4">
                <li>
                  <a href="#" class="text-gray-300 hover:text-white">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-300 hover:text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-300 hover:text-white">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="mt-8 text-center text-gray-400">
            &copy; 2024 Your Satyajit. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
