import { Input, InputProps } from './Input';

export const SearchInput = (props: InputProps) => {
  return <Input leadingIcon={<span className="text-neutral-400">🔍</span>} {...props} />;
};
