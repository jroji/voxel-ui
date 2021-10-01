module.exports = {
  "stories": [
    "../projects/**/*.stories.mdx",
    "../projects/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y"
  ],
  "core": {
    "builder": "webpack5"
  }
}