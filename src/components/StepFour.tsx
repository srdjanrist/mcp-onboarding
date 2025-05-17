
import { useState } from "react";
import AiAssistant from "./AiAssistant";
import UserMessage from "./UserMessage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface StepFourProps {
  brandName: string;
  onComplete: (competitorData: {
    competitors: string[];
  }) => void;
}

const StepFour = ({ brandName, onComplete }: StepFourProps) => {
  const [competitors, setCompetitors] = useState<string[]>([""]);
  const [insights, setInsights] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showInsights, setShowInsights] = useState(false);

  const handleCompetitorChange = (index: number, value: string) => {
    const newCompetitors = [...competitors];
    newCompetitors[index] = value;
    setCompetitors(newCompetitors);
  };

  const addCompetitorField = () => {
    setCompetitors([...competitors, ""]);
  };

  const removeCompetitorField = (index: number) => {
    if (competitors.length === 1) return;
    const newCompetitors = competitors.filter((_, i) => i !== index);
    setCompetitors(newCompetitors);
  };

  const generateInsights = () => {
    if (!competitors[0]) return;
    
    setIsGenerating(true);
    
    // Filter out empty competitors
    const validCompetitors = competitors.filter(c => c.trim() !== "");
    
    // Simulate AI generating insights
    setTimeout(() => {
      setIsGenerating(false);
      setShowInsights(true);
      
      // Generate mock insights
      const mockInsights = [
        `${validCompetitors[0]} focuses on sustainable materials in their marketing. We could highlight our eco-friendly practices too!`,
        `Their social media has high engagement on behind-the-scenes content. We should consider sharing our design process.`,
        `They're using influencer partnerships to reach new audiences. Let's identify potential brand ambassadors for ${brandName}!`
      ];
      
      setInsights(mockInsights);
    }, 1500);
  };
  
  const handleSubmit = () => {
    // Filter out empty competitors
    const validCompetitors = competitors.filter(c => c.trim() !== "");
    onComplete({ competitors: validCompetitors });
  };

  return (
    <div className="animate-fade-in">
      <AiAssistant 
        message={`Finally, who are the competitors WE should track? Share their socials or websites, and I'll start analyzing their moves for ${brandName}!`} 
      />
      
      <div className="space-y-4 mt-8">
        {competitors.map((competitor, index) => (
          <div key={index} className="flex gap-2">
            <div className="flex-1">
              <Label htmlFor={`competitor-${index}`} className={index === 0 ? "" : "sr-only"}>
                {index === 0 && "Competitor URL or name"}
              </Label>
              <Input
                id={`competitor-${index}`}
                placeholder="https://competitor.com or @competitor"
                value={competitor}
                onChange={(e) => handleCompetitorChange(index, e.target.value)}
                className="border-primary/30 focus:border-primary"
              />
            </div>
            
            <Button
              type="button"
              variant="outline"
              className="h-10 mt-auto"
              onClick={() => removeCompetitorField(index)}
              disabled={competitors.length === 1}
            >
              Remove
            </Button>
          </div>
        ))}
        
        <Button 
          type="button" 
          variant="outline" 
          onClick={addCompetitorField}
          className="w-full border-dashed border-primary/50 hover:bg-primary/5"
        >
          + Add another competitor
        </Button>
        
        {!showInsights && (
          <Button
            type="button"
            className="w-full bg-primary hover:bg-primary/90"
            onClick={generateInsights}
            disabled={!competitors[0] || isGenerating}
          >
            {isGenerating ? "Analyzing..." : "Generate Insights"}
          </Button>
        )}
        
        {isGenerating && (
          <div className="my-4">
            <AiAssistant isLoading={true} message="" />
          </div>
        )}
        
        {showInsights && (
          <>
            <div className="my-4">
              <UserMessage message={`I'm interested in ${competitors.filter(c => c.trim() !== "").join(", ")} as competitors.`} />
            </div>
            
            <AiAssistant message="Here are some quick insights about your competitors:" />
            
            <div className="mt-4 space-y-3">
              {insights.map((insight, index) => (
                <div key={index} className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                  <p className="text-sm">{insight}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <Button
                onClick={handleSubmit}
                className="w-full bg-primary hover:bg-primary/90"
              >
                Complete Onboarding
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default StepFour;
