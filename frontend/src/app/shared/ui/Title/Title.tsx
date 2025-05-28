import React from 'react';
import './Title.scss'

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

export const Title: React.FC<TitleProps> = ({ level = 2, children, className = '', ...rest }) => {
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  return (
    <Tag className={`title title--h${level} ${className}`} {...rest}>
      {children}
    </Tag>
  );
};
