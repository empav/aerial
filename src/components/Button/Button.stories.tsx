import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onPress: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Click me 😄',
    size: 'large',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Click me',
    size: 'medium',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'secondary',
    children: "Can't click 😅",
    size: 'small',
    isDisabled: true,
  },
};
