import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../images/logo.png";
import { GrFacebookOption } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { AiFillYoutube } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import Modal from "./Modal";

const Navbar = () => {
  // STATE DROPDOWN HOME
  const [toggle, setToggle] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className=" xl:fixed lg:fixed fixed z-[20] xl:px-14 xl:justify-between md:px-5 px-5 md:justify-between lg:justify-between  lg:px-14 justify-between flex items-center w-full h-[60px] bg-white">
        <div className="flex  flex-start items-center">
          <Link to="/" className=" w-[120px]">
            <img className="w-[90%]" src={Logo} alt="Logo" />
          </Link>

          {/* navbar toggle desktop */}
          <ul
            className={
              toggle
                ? " lg:flex  absolute bottom-1 min-h-[50vh] top-[60px] bg-white hidden xl:flex-col lg:flex-col right-0 xl:left-[70%] lg:left-[70%]   xl:shadow lg:shadow lg:items-center xl:items-center  xl:absolute lg:absolute"
                : "xl:hidden bottom-0 lg:hidden  items-center hidden right-2 lg:sticky xl:flex-col lg:flex-col"
            }
          >
            <div className="">
              <div className="relative group inline-block text-left">
                <div>
                  <button
                    type="button"
                    className=" inline-flex justify-center w-full px-4 py-2  text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none  "
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    Home
                    <svg
                      className="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      ariaHidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                {/* {home && ( */}
                <div
                  className="hidden group-hover:z-10 group-hover:block origin-top-right absolute right-0  overflow-hidden w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  ariaOrientation="vertical"
                  ariaLabelledby="menu-button"
                  tabindex="-1"
                >
                  <div className=" hover:block" role="none">
                    <a
                      href="#"
                      className="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-0"
                    >
                      Demo Home
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-1"
                    >
                      Demo Home
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-2"
                    >
                      Demo Home
                    </a>
                  </div>
                </div>
                {/* )} */}
              </div>
            </div>

            {/* ==== START FEATURES ====== */}
            <div className="relative group  inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex justify-center w-full px-4 py-2  text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none  "
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  Featues
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    ariaHidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div
                className="hidden group-hover:z-10 group-hover:block origin-top-right overflow-hidden absolute right-0  w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                ariaOrientation="vertical"
                ariaLabelledby="menu-button"
                tabindex="-1"
              >
                <div className=" group-hover:block">
                  <a
                    href="#"
                    className="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                  >
                    Demo Feature
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-1"
                  >
                    Demo Feature
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                  >
                    Demo Feature
                  </a>
                </div>
              </div>
            </div>

            <div>
              <Link to="/category">Gaming</Link>
            </div>

            {/* ==== START Bussiness ====== */}
            <div className="relative group  inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex justify-center w-full px-4 py-2  text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none  "
                  id="menu-button"
                  ariaExpanded="true"
                  ariaHaspopup="true"
                >
                  Bussiness
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    ariaHidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div
                className="hidden group-hover:z-10 group-hover:block overflow-hidden origin-top-right absolute right-0  w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                ariaOrientation="vertical"
                ariaLabelledby="menu-button"
                tabindex="-1"
              >
                <div className="group-hover:block">
                  <a
                    href="#"
                    className="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                  >
                    Demo Bussiness
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-1"
                  >
                    Demo Bussiness
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                  >
                    Demo Bussiness
                  </a>
                </div>
              </div>
            </div>
            {/* ==== END Bussiness ====== */}

            {/* ===== START SHOP */}
            <div className="relative group  inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex justify-center w-full px-4 py-2  text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none  "
                  id="menu-button"
                  ariaExpanded="true"
                  ariaHaspopup="true"
                >
                  Shop
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    ariaHidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div
                className="hidden group-hover:z-10 group-hover:block origin-top-right absolute right-0 overflow-hidden w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                ariaOrientation="vertical"
                ariaLabelledby="menu-button"
                tabindex="-1"
              >
                <div className=" group-hover:block" role="none">
                  <a
                    href="#"
                    className="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                  >
                    Demo Shop
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-1"
                  >
                    Demo Shop
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                  >
                    Demo Shop
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {/* FACEBOOK */}
              <Link to="/" className="icons p-1 bg-[#3A5998] rounded-full">
                <GrFacebookOption className="text-white text-[1.5rem] " />
              </Link>
              {/* FACEBOOK END */}
              {/* GOOGLE */}
              <Link to="/" className="icons p-1 bg-slate-300 rounded-full">
                <FcGoogle className="text-white text-[1.5rem] " />
              </Link>
              {/* GOOGLE  END*/}
              {/* YOUTUBE */}
              <Link to="/" className="icons p-1 bg-[#FE2804] rounded-full">
                <AiFillYoutube className="text-white text-[1.5rem] " />
              </Link>
              {/* YOUTUBE END */}
              {/* SEARCH */}
              <Link
                to="/"
                onClick={() => setModal(!modal)}
                className="icons p-1 bg-[#E4405F] rounded-full"
              >
                <BiSearchAlt className="text-white text-[1.5rem] " />
              </Link>
            </div>
          </ul>

          {/* navbar toggle desktop end */}

          <ul
            className={
              toggle
                ? "xl:flex lg:flex absolute top-[60px] bg-white  right-2 md:left-[70%] sm:left-[70%] left-[50%] shadow xl:shadow-none lg:shadow-none lg:items-center xl:items-center  xl:static lg:static"
                : "xl:sticky  lg:flex xl:flex items-center hidden right-2 lg:sticky xl:flex-row lg:flex-row"
            }
          >
            <div className="">
              <div className="relative group inline-block text-left">
                <div>
                  <button
                    type="button"
                    className=" inline-flex justify-center w-full px-4 py-2  text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none  "
                    id="menu-button"
                    ariaExpanded="true"
                    ariaHaspopup="true"
                  >
                    Home
                    <svg
                      className="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      ariaHidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                {/* {home && ( */}
                <div
                  className="hidden group-hover:z-10 group-hover:block origin-top-right absolute right-0  overflow-hidden w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  ariaOrientation="vertical"
                  ariaLabelledby="menu-button"
                  tabindex="-1"
                >
                  <div className=" hover:block" role="none">
                    <a
                      href="#"
                      className="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-0"
                    >
                      Demo Home
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-1"
                    >
                      Demo Home
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-2"
                    >
                      Demo Home
                    </a>
                  </div>
                </div>
                {/* )} */}
              </div>
            </div>

            {/* ==== START FEATURES ====== */}
            <div className="relative group  inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex justify-center w-full px-4 py-2  text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none  "
                  id="menu-button"
                  ariaExpanded="true"
                  ariaHaspopup="true"
                >
                  Featues
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    ariaHidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div
                className="hidden group-hover:z-10 group-hover:block origin-top-right overflow-hidden absolute right-0  w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                ariaOrientation="vertical"
                ariaLabelledby="menu-button"
                tabindex="-1"
              >
                <div className=" group-hover:block">
                  <a
                    href="#"
                    className="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                  >
                    Demo Feature
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-1"
                  >
                    Demo Feature
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                  >
                    Demo Feature
                  </a>
                </div>
              </div>
            </div>

            <div>
              <Link to="/category">Gaming</Link>
            </div>

            {/* ==== START Bussiness ====== */}
            <div className="relative group  inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex justify-center w-full px-4 py-2  text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none  "
                  id="menu-button"
                  ariaExpanded="true"
                  ariaHaspopup="true"
                >
                  Bussiness
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    ariaHidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div
                className="hidden group-hover:z-10 group-hover:block overflow-hidden origin-top-right absolute right-0  w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                ariaOrientation="vertical"
                ariaLabelledby="menu-button"
                tabindex="-1"
              >
                <div className="group-hover:block">
                  <a
                    href="#"
                    className="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                  >
                    Demo Bussiness
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-1"
                  >
                    Demo Bussiness
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                  >
                    Demo Bussiness
                  </a>
                </div>
              </div>
            </div>
            {/* ==== END Bussiness ====== */}

            {/* ===== START SHOP */}
            <div className="relative group  inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex justify-center w-full px-4 py-2  text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none  "
                  id="menu-button"
                  ariaExpanded="true"
                  ariaHaspopup="true"
                >
                  Shop
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    ariaHidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div
                className="hidden group-hover:z-10 group-hover:block origin-top-right absolute right-0 overflow-hidden w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div className=" group-hover:block" role="none">
                  <a
                    href="#"
                    className="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm"
                    role="menuitem"
                    tab-index="-1"
                    id="menu-item-0"
                  >
                    Demo Shop
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm"
                    role="menuitem"
                    tab-index="-1"
                    id="menu-item-1"
                  >
                    Demo Shop
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm"
                    role="menuitem"
                    tab-index="-1"
                    id="menu-item-2"
                  >
                    Demo Shop
                  </a>
                </div>
              </div>
            </div>
          </ul>
        </div>

        {/* ==== SOCIAL MEDIA NAVBAR */}
        <div className="flex items-center gap-2">
          {/* FACEBOOK */}
          <Link to="/" className="icons p-1 bg-[#3A5998] rounded-full">
            <GrFacebookOption className="text-white text-[1.5rem] " />
          </Link>
          {/* FACEBOOK END */}
          {/* GOOGLE */}
          <Link to="/" className="icons p-1 bg-slate-300 rounded-full">
            <FcGoogle className="text-white text-[1.5rem] " />
          </Link>
          {/* GOOGLE  END*/}
          {/* YOUTUBE */}
          <Link to="/" className="icons p-1 bg-[#FE2804] rounded-full">
            <AiFillYoutube className="text-white text-[1.5rem] " />
          </Link>
          {/* YOUTUBE END */}
          {/* SEARCH */}
          <Link
            to="/"
            onClick={() => setModal(!modal)}
            className="icons p-1 bg-[#E4405F] rounded-full"
          >
            <BiSearchAlt className="text-white text-[1.5rem] " />
          </Link>
          {/* SEARCH END*/}
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            onClick={() => setToggle(!toggle)}
            className=" inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            {toggle ? (
              <svg
                className=" w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </button>
        </div>
        {/* {modal && <Modal />} */}
      </div>
    </>
  );
};

export default Navbar;
