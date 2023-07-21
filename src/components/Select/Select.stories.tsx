import type { Meta, StoryObj } from '@storybook/react';
import Select, { SelectItem } from './Select';
import React from 'react';

interface Item {
  id: number;
  name: string;
}

const options: Item[] = [
  { id: 1, name: 'Aerospace' },
  { id: 2, name: 'Mechanical' },
  { id: 3, name: 'Civil' },
  { id: 4, name: 'Biomedical' },
  { id: 5, name: 'Nuclear' },
];

const meta: Meta<typeof Select<Item>> = {
  title: 'Components/Select',
  component: Select,
  decorators: [
    function Component(Story, { args }) {
      const [selectedKey, setSelectedKey] =
        React.useState<React.Key>('Nuclear');
      const onSelectionChange = (selected: React.Key) => {
        setSelectedKey(selected);
      };

      return (
        <Story
          args={{
            ...args,
            onSelectionChange,
            selectedKey,
          }}
        />
      );
    },
  ],
  args: {
    items: [...options],
  },
};

export default meta;

type Story = StoryObj<typeof Select<Item>>;

export const Simple: Story = {
  render: function Component(args) {
    return (
      <Select {...args}>
        {(item) => <SelectItem key={item.id}>{item.name}</SelectItem>}
      </Select>
    );
  },
};
