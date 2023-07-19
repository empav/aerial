import type { Meta, StoryObj } from '@storybook/react';
import TextField from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    onChange: () => {
      console.log('changed');
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Email: Story = {
  args: {
    label: 'Email',
    type: 'email',
    isRequired: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Email',
    type: 'email',
    isDisabled: true,
  },
};
