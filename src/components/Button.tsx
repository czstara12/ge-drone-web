import classNames from 'classnames';
import type { ReactNode } from 'react';

type ButtonProps = {
  xl?: boolean;
  children: ReactNode;
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
};

const Button = ({
  xl,
  children,
  className = '',
  type = 'button',
  onClick,
}: ButtonProps) => {
  const btnClass = classNames(
    'inline-block rounded-md text-center text-white bg-primary-500 hover:bg-primary-600 transition-colors',
    xl ? 'font-extrabold text-xl py-4 px-6' : 'text-lg font-semibold py-2 px-4',
    className,
  );

  return (
    <button type={type} className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
