import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Mic,
  Video,
  Send,
  Volume2,
  Settings,
  MessageSquare,
} from "lucide-react";

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: Date;
  isCurrentUser: boolean;
  type: "text" | "voice" | "video";
}

interface ChatInterfaceProps {
  recipientId?: string;
  recipientName?: string;
  recipientAvatar?: string;
  initialMessages?: Message[];
}

const ChatInterface = ({
  recipientId = "1",
  recipientName = "Alex Johnson",
  recipientAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  initialMessages = [
    {
      id: "1",
      sender: "Alex Johnson",
      content: "Hi there! How are you doing today?",
      timestamp: new Date(Date.now() - 3600000),
      isCurrentUser: false,
      type: "text",
    },
    {
      id: "2",
      sender: "You",
      content: "I'm doing great! Thanks for asking. How about you?",
      timestamp: new Date(Date.now() - 1800000),
      isCurrentUser: true,
      type: "text",
    },
    {
      id: "3",
      sender: "Alex Johnson",
      content:
        "I'm good too! Would you like to chat more about our shared interests?",
      timestamp: new Date(Date.now() - 900000),
      isCurrentUser: false,
      type: "text",
    },
  ],
}: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isVideoCall, setIsVideoCall] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [textToSpeechEnabled, setTextToSpeechEnabled] = useState(false);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now().toString(),
        sender: "You",
        content: newMessage,
        timestamp: new Date(),
        isCurrentUser: true,
        type: "text",
      };

      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // In a real implementation, this would start/stop voice recording
  };

  const toggleVideoCall = () => {
    setIsVideoCall(!isVideoCall);
    // In a real implementation, this would initiate/end a video call
  };

  const handleFontSizeChange = (value: number[]) => {
    setFontSize(value[0]);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="flex flex-col h-full bg-background border rounded-lg shadow-md">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src={recipientAvatar} alt={recipientName} />
            <AvatarFallback>{recipientName.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-medium">{recipientName}</h3>
            <p className="text-xs text-muted-foreground">Online</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon" onClick={toggleVideoCall}>
            <Video className={`h-5 w-5 ${isVideoCall ? "text-primary" : ""}`} />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Video Call Area (conditionally rendered) */}
      {isVideoCall && (
        <div className="relative h-64 bg-muted flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
              alt="Video placeholder"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-4 right-4 w-32 h-24 bg-background rounded-lg overflow-hidden border-2 border-primary">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
              alt="Self view"
              className="w-full h-full object-cover"
            />
          </div>
          <Button
            variant="destructive"
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
            onClick={toggleVideoCall}
          >
            End Call
          </Button>
        </div>
      )}

      {/* Messages Area */}
      <div
        className="flex-1 p-4 overflow-y-auto space-y-4"
        style={{ fontSize: `${fontSize}px` }}
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isCurrentUser ? "justify-end" : "justify-start"}`}
          >
            <div className="flex items-end space-x-2">
              {!message.isCurrentUser && (
                <Avatar className="w-8 h-8">
                  <AvatarImage src={recipientAvatar} alt={recipientName} />
                  <AvatarFallback>{recipientName.charAt(0)}</AvatarFallback>
                </Avatar>
              )}
              <div>
                <Card
                  className={`max-w-xs sm:max-w-md ${message.isCurrentUser ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                >
                  <CardContent className="p-3">
                    {message.type === "text" ? (
                      <p>{message.content}</p>
                    ) : message.type === "voice" ? (
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon">
                          <Volume2 className="h-4 w-4" />
                        </Button>
                        <div className="h-1 flex-1 bg-gray-300 rounded-full">
                          <div className="h-1 w-1/3 bg-primary rounded-full"></div>
                        </div>
                        <span className="text-xs">0:12</span>
                      </div>
                    ) : (
                      <div className="flex justify-center">
                        <Button variant="outline">View Video Message</Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
                <p className="text-xs text-muted-foreground mt-1">
                  {formatTime(message.timestamp)}
                </p>
              </div>
              {message.isCurrentUser && (
                <Avatar className="w-8 h-8">
                  <AvatarImage
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=You"
                    alt="You"
                  />
                  <AvatarFallback>Y</AvatarFallback>
                </Avatar>
              )}
            </div>
          </div>
        ))}
        {isRecording && (
          <div className="flex justify-center">
            <Card className="bg-red-50 p-2">
              <CardContent className="flex items-center space-x-2 p-1">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <p className="text-sm">Recording voice message...</p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Accessibility Settings */}
      <div className="border-t p-2">
        <Tabs defaultValue="settings">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="settings">Accessibility</TabsTrigger>
            <TabsTrigger value="chat">Chat</TabsTrigger>
          </TabsList>
          <TabsContent value="settings" className="p-2 space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="font-size">Font Size: {fontSize}px</Label>
              </div>
              <Slider
                id="font-size"
                min={12}
                max={24}
                step={1}
                defaultValue={[fontSize]}
                onValueChange={handleFontSizeChange}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="text-to-speech"
                checked={textToSpeechEnabled}
                onCheckedChange={setTextToSpeechEnabled}
              />
              <Label htmlFor="text-to-speech">Text-to-Speech</Label>
            </div>
          </TabsContent>
          <TabsContent value="chat" className="p-2">
            {/* Message Input Area */}
            <div className="flex items-end space-x-2">
              <Textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type a message..."
                className="flex-1 min-h-[80px] resize-none"
              />
              <div className="flex flex-col space-y-2">
                <Button
                  variant={isRecording ? "destructive" : "outline"}
                  size="icon"
                  onClick={toggleRecording}
                >
                  <Mic className="h-4 w-4" />
                </Button>
                <Button
                  variant="default"
                  size="icon"
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ChatInterface;
