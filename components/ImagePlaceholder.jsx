export default function ImagePlaceholder({ label, className = '' }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex flex-col items-center justify-center gap-2 border border-dashed border-accent-300 bg-gradient-to-br from-accent-100 to-sage-100 text-center ${className}`}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-accent-700/50"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
      <span className="px-3 text-xs font-semibold uppercase tracking-wide text-accent-700/70">
        {label}
      </span>
    </div>
  );
}
