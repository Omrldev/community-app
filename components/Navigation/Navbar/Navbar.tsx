import { ROUTE } from "@/constants/route";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNavigation from "./MobileNavigation";
import { imagesLinks } from "@/constants";

const Navbar = () => {
  return (
    <header className="w-full min-h-16 fixed top-0 left-0 z-50 bg-white shadow-md">
      <nav className="w-full min-h-16 flex justify-between items-center px-3">
        <Link href={ROUTE.HOME} className="flex items-center gap-1.5">
          <Image
            src={imagesLinks.LOGO}
            alt="site logo"
            width={32}
            height={32}
          />
          <p className="text-2xl font-semibold max-md:hidden">
            Site
            <span className="text-primary">Logo</span>
          </p>
        </Link>

        <MobileNavigation />
      </nav>
    </header>
  );
};

export default Navbar;
