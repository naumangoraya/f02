"use client";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "../../components/Breadcrumb";
import LogoIcon from "../../images/logo/logo-icon.svg";
import Phone from "../../images/phone/phone.svg";

const Login = () => {
  return (
    <div className="h-[calc(100vh-120px)] overflow-y-auto">
      <Breadcrumb pageName="Sign In" />

      <div className="rounded-sm border border-gray-700 bg-[#24303F] shadow-default">
        <div className="flex flex-wrap items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="py-8 px-16 text-center">
              <Link href="/signup" className="mb-5.5 inline-block">
                <div className="flex gap-3 items-center text-white">
                  <Image src={LogoIcon} alt="Logo" className="h-12 w-auto" />
                  <span className="font-bold text-2xl">doubleN</span>
                </div>
              </Link>

              <p className="2xl:px-20 text-gray-200 mt-3">
                The Best Ever Solution to All Your E-Commerce Problems.
              </p>

              <span className="mt-3 inline-block">
                <Image src={Phone} alt="" className="max-h-80 mx-auto" />
              </span>
            </div>
          </div>

          <div className="w-full xl:w-1/2 xl:border-l border-gray-700">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <div className="max-w-[400px] mx-auto">
                <div className="mb-6">
                  <span className="mb-1.5 block font-medium text-gray-200">
                    Welcome back
                  </span>
                  <h2 className="text-2xl font-bold text-white">
                    Sign In to doubleN
                  </h2>
                </div>

                <form>
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

                  <div className="mb-6">
                    <label className="mb-2 block font-medium text-white">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full rounded-lg border border-gray-700 bg-[#1a222c] py-2 px-4 text-white outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="remember"
                        className="h-4 w-4 rounded border-gray-700 bg-[#1a222c] text-blue-600 focus:ring-blue-600"
                      />
                      <label
                        htmlFor="remember"
                        className="ml-2 text-sm text-gray-200"
                      >
                        Remember me
                      </label>
                    </div>
                    <Link
                      href="/signup"
                      className="text-sm text-blue-500 hover:text-blue-600"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <div className="mb-4">
                    <input
                      type="submit"
                      value="Sign In"
                      className="w-full cursor-pointer rounded-lg border border-blue-600 bg-blue-600 py-2 px-4 text-white transition hover:bg-blue-700"
                    />
                  </div>

                  <div className="text-center">
                    <p className="text-gray-200">
                      Don't have an account?{" "}
                      <Link
                        href="/signup"
                        className="text-blue-500 hover:text-blue-600"
                      >
                        Sign Up
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

export default Login;
