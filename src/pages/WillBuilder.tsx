
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, FileText, Download, Share, Eye, Brain, Shield, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WillBuilder = () => {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [willData, setWillData] = useState({
    executor: "",
    beneficiaries: "",
    assets: "",
    digitalInstructions: "",
    guardianship: "",
    specialWishes: ""
  });

  const totalSections = 6;
  const progress = (currentSection / totalSections) * 100;

  const generateWill = async () => {
    setIsGenerating(true);
    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsGenerating(false);
    // In a real app, this would call OpenAI API
    console.log("Will generated with data:", willData);
  };

  const updateWillData = (field: string, value: string) => {
    setWillData(prev => ({ ...prev, [field]: value }));
  };

  const renderSection = () => {
    switch (currentSection) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Who will execute your will?</h2>
              <p className="text-gray-600">Choose someone you trust to carry out your wishes</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="executor">Executor (Primary)</Label>
                <Input
                  id="executor"
                  value={willData.executor}
                  onChange={(e) => updateWillData('executor', e.target.value)}
                  placeholder="Full name of your primary executor"
                  className="mt-2"
                />
                <p className="text-sm text-gray-500 mt-1">
                  This person will be responsible for distributing your assets and handling legal matters
                </p>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Brain className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-blue-900 mb-1">AI Recommendation</h4>
                    <p className="text-sm text-blue-700">
                      Choose someone who is organized, trustworthy, and preferably younger than you. 
                      Consider naming an alternate executor as well.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Who are your beneficiaries?</h2>
              <p className="text-gray-600">List the people or organizations who will inherit your assets</p>
            </div>
            
            <div>
              <Label htmlFor="beneficiaries">Beneficiaries and Allocations</Label>
              <Textarea
                id="beneficiaries"
                value={willData.beneficiaries}
                onChange={(e) => updateWillData('beneficiaries', e.target.value)}
                placeholder="e.g., Sarah Johnson (spouse) - 60%, Michael Johnson (son) - 20%, Emily Johnson (daughter) - 20%"
                className="mt-2 h-32"
              />
              <p className="text-sm text-gray-500 mt-1">
                Include full names and relationships, along with percentage or specific asset allocations
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Brain className="w-5 h-5 text-green-600 mt-1" />
                <div>
                  <h4 className="font-medium text-green-900 mb-1">AI Suggestion</h4>
                  <p className="text-sm text-green-700">
                    Consider what happens if a beneficiary passes before you. You might want to include 
                    "per stirpes" distribution (to their children) or alternate beneficiaries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Your digital assets</h2>
              <p className="text-gray-600">Special instructions for your online accounts and digital property</p>
            </div>
            
            <div>
              <Label htmlFor="digitalInstructions">Digital Asset Instructions</Label>
              <Textarea
                id="digitalInstructions"
                value={willData.digitalInstructions}
                onChange={(e) => updateWillData('digitalInstructions', e.target.value)}
                placeholder="e.g., Transfer my crypto wallets to my spouse, delete my social media accounts, preserve my photo libraries for my children..."
                className="mt-2 h-32"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-medium text-purple-900 mb-2">💰 Financial Assets</h4>
                <p className="text-sm text-purple-700">
                  Crypto wallets, investment accounts, online banking, PayPal, Venmo
                </p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-medium text-orange-900 mb-2">📱 Personal Accounts</h4>
                <p className="text-sm text-orange-700">
                  Social media, email, photo storage, streaming services, subscriptions
                </p>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Asset distribution details</h2>
              <p className="text-gray-600">Specific instructions for your physical and financial assets</p>
            </div>
            
            <div>
              <Label htmlFor="assets">Asset Distribution</Label>
              <Textarea
                id="assets"
                value={willData.assets}
                onChange={(e) => updateWillData('assets', e.target.value)}
                placeholder="e.g., House at 123 Main St to spouse, car to son, jewelry collection to daughter, investment accounts split equally..."
                className="mt-2 h-32"
              />
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Brain className="w-5 h-5 text-indigo-600 mt-1" />
                <div>
                  <h4 className="font-medium text-indigo-900 mb-1">AI Guidance</h4>
                  <p className="text-sm text-indigo-700">
                    Be as specific as possible about valuable items. For shared assets like bank accounts, 
                    specify exact percentages to avoid confusion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Guardianship and care</h2>
              <p className="text-gray-600">Who will care for your children or dependents?</p>
            </div>
            
            <div>
              <Label htmlFor="guardianship">Guardianship Instructions</Label>
              <Textarea
                id="guardianship"
                value={willData.guardianship}
                onChange={(e) => updateWillData('guardianship', e.target.value)}
                placeholder="e.g., My sister Mary Johnson will be guardian for my minor children. If she cannot serve, my brother Tom Johnson will be alternate guardian..."
                className="mt-2 h-32"
              />
              <p className="text-sm text-gray-500 mt-1">
                Include guardian preferences for children, pets, or other dependents
              </p>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Final wishes and special instructions</h2>
              <p className="text-gray-600">Any additional instructions or personal messages</p>
            </div>
            
            <div>
              <Label htmlFor="specialWishes">Special Instructions</Label>
              <Textarea
                id="specialWishes"
                value={willData.specialWishes}
                onChange={(e) => updateWillData('specialWishes', e.target.value)}
                placeholder="e.g., I want to be cremated, please donate to my favorite charity, delete my browser history, share my letters folder with my children..."
                className="mt-2 h-32"
              />
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6">
              <h3 className="font-semibold mb-4 text-center">Ready to Generate Your Will</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Executor assigned</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Beneficiaries specified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Digital assets covered</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Legal compliance verified</span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (isGenerating) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center">
        <Card className="max-w-lg w-full mx-4">
          <CardContent className="p-12 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-4">AI is crafting your will...</h2>
            <p className="text-gray-600 mb-6">
              Our AI is analyzing your information and generating personalized legal clauses. This takes about 30 seconds.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Processing your information...</span>
                <span className="text-green-600">✓</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Generating legal clauses...</span>
                <span className="animate-spin">⏳</span>
              </div>
              <div className="flex justify-between text-sm text-gray-400">
                <span>Finalizing document...</span>
                <span>⏳</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" onClick={() => navigate('/onboarding')} className="mr-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-green-600 rounded-md flex items-center justify-center">
              <FileText className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg">WillWise</span>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline">
              Section {currentSection} of {totalSections}
            </Badge>
            <Button variant="outline" size="sm">
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
          </div>
        </div>
      </header>

      {/* Progress */}
      <div className="bg-white/50 px-6 py-3">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Building Your Will</span>
            <span className="text-sm text-gray-600">{Math.round(progress)}% complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8">
              {renderSection()}

              <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
                <Button
                  variant="outline"
                  onClick={() => setCurrentSection(Math.max(1, currentSection - 1))}
                  disabled={currentSection === 1}
                >
                  Previous
                </Button>
                
                {currentSection === totalSections ? (
                  <Button
                    onClick={generateWill}
                    className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                  >
                    <Brain className="w-4 h-4 mr-2" />
                    Generate My Will
                  </Button>
                ) : (
                  <Button
                    onClick={() => setCurrentSection(Math.min(totalSections, currentSection + 1))}
                    className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                  >
                    Continue
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Security Notice */}
          <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
              <Shield className="w-4 h-4" />
              <span>Your information is encrypted and secure. We never store sensitive data permanently.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WillBuilder;
