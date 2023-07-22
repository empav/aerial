import React from 'react';
import type { Meta, StoryObj as Story } from '@storybook/react';
import { twMerge } from 'tailwind-merge';

const meta: Meta = {
  title: 'Typography',
};
export default meta;

const className = `
    relative
    p-4 
    border-2 
    border-gray-300 
    before:content-[attr(style)] 
    before:top-0
    before:left-2 
    before:absolute
    after:content-[attr(data-resize)] 
    after:bottom-0
    after:right-2
    after:absolute 
    before:text-red-500
    after:text-red-500
    resize-x 
    overflow-auto
`;

export const ContainerFluid: Story = {
  render: () => (
    <>
      <div
        style={{ width: '900px' }}
        data-resize='Resize me!'
        className={className}
      >
        <h1>h1 I am not a fluid typography</h1>
        <h2>h2 I am not fluid typography</h2>
        <h3>h3 I am not fluid typography</h3>
        <h4>h4 I am not fluid typography</h4>
      </div>
      <div
        style={{ width: '900px' }}
        data-resize='Resize me!'
        className={twMerge(className, 'fluid-container mt-8')}
      >
        <h1>h1 Container-based fluid typography.</h1>
        <h2>h2 Container-based fluid typography.</h2>
        <h3>h3 Container-based fluid typography.</h3>
        <h4>h4 Container-based fluid typography.</h4>
      </div>
    </>
  ),
};
