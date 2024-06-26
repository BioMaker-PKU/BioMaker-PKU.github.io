import { getDirname, path } from "@vuepress/utils";
import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  alias: {
    "@": path.resolve(__dirname, "../.vuepress"),
  },

  base: "/",

  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),

  locales: {
    "/zh/": {
      lang: "zh-CN",
      title: "创意性实践",
      description: "北京大学生命科学学院实践课程",
    },
    "/en/": {
      lang: "en-US",
      title: "BioMaker",
      description:
        "Practical course at Peking University School of Life Sciences",
    },
  },

  theme,

  plugins: [],
});
