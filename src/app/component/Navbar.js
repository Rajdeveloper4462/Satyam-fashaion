import React from "react";
// import Image from "next/image";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className=" container shadow-lg sticky top-0 z-20">
      <header className="body-font ">
        <div className="container bg-white  mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            <div className="flex title-font font-medium items-center text-red-500 mb-4 md:mb-0">
              {/* <Image src={"/vercel.svg"} width={50} height={50} alt="logo" /> */}
              <span className="ml-3 text-xl">Satyam-Fashion</span>
            </div>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/">
              <div className="mx-2 text-md hover:text-red-500">Home</div>
            </Link>
            <Link href="/About">
              <div className="mx-2 text-md hover:text-red-500">About</div>
            </Link>
            <Link href="/Product">
              <div className="mx-2 text-md hover:text-red-500">Products</div>
            </Link>
            <Link href="/Contact">
              <div className="mx-2 text-md hover:text-red-500">Contact</div>
            </Link>
          </nav>
        </div>
        <Link href="/Signup">
          <button className="absolute top-0 right-2 border-0 p-3 rounded focus:outline-none text-base mt-3 md:m-4">
            <FaUserCircle className="text-red-500 text-xl hover:text-red-600" />
          </button>
        </Link>
      </header>
    </div>
  );
};

export default Navbar;
