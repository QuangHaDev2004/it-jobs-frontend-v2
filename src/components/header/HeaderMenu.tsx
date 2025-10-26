import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { menuList } from "./MenuList";

export const HeaderMenu = ({
  showMenu,
  setShowMenu,
}: {
  showMenu: boolean;
  setShowMenu: (value: boolean) => void;
}) => {
  const { isLogin } = useAuth();

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  return (
    <>
      <nav
        className={
          "lg:block " +
          (showMenu
            ? "fixed top-0 left-0 z-[999] h-[100vh] w-[280px] bg-blue-800"
            : "hidden")
        }
      >
        <ul className="flex flex-wrap items-center gap-x-[30px]">
          {menuList.map((menu, index) => (
            <li
              key={index}
              className={`group/sub-1 relative flex w-full flex-wrap items-center justify-between gap-x-2 p-[10px] lg:w-auto lg:justify-start lg:p-0 ${menu.isLogin !== undefined && menu.isLogin !== isLogin ? "hidden" : ""}`}
            >
              <Link
                href={menu.link}
                className="text-[16px] font-semibold text-white"
              >
                {menu.name}
              </Link>
              {menu.children && (
                <>
                  <FaAngleDown className="text-[16px] text-white" />
                  <ul className="bg-job-primary relative top-full left-0 hidden w-[280px] rounded-sm shadow-2xl group-hover/sub-1:block lg:absolute">
                    {menu.children.map((menuSub1, indexSub1) => (
                      <li
                        key={indexSub1}
                        className="group/sub-2 hover:bg-job-hover flex flex-wrap items-center justify-between rounded-sm px-4 py-[10px]"
                      >
                        <Link
                          href={menuSub1.link}
                          className="flex-1 text-[16px] font-semibold text-white"
                        >
                          {menuSub1.name}
                        </Link>
                        {menuSub1.children && (
                          <>
                            <FaAngleRight className="text-[16px] text-white" />
                            <ul className="bg-job-primary relative top-0 left-0 hidden w-full rounded-sm shadow-2xl group-hover/sub-2:block lg:absolute lg:left-full lg:w-[280px]">
                              {menuSub1.children.map((menuSub2, indexSub2) => (
                                <li
                                  key={indexSub2}
                                  className="hover:bg-job-hover flex items-center justify-between rounded-sm px-4 py-[10px]"
                                >
                                  <Link
                                    href={menuSub2.link}
                                    className="flex-1 text-[16px] font-semibold text-white"
                                  >
                                    {menuSub2.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>
      {/* Overlay */}
      <div
        className={
          "fixed top-0 left-0 z-[998] h-full w-full bg-[#00000088] " +
          (showMenu ? "block" : "hidden")
        }
        onClick={handleCloseMenu}
      ></div>
    </>
  );
};
