import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ExternalLinkButton from './ExternalLinkButton';

export default {
  title: 'Shared/Buttons/ExternalLinkButton',
  component: ExternalLinkButton,
} as ComponentMeta<typeof ExternalLinkButton>;

const Template: ComponentStory<typeof ExternalLinkButton> = ({
  children,
  ...restProps
}) => <ExternalLinkButton {...restProps}>{children}</ExternalLinkButton>;

export const Default = Template.bind({});
Default.args = {
  href: "https://junyamada.info/",
  children: 'ExternalLinkButton',
};
