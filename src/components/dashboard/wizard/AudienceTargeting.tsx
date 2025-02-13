import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Users, Target, Sparkles } from "lucide-react";

interface AudienceTargetingProps {
  onNext?: () => void;
  onBack?: () => void;
  audienceData?: {
    ageRange: [number, number];
    interests: string[];
    location: string;
    engagement: number;
  };
}

const AudienceTargeting = ({
  onNext = () => {},
  onBack = () => {},
  audienceData = {
    ageRange: [25, 45],
    interests: ["Technology", "Digital Marketing", "Social Media"],
    location: "United States",
    engagement: 75,
  },
}: AudienceTargetingProps) => {
  return (
    <div className="w-full h-full bg-background p-6">
      <Card className="p-6 space-y-6">
        <div className="flex items-center gap-2">
          <Target className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-semibold">Audience Targeting</h2>
        </div>

        <Separator />

        <div className="space-y-6">
          {/* Age Range Section */}
          <div className="space-y-4">
            <Label>Age Range</Label>
            <div className="flex items-center gap-4">
              <span className="text-sm">{audienceData.ageRange[0]}</span>
              <Slider
                defaultValue={audienceData.ageRange}
                max={100}
                step={1}
                className="flex-1"
              />
              <span className="text-sm">{audienceData.ageRange[1]}</span>
            </div>
          </div>

          {/* Interests Section */}
          <div className="space-y-4">
            <Label>Interests</Label>
            <div className="flex flex-wrap gap-2">
              {audienceData.interests.map((interest) => (
                <Badge key={interest} variant="secondary">
                  {interest}
                </Badge>
              ))}
              <Button variant="outline" size="sm">
                + Add Interest
              </Button>
            </div>
          </div>

          {/* Location Section */}
          <div className="space-y-4">
            <Label>Location</Label>
            <Input
              placeholder="Enter target location"
              defaultValue={audienceData.location}
            />
          </div>

          {/* AI Engagement Prediction */}
          <div className="bg-secondary/20 p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <h3 className="font-medium">AI Engagement Prediction</h3>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-1 bg-secondary/30 h-2 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary"
                  style={{ width: `${audienceData.engagement}%` }}
                />
              </div>
              <span className="text-sm font-medium">
                {audienceData.engagement}%
              </span>
            </div>
          </div>

          {/* Audience Size Estimate */}
          <div className="flex items-center gap-4 bg-secondary/10 p-4 rounded-lg">
            <Users className="h-5 w-5 text-primary" />
            <div>
              <h3 className="font-medium">Estimated Audience Size</h3>
              <p className="text-sm text-muted-foreground">
                ~2.5M potential users
              </p>
            </div>
          </div>
        </div>

        <Separator />

        <div className="flex justify-between">
          <Button variant="outline" onClick={onBack}>
            Back
          </Button>
          <Button onClick={onNext}>Next</Button>
        </div>
      </Card>
    </div>
  );
};

export default AudienceTargeting;
