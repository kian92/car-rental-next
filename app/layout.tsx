import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ClerkProvider, SignIn, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car rental best in town",
  description: "Car rental best in town",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body className={inter.className}>
        {/* <SignedIn>
          <NavBar /> */}
          {children}
        {/* </SignedIn>
        <SignedOut><SignIn /></SignedOut> */}
      </body>
    </html>
    </ClerkProvider>
  );
}
