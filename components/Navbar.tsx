'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Navitems from "./Navitems";
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { isSignedIn } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar flex items-center justify-between px-4 py-3">
      {/* Logo */}
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image src="/images/logo.svg" alt="logo" width={46} height={44} />
        </div>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        <Navitems />
        {isSignedIn ? (
          <UserButton />
        ) : (
          <SignInButton>
            <button className="btn-signin">Sign In</button>
          </SignInButton>
        )}
      </div>

      {/* Mobile Controls */}
      <div className="flex items-center gap-3 md:hidden">
        {/* Auth Button */}
        {isSignedIn ? (
          <UserButton />
        ) : (
          <SignInButton>
            <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md">
              Sign In
            </button>
          </SignInButton>
        )}

        {/* Menu Toggle */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white  z-50 flex flex-col items-center gap-4 py-4 md:hidden">
          <Navitems />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
