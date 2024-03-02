import { cva } from 'class-variance-authority';
import { cn } from '../../utils/index';
import { forwardRef } from 'react';
import Text from '../text';

const Divider = ({ color, children }) => {
  const dividerClass = `w-full h-0.5 border-t-0 bg-${color} opacity-100`;
  return (
    <div className="w-full flex gap-2 items-center">
      <hr className={dividerClass} />
      <Text size={'sm'} weight={'normal'} align={'center'} classNameName="mb-4 px-10">
        {children}
      </Text>
      <hr class={dividerClass} />
    </div>
  );
};

export default Divider;
