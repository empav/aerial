import React from 'react';
import { render, screen, userEvent } from '../../test/utils';
import { describe, expect, it, vi } from 'vitest';
import Button from './Button';

describe('Button', async () => {
  it('should render the button', () => {
    render(
      <Button type='button' aria-label='Email Address'>
        Click me
      </Button>
    );
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('should call the onPress when clicked', async () => {
    const onPress = vi.fn();
    render(
      <Button type='button' aria-label='Email Address' onPress={onPress}>
        Click me
      </Button>
    );

    await userEvent.click(screen.getByText('Click me'));

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
