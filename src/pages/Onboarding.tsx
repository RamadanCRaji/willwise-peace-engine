
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, FileText, Heart, Brain, CheckCircle, Users, Smartphone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    location: "",
    maritalStatus: "",
    children: "",
    assets: [],
    digitalAssets: [],
    concerns: "",
    timeline: ""
  });

  const totalSteps = 6;
  const progress = (currentStep / totalSteps) * 100;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/will-builder');
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Let's start with the basics</h2>
              <p className="text-gray-600">Just a few quick questions to personalize your experience</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => updateFormData('name', e.target.value)}
                  placeholder="Your full legal name"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  placeholder="your@email.com"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  value={formData.age}
                  onChange={(e) => updateFormData('age', e.target.value)}
                  placeholder="25"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="location">Location (State)</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => updateFormData('location', e.target.value)}
                  placeholder="California"
                  className="mt-2"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Tell us about your family</h2>
              <p className="text-gray-600">This helps us understand who's important in your life</p>
            </div>

            <div className="space-y-6">
              <div>
                <Label htmlFor="maritalStatus">Marital Status</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
                  {['Single', 'Married', 'Divorced', 'Widowed'].map((status) => (
                    <Button
                      key={status}
                      variant={formData.maritalStatus === status ? "default" : "outline"}
                      onClick={() => updateFormData('maritalStatus', status)}
                      className="h-12"
                    >
                      {status}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="children">Do you have children?</Label>
                <div className="grid grid-cols-3 gap-3 mt-2">
                  {['No children', '1-2 children', '3+ children'].map((option) => (
                    <Button
                      key={option}
                      variant={formData.children === option ? "default" : "outline"}
                      onClick={() => updateFormData('children', option)}
                      className="h-12"
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-2">What digital assets do you have?</h2>
              <p className="text-gray-600">Select all that apply - don't worry if you're not sure about some</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: 'Cryptocurrency wallets', icon: '₿' },
                { name: 'Social media accounts', icon: '📱' },
                { name: 'Cloud storage (Google, Dropbox)', icon: '☁️' },
                { name: 'Domain names', icon: '🌐' },
                { name: 'Online business accounts', icon: '💼' },
                { name: 'Subscription services', icon: '📺' },
                { name: 'Photo libraries', icon: '📸' },
                { name: 'Email accounts', icon: '✉️' },
                { name: 'Investment apps', icon: '📈' },
                { name: 'Gaming accounts', icon: '🎮' },
                { name: 'NFTs', icon: '🎨' },
                { name: 'Other digital assets', icon: '💾' }
              ].map((asset) => (
                <Button
                  key={asset.name}
                  variant={formData.digitalAssets.includes(asset.name) ? "default" : "outline"}
                  onClick={() => {
                    const current = formData.digitalAssets;
                    if (current.includes(asset.name)) {
                      updateFormData('digitalAssets', current.filter(a => a !== asset.name));
                    } else {
                      updateFormData('digitalAssets', [...current, asset.name]);
                    }
                  }}
                  className="h-16 flex flex-col items-center justify-center text-sm"
                >
                  <span className="text-2xl mb-1">{asset.icon}</span>
                  {asset.name}
                </Button>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-2">What's your biggest concern?</h2>
              <p className="text-gray-600">This helps us prioritize what matters most to you</p>
            </div>

            <div className="grid gap-4">
              {[
                'Making sure my family can access my accounts',
                'Protecting my cryptocurrency investments',
                'Keeping my business running smoothly',
                'Ensuring my children are taken care of',
                'Managing my digital subscriptions and accounts',
                'Preserving my digital memories and photos',
                'Something else'
              ].map((concern) => (
                <Button
                  key={concern}
                  variant={formData.concerns === concern ? "default" : "outline"}
                  onClick={() => updateFormData('concerns', concern)}
                  className="h-16 text-left justify-start p-6"
                >
                  {concern}
                </Button>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Almost there! Any special instructions?</h2>
              <p className="text-gray-600">Tell us anything else we should know about your situation</p>
            </div>

            <div>
              <Label htmlFor="timeline">When do you want this completed by?</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
                {['Today', 'This week', 'This month', 'No rush'].map((time) => (
                  <Button
                    key={time}
                    variant={formData.timeline === time ? "default" : "outline"}
                    onClick={() => updateFormData('timeline', time)}
                    className="h-12"
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="additional">Any additional thoughts or special circumstances?</Label>
              <Textarea
                id="additional"
                value={formData.concerns}
                onChange={(e) => updateFormData('concerns', e.target.value)}
                placeholder="e.g., I have a complex crypto portfolio, I run an online business, I have specific wishes about my social media..."
                className="mt-2 h-24"
              />
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Perfect! We're ready to build your will</h2>
              <p className="text-gray-600">Based on your answers, here's what we'll include</p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6">
              <h3 className="font-semibold mb-4">Your Personalized Will Will Include:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span className="text-sm">Basic estate distribution</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span className="text-sm">Digital assets management</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span className="text-sm">Emergency contact protocols</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span className="text-sm">Account access instructions</span>
                </div>
                {formData.children && formData.children !== 'No children' && (
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-sm">Guardianship provisions</span>
                  </div>
                )}
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span className="text-sm">State-specific legal compliance</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Brain className="w-5 h-5 text-yellow-600" />
                <span className="font-medium text-yellow-800">AI-Powered Personalization</span>
              </div>
              <p className="text-sm text-yellow-700">
                Our AI will generate personalized clauses based on your specific situation, 
                including your {formData.digitalAssets.length} digital assets and your concern about "{formData.concerns}".
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" onClick={() => navigate('/')} className="mr-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-green-600 rounded-md flex items-center justify-center">
              <FileText className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg">WillWise</span>
          </div>
          <Badge variant="outline">
            Step {currentStep} of {totalSteps}
          </Badge>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white/50 px-6 py-3">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Progress</span>
            <span className="text-sm text-gray-600">{Math.round(progress)}% complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <div className="flex items-center justify-center space-x-2 mb-4">
                {[...Array(totalSteps)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i + 1 <= currentStep
                        ? 'bg-gradient-to-r from-blue-600 to-green-600'
                        : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              {renderStep()}

              <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="px-6"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
                <Button
                  onClick={nextStep}
                  className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 px-6"
                >
                  {currentStep === totalSteps ? 'Create My Will' : 'Continue'}
                  {currentStep !== totalSteps && <ArrowRight className="w-4 h-4 ml-2" />}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
