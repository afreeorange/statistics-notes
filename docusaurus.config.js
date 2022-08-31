// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Nikhil's Stats Notes",
  tagline: "Stuff I learned at Georgia Tech 🐝",
  url: "https://public.nikhil.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "afreeorange",
  projectName: "statistics-notes",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/stats",
          remarkPlugins: [math],
          rehypePlugins: [katex],
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/afreeorange/statistics-notes/",
        },
        blog: {
          remarkPlugins: [math],
          rehypePlugins: [katex],
          showReadingTime: false,
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
          editUrl: "https://github.com/afreeorange/statistics-notes",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
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
     * NOTE: This will NOT work in local development! Run `yarn build` to see
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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Notes",
        logo: {
          alt: "Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Tutorial",
          },
          { to: "/blog", label: "Blog", position: "left" }, // {
          { to: "/bookmarks", label: "Bookmarks", position: "right" }, // {
          //   href: "https://github.com/facebook/docusaurus",
          //   label: "GitHub",
          //   position: "right",
          // },
        ],
      },
      // footer: {
      //   style: "dark",
      //   links: [],
      //   copyright: `Powered by Docusaurus. Use these notes however you'd like 🤗`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
