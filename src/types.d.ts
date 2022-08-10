interface formStateType {
  [key: string]: string;
}

type inputField = {
  name: string;
  label?: string;
  required?: boolean;
  type?: string;
};

type selectOption = {
  logo: string;
  name: string;
  description: string;
};

type ctaBtn = {
  text: string;
  action?: React.Dispatch<any>;
};

interface InputBoxType extends inputField {
  value: string;
  handleChange: React.Dispatch<any>;
}

interface OptionBoxType extends selectOption {
  stateKey: string;
}

interface onboardingQuestion {
  type: string;
  heading: string;
  note: string;
  ctaText: string;
  inputs?: inputField[];
  stateKey?: string;
  options?: selectOption[];
}
