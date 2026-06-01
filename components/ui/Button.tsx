import React from 'react';
import { cn } from '../../lib/utils';
import { Button as OnceButton } from '@once-ui-system/core';

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<'button'> & { variant?: 'primary' | 'secondary' }
>(({ className, variant = 'primary', ...props }, ref) => {
  const base = 'rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  };
  return (
    <OnceButton
      ref={ref}
      className={cn(base, variants[variant], className)}
      {...props}
    />
  );
});
Button.displayName = 'Button';