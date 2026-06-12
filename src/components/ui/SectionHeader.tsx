interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  as?: 'h1' | 'h2';
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  light = false,
  as: Heading = 'h2',
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`mb-8 text-center md:mb-12 ${className}`}>
      <Heading
        className={`font-display text-2xl font-bold sm:text-3xl md:text-4xl ${
          light ? 'text-white' : 'text-brand-blue-dark'
        }`}
      >
        {title}
      </Heading>
      {subtitle && (
        <p className={`mx-auto mt-3 max-w-lg text-sm sm:text-base ${light ? 'text-white/80' : 'text-slate-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
