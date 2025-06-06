
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, ArrowLeft, Shield, RefreshCw, Cloud, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Button variant="ghost" onClick={() => navigate('/')} className="mr-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <Button onClick={() => navigate('/onboarding')} className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
            Start Your Will
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
            Simple, Transparent Pricing
          </Badge>
          <h1 className="text-4xl font-bold mb-4">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Peace of Mind
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            No hidden fees, no billable hours, no legal complexity. Just straightforward pricing for modern estate planning.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* One-Time Plan */}
          <Card className="border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl">Essential Will</CardTitle>
              <CardDescription className="text-lg">Perfect for getting started</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$49</span>
                <span className="text-gray-600 ml-2">one-time</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {[
                  "Complete digital will creation",
                  "AI-powered personalization",
                  "Digital assets coverage",
                  "State-specific legal compliance",
                  "Secure document storage",
                  "PDF download",
                  "Basic email support"
                ].map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                onClick={() => navigate('/onboarding')}
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700"
                size="lg"
              >
                Get Started
              </Button>
              <p className="text-xs text-gray-500 text-center mt-2">
                30-day money-back guarantee
              </p>
            </CardContent>
          </Card>

          {/* Annual Plan */}
          <Card className="border-2 border-green-300 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 text-sm font-semibold">
                <Star className="w-4 h-4 mr-1" />
                Most Popular
              </Badge>
            </div>
            <CardHeader className="text-center pb-4 pt-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl">WillWise Pro</CardTitle>
              <CardDescription className="text-lg">Complete peace of mind package</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-gray-600 ml-2">per year</span>
              </div>
              <div className="text-sm text-gray-500">
                Save $89 vs. one-time updates
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {[
                  "Everything in Essential Will",
                  "Annual will reviews & updates",
                  "Life event guidance (marriage, kids, etc.)",
                  "Priority support",
                  "Emergency access protocols",
                  "Family member notifications",
                  "Advanced digital asset management",
                  "Beneficiary portal access",
                  "Legal document updates",
                  "Encrypted cloud storage"
                ].map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                onClick={() => navigate('/onboarding')}
                className="w-full mt-6 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                size="lg"
              >
                Start Pro Trial
              </Button>
              <p className="text-xs text-gray-500 text-center mt-2">
                14-day free trial • Cancel anytime
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Enterprise Option */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto border border-gray-200 bg-gray-50">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-gray-600 mr-3" />
                <h3 className="text-xl font-semibold">Enterprise & Family Plans</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Need coverage for multiple family members or employees? We offer custom enterprise solutions.
              </p>
              <Button variant="outline" className="mx-auto">
                Contact Sales
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="bg-white/50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose WillWise?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-md bg-white text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Bank-Level Security</h3>
                <p className="text-gray-600">
                  256-bit encryption, SOC 2 compliance, and secure cloud storage. Your sensitive information is protected with the same security banks use.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-white text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Cloud className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Always Up-to-Date</h3>
                <p className="text-gray-600">
                  As laws change and your life evolves, we keep your will current. No need to start from scratch every time something changes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-white text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <RefreshCw className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">15-Minute Setup</h3>
                <p className="text-gray-600">
                  What takes lawyers weeks and costs thousands, we do in minutes. Get comprehensive estate planning without the complexity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              q: "Is my will legally binding?",
              a: "Yes! Our wills are created using state-specific legal templates reviewed by estate planning attorneys. They meet all legal requirements in your state."
            },
            {
              q: "Can I update my will later?",
              a: "Absolutely. With our Pro plan, you get unlimited updates. Essential plan users can purchase updates as needed or upgrade to Pro anytime."
            },
            {
              q: "What happens to my data if WillWise shuts down?",
              a: "Your data is yours. We provide export options and maintain partnerships with legal firms to ensure continuity. Plus, you always have PDF copies."
            },
            {
              q: "Do I need a lawyer to review this?",
              a: "While our AI creates legally compliant documents, complex estates may benefit from legal review. We can connect you with estate planning attorneys if needed."
            },
            {
              q: "Is there a money-back guarantee?",
              a: "Yes! We offer a 30-day money-back guarantee on all plans. If you're not satisfied, we'll refund your payment, no questions asked."
            }
          ].map((faq, index) => (
            <Card key={index} className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-12 text-center text-white max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">Ready to Secure Your Digital Legacy?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands who've already created their peace of mind
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/onboarding')}
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
            >
              Start Your Will Now
            </Button>
          </div>
          <p className="text-sm opacity-80 mt-6">
            30-day money-back guarantee • Secure & confidential • Legal compliance guaranteed
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
