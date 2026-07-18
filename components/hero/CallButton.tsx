import PhoneIcon from "@/components/icons/PhoneIcon";
import { CLINIC } from "@/lib/constants";

export default function CallButton({ className }: { className?: string }) {
  return (
    <a
      href={CLINIC.phoneHref}
      className={`group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-teal-900 px-6 py-3.5 text-surface shadow-[0_20px_45px_-14px_rgba(7,60,71,0.65)] transition-[background-color,box-shadow,transform] duration-200 ease-out hover:scale-[1.03] hover:bg-teal-700 hover:shadow-[0_24px_50px_-14px_rgba(11,122,141,0.7)] active:scale-[0.97] ${className ?? ""}`}
      aria-label={`Записаться на консультацию: позвонить в клинику Smile Design, ${CLINIC.phoneDisplay}`}
    >
      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface/20">
        <span className="absolute inset-0 rounded-full border border-surface/60 animate-pulse-ring" />
        <PhoneIcon className="h-4 w-4 text-surface" />
      </span>
      <span className="font-body text-sm font-bold tracking-tight">
        Записаться на консультацию
      </span>
    </a>
  );
}
