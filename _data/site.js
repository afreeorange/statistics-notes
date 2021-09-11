// No trailing slashes! The Github repo needs to be an HTTPS link.
const REMOTE_URI = "https://public.nikhil.io/stats";
const REMOTE_REPO = "https://github.com/afreeorange/statistics-notes";

module.exports = {
  name: "Statistics Notes",
  description:
    "My statistics notes and bookmarks for my classes at Georgia Tech",
  locale: "en-US",
  url: process.env.CI ? REMOTE_URI : "",
  githubRepository: REMOTE_REPO,
};
