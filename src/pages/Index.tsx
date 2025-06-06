
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Clock, Users, FileText, Smartphone, Brain, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              WillWise
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => navigate('/pricing')}>
              Pricing
            </Button>
            <Button onClick={() => navigate('/onboarding')} className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
              Start Your Will
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100">
            <Brain className="w-4 h-4 mr-2" />
            AI-Powered Estate Planning
          </Badge>
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Create Your Digital Will in{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              15 Minutes
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Estate planning shouldn't feel like hiring a lawyer. WillWise uses AI to guide you through 
            creating a comprehensive digital will that covers everything from crypto wallets to social accounts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/onboarding')} 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-lg px-8 py-4"
            >
              <Heart className="w-5 h-5 mr-2" />
              Get Peace of Mind Today
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              <Clock className="w-5 h-5 mr-2" />
              Watch 2-Min Demo
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No hidden fees • 256-bit encryption • HIPAA compliant
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">Built for the Internet Generation</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Finally, estate planning that understands your digital life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle>AI-Guided Process</CardTitle>
              <CardDescription>
                Natural language questions that adapt to your situation. No legal jargon, just human conversation.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle>Digital Asset Coverage</CardTitle>
              <CardDescription>
                Crypto wallets, cloud accounts, subscriptions, social media - everything your lawyer doesn't understand.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle>Bank-Level Security</CardTitle>
              <CardDescription>
                End-to-end encryption, secure cloud storage, and emergency access protocols you can trust.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <CardTitle>15-Minute Setup</CardTitle>
              <CardDescription>
                Complete your will in one coffee break. Update it anytime. No appointments, no billable hours.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-red-600" />
              </div>
              <CardTitle>Family-Friendly</CardTitle>
              <CardDescription>
                Share access with trusted family members. Emergency protocols that actually work when needed.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-indigo-600" />
              </div>
              <CardTitle>Legal Compliance</CardTitle>
              <CardDescription>
                State-specific templates that hold up in court. Reviewed by estate planning attorneys.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-white/50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Join Thousands Who've Found Peace of Mind</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full mr-1"></div>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Finally, estate planning that doesn't make me want to hide under a rock. The AI actually 
                  understood my crypto situation better than my accountant."
                </p>
                <div className="font-semibold">Sarah K., Software Engineer</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full mr-1"></div>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "I've been putting this off for years. WillWise made it so simple, I actually finished 
                  it during my lunch break. My wife is finally off my case!"
                </p>
                <div className="font-semibold">Mike R., Startup Founder</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full mr-1"></div>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "The digital assets section was a game-changer. It covered things I didn't even know 
                  I needed to plan for. Worth every penny."
                </p>
                <div className="font-semibold">Alex T., Product Manager</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Get This Off Your Plate?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join the thousands who've already secured their digital legacy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/onboarding')}
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
            >
              Start Your Will Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-4"
              onClick={() => navigate('/pricing')}
            >
              View Pricing
            </Button>
          </div>
          <div className="flex items-center justify-center mt-8 space-x-6 text-sm opacity-80">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              15-minute completion
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              Bank-level security
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              30-day money back
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-green-600 rounded-md flex items-center justify-center">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-lg">WillWise</span>
              </div>
              <p className="text-gray-600 text-sm">
                Modern estate planning for the internet generation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">How it works</a></li>
                <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-600">Security</a></li>
                <li><a href="#" className="hover:text-blue-600">Legal compliance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Estate planning guide</a></li>
                <li><a href="#" className="hover:text-blue-600">Digital assets checklist</a></li>
                <li><a href="#" className="hover:text-blue-600">Blog</a></li>
                <li><a href="#" className="hover:text-blue-600">Help center</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">About</a></li>
                <li><a href="#" className="hover:text-blue-600">Privacy</a></li>
                <li><a href="#" className="hover:text-blue-600">Terms</a></li>
                <li><a href="#" className="hover:text-blue-600">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
            <p>&copy; 2024 WillWise. All rights reserved. | Making estate planning human again.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
