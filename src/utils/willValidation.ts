
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

interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

export const validateWill = (willData: WillData, personalInfo: PersonalInfo): ValidationResult => {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Required fields
  if (!personalInfo.name?.trim()) {
    errors.push('Full legal name is required');
  }

  if (!personalInfo.location?.trim()) {
    errors.push('State of residence is required');
  }

  if (!willData.executor?.trim()) {
    errors.push('Executor appointment is required');
  }

  if (!willData.beneficiaries?.trim()) {
    errors.push('Beneficiaries must be specified');
  }

  // Warnings for recommended fields
  if (!willData.assets?.trim()) {
    warnings.push('Consider adding specific asset distribution instructions');
  }

  if (!willData.guardianship?.trim()) {
    warnings.push('Consider adding guardianship instructions if you have minor children');
  }

  if (!willData.digitalInstructions?.trim()) {
    warnings.push('Consider adding digital asset instructions');
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
};
