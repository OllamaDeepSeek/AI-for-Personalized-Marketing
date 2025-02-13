import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Plus, BarChart3, Target, Zap, TrendingUp } from "lucide-react";

interface CampaignMetric {
  label: string;
  value: string;
  change: number;
  icon: React.ReactNode;
}

interface QuickAction {
  label: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
}

interface CampaignOverviewProps {
  metrics?: CampaignMetric[];
  quickActions?: QuickAction[];
  onCreateCampaign?: () => void;
  onGenerateContent?: () => void;
}

const CampaignOverview = ({
  metrics = [
    {
      label: "Active Campaigns",
      value: "12",
      change: 8.2,
      icon: <BarChart3 className="h-4 w-4" />,
    },
    {
      label: "Audience Reach",
      value: "2.4M",
      change: 12.5,
      icon: <Target className="h-4 w-4" />,
    },
    {
      label: "Engagement Rate",
      value: "24.8%",
      change: -2.4,
      icon: <Zap className="h-4 w-4" />,
    },
    {
      label: "Conversion Rate",
      value: "3.2%",
      change: 5.1,
      icon: <TrendingUp className="h-4 w-4" />,
    },
  ],
  quickActions = [
    {
      label: "Create Campaign",
      description: "Launch a new AI-powered campaign",
      icon: <Plus className="h-5 w-5" />,
      onClick: () => {},
    },
    {
      label: "Generate Content",
      description: "Create AI-optimized marketing content",
      icon: <Zap className="h-5 w-5" />,
      onClick: () => {},
    },
  ],
  onCreateCampaign = () => {},
  onGenerateContent = () => {},
}: CampaignOverviewProps) => {
  return (
    <div className="w-full h-full bg-background p-6 space-y-6">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index} className="p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                {metric.label}
              </span>
              {metric.icon}
            </div>
            <div className="flex items-baseline justify-between">
              <h3 className="text-2xl font-semibold">{metric.value}</h3>
              <Badge variant={metric.change > 0 ? "default" : "destructive"}>
                {metric.change > 0 ? "+" : ""}
                {metric.change}%
              </Badge>
            </div>
            <Progress value={Math.abs(metric.change)} className="h-1" />
          </Card>
        ))}
      </div>

      <Separator />

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {quickActions.map((action, index) => (
          <Card
            key={index}
            className="p-6 hover:bg-accent/50 cursor-pointer transition-colors"
            onClick={action.onClick}
          >
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-primary/10 rounded-lg">{action.icon}</div>
              <div className="space-y-1">
                <h3 className="font-medium">{action.label}</h3>
                <p className="text-sm text-muted-foreground">
                  {action.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Campaign Progress */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium">Campaign Progress</h3>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Q4 Product Launch</span>
              <span>75%</span>
            </div>
            <Progress value={75} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Holiday Campaign</span>
              <span>45%</span>
            </div>
            <Progress value={45} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Brand Awareness</span>
              <span>90%</span>
            </div>
            <Progress value={90} className="h-2" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CampaignOverview;
