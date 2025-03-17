import { ThemeToggle } from '@/components/theme-toggle';
import { BmiForm } from '@/components/bmi-form';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Bmi() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <main className="flex items-center">
        <Card>
          <CardHeader>
            <CardTitle>BMI Calculator</CardTitle>
            <CardDescription>Calculate your BMI</CardDescription>
          </CardHeader>
          <CardContent>
            <BmiForm />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
