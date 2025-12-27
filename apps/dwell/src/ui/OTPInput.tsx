import { useEffect, useRef } from 'react';

type Props = {
  value: string;
  onChange: (val: string) => void;
  length?: number;
};

export const OTPInput = ({ value, onChange, length = 6 }: Props) => {
  const inputs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    inputs.current = inputs.current.slice(0, length);
  }, [length]);

  const handleChange = (idx: number, val: string) => {
    const digits = value.split('');
    digits[idx] = val.slice(-1);
    const newVal = digits.join('').slice(0, length);
    onChange(newVal);
    if (val && inputs.current[idx + 1]) inputs.current[idx + 1]?.focus();
  };

  return (
    <div className="flex gap-2">
      {Array.from({ length }).map((_, idx) => (
        <input
          key={idx}
          ref={(el) => {
            inputs.current[idx] = el;
          }}
          maxLength={1}
          value={value[idx] ?? ''}
          onChange={(e) => handleChange(idx, e.target.value.replace(/\D/g, ''))}
          className="w-12 h-12 text-center text-lg font-semibold rounded-input border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      ))}
    </div>
  );
};
