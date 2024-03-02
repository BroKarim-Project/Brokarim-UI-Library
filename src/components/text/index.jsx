import { cva } from 'class-variance-authority';
import { cn } from '../../utils/index';
import { forwardRef } from 'react';

const textStyles = cva('w-full', {
  variants: {
    emphasis: {
      low: 'text-gray-600 font-light',
    },
    size: {
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
    },
    weight: {
      thin: 'font-thin',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      black: 'font-black',
    },
    padding: {
      normal: 'px-10',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    italic: {
      true: 'italic',
    },
    underline: {
      true: 'underline underline-offset-2',
    },
  },
  defaultVariants: {
    size: 'base',
    align: 'left',
  },
});

const Text = forwardRef(({ type, size, italic, weight, align, padding, className, children, ...props }) => {
  return (
    <section className={cn('mx-auto flex flex-col items-center gap-2 ', className)} {...props}>
      <h1
        className={cn(
          textStyles({
            size,
            weight,
            align,
            padding,
            italic,
            className,
          })
        )}
        {...props}
      >
        {' '}
        {children}{' '}
      </h1>
    </section>
  );
});

export default Text;


