import clsx from 'classnames';
import { ComponentProps, ReactNode } from 'react';

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: ReactNode;
  asChild?: boolean;
} & ComponentProps<'button'>;

export const buttonBase = 'inline-flex items-center justify-center font-semibold transition-all rounded-button focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500 disabled:opacity-60 disabled:cursor-not-allowed';

export const Button = ({
  variant = 'primary',
  size = 'md',
  loading,
  icon,
  className,
  children,
  asChild,
  ...props
}: ButtonProps) => {
  const Comp: any = asChild ? 'span' : 'button';
  return (
    <Comp
      className={clsx(
        buttonBase,
        variant === 'primary' && 'bg-pink-500 text-white hover:bg-pink-400',
        variant === 'secondary' && 'border border-pink-500 text-pink-500 bg-white hover:bg-pink-50',
        variant === 'ghost' && 'text-neutral-700 hover:bg-neutral-100',
        size === 'lg' && 'px-5 py-3 text-base',
        size === 'md' && 'px-4 py-2.5 text-sm',
        size === 'sm' && 'px-3 py-2 text-xs',
        className
      )}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading && <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />}
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </Comp>
  );
};
