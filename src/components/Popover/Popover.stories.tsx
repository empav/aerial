import type { Meta, StoryObj } from '@storybook/react';
import PopoverTrigger from './PopoverTrigger';
import React from 'react';

const meta: Meta<typeof PopoverTrigger> = {
  title: 'Components/Popover',
  component: PopoverTrigger,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof PopoverTrigger>;

export const Trigger: Story = {
  render: (args) => (
    <PopoverTrigger label='Open Popover'>
      <span>ciao</span>
    </PopoverTrigger>
  ),
};
