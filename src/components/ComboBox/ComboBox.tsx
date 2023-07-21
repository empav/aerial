import * as React from 'react';
import type { ComboBoxProps } from '@react-types/combobox';
import { useComboBoxState } from 'react-stately';
import { useComboBox, useFilter, useButton } from 'react-aria';
import { BsChevronDown } from 'react-icons/bs';

import ListBox from '../ListBox';
import { Popover } from '../Popover';

export {
  Item as ComboBoxItem,
  Section as ComboBoxSection,
} from 'react-stately';

export default function ComboBox<T extends object>(props: ComboBoxProps<T>) {
  const { contains } = useFilter({ sensitivity: 'base' });
  const state = useComboBoxState({ ...props, defaultFilter: contains });

  const buttonRef = React.useRef(null);
  const inputRef = React.useRef(null);
  const listBoxRef = React.useRef(null);
  const popoverRef = React.useRef(null);

  const {
    buttonProps: triggerProps,
    inputProps,
    listBoxProps,
    labelProps,
  } = useComboBox(
    {
      ...props,
      inputRef,
      buttonRef,
      listBoxRef,
      popoverRef,
    },
    state
  );

  const { buttonProps } = useButton(triggerProps, buttonRef);

  return (
    <div className='inline-flex flex-col relative w-52'>
      <label
        {...labelProps}
        className='block text-sm font-medium text-gray-700 text-left'
      >
        {props.label}
      </label>
      <div
        className={`relative flex rounded-md overflow-hidden shadow-sm border-2 ${
          state.isFocused ? 'border-sky-500' : 'border-gray-300'
        }`}
      >
        <input
          {...inputProps}
          ref={inputRef}
          className='outline-none px-3 py-1 w-full'
        />
        <button
          {...buttonProps}
          ref={buttonRef}
          data-testid='comboBox-btn'
          className={`px-1 bg-gray-100 cursor-default border-l-2 ${
            state.isFocused
              ? 'border-sky-500 text-sky-600'
              : 'border-gray-300 text-gray-500'
          }`}
        >
          <BsChevronDown className='w-5 h-5' aria-hidden='true' />
        </button>
      </div>
      {state.isOpen && (
        <Popover
          popoverRef={popoverRef}
          triggerRef={inputRef}
          state={state}
          isNonModal
          placement='bottom start'
          className='w-52'
        >
          <ListBox {...listBoxProps} listBoxRef={listBoxRef} state={state} />
        </Popover>
      )}
    </div>
  );
}
