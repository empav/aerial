import React, { useMemo } from 'react';

type ButtonType = 'primary' | 'secondary';
type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  type?: ButtonType;
  /**
   * How large should the button be?
   */
  size?: ButtonSize;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const BASE_BUTTON_CLASSES =
  'cursor-pointer rounded-full border-2 font-bold leading-none inline-block';

const getSizeClasses = (size: ButtonSize) => {
  switch (size) {
    case 'small': {
      return 'px-4 py-2.5';
    }
    case 'large': {
      return 'px-6 py-3';
    }
    default: {
      return 'px-5 py-2.5';
    }
  }
};

const getModeClasses = (type: ButtonType) =>
  type === 'primary'
    ? 'text-white bg-pink-600 border-pink-600 dark:bg-pink-700 dark:border-pink-700'
    : 'text-slate-700 bg-transparent border-slate-700 dark:text-white dark:border-white';

/**
 * Primary UI component for user interaction
 */
const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  size = 'medium',
  label,
  onClick,
}) => {
  const computedClasses = useMemo(() => {
    const modeClass = getModeClasses(type);
    const sizeClass = getSizeClasses(size);

    return [modeClass, sizeClass].join(' ');
  }, [type, size]);

  return (
    <button
      type='button'
      className={`${BASE_BUTTON_CLASSES} ${computedClasses}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
