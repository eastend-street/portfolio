import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Works from './Works';

export default {
  title: 'Components/Works',
  component: Works,
} as ComponentMeta<typeof Works>;

const Template: ComponentStory<typeof Works> = (args) => (
  <Works {...args} />
);

export const Default = Template.bind({});

