const embedEverything = require("eleventy-plugin-embed-everything");
const format = require("date-fns/format");
const formatISO = require("date-fns/formatISO");
const toDate = require("date-fns/toDate");
const { v5: uuidv5 } = require("uuid");
const HTMLBeautify = require("js-beautify").html;

const site = require("./_data/site");

const searchFilterData = require("./_eleventy/search__data");

// Removes unnecessary noise/crap in searchable content. This is still a WIP.
const makeSearchString = (rawText) =>
  Array.from(
    // Dedupe!
    new Set(
      rawText
        // Make things easier to work with. Turn to lowercase and make an array
        .toLowerCase()
        .split(" ")
        .filter((_) => _.trim() !== "")

        // Remove all punctuation
        .map((_) => _.replace(searchFilterData.PUNCTUATION_REGEX, ""))

        // Remove all numbers including stuff like "1990s"
        .filter((_) => !_.match(/(\d(\w+)?)+/g, ""))

        // Now filter out the stop words
        .filter((_) => !searchFilterData.STOP_WORDS.includes(_))
    )
  ).join(" ");

const beautify = (content, outputPath) => {
  if (outputPath.endsWith(".html")) {
    let minified = HTMLBeautify(content, {
      indent_size: "2",
      indent_char: " ",
      max_preserve_newlines: "-1",
      preserve_newlines: false,
      keep_array_indentation: false,
      break_chained_methods: false,
      indent_scripts: "normal",
      brace_style: "collapse",
      space_before_conditional: true,
      unescape_strings: false,
      jslint_happy: false,
      end_with_newline: false,
      wrap_line_length: "0",
      indent_inner_html: false,
      comma_first: false,
      e4x: false,
      indent_empty_lines: false,
    });

    return minified;
  }

  return content;
};

const parser = require("markdown-it")({
  breaks: true,
  html: true,
  linkify: true,
  typographer: true,
})
  .use(require("./_eleventy/katex"))
  .use(require("./_eleventy/mark"))
  .use(require("markdown-it-prism"))
  .use(require("markdown-it-sup"))
  .use(require("markdown-it-sub"))
  .use(require("markdown-it-attribution"), {
    classNameContainer: null,
    classNameAttribution: null,
    marker: "--",
    removeMarker: false,
  });

const getAllTags = (collection) => {
  let tagList = [];
  let tagMap = {};

  const all = collection.getFilteredByGlob("notes/**/*.md");

  all.forEach((item) => {
    if ("tags" in item.data) {
      let tags = item.data.tags;

      tags = tags.filter((item) => {
        switch (item) {
          // this list should match the `filter` list in tags.njk
          case "all":
          case "nav":
          case "note":
          case "notes":
          case "tags":
            return false;
        }

        return true;
      });

      for (const tag of tags) {
        if (Object.keys(tagMap).indexOf(tag) === -1) {
          tagMap[tag.toString().toLowerCase()] = 1;
        } else {
          tagMap[tag.toString().toLowerCase()] += 1;
        }
      }
    }
  });

  for (t in tagMap) {
    tagList.push({
      name: t,
      count: tagMap[t],
    });
  }

  return tagList;
};

module.exports = (eleventyConfig) => {
  /**
   * Collections
   */

  eleventyConfig.addCollection("notes", function (collectionApi) {
    return collectionApi.getFilteredByGlob("notes/**/*.md");
  });

  eleventyConfig.addCollection("tags", (collection) => getAllTags(collection));

  eleventyConfig.addFilter("superSafeString", (s) =>
    s ? s.replace(/[^a-z0-9 ]/gi, "") : null
  );

  /**
   * Filters
   */

  eleventyConfig.addFilter("uuidWithNoSpaces", (s) =>
    uuidv5(s, uuidv5.URL).replace(/-/g, "")
  );

  eleventyConfig.addFilter("makeSearchString", (s) => makeSearchString(s));

  eleventyConfig.addFilter("uuid", (s) => uuidv5(s, uuidv5.URL));

  eleventyConfig.addFilter("date", (dateString, formatString) =>
    format(toDate(dateString), formatString)
  );

  eleventyConfig.addFilter(
    "editLink",
    (relativePath) => `${site.githubRepository}/edit/master/${relativePath}`
  );

  eleventyConfig.addFilter("toISODateString", (dateString) =>
    formatISO(toDate(dateString))
  );

  /**
   * Other
   */

  eleventyConfig.addPassthroughCopy({
    _assets: "assets",
    _misc: "misc",
    "robots.txt": "robots.txt",
  });

  eleventyConfig.addTransform("beautify", beautify);

  eleventyConfig.setLibrary("md", parser);

  eleventyConfig.addPlugin(embedEverything, {
    use: ["youtube", "vimeo"],
    youtube: {
      options: {
        lite: {
          css: {
            path: `${site.url}/assets/yt.css`,
          },
          js: {
            path: `${site.url}/assets/yt.js`,
          },
        },
        lazy: true,
      },
    },
  });
};
