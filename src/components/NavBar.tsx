import Link from "next/link";
import { useState } from "react";
import { useGlobalContext } from "../Hooks/useGlobalContext";
import { ellipseAddress } from "../lib/utilities";

export default function NavBar() {
  const { connect, disconnect, address, web3Provider } = useGlobalContext();

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`flex z-50 w-full items-center justify-between flex-wrap p-6 lg:px-20 lg:bg-transparent lg:backdrop-blur-none ${
        isOpen ? "bg-white/10" : "bg-transparent"
      }`}
    >
      <div className="flex items-center flex-shrink-0 text-gray-800 font-black mr-6">
        <span className="font-bold text-3xl tracking-wide">cryptosave</span>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-gray-900 border-teal-400 hover:text-white hover:border-white"
          onClick={toggle}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full lg:w-2/3 block lg:flex lg:items-center ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm lg:w-2/3">
          <Link href="/">
            <a
              className="block mt-4 text-md lg:inline-block lg:mt-0 text-gray-800 font-semibold hover:text-white mr-4 text-center"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </Link>
          <Link href="/profile">
            <a
              className="block mt-4 text-md lg:inline-block lg:mt-0 text-gray-800 font-semibold hover:text-white mr-4 text-center"
              onClick={() => setIsOpen(false)}
            >
              Profile
            </a>
          </Link>
        </div>
        <div className="w-1/3">
          {web3Provider ? (
            <div className="flex flex-col lg:block">
              <Link href="/profile">
                <a className="text-sm text-center font-normal hover:underline mr-4 mt-3 lg:mt-0">
                  {ellipseAddress(address)}
                </a>
              </Link>
              <button
                className="inline-block text-sm px-8 py-3 leading-none rounded-md text-gray-200 bg-gray-800 mt-4 lg:mt-0 mx-3 cursor-pointer"
                onClick={() => disconnect()}
              >
                Disconnect
              </button>
            </div>
          ) : (
            <div className="flex justify-end items-center z-50">
              <button
                className="block ml-auto mt-4 text-md lg:inline-block lg:mt-0 text-gray-800 font-semibold hover:text-white w-1/6 cursor-pointer"
                onClick={() => connect()}
              >
                Log in
              </button>
              <button className="inline-block text-sm px-8 py-3 leading-none rounded-md text-gray-200 bg-gray-800 mt-4 lg:mt-0 mx-3 cursor-pointer">
                Get started
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
