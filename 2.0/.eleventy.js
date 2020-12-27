module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style")
  eleventyConfig.addWatchTarget("style")
  eleventyConfig.addPassthroughCopy("js")
  eleventyConfig.addWatchTarget("js")
}
