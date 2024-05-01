import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface AvatarProps {
  avatarUrl: string;
}

export default function UserAvatar({ avatarUrl }: AvatarProps) {
  return (
      <Avatar>
        <AvatarImage
          src={avatarUrl || '/12231231.jpg'}
          alt='UserAvatar'
        />
        <AvatarFallback>None</AvatarFallback>
      </Avatar>
  );
}
