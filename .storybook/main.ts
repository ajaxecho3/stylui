import type { StorybookConfig } from "@storybook/react-webpack5";
import StylexPlugin from "@stylexjs/webpack-plugin";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];

    config.plugins = config.plugins || [];
    config.plugins.push(
      new StylexPlugin({
        // get webpack mode and set value for dev
        dev: config.mode === "development",
        // Required for CSS variable support
        appendTo: "head",
        unstable_moduleResolution: {
          // The module system to be used.
          // Use this value when using `ESModules`.
          type: "commonJS",
          // The absolute path to the root directory of your project.
          rootDir: __dirname,
        },
      })
    );
    return config;
  },
};
export default config;
