import logo from "../pictures/logo.jpg";
import { IoIosSearch } from "react-icons/io";
import { Bell, Menu, Search } from "lucide-react";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Header() {
  return (
    <div className="fixed bg-white w-full p-4 flex items-center justify-between shadow-2xl h-[85px] border-b-2 border-b-slate-500 z-50">
      <div className="ml-2">
        <img src={logo} alt="HelpOut" className="h-20 w-50 ml-[-10px] mb-1" />
      </div>
      <div className="w-1/2">
          <Input
            type="text"
            size="lg"
            icon={<Search className="size-5" />}
            placeholder=" Search"
            className="w-full text-xl border-input bg-transparent rounded-full focus:outline-none focus:ring-2 focus-visible:ring-purple-500 focus:border-transparent focus:ring-opacity-50 hover:ring-2 hover:ring-opacity-50 transition-all duration-300 ease-in-out"
          />
      </div>

      <div className="flex flex-row justify-between mr-3 items-center gap-10">
        <div>
          <Bell className="size-9" />
        </div>

        {/* dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="rounded-full w-3">
              <Avatar className="size-11">
                <AvatarImage
                  src="https://media.licdn.com/dms/image/D4D03AQFlutSIT9RAHw/profile-displayphoto-shrink_800_800/0/1673764856312?e=1712188800&v=beta&t=zYZ3rvR0QBGqUaHmFkolib-nLmnUR5a0pgKfGQ3oqLY"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Settings
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Email</DropdownMenuItem>
                    <DropdownMenuItem>Message</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>More...</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>About</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuItem disabled>paisa</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
export default Header;
