import React from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LineChart,
  BarChart,
  PieChart,
  ArrowUpRight,
  ArrowDownRight,
  Download,
} from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  trend: "up" | "down";
}

const MetricCard = ({
  title = "Metric",
  value = "0",
  change = 0,
  trend = "up",
}: MetricCardProps) => {
  return (
    <Card className="p-4 space-y-2">
      <p className="text-sm text-muted-foreground">{title}</p>
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">{value}</h3>
        <div
          className={`flex items-center ${trend === "up" ? "text-green-500" : "text-red-500"}`}
        >
          {trend === "up" ? (
            <ArrowUpRight className="h-4 w-4" />
          ) : (
            <ArrowDownRight className="h-4 w-4" />
          )}
          <span className="text-sm">{Math.abs(change)}%</span>
        </div>
      </div>
    </Card>
  );
};

interface PerformanceMetricsProps {
  metrics?: {
    impressions: number;
    clicks: number;
    conversions: number;
    revenue: number;
  };
}

const PerformanceMetrics = ({
  metrics = {
    impressions: 125000,
    clicks: 25000,
    conversions: 1200,
    revenue: 45000,
  },
}: PerformanceMetricsProps) => {
  return (
    <div className="w-full h-full bg-background p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Performance Metrics</h2>
          <p className="text-muted-foreground">Campaign performance overview</p>
        </div>
        <div className="flex items-center gap-4">
          <Select defaultValue="7d">
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">Last 24 hours</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Total Impressions"
          value={metrics.impressions.toLocaleString()}
          change={12.5}
          trend="up"
        />
        <MetricCard
          title="Total Clicks"
          value={metrics.clicks.toLocaleString()}
          change={8.2}
          trend="up"
        />
        <MetricCard
          title="Conversions"
          value={metrics.conversions.toLocaleString()}
          change={-2.4}
          trend="down"
        />
        <MetricCard
          title="Revenue"
          value={`$${metrics.revenue.toLocaleString()}`}
          change={15.7}
          trend="up"
        />
      </div>

      <Card className="p-6">
        <Tabs defaultValue="overview" className="space-y-4">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="demographics">Demographics</TabsTrigger>
              <TabsTrigger value="channels">Channels</TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <LineChart className="h-4 w-4 mr-2" />
                Line
              </Button>
              <Button variant="outline" size="sm">
                <BarChart className="h-4 w-4 mr-2" />
                Bar
              </Button>
              <Button variant="outline" size="sm">
                <PieChart className="h-4 w-4 mr-2" />
                Pie
              </Button>
            </div>
          </div>

          <TabsContent value="overview" className="space-y-4">
            <div className="h-[400px] bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">
                Chart visualization placeholder
              </p>
            </div>
          </TabsContent>

          <TabsContent value="demographics" className="space-y-4">
            <div className="h-[400px] bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">
                Demographics data visualization placeholder
              </p>
            </div>
          </TabsContent>

          <TabsContent value="channels" className="space-y-4">
            <div className="h-[400px] bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">
                Channel performance visualization placeholder
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default PerformanceMetrics;
