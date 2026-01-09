'use client';
import { useState } from 'react';
import { conversations as initialConversations, users } from '@/lib/data';
import type { Conversation } from '@/lib/lib/types';
import { ChatSidebar } from '@/components/chat/sidebar';
import { ConversationList } from '@/components/chat/conversation-list';
import { ChatView } from '@/components/chat/chat-view';
import { cn } from '@/lib/utils';

export default function ChatPage() {
  const [conversations] = useState(initialConversations);
  const [selectedConversation, setSelectedConversation] =
    useState<Conversation | null>(conversations[0]);

  const handleConversationSelect = (conversation: Conversation) => {
    setSelectedConversation(conversation);
  };

  const handleBack = () => {
    setSelectedConversation(null);
  };

  return (
    <main className="flex h-screen w-full bg-background text-foreground">
      <ChatSidebar />
      <div
        className={cn(
          'md:flex w-full overflow-hidden',
          !selectedConversation ? 'flex' : 'hidden'
        )}
      >
        <ConversationList
          conversations={conversations}
          users={users}
          selectedConversation={selectedConversation}
          onConversationSelect={handleConversationSelect}
        />
        <div className="hidden md:flex flex-1">
          <div className="flex flex-col items-center justify-center h-full w-full bg-background/50 text-muted-foreground">
            <div className="text-center">
              <h2 className="text-2xl font-medium">Welcome to READTalk</h2>
              <p>Select a conversation to start chatting.</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={cn(
          'w-full h-full',
          selectedConversation ? 'flex' : 'hidden md:hidden'
        )}
      >
        {selectedConversation && (
          <ChatView
            conversation={selectedConversation}
            users={users}
            onBack={handleBack}
          />
        )}
      </div>
    </main>
  );
}
