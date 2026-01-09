import { redirect } from 'next/navigation'

export default function Home() {
  // In a real app, you would have a landing page here.
  // For this scaffold, we'll redirect to the login page.
  redirect('/login');
}
