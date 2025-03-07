"use client";

import { SheetClose } from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = ({isMobile = false}: {isMobile?: boolean}) => {
  const pathname = usePathname();

  return (
    <>
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        const linkComponent = (
          <Link
            href={item.route}
            key={item.label}
            className={cn(
              isActive
                ? "bg-primary hover:bg-orange-400 rounded-xl"
                : "bg-neutral-100 hover:bg-neutral-200 rounded-xl",
              "flex justify-start items-center gap-4 p-4 w-full"
            )}
          >
            <Image src={item.imgURL} alt={item.label} width={26} height={26} className={cn(
              isActive
              ? "invert"
              : "invert-0"
            )}/>
            <p className={cn(isActive ? "text-white text-lg font-semibold" : "")}>{item.label}</p>
          </Link>
        );

        return isMobile ? (
          <SheetClose asChild key={item.route}>
            {linkComponent}
          </SheetClose>
        ) : (
          <React.Fragment key={item.route}>{linkComponent}</React.Fragment>
        )
      })}
    </>
  );
};

export default NavLinks;
