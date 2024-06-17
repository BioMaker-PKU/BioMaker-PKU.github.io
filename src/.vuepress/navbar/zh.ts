import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  {
    text: "指南",
    icon: "book",
    prefix: "/zh/guide/",
    children: [
      {
        text: "CAD",
        icon: "pencil",
        link: "CAD/",
      },
      {
        text: "Arduino",
        icon: "language-c",
        link: "Arduino/",
      },
      {
        text: "Python",
        icon: "language-python",
        link: "Python/",
      },
    ],
  },
  { text: "案例", icon: "creation", link: "/zh/demo/" },
]);
