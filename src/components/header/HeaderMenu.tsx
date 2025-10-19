import Link from "next/link";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";

export const HeaderMenu = ({
  showMenu,
  setShowMenu,
}: {
  showMenu: boolean;
  setShowMenu: (value: boolean) => void;
}) => {
  const menuList = [
    {
      name: "Việc Làm IT",
      link: "#",
      children: [
        {
          name: "Việc làm IT theo kỹ năng",
          link: "#",
          children: [
            {
              name: "ReactJS",
              link: "#",
            },
            {
              name: "NodeJS",
              link: "#",
            },
            {
              name: "Javascript",
              link: "#",
            },
            {
              name: "HTML5",
              link: "#",
            },
            {
              name: "CSS3",
              link: "#",
            },
          ],
        },
        {
          name: "Việc làm IT theo công ty",
          link: "#",
        },
        {
          name: "Việc làm IT theo thành phố",
          link: "#",
        },
      ],
    },
    {
      name: "Top Công Ty IT",
      link: "#",
      children: [
        {
          name: "FPT Software",
          link: "#",
        },
        {
          name: "Techcombank",
          link: "#",
        },
        {
          name: "MB Bank",
          link: "#",
        },
      ],
    },
    {
      name: "Nhà Tuyển Dụng",
      link: "#",
      children: [
        {
          name: "Đăng Nhập",
          link: "/company/login",
        },
        {
          name: "Đăng Ký",
          link: "/company/register",
        },
      ],
    },
  ];

  const handleCloseMenu = () => {
    setShowMenu(!showMenu);
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
              className="group/sub-1 relative flex w-full flex-wrap items-center justify-between gap-x-2 p-[10px] lg:w-auto lg:justify-start lg:p-0"
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
                  <ul className="relative top-full left-0 hidden w-[280px] rounded-[4px] bg-primary group-hover/sub-1:block lg:absolute">
                    {menu.children.map((menuSub1, indexSub1) => (
                      <li
                        key={indexSub1}
                        className="group/sub-2 flex flex-wrap items-center justify-between rounded-[4px] px-[16px] py-[10px] hover:bg-[#000096]"
                      >
                        <Link
                          href={menuSub1.link}
                          className="text-[16px] font-[600] text-white"
                        >
                          {menuSub1.name}
                        </Link>
                        {menuSub1.children && (
                          <>
                            <FaAngleRight className="text-[16px] text-white" />
                            <ul className="relative top-0 left-0 hidden w-full rounded-[4px] bg-[#000065] group-hover/sub-2:block lg:absolute lg:left-[100%] lg:w-[280px]">
                              {menuSub1.children.map((menuSub2, indexSub2) => (
                                <li
                                  key={indexSub2}
                                  className="flex items-center justify-between rounded-[4px] px-[16px] py-[10px] hover:bg-[#000096]"
                                >
                                  <Link
                                    href={menuSub2.link}
                                    className="text-[16px] font-[600] text-white"
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
