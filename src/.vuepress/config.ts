import { getDirname, path } from "@vuepress/utils";
import { defineUserConfig } from "vuepress";
import { redirectPlugin } from "vuepress-plugin-redirect";
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  alias: {
    "@": path.resolve(__dirname, "../.vuepress"),
  },

  base: "/",

  locales: {
    "/en/": {
      lang: "en-US",
      title: "BioMaker",
      description:
        "Practical course at Peking University School of Life Sciences",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "创意性实践",
      description: "北京大学生命科学学院实践课程",
    },
  },

  theme,

  plugins: [
    redirectPlugin({
      autoLocale: true,
      localeConfig: {
        "/zh/": ["zh-CN", "zh-TW", "zh"],
        "/en/": ["en-US", "en-UK", "en"],
      },
    }),
  ],
});
