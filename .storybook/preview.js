export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    source: {
      state: "close",
    },
  },
  viewMode: "docs",
  grid: { cellSize: 8 },
};

import "../src/scss/theme.scss";
