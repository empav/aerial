import React from 'react';
import { render, screen, userEvent } from '../../test/utils';
import { describe, expect, it, vi } from 'vitest';
import ComboBox, { ComboBoxItem } from './ComboBox';

interface Option {
  id: number;
  name: string;
}

const options: Option[] = [
  { id: 1, name: 'Red Panda' },
  { id: 2, name: 'Cat' },
  { id: 3, name: 'Dog' },
  { id: 4, name: 'Crocodile' },
  { id: 5, name: 'Lion' },
];

describe('ComboBox', async () => {
  it('should render the ComboBox component', () => {
    render(
      <ComboBox label='Which animal?' items={options}>
        {(item: Option) => (
          <ComboBoxItem key={item.id}>{item.name}</ComboBoxItem>
        )}
      </ComboBox>
    );
    expect(screen.getByText('Which animal?')).toBeInTheDocument();
  });

  it('should open the options when the icon is clicked', async () => {
    render(
      <ComboBox label='Which animal?' items={options}>
        {(item: Option) => (
          <ComboBoxItem key={item.id}>{item.name}</ComboBoxItem>
        )}
      </ComboBox>
    );

    await userEvent.click(screen.getByTestId('comboBox-btn'));

    expect(screen.getAllByText('Cat').length).toEqual(1);
  });
});
