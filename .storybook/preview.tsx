import GlobalStyle from '../styles/GlobalStyle';
import Theme from '../styles/theme';
import { Story as StoryType } from '@storybook/react';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story: StoryType) => (
    <Theme>
      <GlobalStyle />
      <Story />
    </Theme>
  ),
];
