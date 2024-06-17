import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  {
    text: "Guide",
    icon: "book",
    prefix: "/en/guide/",
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
  { text: "Demo", icon: "creation", link: "/en/demo/" },
]);
