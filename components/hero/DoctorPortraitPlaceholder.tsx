// Плейсхолдер под фото врача. Когда фото будет готово, заменить это на:
// <Image src="/doctor.jpg" alt="Имя Фамилия, стоматолог Smile Design" fill className="object-cover" />
export default function DoctorPortraitPlaceholder({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 340 420"
      fill="none"
      className={className}
      role="img"
      aria-label="Плейсхолдер: здесь будет фотография врача-стоматолога"
    >
      <defs>
        <linearGradient id="doctorBg" x1="0" y1="0" x2="340" y2="420" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#6ED2DF" />
          <stop offset="1" stopColor="#0B7A8D" />
        </linearGradient>
        <radialGradient id="doctorGlow" cx="0.5" cy="0.32" r="0.42">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.28" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="340" height="420" rx="40" fill="url(#doctorBg)" />
      <rect x="0" y="0" width="340" height="420" rx="40" fill="url(#doctorGlow)" />

      <g fill="#FCFAF7" fillOpacity="0.92">
        <path d="M170 292c-64 0-108 34-118 82-2 10 5 18 15 18h206c10 0 17-8 15-18-10-48-54-82-118-82Z" />
        <circle cx="170" cy="176" r="62" />
      </g>

      <path
        d="M139 300c9 14 20 22 31 22s22-8 31-22c-10-6-20-9-31-9s-21 3-31 9Z"
        fill="#0B7A8D"
        fillOpacity="0.9"
      />

      <g stroke="#0B7A8D" strokeOpacity="0.55" strokeWidth="5" strokeLinecap="round">
        <path d="M136 168c0-20 15-36 34-36s34 16 34 36" />
      </g>

      <circle cx="230" cy="286" r="16" fill="#FCFAF7" fillOpacity="0.92" />
      <circle cx="230" cy="286" r="7" fill="#0B7A8D" fillOpacity="0.5" />
      <path d="M230 270v-26" stroke="#FCFAF7" strokeOpacity="0.92" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}
