import Link from "next/link"
import { FaAngleDown, FaAngleRight } from "react-icons/fa6"

export const HeaderMenu = (props: {
  showMenu: boolean,
  setShowMenu: (value: boolean) => void
}) => {
  const { showMenu, setShowMenu  } = props

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
              link: "#"
            },
            {
              name: "NodeJS",
              link: "#"
            },
            {
              name: "Javascript",
              link: "#"
            },
            {
              name: "HTML5",
              link: "#"
            },
            {
              name: "CSS3",
              link: "#"
            }
          ]
        },
        {
          name: "Việc làm IT theo công ty",
          link: "#"
        },
        {
          name: "Việc làm IT theo thành phố",
          link: "#"
        }
      ]
    },
    {
      name: "Top Công Ty IT",
      link: "#",
      children: [
        {
          name: "FPT Software",
          link: "#"
        },
        {
          name: "Techcombank",
          link: "#"
        },
        {
          name: "MB Bank",
          link: "#"
        }
      ]
    },
    {
      name: "Nhà Tuyển Dụng",
      link: "#",
      children: [
        {
          name: "Đăng Nhập",
          link: "/company/login"
        },
        {
          name: "Đăng Ký",
          link: "/company/register"
        }
      ]
    }
  ]

  const handleCloseMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <nav className={
        "lg:block " +
        (showMenu ?
          "fixed top-0 left-0 z-[999] w-[280px] h-[100vh] bg-blue-800"
          :
          "hidden")
      }>
        <ul className="flex flex-wrap items-center gap-x-[30px]">
          {menuList.map((menu, index) => (
            <li key={index} className="flex flex-wrap items-center lg:justify-start justify-between lg:w-auto w-full lg:p-0 p-[10px] gap-x-[8px] relative group/sub-1">
              <Link href={menu.link} className="font-[600] text-[16px] text-white">
                {menu.name}
              </Link>
              {menu.children && (
                <>
                  <FaAngleDown className="text-[16px] text-white" />
                  <ul className="bg-[#000065] lg:absolute relative top-[100%] left-0 w-[280px] rounded-[4px] hidden group-hover/sub-1:block">
                    {menu.children.map((menuSub1, indexSub1) => (
                      <li key={indexSub1} className="flex flex-wrap items-center justify-between px-[16px] py-[10px] rounded-[4px] hover:bg-[#000096] group/sub-2">
                        <Link href={menuSub1.link} className="font-[600] text-[16px] text-white">
                          {menuSub1.name}
                        </Link>
                        {menuSub1.children && (
                          <>
                            <FaAngleRight className="text-[16px] text-white" />
                            <ul className="bg-[#000065] lg:absolute relative top-0 lg:left-[100%] left-0 lg:w-[280px] w-full rounded-[4px] hidden group-hover/sub-2:block">
                              {menuSub1.children.map((menuSub2, indexSub2) => (
                                <li key={indexSub2} className="flex items-center justify-between px-[16px] py-[10px] rounded-[4px] hover:bg-[#000096]">
                                  <Link href={menuSub2.link} className="font-[600] text-[16px] text-white">
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
        className={"bg-[#00000088] fixed top-0 left-0 w-full h-full z-[998] " + (showMenu ? "block" : "hidden")}
        onClick={handleCloseMenu}
      >
      </div>
    </>
  )
}