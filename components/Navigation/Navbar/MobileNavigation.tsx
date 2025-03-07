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
      <SheetContent side="left">
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
          <SheetDescription hidden></SheetDescription>
        </SheetHeader>

        {/* navlink container */}
        <div className="px-4">
          <SheetClose asChild>
            <div className="flex flex-col gap-3">
              <NavLinks isMobile/>
            </div>
          </SheetClose>
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Link
              href={ROUTE.SIGN_IN}
              className="bg-primary rounded-xl min-h-12 flex justify-center items-center"
            >
              <span className="text-white text-lg font-semibold">Log in</span>
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link
              href={ROUTE.SIGN_IN}
              className="bg-neutral-100 rounded-xl min-h-12 flex justify-center items-center"
            >
              <span className="text-primary text-lg font-semibold">
                Sign up
              </span>
            </Link>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
