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
        children: [
          {
            name: "ReactJS",
            link: "/search?language=ReactJS",
          },
          {
            name: "NodeJS",
            link: "/search?language=NodeJS",
          },
          {
            name: "Javascript",
            link: "/search?language=Javascript",
          },
          {
            name: "HTML5",
            link: "/search?language=HTML5",
          },
          {
            name: "CSS3",
            link: "/search?language=CSS3",
          },
        ],
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
            link: "/search?city=Hà Nội"
          },
          {
            name: "Đà Nẵng",
            link: "/search?city=Đà Nẵng"
          },
          {
            name: "Hồ Chí Minh",
            link: "/search?city=Hồ Chí Minh"
          }
        ]
      },
    ],
  },
  {
    name: "Top Công Ty IT",
    link: "#",
    children: [
      {
        name: "FPT Software",
        link: "/search?company=FPT Software",
      },
      {
        name: "Techcombank",
        link: "/search?company=Techcombank",
      },
      {
        name: "MB Bank",
        link: "/search?company=MB Bank",
      },
    ],
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
