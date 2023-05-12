import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  {
    text: "Guide",
    icon: "creative",
    prefix: "/en/guide/",
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
  { text: "Demo", icon: "discover", link: "/en/demo/" },
]);
