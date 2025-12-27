import clsx from 'classnames';
import { ComponentProps } from 'react';

export type ChipProps = ComponentProps<'button'> & {
  active?: boolean;
};

export const Chip = ({ active, className, children, ...props }: ChipProps) => (
  <button
    className={clsx(
      'px-4 py-2 rounded-full border text-sm transition-colors',
      active ? 'bg-pink-50 text-pink-600 border-pink-200' : 'bg-white border-neutral-200 text-neutral-700',
      className
    )}
    {...props}
  >
    {children}
  </button>
);
