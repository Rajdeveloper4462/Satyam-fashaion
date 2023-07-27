import Link from "next/link";
import React from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";


const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-gray-100">
        <div className="container px-5 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <span className="ml-3 text-xl">Satyam-Fashaion</span>
            </a>
            <p className="mt-2 ml-3 text-sm text-gray-500">
              The best look anytime anywhere
            </p>
            <p className="mt-2 ml-3 text-sm text-red-500">
              +91-9979743767
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                PAGES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="/">Home</Link>
                </li>

                <li>
                  <Link href="/Product">Product</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                KNOW MORE
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="/About">About</Link>
                </li>
                <li>
                  <Link href="/Contact">Contact</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                LOG-IN
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="/Login">Log-in</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                SIGN-UP
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="/Signup">Sign-up</Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2023 Satyam-Fashaion —
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                Satyam-Fashaion
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <FaFacebook className="text-red-500 mx-2" />
              <FiInstagram className="text-red-500 mx-2" />
              <FaWhatsapp className="text-red-500 mx-2" />
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
