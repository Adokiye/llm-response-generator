import clsx from 'classnames';
import { ComponentProps, useState } from 'react';

export type InputProps = {
  label?: string;
  helper?: string;
  error?: string;
  trailingIcon?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  multiline?: boolean;
} & ComponentProps<'input'>;

export const Input = ({ label, helper, error, trailingIcon, leadingIcon, multiline, type, className, ...props }: InputProps) => {
  const [show, setShow] = useState(false);
  const isPassword = type === 'password';
  const inputClass = clsx(
    'w-full rounded-input border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 transition',
    error ? 'border-pink-500 ring-1 ring-pink-500' : 'border-neutral-200',
    className
  );

  const content = (
    <div className="relative">
      {leadingIcon && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">{leadingIcon}</span>}
      {multiline ? (
        <textarea className={clsx(inputClass, leadingIcon && 'pl-10')} rows={4} {...(props as any)} />
      ) : (
        <input
          className={clsx(inputClass, leadingIcon && 'pl-10', trailingIcon || isPassword ? 'pr-12' : '')}
          type={isPassword ? (show ? 'text' : 'password') : type}
          {...props}
        />
      )}
      {(trailingIcon || isPassword) && (
        <button
          type="button"
          onClick={() => (isPassword ? setShow((s) => !s) : undefined)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500"
        >
          {isPassword ? (show ? 'Hide' : 'Show') : trailingIcon}
        </button>
      )}
    </div>
  );

  return (
    <div className="space-y-2">
      {label && <label className="text-sm font-semibold text-neutral-800">{label}</label>}
      {content}
      {helper && !error && <p className="text-xs text-neutral-500">{helper}</p>}
      {error && <p className="text-xs text-pink-500">{error}</p>}
    </div>
  );
};

export const TextArea = (props: InputProps) => <Input {...props} multiline />;
