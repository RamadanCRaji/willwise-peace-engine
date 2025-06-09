
import jsPDF from 'jspdf';

interface WillData {
  executor: string;
  beneficiaries: string;
  assets: string;
  digitalInstructions: string;
  guardianship: string;
  specialWishes: string;
}

interface PersonalInfo {
  name: string;
  location: string;
}

export const generateWillPDF = (willData: WillData, personalInfo: PersonalInfo) => {
  const pdf = new jsPDF();
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  let yPosition = 20;
  const lineHeight = 7;
  const pageWidth = pdf.internal.pageSize.width;
  const margin = 20;
  const textWidth = pageWidth - (margin * 2);

  // Helper function to add text with word wrap
  const addText = (text: string, fontSize = 10, isBold = false) => {
    pdf.setFontSize(fontSize);
    if (isBold) {
      pdf.setFont('helvetica', 'bold');
    } else {
      pdf.setFont('helvetica', 'normal');
    }
    
    const lines = pdf.splitTextToSize(text, textWidth);
    pdf.text(lines, margin, yPosition);
    yPosition += (lines.length * lineHeight);
  };

  const addSpace = (lines = 1) => {
    yPosition += (lines * lineHeight);
  };

  const checkPageBreak = () => {
    if (yPosition > 270) {
      pdf.addPage();
      yPosition = 20;
    }
  };

  // Title
  pdf.setFontSize(16);
  pdf.setFont('helvetica', 'bold');
  const title = 'LAST WILL AND TESTAMENT';
  const titleWidth = pdf.getStringUnitWidth(title) * 16 / pdf.internal.scaleFactor;
  pdf.text(title, (pageWidth - titleWidth) / 2, yPosition);
  yPosition += 10;

  pdf.setFontSize(12);
  const subtitle = `of ${personalInfo.name || '[Your Name]'}`;
  const subtitleWidth = pdf.getStringUnitWidth(subtitle) * 12 / pdf.internal.scaleFactor;
  pdf.text(subtitle, (pageWidth - subtitleWidth) / 2, yPosition);
  yPosition += 15;

  // State and date
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  const stateInfo = `State of ${personalInfo.location || '[Your State]'}`;
  const stateWidth = pdf.getStringUnitWidth(stateInfo) * 10 / pdf.internal.scaleFactor;
  pdf.text(stateInfo, (pageWidth - stateWidth) / 2, yPosition);
  yPosition += 7;

  const dateInfo = `Executed on ${currentDate}`;
  const dateWidth = pdf.getStringUnitWidth(dateInfo) * 10 / pdf.internal.scaleFactor;
  pdf.text(dateInfo, (pageWidth - dateWidth) / 2, yPosition);
  yPosition += 20;

  // Declaration
  addText('I. DECLARATION', 12, true);
  addSpace();
  addText(`I, ${personalInfo.name || '[Your Name]'}, being of sound mind and disposing memory, do hereby make, publish, and declare this to be my Last Will and Testament, hereby revoking all former wills and codicils made by me.`);
  addSpace(2);
  checkPageBreak();

  // Executor
  if (willData.executor) {
    addText('II. APPOINTMENT OF EXECUTOR', 12, true);
    addSpace();
    addText(`I hereby appoint ${willData.executor} as the Executor of this Will. If this person is unable or unwilling to serve, I appoint [Alternate Executor] as successor Executor.`);
    addSpace(2);
    checkPageBreak();
  }

  // Guardianship
  if (willData.guardianship) {
    addText('III. GUARDIANSHIP', 12, true);
    addSpace();
    addText(willData.guardianship);
    addSpace(2);
    checkPageBreak();
  }

  // Beneficiaries
  if (willData.beneficiaries) {
    addText('IV. DISTRIBUTION OF ASSETS', 12, true);
    addSpace();
    addText(willData.beneficiaries);
    addSpace(2);
    checkPageBreak();
  }

  // Assets
  if (willData.assets) {
    addText('V. SPECIFIC BEQUESTS', 12, true);
    addSpace();
    addText(willData.assets);
    addSpace(2);
    checkPageBreak();
  }

  // Digital Instructions
  if (willData.digitalInstructions) {
    addText('VI. DIGITAL ASSETS', 12, true);
    addSpace();
    addText(willData.digitalInstructions);
    addSpace(2);
    checkPageBreak();
  }

  // Special Wishes
  if (willData.specialWishes) {
    addText('VII. SPECIAL INSTRUCTIONS', 12, true);
    addSpace();
    addText(willData.specialWishes);
    addSpace(2);
    checkPageBreak();
  }

  // Execution
  addText('VIII. EXECUTION', 12, true);
  addSpace();
  addText(`IN WITNESS WHEREOF, I have hereunto set my hand this ${currentDate}.`);
  addSpace(3);

  // Signature lines
  pdf.line(margin, yPosition, margin + 80, yPosition);
  yPosition += 7;
  addText('Testator Signature');
  addSpace();
  addText(`${personalInfo.name || '[Your Name]'}, Testator`);
  addSpace(3);

  // Witness lines
  addText('WITNESSES:', 10, true);
  addSpace();
  
  pdf.line(margin, yPosition, margin + 80, yPosition);
  pdf.line(margin + 100, yPosition, margin + 180, yPosition);
  yPosition += 7;
  addText('Witness 1 Signature                           Witness 2 Signature');
  addSpace(2);

  pdf.line(margin, yPosition, margin + 80, yPosition);
  pdf.line(margin + 100, yPosition, margin + 180, yPosition);
  yPosition += 7;
  addText('Print Name                                   Print Name');

  // Save the PDF
  pdf.save(`${personalInfo.name || 'Will'}_Last_Will_and_Testament.pdf`);
};
