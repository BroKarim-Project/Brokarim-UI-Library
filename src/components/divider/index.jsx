import { cva } from 'class-variance-authority';
import { cn } from '../../utils/index';
import { forwardRef } from 'react';
import Text from '../text';

const dividerStyle = cva('w-full', {
  variants: {
    variant: {
      default: ' h-0.5 border-t-0 bg-black',
      secondary: 'w-full h-0.5 border-t-0 bg-pink-400 opacity-100',
      horizontal: 'grid flex-grow h-32 card bg-base-300 rounded-box place-items-center',
    },
  },
});

const Divider = forwardRef(({ variant, children, className }, ref) => {
  return (
    <>
      <hr className={cn(dividerStyle({ variant, className }))} ref={ref} />
      <Text size={'sm'} weight={'normal'} align={'center'} className={cn(className)}>
        {children}
      </Text>
      <hr className={cn(dividerStyle({ variant, className }))} ref={ref} />
    </>
  );
});

export default Divider;
