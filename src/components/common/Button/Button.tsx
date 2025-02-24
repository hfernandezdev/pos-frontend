import { ReactNode } from 'react';
import './Button.styles.scss';

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  className?: string;
}

export default function Button({ onClick, children, className }: ButtonProps) {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
