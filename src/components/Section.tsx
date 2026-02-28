import type { ReactNode } from 'react';

type SectionProps = {
  title?: string;
  description?: string;
  className?: string;
  children: ReactNode;
};

const Section = ({
  title,
  description,
  className = '',
  children,
}: SectionProps) => (
  <section className={`mx-auto max-w-screen-lg px-3 py-16 ${className}`}>
    {(title || description) && (
      <div className="mb-12 text-center">
        {title && <h2 className="text-4xl font-bold text-gray-900">{title}</h2>}
        {description && <p className="mt-4 text-xl md:px-20">{description}</p>}
      </div>
    )}
    {children}
  </section>
);

export { Section };
