'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { BeerIcon, MartiniIcon, WineIcon } from 'lucide-react';
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
import { RadioGroup } from '@/components/ui/radio-group';
import { RadioTile } from '@/components/radio-tile';

const formSchema = z.object({
  strength: z.enum(['weak', 'normal', 'strong'], {
    required_error: 'You need to select a strength.',
  }),
  type: z.enum(['beer', 'mixed', 'other', 'wine'], {
    required_error: 'You need to select a drink type.',
  }),
});

export function DrinkForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      strength: 'normal',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="grid grid-cols-4 gap-4"
                >
                  <FormItem>
                    <FormControl>
                      <RadioTile value="beer">
                        <BeerIcon />
                        Beer
                      </RadioTile>
                    </FormControl>
                  </FormItem>
                  <FormItem>
                    <FormControl>
                      <RadioTile value="mixed">
                        <MartiniIcon />
                        Mixed
                      </RadioTile>
                    </FormControl>
                  </FormItem>
                  <FormItem>
                    <FormControl>
                      <RadioTile value="wine">
                        <WineIcon />
                        Wine
                      </RadioTile>
                    </FormControl>
                  </FormItem>

                  <FormItem>
                    <FormControl>
                      <RadioTile value="other">Other</RadioTile>
                    </FormControl>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="strength"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Strength</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="grid grid-cols-3 gap-4"
                >
                  <FormItem>
                    <FormControl>
                      <RadioTile value="weak">Weak</RadioTile>
                    </FormControl>
                  </FormItem>
                  <FormItem>
                    <FormControl>
                      <RadioTile value="normal">Normal</RadioTile>
                    </FormControl>
                  </FormItem>
                  <FormItem>
                    <FormControl>
                      <RadioTile value="strong">Strong</RadioTile>
                    </FormControl>
                  </FormItem>
                </RadioGroup>
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
