import type { ChangeEventHandler, Ref } from 'react';

import { cn } from '@/utils/cn';

export type InputProps = {
  placeholder?: string;
  error?: string;
  name: string;
};

export const Input = ({
  error,
  inputRef,
  name,
  onChange,
  placeholder,
  value,
}: InputProps & {
  inputRef?: Ref<HTMLInputElement>;
  isSubmitting?: boolean;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <>
      <input
        onChange={onChange}
        name={name}
        value={value}
        ref={inputRef}
        placeholder={placeholder}
        className={cn(
          'w-full rounded-md border p-2 valid:ring-green-500 focus:ring-indigo-500 border-secondary-gray',
          error &&
            'border border-red-500 text-red-900 focus:ring-red-500 focus:border-red-500 dark:border-red-500',
        )}
      />
      {!!error && <p className='mt-1 text-xs text-red-500 empty:hidden'>{error}</p>}
    </>
  );
};
