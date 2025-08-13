import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-6xl">
          Welcome to Topflight Supplement Store
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Please select your role to continue
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Customer</CardTitle>
            <CardDescription>
              Browse and purchase your favorite supplements.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">Enter Storefront</Button>
          </CardContent>
        </Card>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Administrator</CardTitle>
            <CardDescription>
              Manage orders and view store analytics.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" variant="outline">
              Enter Provider Portal
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
