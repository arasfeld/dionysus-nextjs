'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  heightFeet: z.coerce.number().min(0).max(10),
  heightInches: z.coerce.number().min(0).max(12),
  weight: z.coerce.number().min(0).max(1500),
});

export function BmiForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      heightFeet: 0,
      heightInches: 0,
      weight: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const bmi =
      (values.weight / (values.heightFeet * 12 + values.heightInches) ** 2) *
      703;
    console.log(values, bmi);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex gap-8 items-start">
          <FormField
            control={form.control}
            name="heightFeet"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Height (ft)</FormLabel>
                <FormControl>
                  <Input max={8} min={0} type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="heightInches"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Height (in)</FormLabel>
                <FormControl>
                  <Input max={12} min={0} type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="weight"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Weight (lbs)</FormLabel>
              <FormControl>
                <Input max={1500} min={0} type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
