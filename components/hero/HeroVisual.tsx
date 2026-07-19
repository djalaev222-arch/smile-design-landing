import Image from "next/image";
import CheckIcon from "@/components/icons/CheckIcon";
import StarIcon from "@/components/icons/StarIcon";
import { CLINIC } from "@/lib/constants";

export default function HeroVisual() {
  return (
    <div className="relative w-full animate-scale-in opacity-0 lg:order-2 lg:mx-auto lg:max-w-none">
      <div
        aria-hidden="true"
        className="absolute -inset-8 -z-10 hidden rounded-[3rem] bg-teal-100 opacity-70 blur-3xl animate-float lg:block"
      />

      <div className="relative aspect-[4/3] w-full overflow-hidden [mask-image:linear-gradient(to_bottom,black_48%,transparent_92%)] [-webkit-mask-image:linear-gradient(to_bottom,black_48%,transparent_92%)] lg:aspect-[3/4] lg:rounded-[2.5rem] lg:shadow-soft lg:[mask-image:linear-gradient(to_right,transparent_0%,black_50%)] lg:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_50%)]">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/doctor.jpg`}
          alt="Врач-стоматолог клиники Smile Design"
          fill
          priority
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover object-top"
        />
      </div>

      <div className="absolute -left-4 top-8 hidden animate-fade-in-up items-center gap-3 rounded-2xl bg-surface-card px-4 py-3 opacity-0 shadow-card [animation-delay:700ms] sm:-left-8 lg:flex">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-success-100 text-success-700">
          <CheckIcon className="h-4 w-4" />
        </span>
        <div className="leading-tight">
          <p className="font-body text-sm font-bold text-ink">Без боли</p>
          <p className="font-body text-xs text-ink-faint">современная анестезия</p>
        </div>
      </div>

      <div className="absolute -bottom-5 right-2 hidden animate-fade-in-up items-center gap-3 rounded-2xl bg-surface-card px-4 py-3 opacity-0 shadow-card [animation-delay:900ms] sm:-right-6 lg:flex">
        <span className="flex items-center gap-1 font-display text-xl font-semibold text-teal-600">
          {CLINIC.trust.rating}
          <StarIcon className="h-4 w-4" />
        </span>
        <div className="leading-tight">
          <p className="font-body text-xs text-ink-faint">
            {CLINIC.trust.reviewsCount} отзывов
          </p>
          <p className="font-body text-xs text-ink-faint">Яндекс.Карты</p>
        </div>
      </div>
    </div>
  );
}
