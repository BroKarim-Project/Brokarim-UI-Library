/** @type { import('@storybook/react').Preview } */

import '../styles/index.css'; //biar dia bisa ngebaca tailiwid tailiwnd

export const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};
