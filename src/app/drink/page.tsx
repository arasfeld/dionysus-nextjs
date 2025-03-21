import { DrinkForm } from '@/components/drink-form';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Drink() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex items-center">
        <Card>
          <CardHeader>
            <CardTitle>Drink Entry</CardTitle>
            <CardDescription>Enter your drink information</CardDescription>
          </CardHeader>
          <CardContent>
            <DrinkForm />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
