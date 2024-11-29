import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";
import ModeToggle from "./ModeToggle";

const Navbar = () => {
  return (
    <nav className="container fixed top-0 left-[50%] z-50 w-[95%] translate-x-[-50%] max-w-6xl mt-3 rounded-lg bg-[#171717] dark:bg-white text-white dark:text-black">
      <div className="flex justify-between items-center py-3 text-xl">
        <ModeToggle />
        <div>
          <SignedIn>
            <UserButton showName></UserButton>
          </SignedIn>
          <SignedOut>
            <SignInButton>Login</SignInButton>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
