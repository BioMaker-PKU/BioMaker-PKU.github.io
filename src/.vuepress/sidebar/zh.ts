import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      icon: "discover",
      text: "案例",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      icon: "note",
      text: "文档",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    },
  ],
});
