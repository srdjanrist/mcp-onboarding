
import { useState } from "react";
import AiAssistant from "./AiAssistant";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface StepOneProps {
  onComplete: (brandData: {
    brandName: string;
    description: string;
    mission: string;
    vision: string;
  }) => void;
}

const StepOne = ({ onComplete }: StepOneProps) => {
  const [brandName, setBrandName] = useState("");
  const [description, setDescription] = useState("");
  const [mission, setMission] = useState("");
  const [vision, setVision] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete({
      brandName,
      description,
      mission,
      vision,
    });
  };

  return (
    <div className="animate-fade-in">
      <AiAssistant message="Hey! Super excited to join your team. Tell me everything about OUR brand!" />
      
      <form onSubmit={handleSubmit} className="space-y-4 mt-8">
        <div className="space-y-2">
          <Label htmlFor="brandName">Brand Name</Label>
          <Input
            id="brandName"
            placeholder="What's our brand called?"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            required
            className="border-primary/30 focus:border-primary"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="description">Brand Description</Label>
          <Textarea
            id="description"
            placeholder="Tell me what we're all about in a few sentences"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="min-h-[80px] border-primary/30 focus:border-primary"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="mission">Mission Statement</Label>
          <Textarea
            id="mission"
            placeholder="What's our mission as a brand?"
            value={mission}
            onChange={(e) => setMission(e.target.value)}
            className="min-h-[80px] border-primary/30 focus:border-primary"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="vision">Vision Statement</Label>
          <Textarea
            id="vision"
            placeholder="What's our long-term vision?"
            value={vision}
            onChange={(e) => setVision(e.target.value)}
            className="min-h-[80px] border-primary/30 focus:border-primary"
          />
        </div>
        
        <p className="text-sm text-gray-500 italic">The more you share, the better I'll represent us!</p>
        
        <div className="pt-4">
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90"
            disabled={!brandName || !description}
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default StepOne;
