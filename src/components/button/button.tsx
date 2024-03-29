import type { ButtonHTMLAttributes, ReactElement } from 'react';
import { forwardRef } from 'react';

import { Spinner } from '@/components/spinner';
import { cn } from '@/utils/cn';

const variants = {
  primary: 'bg-blue-600 text-white',
  inverse: 'bg-white text-blue-600',
  danger: 'bg-red-600 text-white',
};

const sizes = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-2 px-6 text-md',
  lg: 'py-3 px-8 text-lg',
};

type IconProps =
  | { startIcon: ReactElement; endIcon?: never }
  | { endIcon: ReactElement; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined };

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
} & IconProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      endIcon,
      isLoading = false,
      size = 'md',
      startIcon,
      type = 'button',
      variant = 'primary',
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          'flex items-center justify-center rounded-md border border-gray-300 font-medium shadow-sm hover:opacity-80 focus:outline-none disabled:cursor-not-allowed disabled:opacity-70',
          variants[variant],
          sizes[size],
        )}
        {...props}
      >
        {isLoading && <Spinner size='sm' className='text-current' />}
        {!isLoading && startIcon}
        <span className='mx-2'>{props.children}</span> {!isLoading && endIcon}
      </button>
    );
  },
);

Button.displayName = 'Button';
