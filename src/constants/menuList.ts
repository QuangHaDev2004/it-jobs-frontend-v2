import { MenuItem } from "@/types/menu";
import { SKILLS } from "./skills";
import { COMPANIES } from "./companies";

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
      {
        name: "Việc làm IT theo chuyên môn",
        link: "#",
      },
      {
        name: "Việc làm IT theo công ty",
        link: "#",
      },
      
    ],
  },
  {
    name: "Top Công Ty IT",
    link: "/company/list",
    children: COMPANIES.map((company) => ({
      name: company,
      link: `/search?company=${company}`,
    })),
  },
];
