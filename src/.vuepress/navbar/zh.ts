import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  { text: "案例", icon: "discover", link: "/zh/demo/" },
  {
    text: "指南",
    icon: "creative",
    prefix: "/zh/guide/",
    children: [
      {
        text: "CAD",
        icon: "geometry",
        link: "CAD/",
      },
      {
        text: "Arduino",
        icon: "c",
        link: "Arduino/",
      },
      {
        text: "Python",
        icon: "python",
        link: "Python/",
      },
    ],
  },
]);
