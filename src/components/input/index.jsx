import { cva } from 'class-variance-authority';
import { cn } from '../../utils/index';
import { forwardRef } from 'react';

const inputStyles = cva('w-full', {
  variants: {
    border: {
      normal: 'border border-black',
      brutalism: 'border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] ',
    },
    rounded: {
      normal: 'rounder-md',
      hard: 'rounded-lg',
      full: 'rounded-full',
    },
    background: {
      black: 'bg-[#000]',
      white: 'bg-white',
    },
  },
});

const Input = forwardRef(({ border, background, className, rounded, ...props }) => {
  return (
    <>
      <input type="text" className={cn(inputStyles({ border, background, className, rounded }), 'flex  h-10   px-3 py-6 text-sm ')} {...props}></input>
    </>
  );
});

export default Input;
