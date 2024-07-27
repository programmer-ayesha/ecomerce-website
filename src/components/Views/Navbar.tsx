import { Button, buttonVariants } from "@/components/ui/button"
import { LoginLink, RegisterLink, getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

import { ShoppingCart } from 'lucide-react';
import { DropdownMenuDemo } from "../ui/AvatarDisplay";
import { SearchFeature } from "../ui/SearchFeature";

import Link from "next/link";
import Image from "next/image";
import { KindeUser } from "@/components/utils/kindeTypes";

interface navArray {
  label: string,
  href: string
}

const navArray: navArray[] = [
  { label: "Female", href: "/female" },
  { label: "Male", href: "/male" },
  { label: "Products", href: "/products" },
  { label: "Kids", href: "/kids" }
]

const Navbar = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  const isUserAuthenticated = await isAuthenticated();

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image
            src="/logo.png"
            alt="logo"
            width={150}
            height={150}
          />
        </Link>

        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
          {navArray.map((item, index) => (
            <Link key={index} href={item.href} className="cursor-pointer mr-5 hover:text-gray-900">{item.label}</Link>
          ))}
        </nav>
        <div className="space-x-4 flex items-center">
          <SearchFeature />
          <Link href={"/cart"}><ShoppingCart size={25} /></Link>
          {!isUserAuthenticated || !user ? (
            <div>
              <LoginLink className={buttonVariants({ variant: "outline", size: "sm" })} style={{ marginRight: "6px" }}>
                Sign in
              </LoginLink>
              <RegisterLink className={buttonVariants({ variant: "secondary", size: "sm" })}>
                Sign up
              </RegisterLink>
            </div>
          ) : (
            <DropdownMenuDemo UserData={user as any} />
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar;
