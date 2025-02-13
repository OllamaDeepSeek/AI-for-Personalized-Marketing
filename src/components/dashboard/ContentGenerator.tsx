import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sparkles,
  Copy,
  Wand2,
  Type,
  Image,
  MessageSquare,
} from "lucide-react";

interface ContentGeneratorProps {
  onGenerate?: (params: any) => void;
  onSave?: (content: string) => void;
  isGenerating?: boolean;
  generatedContent?: string[];
}

const ContentGenerator = ({
  onGenerate = () => {},
  onSave = () => {},
  isGenerating = false,
  generatedContent = [
    "Discover the power of AI-driven marketing with our revolutionary campaign tools.",
    "Transform your marketing strategy with data-driven insights and personalized content.",
    "Elevate your brand's presence through intelligent automation and targeted messaging.",
  ],
}: ContentGeneratorProps) => {
  return (
    <div className="w-full h-full bg-background p-6">
      <Card className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wand2 className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">AI Content Generator</h2>
          </div>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Sparkles className="h-4 w-4" />
            AI Powered
          </Badge>
        </div>

        <Separator />

        <Tabs defaultValue="text" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="text" className="flex items-center gap-2">
              <Type className="h-4 w-4" /> Text
            </TabsTrigger>
            <TabsTrigger value="image" className="flex items-center gap-2">
              <Image className="h-4 w-4" /> Image
            </TabsTrigger>
            <TabsTrigger value="social" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" /> Social
            </TabsTrigger>
          </TabsList>

          <TabsContent value="text" className="space-y-4">
            <div className="space-y-4">
              <Select defaultValue="blog">
                <SelectTrigger>
                  <SelectValue placeholder="Select content type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="blog">Blog Post</SelectItem>
                  <SelectItem value="email">Email Campaign</SelectItem>
                  <SelectItem value="ad">Ad Copy</SelectItem>
                </SelectContent>
              </Select>

              <Textarea
                placeholder="Enter your content brief or keywords..."
                className="min-h-[100px]"
              />
            </div>
          </TabsContent>

          <TabsContent value="image" className="space-y-4">
            <div className="space-y-4">
              <Select defaultValue="banner">
                <SelectTrigger>
                  <SelectValue placeholder="Select image type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="banner">Social Banner</SelectItem>
                  <SelectItem value="ad">Ad Creative</SelectItem>
                  <SelectItem value="post">Social Post</SelectItem>
                </SelectContent>
              </Select>

              <Textarea
                placeholder="Describe the image you want to generate..."
                className="min-h-[100px]"
              />
            </div>
          </TabsContent>

          <TabsContent value="social" className="space-y-4">
            <div className="space-y-4">
              <Select defaultValue="twitter">
                <SelectTrigger>
                  <SelectValue placeholder="Select platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="twitter">Twitter</SelectItem>
                  <SelectItem value="linkedin">LinkedIn</SelectItem>
                  <SelectItem value="facebook">Facebook</SelectItem>
                </SelectContent>
              </Select>

              <Textarea
                placeholder="What would you like to post about?"
                className="min-h-[100px]"
              />
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end gap-2">
          <Button variant="outline" disabled={isGenerating}>
            Clear
          </Button>
          <Button
            onClick={() => onGenerate({})}
            disabled={isGenerating}
            className="flex items-center gap-2"
          >
            {isGenerating ? "Generating..." : "Generate"}
            <Sparkles className="h-4 w-4" />
          </Button>
        </div>

        {generatedContent.length > 0 && (
          <div className="space-y-4">
            <Separator />
            <h3 className="text-lg font-medium">Generated Content</h3>
            <ScrollArea className="h-[200px] rounded-md border p-4">
              <div className="space-y-4">
                {generatedContent.map((content, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-secondary/10 relative group"
                  >
                    <p className="pr-8">{content}</p>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => onSave(content)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        )}
      </Card>
    </div>
  );
};

export default ContentGenerator;
