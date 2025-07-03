import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Heart,
  Users,
  Shield,
  Accessibility,
  MessageCircle,
  Video,
  Volume2,
} from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">ConnectHeart</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#features"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Features
            </a>
            <a
              href="#stories"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Success Stories
            </a>
            <a
              href="#accessibility"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Accessibility
            </a>
            <Button variant="outline" className="mr-2">
              Sign In
            </Button>
            <Button>Join Now</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-4xl">
          <Badge variant="secondary" className="mb-4">
            Inclusive • Accessible • Meaningful
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Find Love That <span className="text-primary">Understands</span> You
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            The first dating platform designed specifically for people with
            disabilities. Connect with others who share your experiences and
            build meaningful relationships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3">
              Start Your Journey
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Built for Everyone</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our platform prioritizes accessibility and inclusion, ensuring
              everyone can find meaningful connections.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Accessibility className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Fully Accessible</CardTitle>
                <CardDescription>
                  Screen reader compatible, keyboard navigation, customizable
                  text sizes, and high contrast options.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Smart Matching</CardTitle>
                <CardDescription>
                  Advanced algorithms consider accessibility needs, shared
                  interests, and compatibility factors.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Flexible Communication</CardTitle>
                <CardDescription>
                  Text chat, voice messages, video calls, and text-to-speech
                  functionality for all communication styles.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Safe & Secure</CardTitle>
                <CardDescription>
                  Verified profiles, privacy controls, and a supportive
                  community focused on respect and understanding.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Video className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Multiple Formats</CardTitle>
                <CardDescription>
                  Express yourself through photos, videos, voice recordings, or
                  detailed written profiles.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Volume2 className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Audio Support</CardTitle>
                <CardDescription>
                  Full audio descriptions, voice navigation, and audio-first
                  interaction options available.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="stories" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Real Stories, Real Love</h3>
            <p className="text-muted-foreground text-lg">
              Hear from couples who found their perfect match on ConnectHeart
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-primary/5">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=sarah"
                    alt="Sarah's avatar"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Sarah & Mike</h4>
                    <p className="text-sm text-muted-foreground">
                      Together 2 years
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Finally found someone who truly understands my journey. The
                  accessibility features made it so easy to connect
                  authentically."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary/5">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=alex"
                    alt="Alex's avatar"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Alex & Jordan</h4>
                    <p className="text-sm text-muted-foreground">Engaged</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "The voice message feature was perfect for us. We talked for
                  hours before meeting, and it felt so natural and comfortable."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary/5">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=emma"
                    alt="Emma's avatar"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Emma & Chris</h4>
                    <p className="text-sm text-muted-foreground">Married</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "ConnectHeart showed us that love doesn't have barriers. We're
                  proof that the right person is out there for everyone."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Accessibility Commitment Section */}
      <section id="accessibility" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <Accessibility className="h-16 w-16 text-primary mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-6">Our Accessibility Promise</h3>
          <p className="text-lg text-muted-foreground mb-8">
            We believe love should be accessible to everyone. Our platform meets
            WCAG 2.1 AA standards and is continuously improved based on
            community feedback.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Visual Accessibility</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• High contrast color schemes</li>
                <li>• Customizable font sizes</li>
                <li>• Screen reader optimization</li>
                <li>• Alternative text for all images</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Motor & Cognitive</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Full keyboard navigation</li>
                <li>• Voice control support</li>
                <li>• Simple, clear interface design</li>
                <li>• Customizable interaction methods</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Find Your Perfect Match?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of people who have found love, friendship, and
            understanding on ConnectHeart.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Create Free Account
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Browse Success Stories
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 text-primary" />
                <h4 className="font-bold">ConnectHeart</h4>
              </div>
              <p className="text-muted-foreground text-sm">
                Connecting hearts, understanding souls. The inclusive dating
                platform for everyone.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Platform</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Safety
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Community
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Accessibility</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Accessibility Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Screen Reader Help
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Keyboard Navigation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Report Issues
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>
              &copy; 2024 ConnectHeart. All rights reserved. Built with
              accessibility and love.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
