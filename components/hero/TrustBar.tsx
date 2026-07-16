import StarIcon from "@/components/icons/StarIcon";
import { CLINIC } from "@/lib/constants";

const items = [
  {
    value: CLINIC.trust.yearsInBusiness,
    label: "лет",
    srLabel: "лет клинике",
    hasStar: false,
  },
  {
    value: CLINIC.trust.doctorsCount,
    label: "врачей",
    srLabel: "врачей в штате",
    hasStar: false,
  },
  {
    value: CLINIC.trust.rating,
    label: "отзывов",
    srLabel: `рейтинг ${CLINIC.trust.rating}, ${CLINIC.trust.reviewsCount} отзывов`,
    hasStar: true,
  },
];

export default function TrustBar() {
  return (
    <dl className="flex flex-nowrap items-center justify-between gap-x-3 border-t border-ink/10 pt-5 sm:justify-start sm:gap-x-6 lg:gap-x-8 lg:pt-6">
      {items.map((item) => (
        <div key={item.label} className="flex items-baseline gap-1.5">
          <dt className="sr-only">{item.srLabel}</dt>
          <dd className="flex items-center gap-1 font-display text-lg font-semibold text-coral-700 sm:text-xl lg:text-2xl">
            {item.value}
            {item.hasStar && <StarIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
          </dd>
          <span className="font-body text-xs text-ink-faint sm:text-sm">{item.label}</span>
        </div>
      ))}
    </dl>
  );
}
