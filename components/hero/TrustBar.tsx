import { CLINIC } from "@/lib/constants";

const items = [
  { value: CLINIC.trust.yearsInBusiness, label: "лет клинике" },
  { value: CLINIC.trust.doctorsCount, label: "врачей" },
  { value: `${CLINIC.trust.rating} ★`, label: `${CLINIC.trust.reviewsCount} отзывов` },
];

export default function TrustBar() {
  return (
    <dl className="flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-ink/10 pt-6">
      {items.map((item) => (
        <div key={item.label} className="flex items-baseline gap-2">
          <dt className="sr-only">{item.label}</dt>
          <dd className="font-display text-2xl font-semibold text-coral-700">
            {item.value}
          </dd>
          <span className="font-body text-sm text-ink-faint">{item.label}</span>
        </div>
      ))}
    </dl>
  );
}
