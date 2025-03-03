import { Button } from "@/components/ui/button";
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
  
  const MobileNavigation = () => {
    return (
      <Sheet>
        <SheetTrigger asChild>
            <AlignJustifyIcon className="size-6 cursor-pointer" />            
        </SheetTrigger>
        <SheetContent side="left" className="w-[480px] md:w-[540px]">
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
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
  