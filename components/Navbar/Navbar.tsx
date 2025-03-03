import { ROUTE } from "@/constants/route";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="w-full min-h-16 fixed top-0 left-0 bg-white shadow-md">
      <nav className="w-full min-h-16 flex justify-between items-center px-3">
        <Link href={ROUTE.HOME} className="flex items-center gap-1.5">
          <Image
            src={"/assets/images/site-logo.svg"}
            alt="site logo"
            width={28}
            height={28}
          />
          <p className="text-2xl font-semibold">
            Site
            <span className="text-primary">Logo</span>
          </p>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
