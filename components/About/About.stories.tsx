import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import About from './About';

export default {
  title: 'Components/About',
  component: About,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof About>;

const Template: ComponentStory<typeof About> = (args) => <About {...args} />;

export const Default = Template.bind({});
