
import { useState, useEffect } from "react";
import AiAssistant from "./AiAssistant";
import { Button } from "@/components/ui/button";

interface OnboardingCompleteProps {
  brandName: string;
  restart: () => void;
}

const OnboardingComplete = ({ brandName, restart }: OnboardingCompleteProps) => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="animate-fade-in">
      {isLoading ? (
        <AiAssistant isLoading={true} message="" />
      ) : (
        <>
          <AiAssistant 
            message={`I'm so excited to be part of the ${brandName} team! 🎉 I've learned so much about us - our brand identity, voice, online presence, and competitors. This is just the beginning of our journey together! I'm here whenever you're ready to start creating marketing magic.`} 
          />
          
          <div className="flex justify-center mt-10">
            <Button
              onClick={restart}
              className="w-full max-w-xs mx-auto bg-primary hover:bg-primary/90"
            >
              Start Using Your AI Assistant
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default OnboardingComplete;
