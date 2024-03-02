import React from 'react';
import { cn } from '../../utils';


const SectionContainer = ({ children, className }) => (
  <>
    <div className={cn('overflow-hidden container mx-auto mb-2 py-10', className)}>
      <div className="px-8 mx-auto">{children}</div>
    </div>
  </>
);

export default SectionContainer;
