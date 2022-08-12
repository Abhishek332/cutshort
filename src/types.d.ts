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
  heading: string;
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
  selected: boolean;
}

interface onboardingQuestion {
  type: string;
  heading: string;
  note?: string;
  ctaText: string;
  inputs?: inputField[];
  stateKey?: string;
  options?: selectOption[];
}
