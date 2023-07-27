import Image from "next/image";
import Link from "next/link";
import React from "react";
// import Navbar from "./component/Navbar";

const page = () => {
  // console.log(process.env.MONGO_URI);
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              src={"/herofas.avif"}
              height={300}
              width={600}
              alt="hero"
              className="object-cover object-center rounded"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              The best look anytime anywhere
              <br className="hidden lg:inline-block" />
              "Satyam-Fashaion"
            </h1>
            <p className="mb-8 leading-relaxed text-lg">
              "If you love something, wear it all the time... Find things that
              suit you. That's how you look extraordinary." & Fashion is very
              important. It is life-enhancing and, like everything that gives
              pleasure, it is worth doing well.
            </p>

            <div className="flex justify-center">
              <Link href={"/Product"}>
                <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                  Find Suitable for you
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* second____________ */}

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Greatest Fashion of All Time
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              “Fashion is more art than art is." "Fashion is very important. It
              is life-enhancing and, like everything that gives pleasure, it is
              worth doing well."
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <Image
                  src={"/vk.jpg"}
                  height={200}
                  width={400}
                  alt="hero"
                  className="absolute inset-0 w-full h-full object-center"
                />

                <div class="px-8 py-10 relative z-10 w-full border-4 border-red-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Shooting Stars
                  </h1>
                  <p class="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <Image
                  src={"/vk2.jpg"}
                  height={300}
                  width={400}
                  alt="hero"
                  className="absolute inset-0 w-full h-full object-center"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-red-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    The Catalyzer
                  </h1>
                  <p class="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <Image
                  src={"/vk3.jpg"}
                  height={200}
                  width={400}
                  alt="hero"
                  className="absolute inset-0 w-full h-full object-center"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-red-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    The 400 Blows
                  </h1>
                  <p class="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <Image
                  src={"/vk4.jpg"}
                  height={200}
                  width={400}
                  alt="hero"
                  className="absolute inset-0 w-full h-full object-center"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-red-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Neptune
                  </h1>
                  <p class="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <Image
                  src={"/vk5.webp"}
                  height={200}
                  width={400}
                  alt="hero"
                  className="absolute inset-0 w-full h-full object-center"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-red-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Holden Caulfield
                  </h1>
                  <p class="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <Image
                  src={"/vk6.jpg"}
                  height={200}
                  width={400}
                  alt="hero"
                  className="absolute inset-0 w-full h-full object-center"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-red-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Alper Kamu
                  </h1>
                  <p class="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
