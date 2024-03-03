import Link from "next/link";

import { cn } from "@/src/lib/utils";

export function FooterNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex justify-center items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Contact Support
      </Link>
      <Link
        href="/"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        About Us
      </Link>
      <Link
        href="/"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Terms
      </Link>
      <Link
        href="/"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Privacy
      </Link>
      <Link
        href="/"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Linkedin
      </Link>
      <Link
        href="/"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        X
      </Link>
    </nav>
  );
}
