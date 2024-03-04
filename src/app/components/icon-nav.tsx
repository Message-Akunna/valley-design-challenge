import { cn } from "@/src/lib/utils";
//
import { Button } from "@/src/components/ui/button";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/src/components/ui/avatar";
//
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export function IconNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className={cn("items-center", className)} {...props}>
      <Button
        size="icon"
        variant="ghost"
        className="transition-colors hover:text-primary flex lg:hidden mr-2"
      >
        <HamburgerMenuIcon className="h-4 w-4" />
      </Button>
      <Avatar className="flex h-12 w-12 items-center justify-center">
        <AvatarImage src="/images/logo.svg" alt="Avatar" />
        <AvatarFallback>SH</AvatarFallback>
      </Avatar>
    </div>
  );
}
