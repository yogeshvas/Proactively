interface ButtonProps {
  title: string;
  onPress: () => void;
  image?: any;
  disabled?: boolean;
  style?: any;
}

interface ShowToast {
  (message: string): void;
}

interface HealthState {
  steps: number | null;
  bmi: string | null;
  sleep: number | null;
  weight: number | null;
  height: number | null;
  isLoading: boolean;
  fetchHealthData: () => Promise<void>;
  updateSteps: (steps: number) => Promise<void>;
  updateWeight: (weight: number) => Promise<void>;
  updateHeight: (height: number) => Promise<void>;
  updateSleep: (sleep: number) => Promise<void>;
  calculateBMI: (weight: number, height: number) => string;
}
interface ProgressBarProps {
  progress: {fraction: string; percentage: number};
}
interface CheckboxProps {
  checked: boolean;
  onPress: () => void;
}

interface RemoteMessage {
  notification?: {
    title?: string;
    body?: string;
  };
}
export type RootStackParamList = {
  login: undefined;
  'home-tabs': undefined;
  appoinment: undefined;
  bmi: undefined;
  steps: undefined;
  sleep: undefined;
};

export type {
  ButtonProps,
  ShowToast,
  HealthState,
  ProgressBarProps,
  CheckboxProps,
  RemoteMessage,
};
