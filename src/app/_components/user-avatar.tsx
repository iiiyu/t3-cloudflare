import { auth } from '@/server/auth'



export default async function UserAvatar(): Promise<JSX.Element | null> {
  const session = await auth();

  if (!session.user) return null;

  return (
    <div>
      <div>{session?.user.email}</div>
      <img src={session.user.img} alt="User Avatar" />
    </div>
  );
}
