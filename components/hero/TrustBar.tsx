import StarIcon from "@/components/icons/StarIcon";
import { CLINIC } from "@/lib/constants";

const items = [
  { value: CLINIC.trust.yearsInBusiness, label: "лет клинике", hasStar: false },
  { value: CLINIC.trust.doctorsCount, label: "врачей", hasStar: false },
  {
    value: CLINIC.trust.rating,
    label: `${CLINIC.trust.reviewsCount} отзывов`,
    hasStar: true,
  },
];

export default function TrustBar() {
  return (
    <dl className="flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-ink/10 pt-6">
      {items.map((item) => (
        <div key={item.label} className="flex items-baseline gap-2">
          <dt className="sr-only">{item.label}</dt>
          <dd className="flex items-center gap-1 font-display text-2xl font-semibold text-coral-700">
            {item.value}
            {item.hasStar && <StarIcon className="h-4 w-4" />}
          </dd>
          <span className="font-body text-sm text-ink-faint">{item.label}</span>
        </div>
      ))}
    </dl>
  );
}
