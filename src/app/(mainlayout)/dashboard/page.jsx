"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronRight,
  Database,
  FileText,
  LayoutDashboard,
  Settings,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export default function Dashboard() {
  const [playgroundOpen, setPlaygroundOpen] = useState(true);

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <div className="w-64 border-r flex flex-col">
        <ScrollArea className="flex-1">
          {/* Organization Header */}
          <div className="p-4 border-b flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8 rounded-md bg-black">
                <AvatarFallback className="rounded-md bg-black text-white">
                  A
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Acme Inc</p>
                <p className="text-xs text-muted-foreground">Enterprise</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>

          {/* Navigation */}
          <div className="py-4">
            <div className="px-4 mb-2">
              <p className="text-xs font-medium text-muted-foreground">
                Platform
              </p>
            </div>

            {/* Playground Section */}
            <div>
              <button
                onClick={() => setPlaygroundOpen(!playgroundOpen)}
                className="flex items-center justify-between w-full px-4 py-2 text-sm hover:bg-muted"
              >
                <div className="flex items-center gap-3">
                  <LayoutDashboard className="h-4 w-4" />
                  <span>Playground</span>
                </div>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    !playgroundOpen && "-rotate-90"
                  )}
                />
              </button>

              {playgroundOpen && (
                <div className="pl-11 py-1">
                  <Link
                    href="#"
                    className="block py-1.5 text-sm text-muted-foreground hover:text-foreground"
                  >
                    History
                  </Link>
                  <Link
                    href="#"
                    className="block py-1.5 text-sm text-muted-foreground hover:text-foreground"
                  >
                    Starred
                  </Link>
                  <Link
                    href="#"
                    className="block py-1.5 text-sm text-muted-foreground hover:text-foreground"
                  >
                    Settings
                  </Link>
                </div>
              )}
            </div>

            {/* Models Section */}
            <button className="flex items-center justify-between w-full px-4 py-2 text-sm hover:bg-muted">
              <div className="flex items-center gap-3">
                <Database className="h-4 w-4" />
                <span>Models</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </button>

            {/* Documentation Section */}
            <button className="flex items-center justify-between w-full px-4 py-2 text-sm hover:bg-muted">
              <div className="flex items-center gap-3">
                <FileText className="h-4 w-4" />
                <span>Documentation</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </button>

            {/* Settings Section */}
            <button className="flex items-center justify-between w-full px-4 py-2 text-sm hover:bg-muted">
              <div className="flex items-center gap-3">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </ScrollArea>

        {/* User Section */}
        <div className="p-4 border-t flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-02%20014147-NIRSz1gyZAoV4jukcujMUcV7WP2Xsd.png"
                alt="User"
              />
              <AvatarFallback className="bg-purple-500 text-white">
                SC
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">shadcn</p>
              <p className="text-xs text-muted-foreground">m@example.com</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Breadcrumb Header */}
        <div className="border-b p-4 flex items-center gap-2">
          <FileText className="h-5 w-5 text-muted-foreground" />
          <div className="flex items-center">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Building Your Application
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
            <span className="text-sm font-medium">Data Fetching</span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 text-black text-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio saepe
          dolores modi sequi vero deleniti animi culpa consequatur, nesciunt
          ipsum excepturi non debitis, soluta voluptate nostrum voluptatum
          corrupti amet iusto expedita esse voluptatem praesentium recusandae
          eum. Maxime reprehenderit fugit reiciendis sapiente labore? Iusto
          quasi eius laboriosam molestias quibusdam repellat iste nobis sunt ea
          ut vel asperiores voluptates, blanditiis necessitatibus. Accusantium,
          harum impedit. Cum dolor laudantium, fugiat officia et a omnis placeat
          nostrum, iste odio, velit animi veniam nisi nihil maxime soluta minus
          quam quis! Maiores, necessitatibus laboriosam, labore consectetur,
          atque reprehenderit alias iure eaque voluptatum qui blanditiis placeat
          accusantium mollitia minus impedit obcaecati pariatur voluptates! Iure
          deleniti hic animi explicabo ipsum, dignissimos repudiandae dolor est,
          repellendus obcaecati cupiditate molestias labore ullam maiores
          necessitatibus laboriosam nesciunt provident. Ipsum architecto
          molestiae libero minima quos? Consequatur inventore, recusandae
          doloremque temporibus dolores quis repudiandae accusantium,
          praesentium aspernatur eligendi mollitia eveniet provident laboriosam
          ab nulla explicabo quisquam ipsam dignissimos sed exercitationem
          blanditiis. Ratione repellat fuga dignissimos natus, explicabo
          voluptates error architecto nostrum alias illum rem perferendis dicta
          veniam optio corrupti totam. Obcaecati cupiditate temporibus dicta?
          Tenetur voluptate voluptatibus temporibus eius ratione aliquam quam
          aut quo vel. Impedit doloremque repellat provident deserunt
          repellendus, consequuntur commodi expedita!
        </div>
      </div>
    </div>
  );
}
