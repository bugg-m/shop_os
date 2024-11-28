export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  shadowVariant?: 'none' | 'shadow' | 'shadowMd' | 'shadowLg';
  variant?:
    | 'primary'
    | 'secondary'
    | 'primaryRounded'
    | 'secondaryRounded'
    | 'outline'
    | 'outlineRounded';
  iconLeft?: React.ReactNode;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
}

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'filled' | 'none' | 'defaultRounded' | 'filledRounded';
  label?: string;
}

export interface ITextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: 'default' | 'filled' | 'none' | 'defaultRounded' | 'filledRounded';
  label: string;
}

export interface IUploadFileProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  subtitle?: string;
  accept?: string;
  multiple?: boolean;
  onFileSelect?: (files: FileList | null) => void;
}
