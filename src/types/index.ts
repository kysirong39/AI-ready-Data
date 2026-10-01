export type CapabilityRating = 'f' | 'p' | 'n'; // f: Full, p: Partial, n: Limited

export interface Vendor {
  id: string;
  name: string;
  subtitle: string;
  gartnerTier: 'Leader' | 'Strong' | 'Visionary';
  gartnerRecognition: string;
  architectureType: 'Virtualization-first' | 'Integration-led' | 'Unified lakehouse' | 'Universal AI Orchestration';
  description: string;
  tags: string[];
  links: { label: string; url: string }[];
  marketShare?: string;
  ratings: Record<string, CapabilityRating>;
  lockinScore: 'low' | 'low-mid' | 'mid' | 'mid-high' | 'high';
  lockinLabel: string;
  mainConstraint: string;
  abInitioCompatibility: string;
  exitCost: string;
  bestFitScenario: string;
}

export interface Criterion {
  id: string;
  code: string;
  name: string;
  category: 'Traditional Alignment' | 'Qualified Usage' | 'Certified for Production' | 'Augmentation Enabled';
  categoryVi: string;
  descriptionVi: string;
  significance: string;
}

export interface LockinAssessmentItem {
  vendorId: string;
  vendorName: string;
  level: 'THẤP' | 'THẤP–TRUNG BÌNH' | 'TRUNG BÌNH' | 'TRUNG BÌNH–CAO' | 'CAO';
  levelType: 'low' | 'low-mid' | 'mid' | 'mid-high' | 'high';
  constraint: string;
  compatibilityNote: string;
  compatibilityLevel: 'Cao' | 'Cao — nhưng chồng lấn' | 'Trung bình' | 'Trung bình — xung đột vai trò' | 'Thấp–trung bình';
  exitCost: string;
  vietnamBankingNote: string;
}

export interface DecisionOption {
  key: string;
  text: string;
  recommendations: string[];
  rationale: string;
}

export interface DecisionQuestion {
  id: string;
  number: string;
  title: string;
  description?: string;
  options: DecisionOption[];
}

export interface ReferenceItem {
  type: string;
  name: string;
  url: string;
  highlight: string;
  date?: string;
}
