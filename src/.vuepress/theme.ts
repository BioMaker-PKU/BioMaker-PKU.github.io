import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://biomaker-pku.github.io",

  author: {
    name: "BioMakers",
    url: "https://biomaker-pku.github.io",
  },

  iconAssets: "iconify",

  iconPrefix: "mdi:",

  logo: "/logo.svg",

  repo: "biomaker-pku/biomaker-pku.github.io",

  docsDir: "src",

  locales: {
    /**
     * Chinese locale config
     */
    "/zh/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "创意性实践 @ 北大",

      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },

    "/en/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "BioMaker @ PKU",

      displayFooter: true,

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },
  },

  plugins: {
    blog: true,

    comment: {
      provider: "Waline",
      serverURL: "https://waline-comment-gold.vercel.app/",
    },

    docsearch: {
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
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      revealJs: { plugins: ["highlight", "math", "search", "notes", "zoom"] },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // Disable prism to use shiki
    prismjs: false,

    redirect: {
      autoLocale: true,
      localeConfig: {
        "/zh/": ["zh-CN", "zh-TW", "zh"],
        "/en/": ["en-US", "en-UK", "en"],
      },
    },

    shiki: {
      theme: "dark-plus",
      langs: [
        "ts",
        "py",
        "yaml",
        "r",
        "cpp",
        "rust",
        "csharp",
        "json",
        "makefile",
        "ps",
        "vue",
        "vue-html",
        "md",
        "bash",
        "diff",
      ],
    },
  },
});
