interface formStateType {
  [key: string]: string;
}

type inputField = {
  name: string;
  label?: string;
  required?: boolean;
  type?: string;
};

type ctaBtn = {
  text: string;
  action?: React.Dispatch<any>;
};

interface InputBoxTypes extends inputField {
  value: string;
  handleChange: React.Dispatch<any>;
}

interface onboardingQuestion {
  type: string;
  heading: string;
  note: string;
  inputs: inputField[];
  ctaText: string;
}
