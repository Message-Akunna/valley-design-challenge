import Link from "next/link";

import { cn } from "@/src/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("hidden lg:flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Dashboard
      </Link>
      <Link
        href="/"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Messages
      </Link>
      <Link
        href="/"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Campaigns
      </Link>
      <Link
        href="/"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Studio
      </Link>
    </nav>
  );
}
