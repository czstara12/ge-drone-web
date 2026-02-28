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
  // 检查是否传入了自定义背景色或文字色
  const hasCustomBg = /bg-\w+/.test(className);
  const hasCustomText = /text-\w+/.test(className);

  const btnClass = classNames(
    'inline-block rounded-md text-center transition-colors',
    // 只有在没有自定义样式时才使用默认样式
    !hasCustomBg && 'bg-primary-500 hover:bg-primary-600',
    !hasCustomText && 'text-white',
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
