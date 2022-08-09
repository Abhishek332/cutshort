interface FormStates {
  step: number;
  fullName: string;
  displayName: string;
  workspaceName: string;
  workspaceUrl: string;
  planToUse: string;
}

interface InputBoxTypes {
  name: string;
  type?: string;
  value: string;
  handleChange: React.Dispatch<any>;
  label?: string;
  required: boolean;
}

interface ButtonType {
  text: string;
  action: React.Dispatch<any>;
}
