import React from 'react';
import { render, screen, userEvent } from '../../test/utils';
import { describe, expect, it, vi } from 'vitest';
import PopoverTrigger from './PopoverTrigger';

describe('PopoverTrigger', async () => {
  it('should render the trigger button', () => {
    render(
      <PopoverTrigger label='Open Popover'>
        <div data-testId='popover' className='px-6 py-2'>
          Hi there!
        </div>
      </PopoverTrigger>
    );
    expect(screen.getByText('Open Popover')).toBeInTheDocument();
  });

  it('should open the popover when the trigger is clicked', async () => {
    render(
      <PopoverTrigger label='Open Popover'>
        <div className='px-6 py-2'>Hi there!</div>
      </PopoverTrigger>
    );

    await userEvent.click(screen.getByText('Open Popover'));

    expect(screen.getByText('Hi there!')).toBeInTheDocument();
  });
});
