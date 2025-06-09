import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateWillPDF } from "@/utils/pdfGenerator";

interface WillData {
  executor: string;
  beneficiaries: string;
  assets: string;
  digitalInstructions: string;
  guardianship: string;
  specialWishes: string;
  personalInfo?: {
    name: string;
    location: string;
  };
}

interface WillPreviewProps {
  willData: WillData;
  personalInfo?: { name: string; location: string; };
}

const WillPreview = ({ willData, personalInfo }: WillPreviewProps) => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const downloadPDF = () => {
    try {
      generateWillPDF(willData, personalInfo || { name: '', location: '' });
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Will Preview</h2>
          <p className="text-gray-600">Review your document before finalizing</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={downloadPDF}>
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
          <Button variant="outline">
            <Share className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>
      </div>

      <Card className="bg-white shadow-lg">
        <CardHeader className="text-center border-b">
          <CardTitle className="text-3xl font-bold">LAST WILL AND TESTAMENT</CardTitle>
          <p className="text-lg">of {personalInfo?.name || "[Your Name]"}</p>
        </CardHeader>
        
        <CardContent className="p-8 space-y-6">
          <div className="text-sm text-gray-600 text-center">
            <p>State of {personalInfo?.location || "[Your State]"}</p>
            <p>Executed on {currentDate}</p>
          </div>

          <div className="space-y-6">
            <section>
              <h3 className="font-bold text-lg mb-2 border-b pb-1">I. DECLARATION</h3>
              <p className="text-sm leading-relaxed">
                I, <strong>{personalInfo?.name || "[Your Name]"}</strong>, being of sound mind and disposing memory, 
                do hereby make, publish, and declare this to be my Last Will and Testament, hereby revoking 
                all former wills and codicils made by me.
              </p>
            </section>

            {willData.executor && (
              <section>
                <h3 className="font-bold text-lg mb-2 border-b pb-1">II. APPOINTMENT OF EXECUTOR</h3>
                <p className="text-sm leading-relaxed">
                  I hereby appoint <strong>{willData.executor}</strong> as the Executor of this Will. 
                  If this person is unable or unwilling to serve, I appoint [Alternate Executor] as successor Executor.
                </p>
              </section>
            )}

            {willData.guardianship && (
              <section>
                <h3 className="font-bold text-lg mb-2 border-b pb-1">III. GUARDIANSHIP</h3>
                <p className="text-sm leading-relaxed whitespace-pre-line">{willData.guardianship}</p>
              </section>
            )}

            {willData.beneficiaries && (
              <section>
                <h3 className="font-bold text-lg mb-2 border-b pb-1">IV. DISTRIBUTION OF ASSETS</h3>
                <p className="text-sm leading-relaxed whitespace-pre-line">{willData.beneficiaries}</p>
              </section>
            )}

            {willData.assets && (
              <section>
                <h3 className="font-bold text-lg mb-2 border-b pb-1">V. SPECIFIC BEQUESTS</h3>
                <p className="text-sm leading-relaxed whitespace-pre-line">{willData.assets}</p>
              </section>
            )}

            {willData.digitalInstructions && (
              <section>
                <h3 className="font-bold text-lg mb-2 border-b pb-1">VI. DIGITAL ASSETS</h3>
                <p className="text-sm leading-relaxed whitespace-pre-line">{willData.digitalInstructions}</p>
              </section>
            )}

            {willData.specialWishes && (
              <section>
                <h3 className="font-bold text-lg mb-2 border-b pb-1">VII. SPECIAL INSTRUCTIONS</h3>
                <p className="text-sm leading-relaxed whitespace-pre-line">{willData.specialWishes}</p>
              </section>
            )}

            <section>
              <h3 className="font-bold text-lg mb-2 border-b pb-1">VIII. EXECUTION</h3>
              <p className="text-sm leading-relaxed">
                IN WITNESS WHEREOF, I have hereunto set my hand this {currentDate}.
              </p>
              <div className="mt-8 space-y-4">
                <div className="border-b border-gray-400 w-64">
                  <p className="text-xs text-gray-500 mb-1">Testator Signature</p>
                </div>
                <p className="text-sm">{personalInfo?.name || "[Your Name]"}, Testator</p>
              </div>
            </section>
          </div>
        </CardContent>
      </Card>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h4 className="font-semibold text-yellow-800 mb-2">⚖️ Legal Notice</h4>
        <p className="text-sm text-yellow-700">
          This document is generated using AI and legal templates. While designed to meet basic legal requirements, 
          we recommend having complex estates reviewed by a qualified attorney in your state.
        </p>
      </div>
    </div>
  );
};

export default WillPreview;
