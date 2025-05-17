
import { useState } from "react";
import AiAssistant from "./AiAssistant";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface StepThreeProps {
  brandName: string;
  onComplete: (socialData: {
    instagram: string;
    facebook: string;
    tiktok: string;
    website: string;
    hasUploadedFiles: boolean;
  }) => void;
}

const StepThree = ({ brandName, onComplete }: StepThreeProps) => {
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [tiktok, setTiktok] = useState("");
  const [website, setWebsite] = useState("");
  const [fileUploaded, setFileUploaded] = useState(false);

  const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileUploaded(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete({
      instagram,
      facebook,
      tiktok,
      website,
      hasUploadedFiles: fileUploaded,
    });
  };

  return (
    <div className="animate-fade-in">
      <AiAssistant 
        message={`Let's plug in OUR socials and some data. The more I have, the smarter our marketing will be for ${brandName}!`} 
      />
      
      <form onSubmit={handleSubmit} className="space-y-4 mt-8">
        <div className="space-y-2">
          <Label htmlFor="instagram" className="flex items-center">
            <span className="text-primary font-medium mr-1">Instagram</span> (Optional)
          </Label>
          <Input
            id="instagram"
            placeholder="https://instagram.com/yourbrand"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            className="border-primary/30 focus:border-primary"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="facebook" className="flex items-center">
            <span className="text-primary font-medium mr-1">Facebook</span> (Optional)
          </Label>
          <Input
            id="facebook"
            placeholder="https://facebook.com/yourbrand"
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
            className="border-primary/30 focus:border-primary"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="tiktok" className="flex items-center">
            <span className="text-primary font-medium mr-1">TikTok</span> (Optional)
          </Label>
          <Input
            id="tiktok"
            placeholder="https://tiktok.com/@yourbrand"
            value={tiktok}
            onChange={(e) => setTiktok(e.target.value)}
            className="border-primary/30 focus:border-primary"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            placeholder="https://yourbrand.com"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            required
            className="border-primary/30 focus:border-primary"
          />
        </div>
        
        <div className="space-y-2 border border-dashed border-primary/50 rounded-lg p-4">
          <Label htmlFor="files" className="cursor-pointer block text-center py-4">
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
              <span className="text-sm font-medium mb-1">Upload files</span>
              <span className="text-xs text-gray-500">Campaign results, sales data, product info...</span>
            </div>
            <Input
              id="files"
              type="file"
              multiple
              className="hidden"
              onChange={handleFilesChange}
            />
          </Label>
          {fileUploaded && (
            <p className="text-xs text-center text-green-600">Files ready to upload</p>
          )}
        </div>
        
        <p className="text-xs text-gray-500 italic text-center">
          No worries—your data stays safe with me. I'm here to help US grow!
        </p>
        
        <div className="pt-4">
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90"
            disabled={!website}
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default StepThree;
