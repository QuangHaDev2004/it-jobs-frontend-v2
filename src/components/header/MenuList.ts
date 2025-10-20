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
