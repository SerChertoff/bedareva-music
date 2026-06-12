interface StudioLogoProps {
  size?: number;
  className?: string;
}

export function StudioLogo({ size = 56, className = '' }: StudioLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="skyGlow" x1="10" y1="8" x2="70" y2="72" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF8C42" />
          <stop offset="0.45" stopColor="#FF3D6B" />
          <stop offset="1" stopColor="#C41E5A" />
        </linearGradient>
        <linearGradient id="sailMain" x1="18" y1="22" x2="58" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF6B8A" />
          <stop offset="0.5" stopColor="#FF2244" />
          <stop offset="1" stopColor="#D4144A" />
        </linearGradient>
        <linearGradient id="sailFront" x1="34" y1="18" x2="68" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF9BB0" />
          <stop offset="1" stopColor="#FF3355" />
        </linearGradient>
        <linearGradient id="waveGrad" x1="8" y1="54" x2="72" y2="66" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFD166" />
          <stop offset="1" stopColor="#FF8C42" />
        </linearGradient>
        <radialGradient id="sunGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(62 18) rotate(90) scale(14)">
          <stop stopColor="#FFE566" />
          <stop offset="0.6" stopColor="#FFB703" />
          <stop offset="1" stopColor="#FF8C00" stopOpacity="0" />
        </radialGradient>
        <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle cx="40" cy="40" r="36" fill="url(#skyGlow)" />
      <circle cx="40" cy="40" r="36" fill="url(#sunGlow)" opacity="0.55" />
      <circle cx="40" cy="40" r="35" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" />

      <g stroke="#FFE566" strokeWidth="1.5" strokeLinecap="round" opacity="0.85">
        <line x1="62" y1="18" x2="68" y2="12" />
        <line x1="66" y1="22" x2="74" y2="20" />
        <line x1="68" y1="28" x2="76" y2="30" />
        <line x1="56" y1="14" x2="58" y2="6" />
      </g>
      <circle cx="62" cy="18" r="6" fill="#FFD166" />
      <circle cx="62" cy="18" r="4" fill="#FFF3B0" />

      <path d="M14 20 L15 23 L18 23 L15.5 25 L16.5 28 L14 26 L11.5 28 L12.5 25 L10 23 L13 23 Z" fill="#FFF9C4" opacity="0.9" />
      <path d="M22 12 L22.6 13.6 L24.2 13.6 L22.9 14.6 L23.4 16.2 L22 15.2 L20.6 16.2 L21.1 14.6 L19.8 13.6 L21.4 13.6 Z" fill="#FFF9C4" opacity="0.7" />

      <path
        d="M8 56 C16 50, 24 58, 32 52 C40 46, 48 56, 56 50 C64 44, 68 52, 74 48"
        stroke="url(#waveGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />
      <path
        d="M12 62 C20 58, 28 64, 36 60 C44 56, 52 63, 60 58 C66 54, 70 60, 74 57"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />

      <path d="M26 54 C30 58, 50 58, 54 54 L52 50 C48 52, 32 52, 28 50 Z" fill="#5C2E1A" />
      <path d="M28 50 C32 53, 48 53, 52 50" stroke="#FFD166" strokeWidth="1.2" strokeLinecap="round" fill="none" />

      <path d="M38 50 L38 24" stroke="#FFE566" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M38 22 L38 16 L42 22 Z" fill="#FFB703" />

      <path d="M38 26 C20 30, 12 48, 22 54 L38 48 Z" fill="url(#sailMain)" filter="url(#logoGlow)" />
      <path d="M38 24 C52 20, 66 32, 62 46 L38 42 Z" fill="url(#sailFront)" filter="url(#logoGlow)" />

      <g transform="translate(54, 38) rotate(-12)" fill="#FFD166">
        <ellipse cx="0" cy="8" rx="3.2" ry="2.6" />
        <rect x="2.8" y="-10" width="2" height="18" rx="1" />
        <path d="M4.8 -10 C10 -8, 12 -4, 10 0 C8 2, 5 1, 4.8 -2" fill="#FFD166" />
      </g>

      <path d="M34 30 L30 42 L36 40 Z" fill="rgba(255,255,255,0.35)" />
    </svg>
  );
}
