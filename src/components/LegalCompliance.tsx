
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, Scale, FileText, Users } from "lucide-react";

interface LegalComplianceProps {
  userState: string;
}

const LegalCompliance = ({ userState }: LegalComplianceProps) => {
  const getStateRequirements = (state: string) => {
    // This would be a comprehensive database in a real app
    const stateRequirements: { [key: string]: any } = {
      'California': {
        witnesses: 2,
        notarization: 'optional',
        selfProving: true,
        digitalWills: 'not-recognized',
        witnessRequirements: 'Must be 18+ and not beneficiaries',
        specialNotes: 'California does not recognize holographic wills with digital signatures'
      },
      'Texas': {
        witnesses: 2,
        notarization: 'required-for-self-proving',
        selfProving: true,
        digitalWills: 'limited',
        witnessRequirements: 'Must be 14+ and competent',
        specialNotes: 'Texas allows holographic wills'
      },
      'New York': {
        witnesses: 2,
        notarization: 'required',
        selfProving: true,
        digitalWills: 'not-recognized',
        witnessRequirements: 'Must be 18+ and not beneficiaries',
        specialNotes: 'Strict formal requirements'
      },
      'Florida': {
        witnesses: 2,
        notarization: 'required',
        selfProving: true,
        digitalWills: 'recognized',
        witnessRequirements: 'Must be 18+ and competent',
        specialNotes: 'Florida recognizes electronic wills'
      }
    };
    
    return stateRequirements[state] || {
      witnesses: 2,
      notarization: 'recommended',
      selfProving: true,
      digitalWills: 'check-state-laws',
      witnessRequirements: 'Must be 18+ and not beneficiaries',
      specialNotes: 'Check your specific state requirements'
    };
  };

  const requirements = getStateRequirements(userState);
  
  const complianceChecks = [
    {
      item: 'Testator Capacity',
      status: 'compliant',
      description: 'You must be 18+ and of sound mind'
    },
    {
      item: 'Written Document',
      status: 'compliant',
      description: 'Will must be in writing'
    },
    {
      item: 'Signature Required',
      status: 'action-needed',
      description: 'You must sign the printed document'
    },
    {
      item: `${requirements.witnesses} Witnesses`,
      status: 'action-needed',
      description: requirements.witnessRequirements
    },
    {
      item: 'Notarization',
      status: requirements.notarization === 'required' ? 'action-needed' : 'optional',
      description: `${requirements.notarization === 'required' ? 'Required' : 'Optional'} in ${userState}`
    }
  ];

  return (
    <div className="space-y-6">
      <Card className="border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-blue-600" />
            Legal Compliance - {userState}
          </CardTitle>
          <p className="text-sm text-blue-700">
            State-specific requirements for your will to be legally valid
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {complianceChecks.map((check, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-white rounded border">
                <div className="flex items-center gap-3">
                  {check.status === 'compliant' ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : check.status === 'action-needed' ? (
                    <AlertTriangle className="w-5 h-5 text-orange-600" />
                  ) : (
                    <FileText className="w-5 h-5 text-gray-600" />
                  )}
                  <div>
                    <p className="font-medium">{check.item}</p>
                    <p className="text-sm text-gray-600">{check.description}</p>
                  </div>
                </div>
                <Badge 
                  variant={
                    check.status === 'compliant' ? 'default' : 
                    check.status === 'action-needed' ? 'destructive' : 'secondary'
                  }
                >
                  {check.status === 'compliant' ? 'Complete' : 
                   check.status === 'action-needed' ? 'Required' : 'Optional'}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-yellow-200 bg-yellow-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-yellow-600" />
            Important State-Specific Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-yellow-800">Digital Wills Status</h4>
              <p className="text-sm text-yellow-700">
                {requirements.digitalWills === 'recognized' ? 
                  `${userState} recognizes electronic wills with proper procedures.` :
                  requirements.digitalWills === 'limited' ?
                  `${userState} has limited recognition of digital wills.` :
                  `${userState} does not fully recognize digital wills. Print and sign physical copies.`
                }
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-yellow-800">Special Notes</h4>
              <p className="text-sm text-yellow-700">{requirements.specialNotes}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-yellow-800">Next Steps</h4>
              <ul className="text-sm text-yellow-700 list-disc list-inside space-y-1">
                <li>Print your completed will</li>
                <li>Sign in the presence of {requirements.witnesses} qualified witnesses</li>
                <li>Have witnesses sign the document</li>
                {requirements.notarization === 'required' && <li>Get the document notarized</li>}
                <li>Store the original in a safe place</li>
                <li>Inform your executor of the location</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Professional Review Recommendation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-4">
            Consider professional legal review if you have:
          </p>
          <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
            <li>Assets over $500,000</li>
            <li>Complex family situations (blended families, minor children)</li>
            <li>Business ownership or partnerships</li>
            <li>Significant tax implications</li>
            <li>Real estate in multiple states</li>
            <li>Concerns about will contests</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default LegalCompliance;
