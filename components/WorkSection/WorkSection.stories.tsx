import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import WorkSection from './WorkSection';
import WORKS from 'constants/works';

export default {
  title: 'Components/WorkSection',
  component: WorkSection,
} as ComponentMeta<typeof WorkSection>;

const Template: ComponentStory<typeof WorkSection> = (args) => (
  <WorkSection {...args} />
);

export const ShowThumbnailLeft = Template.bind({});
ShowThumbnailLeft.args = {
  isOdd: true,
  ...WORKS[0],
};

export const ShowThumbnailRight = Template.bind({});
ShowThumbnailRight.args = {
  isOdd: false,
  ...WORKS[0],
};
