import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const config: Config = {
  title: "Nikhil's Notes",
  tagline: "Everything I Learned at Georgia Tech 🐝",
  favicon: "img/favicon.ico",
  url: "https://public.nikhil.io",
  baseUrl: "/statistics-notes",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",

          editUrl: "https://github.com/afreeorange/statistics-notes/",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: false,
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",

          editUrl: "https://github.com/afreeorange/statistics-notes/",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      integrity:
        "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      crossorigin: "anonymous",
    },
  ],

  plugins: [
    /**
     * This is how search works.
     *
     * NOTE: This will NOT work in local development! Run `pnpm build` to see
     *       the results!
     *
     * Reference:
     * https://github.com/easyops-cn/docusaurus-search-local#plugin-options
     */
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexPages: true,
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/social.jpg",
    navbar: {
      title: "",
      logo: {
        alt: "",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "notesSidebar",
          position: "left",
          label: "Notes",
        },
        { to: "/blog", label: "Blog", position: "left" },
        { to: "/bookmarks", label: "Bookmarks", position: "left" },
      ],
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
