import clsx from 'classnames';
import { PropsWithChildren } from 'react';

type BadgeProps = PropsWithChildren<{ variant?: 'verified' | 'promoted' | 'platinum' | 'neutral' }>;

export const Badge = ({ variant = 'neutral', children }: BadgeProps) => {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold',
        variant === 'verified' && 'bg-pink-50 text-pink-600 border border-pink-200',
        variant === 'promoted' && 'bg-amber-50 text-amber-600 border border-amber-200',
        variant === 'platinum' && 'bg-neutral-900 text-white',
        variant === 'neutral' && 'bg-neutral-100 text-neutral-700'
      )}
    >
      {children}
    </span>
  );
};
