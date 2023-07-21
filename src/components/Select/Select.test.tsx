import React from 'react';
import { render, screen, userEvent } from '../../test/utils';
import { describe, expect, it, vi } from 'vitest';
import Select, { SelectItem } from './Select';

describe('Select', async () => {
  it('should render the Select component', () => {
    render(
      <Select label='Which company?'>
        <SelectItem key='google'>Google</SelectItem>
        <SelectItem key='apple'>Apple</SelectItem>
        <SelectItem key='facebook'>Facebook</SelectItem>
        <SelectItem key='microsoft'>Microsoft</SelectItem>
        <SelectItem key='oracle'>Oracle</SelectItem>
        <SelectItem key='tesla'>Tesla</SelectItem>
      </Select>
    );
    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });

  it('should open the popover with the options when the icon button is clicked', async () => {
    render(
      <Select label='Which company?'>
        <SelectItem key='google'>Google</SelectItem>
        <SelectItem key='apple'>Apple</SelectItem>
        <SelectItem key='facebook'>Facebook</SelectItem>
        <SelectItem key='microsoft'>Microsoft</SelectItem>
        <SelectItem key='oracle'>Oracle</SelectItem>
        <SelectItem key='tesla'>Tesla</SelectItem>
      </Select>
    );
    await userEvent.click(screen.getByTestId('select-btn'));

    expect(screen.getAllByText('Google').length).toEqual(2);
    expect(screen.getAllByText('Apple').length).toEqual(2);
    expect(screen.getAllByText('Facebook').length).toEqual(2);
    expect(screen.getAllByText('Microsoft').length).toEqual(2);
    expect(screen.getAllByText('Oracle').length).toEqual(2);
    expect(screen.getAllByText('Tesla').length).toEqual(2);
  });
});
