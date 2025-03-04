import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import { ROUTE } from "../../constants/route";
import { imagesLinks } from "@/constants";

const AuthLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main className="w-full min-h-screen flex justify-center items-center">
      <div className="min-w-[520px] shadow-md p-7 rounded-xl">
        <Link href={ROUTE.HOME} className="flex items-center gap-1.5">
          <Image
            src={imagesLinks.LOGO}
            alt="site logo"
            width={28}
            height={28}
          />
          <p className="text-2xl font-semibold">
            Site
            <span className="text-primary">Logo</span>
          </p>
        </Link>

        {children}
      </div>
    </main>
  );
};

export default AuthLayout;
