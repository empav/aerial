import { useOverlayTrigger } from 'react-aria';
import type { OverlayTriggerProps } from 'react-stately';
import { useOverlayTriggerState } from 'react-stately';

import Button from '../Button';
import React from 'react';
import Popover from './Popover';
import type { PositionProps } from '@react-types/overlays';

export interface PopoverTriggerProps extends OverlayTriggerProps {
  children: React.ReactElement;
  label: string;
  className?: string;
  popoverRef?: React.RefObject<HTMLDivElement>;
  position?: PositionProps;
}

export default function PopoverTrigger(props: PopoverTriggerProps) {
  const ref = React.useRef(null);
  const state = useOverlayTriggerState(props);
  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: 'dialog' },
    state,
    ref
  );

  return (
    <>
      <Button {...triggerProps} ref={ref}>
        {props.label}
      </Button>
      {state.isOpen && (
        <Popover
          {...props}
          triggerRef={ref}
          popoverRef={props.popoverRef}
          state={state}
          {...props.position}
        >
          {React.cloneElement(props.children, overlayProps)}
        </Popover>
      )}
    </>
  );
}
