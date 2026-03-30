export interface Subject {
  id: string;
  name: string;
  icon: string;
  questionsCount: number;
}

export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  subjectId: string;
  content: string;
  type: 'multiple-choice' | 'single-choice';
  options: Option[];
  correctAnswer: string;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface ClinicalCase {
  id: string;
  title: string;
  specialty: string;
  difficulty: 'easy' | 'medium' | 'hard';
  patientInfo: {
    age: number;
    gender: 'Nam' | 'Nữ';
    chiefComplaint: string;
    history: string;
  };
  physicalExam: string;
  labTests: {
    id: string;
    name: string;
    result: string;
    normalRange: string;
    cost: number;
  }[];
  diagnosisOptions: Option[];
  correctDiagnosis: string;
  treatmentOptions: Option[];
  correctTreatment: string;
  explanation: string;
}

export interface Session {
  id: string;
  subjectId: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  timeSpent: number;
  date: string;
  // Review data (optional for backward compatibility)
  caseId?: string;
  caseTitle?: string;
  selectedDiagnosisId?: string;
  selectedTreatmentId?: string;
  aiExplanation?: string;
}

export interface Progress {
  totalAttempts: number;
  averageScore: number;
  streakDays: number;
  weakTopics: string[];
}

export interface Settings {
  theme: 'light' | 'dark';
  soundEnabled: boolean;
  autoSave: boolean;
  geminiApiKey?: string;
  selectedModel: string;
}

export interface AppData {
  subjects: Subject[];
  questions: Question[];
  cases: ClinicalCase[];
  sessions: Session[];
  progress: Progress;
  settings: Settings;
}
