export type User = {
  id: string;
  name: string;
  avatarUrl: string;
  avatarHint: string;
  online: boolean;
};

export type Message = {
  id: string;
  authorId: string;
  text: string;
  timestamp: string;
  imageUrl?: string;
  imageHint?: string;
};

export type Conversation = {
  id: string;
  type: 'direct' | 'group';
  name: string;
  avatarUrl: string;
  avatarHint: string;
  participants: string[];
  messages: Message[];
};
