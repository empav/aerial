import type { Meta, StoryObj } from '@storybook/react';
import Select, { SelectItem } from './Select';
import React from 'react';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Select>;

export const AtTheBottom: Story = {
  render: (args) => (
    <Select {...args} label='Which company?'>
      <SelectItem key='google'>Google</SelectItem>
      <SelectItem key='apple'>Apple</SelectItem>
      <SelectItem key='facebook'>Facebook</SelectItem>
      <SelectItem key='microsoft'>Microsoft</SelectItem>
      <SelectItem key='oracle'>Oracle</SelectItem>
      <SelectItem key='tesla'>Tesla</SelectItem>
    </Select>
  ),
};
