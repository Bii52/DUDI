"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import HeaderNav from "./header-nav";
import HeaderActions from "./header-actions";
import HeaderMenu from "./header-menu";
import { Button } from "../../components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-nav from-60% to-transparent text-sub-text">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Name and logo */}
        <Link href={"/#home"}>
        <div className="flex items-center gap-2">
          
          <Image
            src="/logo.png"
            alt="DUDI Software Logo"
            width={40}
            height={40}
          />
          
          
          <span className="font-semibold text-lg text-primary">
            DUDI Software
          </span>
        </div>
        </Link>
        <HeaderNav className="hidden lg:flex" />
        <HeaderActions className="hidden lg:flex" />


        {/* Side bar menu */}
        <Button
          className="lg:hidden p-2 min-h-[44px] min-w-[44px] rounded-md bg-transparent hover:bg-glass flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-primary" />
          ) : (
            <Menu className="w-6 h-6 text-primary" />
          )}
        </Button>
      </div>
      <HeaderMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}
