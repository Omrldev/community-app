import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ROUTE } from "@/constants/route";
import { AlignJustifyIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";
import { imagesLinks } from "@/constants";

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustifyIcon className="size-6 cursor-pointer" />
      </SheetTrigger>
      <SheetContent side="left" className="w-[480px] md:w-[540px]">
        <SheetHeader>
          <SheetTitle>
            <Link href={ROUTE.HOME} className="flex items-center gap-1.5">
              <Image
                src={imagesLinks.LOGO}
                alt="site logo"
                width={32}
                height={32}
              />
              <p className="text-2xl font-semibold">
                Site
                <span className="text-primary">Logo</span>
              </p>
            </Link>
          </SheetTitle>
          <SheetDescription hidden>
          </SheetDescription>
          <div className="mt-7">
            <SheetClose>
                <NavLinks />
            </SheetClose>
          </div>
        </SheetHeader>

        <SheetFooter>
          <SheetClose>
            <div className="w-full bg-primary min-h-12 rounded-xl flex justify-center items-center">
              <Link href={ROUTE.SIGN_IN} className="text-lg text-white">
                Log in
              </Link>
            </div>
          </SheetClose>

          <SheetClose>
            <div className="w-full bg-neutral-100 min-h-12 rounded-xl flex justify-center items-center">
              <Link href={ROUTE.SIGN_UP} className="text-lg text-primary">
                Sign up
              </Link>
            </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
