import {
  MessageSquare,
  Users,
  Settings,
  LogOut,
} from 'lucide-react';
import Link from 'next/link';
import Image from "next/image";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { users } from '@/lib/data';
import { Button } from '@/components/ui/button';

export function ChatSidebar() {
  const currentUser = users.find(u => u.id === 'user-0');

  return (
    <div className="flex flex-col items-center justify-between p-2 bg-card border-r w-16 h-full">
      <TooltipProvider>
        <nav className="flex flex-col items-center gap-4">
          <Link href="/chat" className="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 text-primary"
            >
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            </svg>
            <span className="sr-only">READTalk</span>
          </Link>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-lg bg-primary text-primary-foreground" aria-label="Chats">
                  <MessageSquare size={20} />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Chats
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-lg" aria-label="Contacts">
                    <Users size={20} />
                </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Contacts
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-lg" aria-label="Settings">
                  <Settings size={20} />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Settings
            </TooltipContent>
          </Tooltip>
        </nav>
        <div className="flex flex-col items-center gap-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Avatar>
                {currentUser && <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} data-ai-hint={currentUser.avatarHint} />}
                <AvatarFallback>YOU</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              {currentUser?.name}
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/login">
                <Button variant="ghost" size="icon" className="rounded-lg" aria-label="Logout">
                  <LogOut size={20} />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Logout
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </div>
  );
}
