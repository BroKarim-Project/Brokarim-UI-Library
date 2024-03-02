import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

// Define a function to concatenate and merge classnames using clsx and tailwind-merge
export const cn = (...classes) => {
  const classNames = clsx(classes); // Concatenate classnames using clsx
  return twMerge(classNames); // Merge classnames using tailwind-merge
};

// export const cn = (...classes) => twMerge(classes.join(' '));

/*
- define function name 'cn'
- it acceprt multiple class value as arg (argument) using the spread operator `...classes`
- inside the function, we join the class value into a single string using join
- Then, we use twMerge to merge the Tailwind CSS classes together.
*/
