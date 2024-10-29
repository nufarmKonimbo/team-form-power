import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/ui/card";
import Link from "next/link";
import { Form } from "react-hook-form";

export default function HomePage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to the Next.js Starter!</CardTitle>
        <CardDescription>
          This is a starter template for Next.js with Tailwind CSS and
          TypeScript.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Get started by editing <code>pages/index.tsx</code>.
        </p>
        <p>
          <a className="text-blue-500 hover:underline">View the about page</a>
        </p>
      </CardContent>
      <CardFooter>
        <a href=""></a>
      </CardFooter>
    </Card>
  );
}
