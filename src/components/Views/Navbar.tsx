import { Button, buttonVariants } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'
import { LoginLink, RegisterLink, getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { ShoppingCart } from 'lucide-react';
import { Search } from 'lucide-react';
import { DropdownMenuDemo } from "../ui/AvatarDisplay";
import { SearchFeature } from "../ui/SearchFeature";



interface Arraytype {
  label: string,
  href: string
}

const navArray: Arraytype[] = [
  {
    label: "Female",
    href: "/female",
  },
  {
    label: "Male",
    href: "/male",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Kids",
    href: "/kids",
  }
]
const Navbar = () => {

  const {getUser} = getKindeServerSession();
  const user = getUser();
  console.log("user",user);
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image src="/logo.png" alt="logo" width={150} height={150} />
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-bold text-1xl justify-center playFairDisplay">

          {navArray.map((item, index) => (
            <Link key={index} href={item.href} className=" cursor-pointer mr-5 hover:text-gray-900">{item.label}</Link>
          ))}

        </nav>
        <div className="space-x-5 flex items-center">
        
         <SearchFeature />
         <ShoppingCart size={23}/>

          {!user?(
          <div>
          
          <LoginLink className={buttonVariants({
            variant: "outline",
            size: "sm",
          })}>Sign in</LoginLink>

          <RegisterLink
            className={buttonVariants({
              variant: "secondary",
              size: "sm",
            })}
          >Sign up</RegisterLink>
          </div>
          ):(
              
            <DropdownMenuDemo UserData={user} />

          )}


          
         
        </div>
      </div>
    </header>
  )
}

export default Navbar