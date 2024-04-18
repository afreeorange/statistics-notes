import fs from "node:fs";

import inquirer from "inquirer";
import slugify from "@sindresorhus/slugify";
import nunjucks from "nunjucks";
import { mkdirp } from "mkdirp";
import { format, formatISO9075 } from "date-fns";

const makeBasicQuestion = (message, name, yellWith, transformer = null) => ({
  type: "input",
  name,
  message,
  validate: (value) => (value ? true : yellWith),
  transformer: transformer,
});

const questions = [
  makeBasicQuestion("Title:", "title", "Enter a post title!"),
  makeBasicQuestion("Tags (comma-separated):", "tags", "Enter some tags, yo!"),
];

// Let Eleventy figure out how to escape this stuff
nunjucks.configure({ autoescape: false });

/**
 * Date stuff. Not doing anything crazy like
 *
 *    2018-04-28-some-post.md
 *
 * That's from old Jekyll land. Just slugifying the post title and organizing
 * posts by {type}/{year}. It will 'scale'.
 */
const date = new Date();
const timestamp = formatISO9075(date);
const year = format(date, "yyyy");

const askQuestions = async () => {
  // Ask the basic questions
  const answers = await inquirer.prompt(questions);
  const postTags = answers.tags
    .split(",")
    .map((_) => _.trim())
    .filter((_) => _ !== "");

  // Prepare paths
  let postFolder = `./blog/${year}`;
  let postFile = `${slugify(answers.title)}.md`;
  let postTemplatePath = "./.scripts/note.template";

  // Read the appropriate template
  const template = fs.readFileSync(postTemplatePath, {
    encoding: "utf8",
    flag: "r",
  });

  // Set up the data to write to the template.
  let frontmatter = {
    timestamp,
    title: answers.title,
    tags: postTags,
  };

  // Write out the data
  const dataToWrite = nunjucks.renderString(template, frontmatter);

  // Make a post folder if it doesn't exist
  mkdirp.sync(postFolder);

  // Check if the file exists. This is terrible and lazy code and I don't care.
  if (fs.existsSync(`${postFolder}/${postFile}`)) {
    console.log(`! File called ${postFile} already exists.`);

    let _newPostfile;
    for (let i = 1; i < 25; i++) {
      _newPostfile = `${slugify(answers.title)}-${i}.md`;

      if (fs.existsSync(`${postFolder}/${_newPostfile}`)) {
        console.log(
          `! Well, file called ${_newPostfile} also already exists...`
        );
      } else {
        console.log(`Calling the post "${_newPostfile}"`);
        break;
      }
    }

    postFile = _newPostfile;
  }

  // Write it out!
  fs.writeFileSync(`${postFolder}/${postFile}`, dataToWrite);

  return `blog/${year}/${postFile}`;
};

askQuestions().then((f) => console.log("✔ Created", f));
