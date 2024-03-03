import { cn } from "@/src/lib/utils";
//
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
//
import {
  BackpackIcon,
  BellIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";

export function Search({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className={cn("flex items-center space-x-2", className)} {...props}>
      <Button
        size="icon"
        variant="ghost"
        className="transition-colors hover:text-primary hidden lg:flex"
      >
        <BackpackIcon className="h-4 w-4" />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        className="transition-colors hover:text-primary hidden lg:flex"
      >
        <BellIcon className="h-4 w-4" />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        className="transition-colors hover:text-primary flex lg:hidden"
      >
        <MagnifyingGlassIcon className="h-4 w-4" />
      </Button>
      <Input
        type="search"
        placeholder="Search..."
        className="md:w-[100px] lg:w-[180px] hidden lg:flex"
      />
    </div>
  );
}
