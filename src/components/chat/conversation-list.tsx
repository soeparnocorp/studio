import { Search } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import type { Conversation, User } from '@/lib/types';

interface ConversationListProps {
  conversations: Conversation[];
  users: User[];
  selectedConversation: Conversation | null;
  onConversationSelect: (conversation: Conversation) => void;
}

export function ConversationList({
  conversations,
  selectedConversation,
  onConversationSelect,
}: ConversationListProps) {
  return (
    <div className="flex flex-col bg-card/50 border-r w-full max-w-xs h-full">
      <div className="p-4 border-b">
        <h2 className="text-2xl font-bold font-headline">Chats</h2>
        <div className="relative mt-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search messages or users" className="pl-9" />
        </div>
      </div>
      <ScrollArea className="flex-1">
        <div className="flex flex-col">
          {conversations.map((conv) => (
            <Button
              key={conv.id}
              variant="ghost"
              onClick={() => onConversationSelect(conv)}
              className={cn(
                'flex items-start justify-start gap-3 p-4 h-auto rounded-none border-b',
                selectedConversation?.id === conv.id && 'bg-accent/50'
              )}
            >
              <Avatar className="h-12 w-12 border">
                <AvatarImage src={conv.avatarUrl} alt={conv.name} data-ai-hint={conv.avatarHint} />
                <AvatarFallback>
                  {conv.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 text-left overflow-hidden">
                <p className="font-semibold truncate">{conv.name}</p>
                <p className="text-sm text-muted-foreground truncate">
                  {conv.messages[conv.messages.length - 1].text}
                </p>
              </div>
              <time className="text-xs text-muted-foreground self-start">
                {conv.messages[conv.messages.length - 1].timestamp}
              </time>
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
