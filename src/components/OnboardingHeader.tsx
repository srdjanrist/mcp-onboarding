
interface OnboardingHeaderProps {
  currentStep: number;
  totalSteps: number;
}

const OnboardingHeader = ({ currentStep, totalSteps }: OnboardingHeaderProps) => {
  const progress = (currentStep / totalSteps) * 100;
  
  return (
    <div className="mb-6 px-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">Welcome to the team!</h2>
        <span className="text-sm text-gray-500">Step {currentStep}/{totalSteps}</span>
      </div>
      <div className="progress-bar">
        <div 
          className="progress-bar-fill" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default OnboardingHeader;
