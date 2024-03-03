import "./globals.css";
// next
import Link from "next/link";
import { Metadata } from "next";
import { Inter } from "next/font/google";
// app component
import { IconNav } from "./components/icon-nav";
import { MainNav } from "@/src/app/components/main-nav";
import { UserNav } from "@/src/app/components/user-nav";
import { Search } from "@/src/app/components/search-nav";
import { FooterNav } from "@/src/app/components/footer-nav";

//
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Examples",
  description: "Check out some examples app built using the components.",
};

interface ExamplesLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: ExamplesLayoutProps) {
  return (
    <html>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <header className="border-b">
            <div className="flex justify-between h-16 items-center px-4">
              <div className="mr-10 flex items-center space-x-4">
                <IconNav />
                <UserNav />
              </div>
              <MainNav className="mx-auto" />
              <div className="ml-10 flex items-center space-x-4">
                <Search />
              </div>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t">
            <div className="flex justify-between lg:justify-center flex-col lg:flex-row items-center min-h-16 space-y-4 px-4 py-4">
              <Link
                href="/"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Valley Sales Inc.
              </Link>
              <FooterNav className="mx-auto flex-wrap lg:ml-auto lg:mr-0" />
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
