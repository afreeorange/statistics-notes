const { v5: uuidv5 } = require("uuid");
const HTMLBeautify = require("js-beautify").html;

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
    .use(require("markdown-it-sub"));

module.exports = (eleventyConfig) => {
    eleventyConfig.setLibrary("md", parser);

    eleventyConfig.addCollection("notes", function (collectionApi) {
        return collectionApi.getFilteredByGlob("notes/**/*.md");
    });

    eleventyConfig.addFilter("superSafeString", (s) =>
        s ? s.replace(/[^a-z0-9 ]/gi, "") : null,
    );

    eleventyConfig.addFilter("uuidWithNoSpaces", (s) =>
        uuidv5(s, uuidv5.URL).replace(/-/g, ""),
    );

    eleventyConfig.addPassthroughCopy({ assets: "assets" });

    eleventyConfig.addTransform("beautify", beautify);
};
