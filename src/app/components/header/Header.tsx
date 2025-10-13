"use client"
import Link from "next/link"
import { FaBars } from "react-icons/fa6"
import { HeaderMenu } from "./HeaderMenu"
import { useState } from "react"
import { HeaderAccount } from "./HeaderAccount"

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <header className="bg-[#000071] py-[15px]">
        <div className="container">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="font-[800] sm:text-[28px] text-[20px] text-white lg:flex-none flex-1">
              28.ITJobs
            </Link>
            {/* Menu */}
            <HeaderMenu showMenu={showMenu} setShowMenu={setShowMenu} />
            {/* Account */}
            <HeaderAccount />
            {/* Button Menu Mobile */}
            <button className="lg:hidden block ml-[12px] cursor-pointer" onClick={handleShowMenu}>
              <FaBars className="text-[22px] text-white" />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}