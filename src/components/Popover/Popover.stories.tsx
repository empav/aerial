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

export const AtTheBottom: Story = {
  render: (args) => (
    <PopoverTrigger
      {...args}
      label='Open Popover'
      position={{ placement: 'bottom' }}
    >
      <div className='px-6 py-2'>Hi there!</div>
    </PopoverTrigger>
  ),
};
export const AtTheTop: Story = {
  render: (args) => (
    <PopoverTrigger
      {...args}
      label='Open Popover'
      position={{ placement: 'top', offset: 10 }}
    >
      <div className='px-6 py-2'>Hi there!</div>
    </PopoverTrigger>
  ),
};
