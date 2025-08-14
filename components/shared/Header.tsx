import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon, MountainIcon } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-background/95 fixed top-0 z-50 w-full border-b flex justify-center shadow-sm backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">Topflight</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {/* Future navigation links will go here */}
          <Link href="#" className="hover:text-foreground" prefetch={false}>
            Products
          </Link>
          <Link href="#" className="hover:text-foreground" prefetch={false}>
            About
          </Link>
          <Link href="#" className="hover:text-foreground" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 p-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold"
                prefetch={false}
              >
                <MountainIcon className="h-6 w-6" />
                <SheetTitle>Topflight</SheetTitle>
              </Link>
              <nav className="grid gap-2">
                <Link
                  href="#"
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  prefetch={false}
                >
                  Products
                </Link>
                <Link
                  href="#"
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  prefetch={false}
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  prefetch={false}
                >
                  Contact
                </Link>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
