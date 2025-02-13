import React from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sparkles, Bell, Settings, LogOut } from "lucide-react";

interface DashboardHeaderProps {
  userName?: string;
  userAvatar?: string;
  notifications?: number;
}

const DashboardHeader = ({
  userName = "John Doe",
  userAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  notifications = 3,
}: DashboardHeaderProps) => {
  return (
    <header className="w-full h-[72px] border-b bg-background px-6 flex items-center justify-between">
      {/* Logo and Navigation */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="text-xl font-semibold">Campaign AI</span>
        </div>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Campaigns</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-4 w-[220px]">
                  <NavigationMenuLink className="block p-2 hover:bg-accent rounded-md">
                    Active Campaigns
                  </NavigationMenuLink>
                  <NavigationMenuLink className="block p-2 hover:bg-accent rounded-md">
                    Draft Campaigns
                  </NavigationMenuLink>
                  <NavigationMenuLink className="block p-2 hover:bg-accent rounded-md">
                    Campaign Analytics
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Content</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-4 w-[220px]">
                  <NavigationMenuLink className="block p-2 hover:bg-accent rounded-md">
                    Content Library
                  </NavigationMenuLink>
                  <NavigationMenuLink className="block p-2 hover:bg-accent rounded-md">
                    AI Generator
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Analytics</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-4 w-[220px]">
                  <NavigationMenuLink className="block p-2 hover:bg-accent rounded-md">
                    Performance
                  </NavigationMenuLink>
                  <NavigationMenuLink className="block p-2 hover:bg-accent rounded-md">
                    Reports
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Right side controls */}
      <div className="flex items-center gap-4">
        <ModeToggle />

        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {notifications > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground w-4 h-4 rounded-full text-xs flex items-center justify-center">
              {notifications}
            </span>
          )}
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
              <Avatar>
                <AvatarImage src={userAvatar} alt={userName} />
                <AvatarFallback>
                  {userName.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuLabel>{userName}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default DashboardHeader;
