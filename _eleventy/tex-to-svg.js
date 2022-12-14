/*************************************************************************
 *
 *  tex2svg
 *
 *  Uses MathJax to convert a TeX or LaTeX string to an SVG file.
 *
 * ----------------------------------------------------------------------
 *
 *  Copyright (c) 2014 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

const MathJAX_API = require("mathjax-node");

const argv = require("yargs")
  .demand(1)
  .strict()
  .usage("$0 [options] 'math' > output.svg")
  .options({
    inline: {
      boolean: true,
      describe: "process as in-line TeX",
    },
    speech: {
      boolean: true,
      default: true,
      describe: "include speech text",
    },
    linebreaks: {
      boolean: true,
      describe: "perform automatic line-breaking",
    },
    font: {
      default: "TeX",
      describe: "web font to use",
    },
    ex: {
      default: 6,
      describe: "ex-size in pixels",
    },
    width: {
      default: 100,
      describe: "width of container in ex",
    },
    extensions: {
      default: "",
      describe: "extra MathJax extensions e.g. 'Safe,TeX/noUndefined'",
    },
  }).argv;

if (argv.font === "STIX") argv.font = "STIX-Web";

MathJAX_API.config({
  MathJax: { SVG: { font: argv.font } },
  extensions: argv.extensions,
});

MathJAX_API.start();

MathJAX_API.typeset(
  {
    math: argv._[0],
    format: argv.inline ? "inline-TeX" : "TeX",
    svg: true,
    speakText: argv.speech,
    ex: argv.ex,
    width: argv.width,
    linebreaks: argv.linebreaks,
  },
  function (data) {
    if (!data.errors) {
      console.log(data.svg);
    }
  }
);
