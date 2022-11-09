import React from "react";

const FooterSection = () => {
  return (
    <footer class="bg-black">
      {/* Container */}
      <div class="container max-w-6xl py-10 mx-auto">
        {/* Footer Flex Container */}
        <div class="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
          {/* Menu & Logo Container */}
          <div class="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
            {/* Logo  */}
            <div class="h-8">
              <img
                class="w-44 md:ml-3"
                src="images/logo.svg"
                alt="loopstudios"
              />
            </div>
            {/* Menu Container */}
            <div class="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
              {/* Item 1 */}
              <div class="h-10 group">
                <a href="#">About</a>
                <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>

              {/* Item 2 */}
              <div class="h-10 group">
                <a href="#">Careers</a>
                <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>

              {/* Item 3 */}
              <div class="h-10 group">
                <a href="#">Events</a>
                <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>

              {/* Item 4  */}
              <div class="h-10 group">
                <a href="#">Products</a>
                <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>

              {/* Item 5 */}
              <div class="h-10 group">
                <a href="#">Support</a>
                <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
            </div>
          </div>
          {/* Socials & Copyright Container */}
          <div class="flex flex-col items-start justify-between space-y-4 text-gray-500">
            {/* Icons Container */}
            <div class="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
              {/* Icon 1  */}
              <div class="h-8 group">
                <a href="#">
                  <img
                    class="h-6"
                    src="images/icon-facebook.svg"
                    alt="facebook"
                  />
                </a>
              </div>
              {/* Icon 2 */}
              <div class="h-8 group">
                <a href="#">
                  <img
                    class="h-6"
                    src="images/icon-twitter.svg"
                    alt="facebook"
                  />
                </a>
              </div>
              {/* Icon 3 */}
              <div class="h-8 group">
                <a href="#">
                  <img
                    class="h-6"
                    src="images/icon-pinterest.svg"
                    alt="facebook"
                  />
                </a>
              </div>
              {/* Icon 4 */}
              <div class="h-8 group">
                <a href="#">
                  <img
                    class="h-6"
                    src="images/icon-instagram.svg"
                    alt="facebook"
                  />
                </a>
              </div>
            </div>
            {/* Copyright */}
            <div class="font-bold">
              &copy; 2022 Loopstudios. All Rights Reserverd
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
