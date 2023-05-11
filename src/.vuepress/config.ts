import { getDirname, path } from "@vuepress/utils";
import { defineUserConfig } from "vuepress";
import { redirectPlugin } from "vuepress-plugin-redirect";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  alias: {
    "@": path.resolve(__dirname, "../.vuepress"),
  },

  base: "/",

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

  plugins: [
    redirectPlugin({
      autoLocale: true,
      localeConfig: {
        "/zh/": ["zh-CN", "zh-TW", "zh"],
        "/en/": ["en-US", "en-UK", "en"],
      },
    }),
    docsearchPlugin({
      appId: "JCDEBX6HWI",
      apiKey: "1620ca7063137c1125a8f78ff0643f09",
      indexName: "biomaker-pkuio",
      locales: {
        "/zh/": {
          placeholder: "搜索站点",
          translations: {
            button: {
              buttonText: "搜索站点",
              buttonAriaLabel: "搜索站点",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          },
        },
        "/en/": {
          placeholder: "Search site",
          translations: {
            button: {
              buttonText: "Search site",
              buttonAriaLabel: "Search site",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "Reset query",
                resetButtonAriaLabel: "Reset query",
                cancelButtonText: "Cancel",
                cancelButtonAriaLabel: "Cancel",
              },
              startScreen: {
                recentSearchesTitle: "Recent searches",
                noRecentSearchesText: "No recent searches",
                saveRecentSearchButtonTitle: "Save to recent searches",
                removeRecentSearchButtonTitle: "Remove from recent searches",
                favoriteSearchesTitle: "Favorites",
                removeFavoriteSearchButtonTitle: "Remove from favorites",
              },
              errorScreen: {
                titleText: "Unable to get results",
                helpText: "You might need to check your network connection",
              },
              footer: {
                selectText: "Select",
                navigateText: "Navigate",
                closeText: "Close",
                searchByText: "Search by",
              },
              noResultsScreen: {
                noResultsText: "No results found",
                suggestedQueryText: "You can try searching for",
                reportMissingResultsText:
                  "Do you think this query should have results?",
                reportMissingResultsLinkText: "Click here to report it",
              },
            },
          },
        },
      },
    }),
  ],
});
