module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("images"); // Ensure images are copied

  return {
      dir: {
          input: ".",
          includes: "_includes",
          data: "_data",
          output: "_site"
      }
  };
};
