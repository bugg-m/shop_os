export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
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

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'outlined' | 'filled' | 'none';
}
