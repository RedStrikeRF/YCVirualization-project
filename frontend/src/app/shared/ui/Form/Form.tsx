import React from 'react';
import './Form.scss';

interface FormProps {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
}

export const Form: React.FC<FormProps> = ({ children, onSubmit, className = '' }) => {
  return (
    <form onSubmit={onSubmit} className={`form ${className}`}>
      {children}
    </form>
  );
};
