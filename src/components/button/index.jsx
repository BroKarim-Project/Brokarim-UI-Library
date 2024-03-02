import { cva } from 'class-variance-authority';
import { cn } from '../../utils/index';
import { forwardRef } from 'react';

const buttonStyles = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-blue-500 text-base text-white hover:bg-blue-500/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);
const Button = forwardRef(({ className, variant, size, children, ...props }, ref) => {
  return (
    <>
      <button className={cn(buttonStyles({ variant, size, className }))} ref={ref} {...props}>
        {children}
      </button>
    </>
  );
});

const ButtonShadow = ({ children, disabled, background, textColor, className }) => {
  return (
    <a href="#_" className={cn(`relative inline-block  text-lg group`, className)}>
      <span
        className={cn(`relative z-10 w-full block px-5 py-3 overflow-hidden  font-medium leading-tight text-${textColor} transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg `)}
        style={{
          background: disabled ? 'white' : '#F7D521',
        }}
      >
        <span
          className={`absolute inset-0 w-full h-full px-5 py-3 rounded-lg `}
          style={{
            background: disabled ? 'white' : '#F7D521',
          }}
        ></span>
        {/* <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span> */}
        <span className="relative">{children}</span>
      </span>
      <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
    </a>
  );
};

const ButtonShadow2 = ({ children, disabled, className }) => {
  return (
    <button
      className={cn(`h-12 font-bold border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-md`, className)}
      style={{ background: disabled ? 'white' : '#F7D521' }}
    >
      {children}
    </button>
  );
};

export { Button, ButtonShadow, ButtonShadow2 };
