import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Shared/Buttons/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({
  children,
  ...restProps
}) => <Button {...restProps}>{children}</Button>;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};
