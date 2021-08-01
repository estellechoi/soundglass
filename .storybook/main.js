const path = require("path");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-docs",
    "@storybook/addon-postcss"
  ],
  webpackFinal: async (config, { configType }) => {
    console.log("webpackFinal", config);

    config.resolve.alias = {
      ...config.resolve.alias,
      "@": "src"
    }

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        { loader: "vue-style-loader" },
        {
          loader: "css-loader",
          options: {
            modules: true,
          },
        },
        { loader: "sass-loader" },
        {
          loader: "postcss-loader",
          options: {
            sourceMap: true,
            config: {
              path: "./.storybook/"
            }
          }
        }
      ],
      include: path.resolve(__dirname, "../"),
    });

    return config;
  },
};