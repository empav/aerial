import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ComboBox, { ComboBoxItem } from './ComboBox';
import { useFilter } from 'react-aria';

interface Item {
  id: number;
  name: string;
}

const items: Item[] = [
  { id: 1, name: 'Red Panda' },
  { id: 2, name: 'Cat' },
  { id: 3, name: 'Dog' },
  { id: 4, name: 'Crocodile' },
  { id: 5, name: 'Lion' },
];

const meta: Meta<typeof ComboBox<Item>> = {
  title: 'Components/ComboBox',
  component: ComboBox,
  args: {
    label: 'Which animal?',
  },
};

export default meta;

type Story = StoryObj<typeof ComboBox<Item>>;

export const Simple: Story = {
  render: function Component(args) {
    const [selectedKey, setSelectedKey] = React.useState<React.Key>('Cat');
    const onSelectionChange = (selected: React.Key) => {
      setSelectedKey(selected);
    };
    return (
      <ComboBox
        {...args}
        onSelectionChange={onSelectionChange}
        selectedKey={selectedKey}
        items={items}
      >
        {(item) => <ComboBoxItem key={item.id}>{item.name}</ComboBoxItem>}
      </ComboBox>
    );
  },
};

export const Search: Story = {
  render: function Component(args) {
    const { contains } = useFilter({ sensitivity: 'base' });
    const [filterValue, setFilterValue] = React.useState('');
    const filteredItems = React.useMemo(
      () => items.filter((item) => contains(item.name, filterValue)),
      [items, filterValue]
    );
    return (
      <ComboBox
        {...args}
        items={filteredItems}
        inputValue={filterValue}
        onInputChange={setFilterValue}
      >
        {(item) => <ComboBoxItem key={item.id}>{item.name}</ComboBoxItem>}
      </ComboBox>
    );
  },
};
