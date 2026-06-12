interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
}

export function SectionHeader({ title, subtitle, light = false, className = '' }: SectionHeaderProps) {
  return (
    <div className={`mb-12 text-center ${className}`}>
      <h2
        className={`font-display text-3xl font-bold md:text-4xl ${
          light ? 'text-white' : 'text-brand-blue-dark'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mx-auto mt-3 max-w-lg text-base ${light ? 'text-white/80' : 'text-slate-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
