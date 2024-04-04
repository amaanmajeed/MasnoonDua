import React, { useEffect, useState } from "react";
import { DarkThemeToggle, Flowbite, Dropdown } from "flowbite-react";

export default function Navbar() {



  return (
    <>
      <div class="px-4 mx-auto max-w-7xl sm:px-6">
        <div class="relative pt-6 sm:pb-10">
          <nav
            class="relative flex items-center justify-between sm:h-10 md:justify-center"
            aria-label="Global"
          >
            <div class="flex items-center flex-1 justify-between md:absolute md:inset-y-0 w-full md:left-0">
              <div class="flex items-center md:w-auto w-full">
                <a href="#" className="w-full">
                  <span class="sr-only">Company Name</span>
                  <img
                    class="w-auto h-8 sm:h-10"
                    src="https://www.svgrepo.com/show/448244/pack.svg"
                    loading="lazy"
                    width="202"
                    height="40"
                  />
                </a>
                <Dropdown label="" dismissOnClick={false} className="bg-gray-800 rounded border-1 border-gray-400 text-white py-2 px-1" renderTrigger={() =>
                  <div class="flex items-center mr-2 md:hidden">
                    <button
                      class="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-50 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50"
                      type="button"
                      aria-expanded="false"
                    >
                      <span class="sr-only">Open main menu</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                      </svg>
                    </button>
                  </div>
                }>
                  <Dropdown.Item className="hover:bg-gray-700 rounded w-full pr-7">
                    <a
                      href="#"
                      class="text-base font-normal list-none hover:bg-none"
                      target=""
                    >
                      Pricing
                    </a>
                  </Dropdown.Item>
                  <Dropdown.Item className="hover:bg-gray-700 rounded w-full pr-7">
                    <a
                      href="#"
                      class="text-base font-normal list-none hover:bg-none"
                      target=""
                    >
                      Gallery
                    </a>
                  </Dropdown.Item>
                  <Dropdown.Item className="hover:bg-gray-700 rounded w-full pr-7">
                    <a
                      href="#"
                      class="text-base font-normal list-none "
                      target=""
                    >
                      Blog
                    </a>
                  </Dropdown.Item>

                </Dropdown>

              </div>
            </div>
            <div class="hidden md:flex md:space-x-10 list-none">
              <li>
                <a
                  href="#"
                  class="text-base font-normal text-gray-500 list-none hover:text-gray-900"
                  target=""
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-base font-normal text-gray-500 list-none hover:text-gray-900"
                  target=""
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-base font-normal text-gray-500 list-none hover:text-gray-900"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
            </div>
            <div class=" md:absolute md:flex md:items-center md:justify-end  md:inset-y-0 md:right-0">
              <div className="">
                <Flowbite>
                  <DarkThemeToggle className="p-2" />
                </Flowbite>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
