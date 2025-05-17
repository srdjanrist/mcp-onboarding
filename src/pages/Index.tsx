
import { useState } from "react";
import OnboardingHeader from "@/components/OnboardingHeader";
import StepOne from "@/components/StepOne";
import StepTwo from "@/components/StepTwo";
import StepThree from "@/components/StepThree";
import StepFour from "@/components/StepFour";
import OnboardingComplete from "@/components/OnboardingComplete";

const TOTAL_STEPS = 4;

const Index = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [brandData, setBrandData] = useState({
    brandName: "",
    description: "",
    mission: "",
    vision: ""
  });
  const [voiceData, setVoiceData] = useState({
    brandVoice: "",
    likedExamples: [] as string[]
  });
  const [socialData, setSocialData] = useState({
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "",
    hasUploadedFiles: false
  });
  const [competitorData, setCompetitorData] = useState({
    competitors: [] as string[]
  });

  const handleStepOneComplete = (data: typeof brandData) => {
    setBrandData(data);
    setCurrentStep(2);
  };

  const handleStepTwoComplete = (data: typeof voiceData) => {
    setVoiceData(data);
    setCurrentStep(3);
  };

  const handleStepThreeComplete = (data: typeof socialData) => {
    setSocialData(data);
    setCurrentStep(4);
  };

  const handleStepFourComplete = (data: typeof competitorData) => {
    setCompetitorData(data);
    setCurrentStep(5);
  };

  const restartOnboarding = () => {
    setCurrentStep(1);
    setBrandData({
      brandName: "",
      description: "",
      mission: "",
      vision: ""
    });
    setVoiceData({
      brandVoice: "",
      likedExamples: []
    });
    setSocialData({
      instagram: "",
      facebook: "",
      tiktok: "",
      website: "",
      hasUploadedFiles: false
    });
    setCompetitorData({
      competitors: []
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="w-full bg-white shadow-sm py-4 flex items-center justify-center border-b">
        <h1 className="text-xl font-bold text-primary">AI Marketing Assistant</h1>
      </div>
      
      <div className="flex-1 flex flex-col">
        <div className="max-w-2xl w-full mx-auto flex-1 px-4 py-8">
          {currentStep <= TOTAL_STEPS && (
            <OnboardingHeader 
              currentStep={currentStep} 
              totalSteps={TOTAL_STEPS} 
            />
          )}
          
          <div className="bg-white rounded-xl shadow-sm p-6 border">
            {currentStep === 1 && (
              <StepOne onComplete={handleStepOneComplete} />
            )}
            
            {currentStep === 2 && (
              <StepTwo 
                brandName={brandData.brandName}
                onComplete={handleStepTwoComplete} 
              />
            )}
            
            {currentStep === 3 && (
              <StepThree
                brandName={brandData.brandName}
                onComplete={handleStepThreeComplete}
              />
            )}
            
            {currentStep === 4 && (
              <StepFour
                brandName={brandData.brandName}
                onComplete={handleStepFourComplete}
              />
            )}
            
            {currentStep === 5 && (
              <OnboardingComplete
                brandName={brandData.brandName}
                restart={restartOnboarding}
              />
            )}
          </div>
        </div>
      </div>
      
      <footer className="p-4 text-center text-sm text-gray-500">
        <p>Your AI marketing assistant is always learning & growing with you.</p>
      </footer>
    </div>
  );
};

export default Index;
