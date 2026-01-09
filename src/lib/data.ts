import type { User, Conversation } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const getImage = (id: string) => {
  const image = PlaceHolderImages.find(img => img.id === id);
  return {
    url: image?.imageUrl ?? 'https://picsum.photos/seed/default/100/100',
    hint: image?.imageHint ?? 'person',
  };
};

export const users: User[] = [
  { id: 'user-0', name: 'You', avatarUrl: getImage('user-8').url, avatarHint: getImage('user-8').hint, online: true },
  { id: 'user-1', name: 'Sarah Lee', avatarUrl: getImage('user-1').url, avatarHint: getImage('user-1').hint, online: true },
  { id: 'user-2', name: 'Alex Chen', avatarUrl: getImage('user-2').url, avatarHint: getImage('user-2').hint, online: false },
  { id: 'user-3', name: 'Maria Garcia', avatarUrl: getImage('user-3').url, avatarHint: getImage('user-3').hint, online: true },
  { id: 'user-4', name: 'David Kim', avatarUrl: getImage('user-4').url, avatarHint: getImage('user-4').hint, online: false },
  { id: 'user-5', name: 'Emily White', avatarUrl: getImage('user-5').url, avatarHint: getImage('user-5').hint, online: true },
];

export const conversations: Conversation[] = [
  {
    id: 'conv-1',
    type: 'direct',
    name: 'Sarah Lee',
    avatarUrl: getImage('user-1').url,
    avatarHint: getImage('user-1').hint,
    participants: ['user-0', 'user-1'],
    messages: [
      { id: 'msg-1', authorId: 'user-1', text: "Hey! Just checking in. How's the project coming along?", timestamp: '10:30 AM' },
      { id: 'msg-2', authorId: 'user-0', text: "Hey Sarah! It's going well. I'm hoping to have the first draft ready by this evening.", timestamp: '10:31 AM' },
      { id: 'msg-3', authorId: 'user-1', text: 'That sounds great! Let me know if you need a second pair of eyes on it.', timestamp: '10:31 AM' },
    ],
  },
  {
    id: 'conv-2',
    type: 'group',
    name: 'Project Phoenix',
    avatarUrl: getImage('group-1').url,
    avatarHint: getImage('group-1').hint,
    participants: ['user-0', 'user-2', 'user-3'],
    messages: [
      { id: 'msg-4', authorId: 'user-2', text: "Team, I've pushed the latest updates to the staging server. Can everyone take a look?", timestamp: '9:15 AM' },
      { id: 'msg-5', authorId: 'user-3', text: 'Looks good on my end, Alex. The new UI is much cleaner.', timestamp: '9:20 AM' },
      { id: 'msg-6', authorId: 'user-0', text: "I agree. The performance seems to have improved as well. Great work!", timestamp: '9:25 AM' },
      { id: 'msg-7', authorId: 'user-2', text: 'Perfect. Thanks for the feedback!', timestamp: '9:26 AM' },
    ],
  },
  {
    id: 'conv-3',
    type: 'direct',
    name: 'Maria Garcia',
    avatarUrl: getImage('user-3').url,
    avatarHint: getImage('user-3').hint,
    participants: ['user-0', 'user-3'],
    messages: [
      { id: 'msg-8', authorId: 'user-3', text: 'Did you see that new design tool that just launched? It looks amazing.', timestamp: 'Yesterday' },
      { id: 'msg-9', authorId: 'user-0', text: 'I did! The real-time collaboration feature is a game-changer.', timestamp: 'Yesterday' },
      { id: 'msg-10', authorId: 'user-0', text: 'We should try it out for our next side project.', timestamp: 'Yesterday' },
    ],
  },
  {
    id: 'conv-4',
    type: 'direct',
    name: 'Alex Chen',
    avatarUrl: getImage('user-2').url,
    avatarHint: getImage('user-2').hint,
    participants: ['user-0', 'user-2'],
    messages: [
      { id: 'msg-11', authorId: 'user-2', text: 'Lunch at 12:30?', timestamp: 'Yesterday' },
      { id: 'msg-12', authorId: 'user-0', text: "Sounds good, see you then.", timestamp: 'Yesterday' },
      { id: 'msg-13', authorId: 'user-0', text: 'Also, I have that image you requested.', timestamp: 'Yesterday', imageUrl: 'https://picsum.photos/seed/11/600/400', imageHint: 'city skyline' },
    ],
  },
  {
    id: 'conv-5',
    type: 'group',
    name: 'Weekend Hangout',
    avatarUrl: getImage('group-2').url,
    avatarHint: getImage('group-2').hint,
    participants: ['user-0', 'user-4', 'user-5'],
    messages: [
      { id: 'msg-14', authorId: 'user-5', text: "Anyone up for a hike this Saturday?", timestamp: '3 days ago' },
      { id: 'msg-15', authorId: 'user-4', text: "I'm in! What time?", timestamp: '3 days ago' },
      { id: 'msg-16', authorId: 'user-0', text: "Can't do Saturday, but I'm free on Sunday if that works for anyone.", timestamp: '3 days ago' },
    ],
  },
];
