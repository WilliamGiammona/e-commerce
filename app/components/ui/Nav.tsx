import Link from 'next/link';
import { Button } from './button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet';
import { Menu } from 'lucide-react';
import { ModeToggle } from './mode-toggle';

const routes = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/products',
    label: 'Products',
  },
  {
    href: '/categories',
    label: 'Categories',
  },
  {
    href: '/cart',
    label: 'Cart',
  },
];

export default function Nav() {
  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
        <div className="flex items-center">
          <Link href="/" className="ml-4 lg:ml-0">
            <h1 className="text-xl font-bold">STORE</h1>
          </Link>
        </div>

        <nav className="mx-6 items-center space-x-4 lg:space-x-6 hidden md:flex">
          {routes.map(route => (
            <Button asChild variant="ghost" key={route.href}>
              <Link
                href={route.href}
                className="text-sm font-medium transition-colors"
              >
                {route.label}
              </Link>
            </Button>
          ))}
          <ModeToggle />
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>Browse our store</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-4">
                {routes.map(route => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className="block px-2 py-1 text-lg"
                  >
                    {route.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
