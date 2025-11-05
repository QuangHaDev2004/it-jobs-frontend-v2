import { COMPANIES } from "@/constants/companies";
import { SKILLS } from "@/constants/skills";

type MenuItem = {
  name: string;
  link: string;
  children?: MenuItem[];
  isLogin?: boolean;
};

export const menuList: MenuItem[] = [
  {
    name: "Việc Làm IT",
    link: "#",
    children: [
      {
        name: "Việc làm IT theo kỹ năng",
        link: "#",
        children: SKILLS.map((skill) => ({
          name: skill,
          link: `/search?language=${skill}`,
        })),
      },
      {
        name: "Việc làm IT theo chuyên môn",
        link: "#",
      },
      {
        name: "Việc làm IT theo thành phố",
        link: "#",
        children: [
          {
            name: "Hà Nội",
            link: "/search?city=Hà Nội",
          },
          {
            name: "Đà Nẵng",
            link: "/search?city=Đà Nẵng",
          },
          {
            name: "Hồ Chí Minh",
            link: "/search?city=Hồ Chí Minh",
          },
        ],
      },
    ],
  },
  {
    name: "Top Công Ty IT",
    link: "#",
    children: COMPANIES.map((company) => ({
      name: company,
      link: `/search?company=${company}`,
    })),
  },
  {
    name: "Blog",
    link: "#",
  },
  {
    name: "Nhà Tuyển Dụng",
    link: "#",
    isLogin: false,
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
