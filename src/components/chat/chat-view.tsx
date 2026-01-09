import { useRef, useEffect } from 'react';
import {
  ArrowLeft,
  Paperclip,
  Phone,
  Send,
  Video,
  Lock,
} from 'lucide-react';
import Image from 'next/image';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import type { Conversation, User, Message } from '@/lib/types';
import { Textarea } from '../ui/textarea';

interface ChatViewProps {
  conversation: Conversation;
  users: User[];
  onBack: () => void;
}

const MessageBubble = ({ message, author, isOwnMessage }: { message: Message, author?: User, isOwnMessage: boolean }) => (
  <div className={cn('flex items-end gap-2 animate-message-in', isOwnMessage ? 'flex-row-reverse' : 'flex-row')}>
    <Avatar className="h-8 w-8">
      <AvatarImage src={author?.avatarUrl} alt={author?.name} data-ai-hint={author?.avatarHint} />
      <AvatarFallback>
        {author?.name.split(' ').map(n => n[0]).join('')}
      </AvatarFallback>
    </Avatar>
    <div
      className={cn(
        'max-w-md rounded-xl px-4 py-2 shadow-md',
        isOwnMessage ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-card rounded-bl-none'
      )}
    >
      {!isOwnMessage && <p className="text-xs font-semibold text-accent mb-1">{author?.name}</p>}
       {message.imageUrl && (
        <Image
          src={message.imageUrl}
          alt="Shared media"
          width={400}
          height={300}
          data-ai-hint={message.imageHint}
          className="rounded-lg mb-2 max-w-full"
        />
      )}
      <p className="text-sm">{message.text}</p>
      <p className="text-xs mt-1 text-right opacity-70">{message.timestamp}</p>
    </div>
  </div>
);


export function ChatView({ conversation, users, onBack }: ChatViewProps) {
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [conversation.messages]);


  return (
    <div className="flex flex-col h-full w-full">
      <header className="flex items-center gap-4 p-4 border-b bg-card">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={onBack}
        >
          <ArrowLeft size={20} />
          <span className="sr-only">Back</span>
        </Button>
        <Avatar className="h-10 w-10 border">
          <AvatarImage src={conversation.avatarUrl} alt={conversation.name} data-ai-hint={conversation.avatarHint} />
          <AvatarFallback>
            {conversation.name
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <p className="font-semibold">{conversation.name}</p>
          <p className="text-sm text-muted-foreground">
            {conversation.type === 'direct' ? 'Online' : `${conversation.participants.length} members`}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <Phone size={18} />
          </Button>
          <Button variant="outline" size="icon">
            <Video size={18} />
          </Button>
        </div>
      </header>
      
      <ScrollArea className="flex-1 bg-background/50" ref={scrollAreaRef}>
        <div className="p-4 md:p-6 space-y-6">
          {conversation.messages.map((message) => {
            const author = users.find((u) => u.id === message.authorId);
            const isOwnMessage = message.authorId === 'user-0';
            return <MessageBubble key={message.id} message={message} author={author} isOwnMessage={isOwnMessage} />;
          })}
        </div>
      </ScrollArea>
      
      <footer className="p-4 border-t bg-card">
         <div className="flex items-center justify-center text-xs text-muted-foreground mb-2">
            <Lock size={12} className="mr-1" />
            Messages are end-to-end encrypted.
        </div>
        <div className="relative">
          <Textarea
            placeholder="Type a message..."
            className="pr-28 py-3 resize-none"
            rows={1}
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <Button variant="ghost" size="icon" aria-label="Attach file">
              <Paperclip size={20} />
            </Button>
            <Button size="icon" aria-label="Send message">
              <Send size={20} />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
