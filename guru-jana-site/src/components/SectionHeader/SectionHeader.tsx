interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  isDark?: boolean;
}

const SectionHeader = ({ eyebrow, title, description, isDark = false }: SectionHeaderProps) => (
  <div className="max-w-2xl">
    {eyebrow && (
      <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.3em] ${
        isDark ? 'text-slate-300' : 'text-slate-500'
      }`}>
        {eyebrow}
      </p>
    )}
    <h2 className={`text-3xl font-semibold tracking-tight sm:text-4xl ${
      isDark ? 'text-white' : 'text-slate-950'
    }`}>
      {title}
    </h2>
    {description && (
      <p className={`mt-4 text-base leading-8 ${
        isDark ? 'text-slate-300' : 'text-slate-600'
      }`}>
        {description}
      </p>
    )}
  </div>
);

export default SectionHeader;
