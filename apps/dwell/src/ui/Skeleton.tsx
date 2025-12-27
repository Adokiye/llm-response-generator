import clsx from 'classnames';
import { ComponentProps } from 'react';

export const Skeleton = ({ className, ...props }: ComponentProps<'div'>) => (
  <div className={clsx('animate-pulse rounded-md bg-neutral-200', className)} {...props} />
);
