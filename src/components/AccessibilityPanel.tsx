import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, Sun, Moon, Type, Eye, Volume2 } from "lucide-react";

interface AccessibilityPanelProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const AccessibilityPanel = ({
  isOpen = true,
  onClose = () => {},
}: AccessibilityPanelProps) => {
  const [fontSize, setFontSize] = useState<number[]>([100]);
  const [contrast, setContrast] = useState<string>("default");
  const [screenReader, setScreenReader] = useState<boolean>(false);
  const [motionReduced, setMotionReduced] = useState<boolean>(false);
  const [soundEffects, setSoundEffects] = useState<boolean>(true);

  if (!isOpen) return null;

  return (
    <div className="fixed right-4 top-20 z-50 w-80 md:w-96 bg-background">
      <Card className="border-2 shadow-lg">
        <CardHeader className="bg-primary/5">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Accessibility Settings
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              ×
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <Tabs defaultValue="text">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="text" className="flex items-center gap-2">
                <Type className="h-4 w-4" />
                Text
              </TabsTrigger>
              <TabsTrigger value="visual" className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                Visual
              </TabsTrigger>
              <TabsTrigger value="audio" className="flex items-center gap-2">
                <Volume2 className="h-4 w-4" />
                Audio
              </TabsTrigger>
            </TabsList>

            <TabsContent value="text" className="space-y-6">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <Label htmlFor="font-size">Font Size: {fontSize[0]}%</Label>
                  </div>
                  <Slider
                    id="font-size"
                    min={75}
                    max={200}
                    step={5}
                    value={fontSize}
                    onValueChange={setFontSize}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="screen-reader">Screen Reader</Label>
                  <Switch
                    id="screen-reader"
                    checked={screenReader}
                    onCheckedChange={setScreenReader}
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="visual" className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant={contrast === "default" ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => setContrast("default")}
                  >
                    <Sun className="mr-2 h-4 w-4" />
                    Standard
                  </Button>
                  <Button
                    variant={contrast === "high" ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => setContrast("high")}
                  >
                    <Moon className="mr-2 h-4 w-4" />
                    High Contrast
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="reduce-motion">Reduce Motion</Label>
                  <Switch
                    id="reduce-motion"
                    checked={motionReduced}
                    onCheckedChange={setMotionReduced}
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="audio" className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="sound-effects">Sound Effects</Label>
                  <Switch
                    id="sound-effects"
                    checked={soundEffects}
                    onCheckedChange={setSoundEffects}
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-6 pt-4 border-t flex justify-end space-x-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button>Save Settings</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccessibilityPanel;
