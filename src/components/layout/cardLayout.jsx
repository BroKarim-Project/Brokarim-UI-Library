import React from 'react';
import { cn } from '../../utils';

const CardLayout = ({ children, className }) => (
  <>
    <div className={cn('grid grid-cols-3 gap-6  justify-items-center ', className)}>{children}</div>
  </>
);

export default CardLayout;
