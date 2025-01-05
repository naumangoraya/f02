import React from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "../../components/Breadcrumb";
import LogoIcon from "../../images/logo/logo-icon.svg";
import Phone from "../../images/phone/phone.svg";

const Signup = () => {
  return (
    <div className="h-[calc(100vh-120px)] overflow-y-auto">
      <Breadcrumb pageName="Sign Up" />

      <div className="rounded-sm border border-gray-700 bg-[#24303F] shadow-default">
        <div className="flex flex-wrap items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="py-8 px-16 text-center">
              <Link href="/">
                <div className="mb-5.5 inline-block">
                  <div className="flex gap-3 items-center text-white">
                    <Image
                      src={LogoIcon}
                      alt="Logo"
                      className="h-12 w-auto"
                      width={48}
                      height={48}
                    />
                    <span className="font-bold text-2xl">doubleN</span>
                  </div>
                </div>
              </Link>

              <p className="2xl:px-20 text-gray-200 mt-3">
                The Best Ever Solution to All Your E-Commerce Problems.
              </p>

              <span className="mt-3 inline-block">
                <Image
                  src={Phone}
                  alt="Phone"
                  className="max-h-80 mx-auto"
                  width={320}
                  height={320}
                />
              </span>
            </div>
          </div>

          <div className="w-full xl:w-1/2 xl:border-l border-gray-700">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <div className="max-w-[400px] mx-auto">
                <div className="mb-6">
                  <span className="mb-1.5 block font-medium text-gray-200">
                    Start for free
                  </span>
                  <h2 className="text-2xl font-bold text-white">
                    Sign Up to doubleN
                  </h2>
                </div>

                <form>
                  <div className="mb-4">
                    <label className="mb-2 block font-medium text-white">
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter your Full Name"
                        className="w-full rounded-lg border border-gray-700 bg-[#1a222c] py-2 px-4 text-white outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="mb-2 block font-medium text-white">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-lg border border-gray-700 bg-[#1a222c] py-2 px-4 text-white outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="mb-2 block font-medium text-white">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Create a password"
                        className="w-full rounded-lg border border-gray-700 bg-[#1a222c] py-2 px-4 text-white outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="mb-2 block font-medium text-white">
                      Re-Type Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Re-Enter Your Password"
                        className="w-full rounded-lg border border-gray-700 bg-[#1a222c] py-2 px-4 text-white outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <input
                      type="submit"
                      value="Sign Up"
                      className="w-full cursor-pointer rounded-lg border border-blue-600 bg-blue-600 py-2 px-4 text-white transition hover:bg-blue-700"
                    />
                  </div>

                  <div className="text-center">
                    <p className="text-gray-200">
                      Already have an account?{" "}
                      <Link
                        href="/login"
                        className="text-blue-500 hover:text-blue-600"
                      >
                        Sign In
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
