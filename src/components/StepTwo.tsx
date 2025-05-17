
import { useState } from "react";
import AiAssistant from "./AiAssistant";
import UserMessage from "./UserMessage";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface StepTwoProps {
  brandName: string;
  onComplete: (voiceData: {
    brandVoice: string;
    likedExamples: string[];
  }) => void;
}

const StepTwo = ({ brandName, onComplete }: StepTwoProps) => {
  const [brandVoice, setBrandVoice] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [examples, setExamples] = useState<string[]>([]);
  const [likedExamples, setLikedExamples] = useState<string[]>([]);

  const handleSubmitVoice = () => {
    if (!brandVoice) return;
    
    setHasSubmitted(true);
    setIsGenerating(true);
    
    // Simulate AI generating examples
    setTimeout(() => {
      setIsGenerating(false);
      
      // Generate mock examples based on voice
      const generatedExamples = [
        `Hey bestie! Ready to slay with your new ${brandName} outfit?`,
        `Clothes so comfy and cute, they'll feel like a hug from your BFF.`,
        `Your wardrobe called—it wants to have more fun with ${brandName}!`,
      ];
      
      setExamples(generatedExamples);
    }, 1500);
  };

  const toggleLikedExample = (example: string) => {
    if (likedExamples.includes(example)) {
      setLikedExamples(likedExamples.filter(e => e !== example));
    } else {
      setLikedExamples([...likedExamples, example]);
    }
  };

  const handleContinue = () => {
    onComplete({
      brandVoice,
      likedExamples: likedExamples.length ? likedExamples : examples,
    });
  };

  return (
    <div className="animate-fade-in">
      <AiAssistant 
        message={`Awesome! Now, let's chat about our voice and personality. How do WE talk to our customers at ${brandName}?`} 
      />
      
      {!hasSubmitted ? (
        <div className="space-y-4 mt-8">
          <Textarea
            placeholder="Our tone is... (e.g., casual, fun, empowering)"
            value={brandVoice}
            onChange={(e) => setBrandVoice(e.target.value)}
            className="min-h-[100px] border-primary/30 focus:border-primary"
            required
          />
          
          <Button 
            onClick={handleSubmitVoice} 
            className="w-full bg-primary hover:bg-primary/90"
            disabled={!brandVoice}
          >
            Share Our Voice
          </Button>
        </div>
      ) : (
        <>
          <div className="my-4">
            <UserMessage message={brandVoice} />
          </div>
          
          {isGenerating ? (
            <AiAssistant isLoading={true} message="" />
          ) : (
            <>
              <AiAssistant 
                message="Got it! Here's how we might sound—let me know your thoughts!" 
              />
              
              <div className="mt-6 space-y-3">
                {examples.map((example, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-lg border ${
                      likedExamples.includes(example) 
                        ? "border-primary bg-primary/5" 
                        : "border-gray-200"
                    } cursor-pointer transition-all`}
                    onClick={() => toggleLikedExample(example)}
                  >
                    <p className="text-sm">{example}</p>
                    {likedExamples.includes(example) && (
                      <p className="text-xs mt-2 text-primary">✓ I like this example</p>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <Button 
                  onClick={handleContinue}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Continue
                </Button>
                <p className="text-sm text-center mt-3 text-gray-500">
                  Click on examples you like (or just continue if they all work)
                </p>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default StepTwo;
