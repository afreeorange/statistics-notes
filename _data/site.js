const REMOTE_URI = "https://public.nikhil.io/stats";

module.exports = {
  name: "Statistics Notes",
  description:
    "My statistics notes and bookmarks for my classes at Georgia Tech",
  locale: "en-US",
  url: process.env.CI ? REMOTE_URI : "",
};
