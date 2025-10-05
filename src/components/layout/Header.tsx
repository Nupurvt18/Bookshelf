"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Book, LogOut, User as UserIcon, Menu, PlusCircle } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const { user, logout, isAuthenticated } = useAuth();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="flex items-center gap-2">
            <Book className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">BookShelf</span>
          </Link>
        </div>
        
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="py-6">
                <Link href="/" className="flex items-center gap-2 mb-6" onClick={() => setIsSheetOpen(false)}>
                  <Book className="h-6 w-6 text-primary" />
                  <span className="font-bold text-lg font-headline">BookShelf</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {isAuthenticated && (
                    <Link
                      href="/add-book"
                      className="text-muted-foreground transition-colors hover:text-foreground flex items-center gap-2"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      <PlusCircle className="h-4 w-4" />
                      Add Book
                    </Link>
                  )}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Mobile Title */}
        <div className="flex md:hidden justify-center flex-1">
             <Link href="/" className="flex items-center gap-2">
                <Book className="h-6 w-6 text-primary" />
                <span className="font-bold font-headline">BookShelf</span>
            </Link>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4 text-sm lg:gap-6 flex-1">
          {isAuthenticated && (
             <Link
                href="/add-book"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Add Book
              </Link>
          )}
        </nav>

        <div className="flex items-center justify-end space-x-2 md:space-x-4">
          <ThemeToggle />
          {isAuthenticated && user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.profilePhoto || `https://api.dicebear.com/8.x/initials/svg?seed=${user.name}`} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile">
                    <UserIcon className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild size="sm">
              <Link href="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
