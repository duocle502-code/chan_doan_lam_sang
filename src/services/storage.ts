import { AppData, Session, Progress, Settings } from '../types';
import { DEMO_CASES } from '../data/cases';

const STORAGE_KEY = 'medsim_app_data';

const DEFAULT_DATA: AppData = {
  subjects: [
    { id: 'tim-mach', name: 'Tim mạch', icon: 'Heart', questionsCount: 10 },
    { id: 'ngoai-khoa', name: 'Ngoại khoa', icon: 'Stethoscope', questionsCount: 15 },
    { id: 'noi-khoa', name: 'Nội khoa', icon: 'Thermometer', questionsCount: 20 },
    { id: 'nhi-khoa', name: 'Nhi khoa', icon: 'Baby', questionsCount: 12 },
  ],
  questions: [],
  cases: DEMO_CASES,
  sessions: [],
  progress: {
    totalAttempts: 0,
    averageScore: 0,
    streakDays: 0,
    weakTopics: [],
  },
  settings: {
    theme: 'light',
    soundEnabled: true,
    autoSave: true,
    selectedModel: 'gemini-3-flash-preview',
  },
};

export const loadAppData = (): AppData => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return DEFAULT_DATA;
  try {
    const parsed = JSON.parse(stored);
    // Merge with default to ensure new fields are present
    return {
      ...DEFAULT_DATA,
      ...parsed,
      settings: { ...DEFAULT_DATA.settings, ...parsed.settings },
      progress: { ...DEFAULT_DATA.progress, ...parsed.progress },
    };
  } catch (e) {
    console.error('Failed to parse app data', e);
    return DEFAULT_DATA;
  }
};

export const saveAppData = (data: AppData) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const updateSettings = (settings: Partial<Settings>) => {
  const data = loadAppData();
  data.settings = { ...data.settings, ...settings };
  saveAppData(data);
};

export const addSession = (session: Session) => {
  const data = loadAppData();
  data.sessions.push(session);
  
  // Update progress
  const total = data.sessions.length;
  const avg = data.sessions.reduce((acc, s) => acc + s.score, 0) / total;
  data.progress.totalAttempts = total;
  data.progress.averageScore = avg;
  
  saveAppData(data);
};

export const updateSession = (sessionId: string, updates: Partial<Session>) => {
  const data = loadAppData();
  const idx = data.sessions.findIndex(s => s.id === sessionId);
  if (idx !== -1) {
    data.sessions[idx] = { ...data.sessions[idx], ...updates };
    saveAppData(data);
  }
};

export const exportData = () => {
  const data = loadAppData();
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `medsim_backup_${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
};

export const importData = (file: File): Promise<boolean> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result as string);
        saveAppData(data);
        resolve(true);
      } catch (err) {
        console.error('Import failed', err);
        resolve(false);
      }
    };
    reader.readAsText(file);
  });
};
