import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="">
      <section className="text-red-600 body-font">
        <div className="container px-5 py-10  mx-auto">
          <div className="mb-5 flex justify-center text-lg font-bold underline">
            Our fashaion Products
          </div>
          <div className="flex flex-wrap ">
            <div className="lg:w-1/4  md:w-1/2 p-4 w-full">
              <a className="block relative h-80 rounded-xl overflow-hidden">
                <Image
                  src={"/product1.avif"}
                  width={1000}
                  height={1000}
                  alt="product img"
                />
              </a>
              <div className="mt-4">
                <h2 className="text-red-900 title-font text-lg font-medium">
                  The White-Green
                </h2>
                <p className="mt-1">₹1600</p>

                <Link href="/Product/rought1">
                  <button className="inline-flex text-white bg-red-500 border-0 mt-2 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-xs">
                    Bay now
                  </button>
                </Link>
              </div>
            </div>
            {/* Another */}

            <div className="lg:w-1/4  md:w-1/2 p-4 w-full">
              <a className="block relative h-80 rounded-xl overflow-hidden">
                <Image
                  src={"/product1.avif"}
                  width={1000}
                  height={1000}
                  alt="product img"
                />
              </a>
              <div className="mt-4">
                <h2 className="text-red-900 title-font text-lg font-medium">
                  The White-Green
                </h2>
                <p className="mt-1">₹1600</p>

                <Link href="/Product/rought1">
                  <button className="inline-flex text-white bg-red-500 border-0 mt-2 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-xs">
                    Bay now
                  </button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/4  md:w-1/2 p-4 w-full">
              <a className="block relative h-80 rounded-xl overflow-hidden">
                <Image
                  src={"/product1.avif"}
                  width={1000}
                  height={1000}
                  alt="product img"
                />
              </a>
              <div className="mt-4">
                <h2 className="text-red-900 title-font text-lg font-medium">
                  The White-Green
                </h2>
                <p className="mt-1">₹1600</p>

                <Link href="/Product/rought1">
                  <button className="inline-flex text-white bg-red-500 border-0 mt-2 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-xs">
                    Bay now
                  </button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/4  md:w-1/2 p-4 w-full">
              <a className="block relative h-80 rounded-xl overflow-hidden">
                <Image
                  src={"/product1.avif"}
                  width={1000}
                  height={1000}
                  alt="product img"
                />
              </a>
              <div className="mt-4">
                <h2 className="text-red-900 title-font text-lg font-medium">
                  The White-Green
                </h2>
                <p className="mt-1">₹1600</p>

                <Link href="/Product/rought1">
                  <button className="inline-flex text-white bg-red-500 border-0 mt-2 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-xs">
                    Bay now
                  </button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/4  md:w-1/2 p-4 w-full">
              <a className="block relative h-80 rounded-xl overflow-hidden">
                <Image
                  src={"/product1.avif"}
                  width={1000}
                  height={1000}
                  alt="product img"
                />
              </a>
              <div className="mt-4">
                <h2 className="text-red-900 title-font text-lg font-medium">
                  The White-Green
                </h2>
                <p className="mt-1">₹1600</p>

                <Link href="/Product/rought1">
                  <button className="inline-flex text-white bg-red-500 border-0 mt-2 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-xs">
                    Bay now
                  </button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/4  md:w-1/2 p-4 w-full">
              <a className="block relative h-80 rounded-xl overflow-hidden">
                <Image
                  src={"/product1.avif"}
                  width={1000}
                  height={1000}
                  alt="product img"
                />
              </a>
              <div className="mt-4">
                <h2 className="text-red-900 title-font text-lg font-medium">
                  The White-Green
                </h2>
                <p className="mt-1">₹1600</p>

                <Link href="/Product/rought1">
                  <button className="inline-flex text-white bg-red-500 border-0 mt-2 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-xs">
                    Bay now
                  </button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/4  md:w-1/2 p-4 w-full">
              <a className="block relative h-80 rounded-xl overflow-hidden">
                <Image
                  src={"/product1.avif"}
                  width={1000}
                  height={1000}
                  alt="product img"
                />
              </a>
              <div className="mt-4">
                <h2 className="text-red-900 title-font text-lg font-medium">
                  The White-Green
                </h2>
                <p className="mt-1">₹1600</p>

                <Link href="/Product/rought1">
                  <button className="inline-flex text-white bg-red-500 border-0 mt-2 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-xs">
                    Bay now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
