import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ComboBox, { ComboBoxItem } from './ComboBox';

interface Item {
  id: number;
  name: string;
}

const options: Item[] = [
  { id: 1, name: 'Red Panda' },
  { id: 2, name: 'Cat' },
  { id: 3, name: 'Dog' },
  { id: 4, name: 'Crocodile' },
  { id: 5, name: 'Lion' },
];

const meta: Meta<typeof ComboBox<Item>> = {
  title: 'Components/ComboBox',
  component: ComboBox,
  decorators: [
    function Component(Story, { args }) {
      const [selectedKey, setSelectedKey] = React.useState<React.Key>('Cat');
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
    label: 'Which animal?',
  },
};

export default meta;

type Story = StoryObj<typeof ComboBox<Item>>;

export const Simple: Story = {
  render: function Component(args) {
    return (
      <ComboBox {...args}>
        {(item) => <ComboBoxItem key={item.id}>{item.name}</ComboBoxItem>}
      </ComboBox>
    );
  },
};
