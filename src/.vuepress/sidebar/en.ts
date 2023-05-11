import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    "",
    {
      icon: "discover",
      text: "Demo",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      icon: "note",
      text: "Guide",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    },
  ],
});
