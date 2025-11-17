"use client";
import Link from "next/link";
import { FaBars, FaRegBell, FaRegMessage } from "react-icons/fa6";
import { HeaderMenu } from "./HeaderMenu";
import { useState } from "react";
import { HeaderAccount } from "./HeaderAccount";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header className="bg-job-primary border-job-gray-100/20 sticky top-0 left-0 z-[997] border-b py-[15px] shadow-md">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Button Menu Mobile */}
            <button
              className="ml-3 block cursor-pointer lg:hidden"
              onClick={handleShowMenu}
            >
              <FaBars className="text-[22px] text-white" />
            </button>

            <div className="flex items-center gap-10">
              <Link
                href="/"
                className="text-xl font-extrabold text-white sm:text-[28px]"
              >
                ITJobs
              </Link>

              {/* Menu */}
              <HeaderMenu showMenu={showMenu} setShowMenu={setShowMenu} />
            </div>

            {/* Account */}
            <div className="flex items-center gap-10">
              <FaRegMessage size={20} className="text-white cursor-pointer hidden lg:block" />
              <FaRegBell size={20} className="text-white cursor-pointer hidden lg:block" />
              <HeaderAccount />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
