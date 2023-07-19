import React from 'react';
import { render, screen, userEvent } from '../../test/utils';
import { describe, expect, it, vi } from 'vitest';
import TextField from './TextField';

describe('TextField', async () => {
  it('should render the input', () => {
    render(
      <TextField
        name='email'
        type='email'
        placeholder='Email'
        label='Email Address'
        aria-label='Email Address'
      />
    );
    expect(screen.getByText('Email Address')).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', {
        name: /email address/i,
      })
    ).toBeInTheDocument();
  });
  it('should change TextField value', async () => {
    const onChange = vi.fn();
    render(
      <TextField
        name='email'
        type='email'
        placeholder='Email'
        label='Email Address'
        aria-label='Email Address'
        onChange={onChange}
      />
    );

    const input = screen.getByRole('textbox', {
      name: /email address/i,
    });
    expect(input).toBeInTheDocument();

    await userEvent.type(input, 'asd@asd.com');

    expect(onChange).toHaveBeenCalledTimes(11);
    expect(input).toHaveValue('asd@asd.com');
  });
});
