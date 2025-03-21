'use client';

import * as React from 'react';

import { Label } from '@/components/ui/label';
import { RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';

export function RadioTile({
  children,
  className,
  value,
}: React.ComponentProps<typeof RadioGroupItem>) {
  return (
    <div>
      <RadioGroupItem className="peer sr-only" id={value} value={value} />
      <Label
        className={cn(
          'flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary',
          className
        )}
        htmlFor={value}
      >
        {children}
      </Label>
    </div>
  );
}
