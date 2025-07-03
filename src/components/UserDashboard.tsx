import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Bell,
  Heart,
  MessageCircle,
  Settings,
  User,
  Users,
} from "lucide-react";
import ChatInterface from "./ChatInterface";

interface Message {
  id: string;
  sender: {
    name: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  read: boolean;
}

interface Match {
  id: string;
  name: string;
  age: number;
  location: string;
  avatar: string;
  bio: string;
  interests: string[];
  compatibility: number;
}

interface UserDashboardProps {
  userName?: string;
  userAvatar?: string;
  matches?: Match[];
  messages?: Message[];
  notifications?: number;
}

const UserDashboard: React.FC<UserDashboardProps> = ({
  userName = "Alex Johnson",
  userAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  matches = [
    {
      id: "1",
      name: "Jamie Smith",
      age: 28,
      location: "Chicago, IL",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jamie",
      bio: "Wheelchair user who loves outdoor adventures and photography. Looking for someone to explore new places with!",
      interests: ["Photography", "Nature", "Travel", "Cooking"],
      compatibility: 85,
    },
    {
      id: "2",
      name: "Taylor Reed",
      age: 32,
      location: "Seattle, WA",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Taylor",
      bio: "Hard of hearing but great at reading lips and expressions. Love art museums, indie films, and trying new restaurants.",
      interests: ["Art", "Movies", "Food", "Reading"],
      compatibility: 78,
    },
    {
      id: "3",
      name: "Jordan Lee",
      age: 26,
      location: "Austin, TX",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan",
      bio: "Visually impaired musician and podcast enthusiast. Looking for someone who appreciates deep conversations and live music.",
      interests: ["Music", "Podcasts", "Philosophy", "Concerts"],
      compatibility: 92,
    },
    {
      id: "4",
      name: "Casey Morgan",
      age: 30,
      location: "Denver, CO",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Casey",
      bio: "Neurodivergent software developer who loves hiking, board games, and my service dog Luna. Looking for understanding and adventure.",
      interests: ["Hiking", "Board Games", "Technology", "Dogs"],
      compatibility: 81,
    },
  ],
  messages = [
    {
      id: "1",
      sender: {
        name: "Jamie Smith",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jamie",
      },
      content:
        "Hey there! I noticed we both love photography. What kind of camera do you use?",
      timestamp: "10:30 AM",
      read: false,
    },
    {
      id: "2",
      sender: {
        name: "Jordan Lee",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan",
      },
      content:
        "I'm going to a concert this weekend. Would you like to join me?",
      timestamp: "Yesterday",
      read: true,
    },
    {
      id: "3",
      sender: {
        name: "Taylor Reed",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Taylor",
      },
      content:
        "Have you seen the new exhibition at the art museum? I think you'd really enjoy it!",
      timestamp: "2 days ago",
      read: true,
    },
  ],
  notifications = 3,
}) => {
  const [activeTab, setActiveTab] = useState("matches");
  const [selectedChat, setSelectedChat] = useState<string | null>(null);

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-20 md:w-64 border-r bg-card flex flex-col items-center md:items-start p-4">
        <div className="flex items-center justify-center md:justify-start w-full mb-8">
          <Avatar className="h-12 w-12">
            <AvatarImage src={userAvatar} alt={userName} />
            <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="hidden md:block ml-3">
            <h3 className="font-medium">{userName}</h3>
            <p className="text-sm text-muted-foreground">Online</p>
          </div>
        </div>

        <nav className="flex flex-col items-center md:items-start space-y-6 w-full">
          <Button
            variant={activeTab === "matches" ? "default" : "ghost"}
            className="w-full justify-center md:justify-start"
            onClick={() => setActiveTab("matches")}
          >
            <Users className="h-5 w-5 md:mr-2" />
            <span className="hidden md:inline">Matches</span>
          </Button>

          <Button
            variant={activeTab === "messages" ? "default" : "ghost"}
            className="w-full justify-center md:justify-start relative"
            onClick={() => {
              setActiveTab("messages");
              setSelectedChat(null);
            }}
          >
            <MessageCircle className="h-5 w-5 md:mr-2" />
            <span className="hidden md:inline">Messages</span>
            {messages.filter((m) => !m.read).length > 0 && (
              <Badge className="absolute -top-1 -right-1 md:right-auto md:left-6 h-5 w-5 p-0 flex items-center justify-center">
                {messages.filter((m) => !m.read).length}
              </Badge>
            )}
          </Button>

          <Button
            variant={activeTab === "notifications" ? "default" : "ghost"}
            className="w-full justify-center md:justify-start relative"
            onClick={() => setActiveTab("notifications")}
          >
            <Bell className="h-5 w-5 md:mr-2" />
            <span className="hidden md:inline">Notifications</span>
            {notifications > 0 && (
              <Badge className="absolute -top-1 -right-1 md:right-auto md:left-6 h-5 w-5 p-0 flex items-center justify-center">
                {notifications}
              </Badge>
            )}
          </Button>

          <Button
            variant={activeTab === "profile" ? "default" : "ghost"}
            className="w-full justify-center md:justify-start"
            onClick={() => setActiveTab("profile")}
          >
            <User className="h-5 w-5 md:mr-2" />
            <span className="hidden md:inline">Profile</span>
          </Button>

          <Button
            variant={activeTab === "settings" ? "default" : "ghost"}
            className="w-full justify-center md:justify-start"
            onClick={() => setActiveTab("settings")}
          >
            <Settings className="h-5 w-5 md:mr-2" />
            <span className="hidden md:inline">Settings</span>
          </Button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <Tabs value={activeTab} className="w-full">
          {/* Matches Tab */}
          <TabsContent value="matches" className="p-4 md:p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Your Matches</h1>
              <Button variant="outline">Filter Matches</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {matches.map((match) => (
                <Card key={match.id} className="overflow-hidden">
                  <CardHeader className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center">
                        <Avatar className="h-12 w-12 mr-3">
                          <AvatarImage src={match.avatar} alt={match.name} />
                          <AvatarFallback>
                            {match.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">
                            {match.name}, {match.age}
                          </CardTitle>
                          <CardDescription>{match.location}</CardDescription>
                        </div>
                      </div>
                      <Badge variant="secondary">
                        {match.compatibility}% Match
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm mb-3">{match.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {match.interests.map((interest, i) => (
                        <Badge key={i} variant="outline">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4 pt-0">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setActiveTab("messages");
                        setSelectedChat(match.id);
                      }}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Message
                    </Button>
                    <Button size="sm">
                      <Heart className="h-4 w-4 mr-2" />
                      Like Profile
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Messages Tab */}
          <TabsContent value="messages" className="h-[calc(100vh-2rem)]">
            {selectedChat ? (
              <ChatInterface
                recipientId={selectedChat}
                recipientName={
                  matches.find((m) => m.id === selectedChat)?.name || ""
                }
                recipientAvatar={
                  matches.find((m) => m.id === selectedChat)?.avatar || ""
                }
                onBack={() => setSelectedChat(null)}
              />
            ) : (
              <div className="h-full flex flex-col">
                <div className="p-4 border-b">
                  <h1 className="text-2xl font-bold">Messages</h1>
                </div>
                <ScrollArea className="flex-1">
                  {messages.length > 0 ? (
                    messages.map((message) => (
                      <div
                        key={message.id}
                        className={`p-4 border-b hover:bg-accent/10 cursor-pointer ${!message.read ? "bg-accent/5" : ""}`}
                        onClick={() => {
                          const matchId =
                            matches.find(
                              (m) => m.sender?.name === message.sender.name,
                            )?.id || message.id;
                          setSelectedChat(matchId);
                        }}
                      >
                        <div className="flex items-center">
                          <Avatar className="h-10 w-10 mr-3">
                            <AvatarImage
                              src={message.sender.avatar}
                              alt={message.sender.name}
                            />
                            <AvatarFallback>
                              {message.sender.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex justify-between items-center">
                              <h3 className="font-medium">
                                {message.sender.name}
                              </h3>
                              <span className="text-xs text-muted-foreground">
                                {message.timestamp}
                              </span>
                            </div>
                            <p className="text-sm truncate">
                              {message.content}
                            </p>
                          </div>
                          {!message.read && (
                            <Badge className="ml-2 h-2 w-2 rounded-full p-0" />
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                      <MessageCircle className="h-12 w-12 text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium mb-2">
                        No messages yet
                      </h3>
                      <p className="text-muted-foreground">
                        When you connect with matches, your conversations will
                        appear here.
                      </p>
                    </div>
                  )}
                </ScrollArea>
              </div>
            )}
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="p-4 md:p-6">
            <h1 className="text-2xl font-bold mb-6">Notifications</h1>
            <ScrollArea className="h-[calc(100vh-10rem)]">
              <div className="space-y-4">
                <Card>
                  <CardHeader className="p-4">
                    <div className="flex items-center">
                      <Badge className="h-2 w-2 rounded-full p-0 mr-3" />
                      <CardTitle className="text-base">New Match!</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p>
                      You and Jordan Lee have matched! Why not send them a
                      message?
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button size="sm" variant="outline" className="mr-2">
                      View Profile
                    </Button>
                    <Button size="sm">Send Message</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="p-4">
                    <div className="flex items-center">
                      <Badge className="h-2 w-2 rounded-full p-0 mr-3" />
                      <CardTitle className="text-base">
                        Profile Visitor
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p>
                      Taylor Reed viewed your profile. Check out their profile
                      to see if you're interested!
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button size="sm">View Profile</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-base">
                      Accessibility Tip
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p>
                      Did you know you can customize text size and contrast in
                      your accessibility settings?
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button size="sm" variant="outline">
                      Adjust Settings
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </ScrollArea>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="p-4 md:p-6">
            <h1 className="text-2xl font-bold mb-6">Your Profile</h1>
            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <Avatar className="h-20 w-20 mr-4">
                    <AvatarImage src={userAvatar} alt={userName} />
                    <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-xl">{userName}, 29</CardTitle>
                    <CardDescription>Portland, OR</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">About Me</h3>
                    <p>
                      I'm a software engineer who loves hiking, photography, and
                      trying new restaurants. I have a hearing impairment and
                      use hearing aids, but I'm excellent at reading lips and
                      expressions.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Hiking",
                        "Photography",
                        "Cooking",
                        "Technology",
                        "Travel",
                        "Reading",
                      ].map((interest, i) => (
                        <Badge key={i} variant="outline">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Accessibility Needs</h3>
                    <p>
                      I prefer text-based communication or well-lit environments
                      for video calls to help with lip reading.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="mr-2">Edit Profile</Button>
                <Button variant="outline">Preview Profile</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="p-4 md:p-6">
            <h1 className="text-2xl font-bold mb-6">Settings</h1>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Accessibility Settings</CardTitle>
                <CardDescription>
                  Customize your experience to meet your accessibility needs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Text Size</h3>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      A-
                    </Button>
                    <Button variant="outline" size="sm">
                      A
                    </Button>
                    <Button variant="default" size="sm">
                      A+
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Contrast</h3>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      Default
                    </Button>
                    <Button variant="default" size="sm">
                      High Contrast
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">
                    Screen Reader Compatibility
                  </h3>
                  <Button variant="outline">Optimize for Screen Readers</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Email Notifications</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>New matches</span>
                      <Button variant="outline" size="sm">
                        On
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>New messages</span>
                      <Button variant="outline" size="sm">
                        On
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Profile visitors</span>
                      <Button variant="outline" size="sm">
                        Off
                      </Button>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-medium mb-2">Privacy</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Show my profile to</span>
                      <Button variant="outline" size="sm">
                        Everyone
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Show my disability information</span>
                      <Button variant="outline" size="sm">
                        Matches Only
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UserDashboard;
