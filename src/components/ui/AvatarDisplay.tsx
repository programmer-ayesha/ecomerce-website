
import {
    Github,
    LifeBuoy,
    LogOut,
    Mail,
    User
} from "lucide-react"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import {  LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server"

import { KindeUser } from "../utils/kindeTypes"
import Link from "next/link"


export function DropdownMenuDemo({UserData}:{UserData:KindeUser}) {
    
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" /> 
                    <span>{UserData.given_name}{" "}{UserData.family_name}</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Mail className="mr-2 h-4 w-4" /> 
                    <span>{UserData.email}</span>
                 </DropdownMenuItem> 
                <DropdownMenuItem>
                    <Github className="mr-2 h-4 w-4" />
                    <Link target="_blank" href={"https://github.com/basit-sharif"}>GitHub</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <LifeBuoy className="mr-2 h-4 w-4" />
                    <Link target="_blank" href={"https://abdulbasit-self.vercel.app/"}>Support</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <LogoutLink>Log out</LogoutLink>
                </DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
          
    )

};  

// import {
//     Github,
//     LifeBuoy,
//     LogOut,
//     Mail,
//     User
// } from "lucide-react";

// import {
//     Avatar,
//     AvatarFallback,
//     AvatarImage,
// } from "@/components/ui/avatar";
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger
// } from "@/components/ui/dropdown-menu";
// import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/client";
// import Link from "next/link";
// import { KindeUser } from "@/components/utils/kindeTypes"; // Use manually defined type

// export function DropdownMenuDemo({ UserData }: { UserData: KindeUser }) {
//     return (
//         <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//                 <Avatar>
//                     <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
//                     <AvatarFallback>CN</AvatarFallback>
//                 </Avatar>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent className="w-56">
//                 <DropdownMenuLabel>My Account</DropdownMenuLabel>
//                 <DropdownMenuItem>
//                     <User className="mr-2 h-4 w-4" />
//                     <span>{UserData.given_name ?? "No Name"}{" "}{UserData.family_name ?? ""}</span> {/* Handle missing names */}
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                     <Mail className="mr-2 h-4 w-4" />
//                     <span>{UserData.email}</span> {/* Email already handled */}
//                 </DropdownMenuItem>
//                 <DropdownMenuItem asChild>
//                     <Link href="https://github.com/basit-sharif" target="_blank">
//                         <Github className="mr-2 h-4 w-4" />
//                         <span>GitHub</span>
//                     </Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem asChild>
//                     <Link href="https://abdulbasit-self.vercel.app/" target="_blank">
//                         <LifeBuoy className="mr-2 h-4 w-4" />
//                         <span>Support</span>
//                     </Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem asChild>
//                     <LogoutLink>
//                         <LogOut className="mr-2 h-4 w-4" />
//                         <span>Log out</span>
//                     </LogoutLink>
//                 </DropdownMenuItem>
//             </DropdownMenuContent>
//         </DropdownMenu>
//     );
// }
