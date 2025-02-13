import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Wand2, Target, Share2, CheckCircle } from "lucide-react";
import AudienceTargeting from "./wizard/AudienceTargeting";

interface CampaignWizardProps {
  onComplete?: (campaignData: any) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

const CampaignWizard = ({
  onComplete = () => {},
  isOpen = true,
  onClose = () => {},
}: CampaignWizardProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const steps = [
    { id: 1, title: "Campaign Details", icon: <Wand2 className="h-4 w-4" /> },
    {
      id: 2,
      title: "Audience Targeting",
      icon: <Target className="h-4 w-4" />,
    },
    { id: 3, title: "Channel Selection", icon: <Share2 className="h-4 w-4" /> },
    {
      id: 4,
      title: "Review & Launch",
      icon: <CheckCircle className="h-4 w-4" />,
    },
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete({});
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-background p-6">
      <Card className="p-6">
        <div className="space-y-6">
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>
                Step {currentStep} of {totalSteps}
              </span>
              <span>{Math.round((currentStep / totalSteps) * 100)}%</span>
            </div>
            <Progress value={(currentStep / totalSteps) * 100} />
          </div>

          {/* Steps Navigation */}
          <div className="flex justify-between items-center gap-4 overflow-x-auto py-2">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${currentStep === step.id ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
              >
                {step.icon}
                <span className="text-sm font-medium whitespace-nowrap">
                  {step.title}
                </span>
              </div>
            ))}
          </div>

          <Separator />

          {/* Step Content */}
          <div className="min-h-[400px]">
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Campaign Details</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="campaign-name">Campaign Name</Label>
                    <Input
                      id="campaign-name"
                      placeholder="Enter campaign name"
                      defaultValue="New Campaign"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="campaign-objective">
                      Campaign Objective
                    </Label>
                    <Input
                      id="campaign-objective"
                      placeholder="Enter campaign objective"
                      defaultValue="Increase brand awareness"
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <AudienceTargeting onNext={handleNext} onBack={handleBack} />
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Channel Selection</h2>
                <div className="grid grid-cols-2 gap-4">
                  {["Email", "Social Media", "Display Ads", "Search Ads"].map(
                    (channel) => (
                      <Card
                        key={channel}
                        className="p-4 cursor-pointer hover:border-primary transition-colors"
                      >
                        <h3 className="font-medium">{channel}</h3>
                      </Card>
                    ),
                  )}
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Review & Launch</h2>
                <div className="space-y-4 bg-secondary/10 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium">Campaign Name</h3>
                      <p className="text-sm text-muted-foreground">
                        New Campaign
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium">Objective</h3>
                      <p className="text-sm text-muted-foreground">
                        Increase brand awareness
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Separator />

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 1}
            >
              Back
            </Button>
            <Button onClick={handleNext}>
              {currentStep === totalSteps ? "Launch Campaign" : "Next"}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CampaignWizard;
