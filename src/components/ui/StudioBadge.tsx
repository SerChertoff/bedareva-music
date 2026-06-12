import { SITE } from '../../data/content';
import { StudioLogo } from './StudioLogo';

export function StudioBadge() {
  return (
    <div className="mb-6 inline-flex items-center gap-3.5 rounded-2xl border border-white/25 bg-white/10 px-4 py-3 shadow-lg shadow-[#ff3d6b]/20 backdrop-blur-sm mx-auto lg:mx-0">
      <StudioLogo size={60} className="shrink-0 drop-shadow-[0_4px_12px_rgba(255,45,85,0.45)]" />
      <div className="text-left">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">Бийск</p>
        <p className="font-display text-base font-bold leading-tight text-white md:text-lg">
          Студия «{SITE.studioName}»
        </p>
      </div>
    </div>
  );
}
