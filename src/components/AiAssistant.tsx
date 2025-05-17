
import { Avatar } from "@/components/ui/avatar";

interface AiAssistantProps {
  message: string;
  isLoading?: boolean;
}

const AiAssistant = ({ message, isLoading = false }: AiAssistantProps) => {
  return (
    <div className="flex items-start gap-3 mb-4 max-w-[90%]">
      <Avatar className="w-10 h-10 bg-primary text-white flex items-center justify-center">
        <span className="text-sm font-semibold">AI</span>
      </Avatar>
      <div className="ai-message-bubble max-w-[90%]">
        {isLoading ? (
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" />
            <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: "0.1s" }} />
            <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: "0.2s" }} />
          </div>
        ) : (
          <p className="text-sm">{message}</p>
        )}
      </div>
    </div>
  );
};

export default AiAssistant;
