"use client";
import React from "react";
import Link from "next/link";
import signUp from "../../../signup";
import { useRouter } from "next/navigation";

const page = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const router = useRouter();

  const handleClick = async (event) => {
            event.preventDefault()

            const { result, error } = await signUp(email, password);

            if (error) {
                return console.log(error)
            }

            // else successful
            console.log(result)
            // return router.push("/Product")

            setEmail("");
            setName("");
            setPassword("");

            return alert("you have successfully sign in")
  };

  return (
    <div>
      <div className="container px-5 py-10 mx-auto flex justify-center">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col mt-10 md:mt-0 shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Sign-up
          </h2>

          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Name:
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email:
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Password:
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              id="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

        
            <button
              onClick={handleClick}
              className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
            >
              Sign-up
            </button>
         

          <p className=" text-gray-500 mt-3 text-sm">
            Please enter following value for join us
            <span className="text-red-500 mx-2 underline font-bold">
              <Link href="/Login">Login.</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;

