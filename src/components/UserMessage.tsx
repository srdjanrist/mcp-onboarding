
import { Avatar } from "@/components/ui/avatar";

interface UserMessageProps {
  message: string;
}

const UserMessage = ({ message }: UserMessageProps) => {
  return (
    <div className="flex items-start gap-3 mb-4 flex-row-reverse">
      <Avatar className="w-10 h-10 bg-accent-peach text-gray-800 flex items-center justify-center">
        <span className="text-sm font-semibold">You</span>
      </Avatar>
      <div className="user-message-bubble max-w-[90%]">
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};

export default UserMessage;
