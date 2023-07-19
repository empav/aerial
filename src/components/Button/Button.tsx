import React, { forwardRef } from 'react';
import type { AriaButtonProps } from 'react-aria';
import { useButton } from 'react-aria';
import { twMerge } from 'tailwind-merge';
import { useObjectRef } from '@react-aria/utils';
import clsx from 'clsx';

export interface ButtonProps extends AriaButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const buttonRef = useObjectRef(ref);
  const { buttonProps } = useButton(props, buttonRef);
  const { children, className, variant = 'primary', size = 'small' } = props;

  const defaultClassName = clsx(`flex 
    justify-center 
    rounded-md 
    ${size === 'small' ? 'px-5 py-2' : ''}
    ${size === 'medium' ? 'px-8 py-3' : ''}
    ${size === 'large' ? 'px-9 py-4' : ''}
    w-full 
    text-sm 
    font-semibold 
    transition
    ${
      variant === null || variant === 'primary'
        ? 'bg-sky-500 hover:bg-sky-600 text-white'
        : 'border-2 border-gray-600 dark:border-gray-600'
    }
    disabled:opacity-70 
    disabled:cursor-not-allowed  
    hover:scale-105
    focus-visible:outline-sky-600`);

  return (
    <button
      {...buttonProps}
      ref={buttonRef}
      className={
        className !== ''
          ? twMerge(defaultClassName, className)
          : defaultClassName
      }
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
