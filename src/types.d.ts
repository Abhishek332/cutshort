interface formState {
  step: number;
  fullName: string;
  displayName: string;
  workspaceName: string;
  workspaceUrl: string;
  planToUse: string;
}

type inputField = {
  name: string;
  label?: string;
  required?: boolean;
  type?: string;
}

type ctaBtn = {
  text: string;
  action?: React.Dispatch<any>;
}

interface InputBoxTypes extends inputField {
  value: string;
  handleChange: React.Dispatch<any>;
}

interface onboardingQuestion {
  heading: string;
  note: string;
  inputs: inputField[];
  cta: ctaBtn;
  formState: formState;
  handleChange: React.Dispatch<any>;
}