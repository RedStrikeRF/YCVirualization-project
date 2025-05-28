import React from 'react';
import './Input.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <div className="input full-width">
      <label className="input__label" htmlFor={name}>{label}</label>
      <input className="input__field" autoComplete="new-password" id={name} name={name} {...rest} />
    </div>
  );
};
