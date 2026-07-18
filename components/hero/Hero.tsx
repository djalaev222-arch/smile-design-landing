import CallButton from "@/components/hero/CallButton";
import WhatsAppButton from "@/components/hero/WhatsAppButton";
import TrustBar from "@/components/hero/TrustBar";
import HeroVisual from "@/components/hero/HeroVisual";
import { CLINIC } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface pb-20 lg:pb-32 lg:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 hidden h-72 w-72 rounded-full bg-teal-100 opacity-60 blur-3xl lg:block"
      />

      <div className="relative mx-auto max-w-7xl lg:px-12">
        <div className="grid items-center gap-0 lg:grid-cols-[0.95fr,1.05fr] lg:gap-8">
          <HeroVisual />

          <div className="relative z-10 -mt-16 px-6 sm:px-8 lg:order-1 lg:mt-0 lg:px-0">
            <span className="mb-6 inline-flex animate-fade-in-up items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5 opacity-0 font-body text-sm font-medium text-teal-700">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
              Стоматология в {CLINIC.cityPrepositional}
            </span>

            <h1 className="font-display text-hero-sm font-semibold text-ink lg:text-hero">
              <span className="block animate-fade-in-up opacity-0 [animation-delay:100ms]">
                Красивая улыбка
              </span>
              <span className="block animate-fade-in-up text-teal-600 opacity-0 [animation-delay:200ms]">
                без боли
              </span>
            </h1>

            <p className="mt-6 max-w-xl animate-fade-in-up font-body text-base text-ink-soft opacity-0 [animation-delay:350ms] sm:text-lg lg:text-xl">
              Лечение, протезирование и детский приём в одной клинике —
              с гарантией на все виды работ и понятной ценой до начала лечения.
            </p>

            <div className="mt-9 flex animate-fade-in-up flex-col gap-3 opacity-0 [animation-delay:500ms] sm:flex-row sm:items-center">
              <CallButton />
              <WhatsAppButton />
            </div>

            <div className="mt-8 animate-fade-in-up opacity-0 [animation-delay:650ms] lg:mt-12">
              <TrustBar />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
